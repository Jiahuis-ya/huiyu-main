type StorageType = {
  [index: string]: object | string | number
}

type setItemObjType = {
  data: object
  expire?: number
}
const _storage: StorageType = {}

const storage = {
  hasLocalStorage: detect('localStorage'),

  /**
   * 获取对应 key 的 value 值
   * @param    {string}                key key值
   * @return   {[type]}                返回对应的 value 值
   */
  getItem: function (key: string): null | string {
    let obj

    if (this.hasLocalStorage) {
      const value: string = localStorage.getItem(key) || ''
      try {
        obj = JSON.parse(value)
      } catch (e) {
        obj = value
      }
    } else {
      obj = _storage[key]
    }

    if (obj && obj.data) {
      if (!('expire' in obj) || obj.expire > new Date().getTime()) {
        return obj.data
      }
      this.removeItem(key)
    }
    return null
  },

  /**
   * set item
   * @param    {stirng}                key    key值
   * @param    {object}                value  值
   * @param    {number}                expire 过期时间，单位毫秒
   * @datetime
   * @author
   */

  setItem: function (key: string, value: object, expire: number) {
    const obj: setItemObjType = {
      data: value
    }

    if (expire && expire > 0) {
      obj.expire = new Date().getTime() + expire
    }

    if (this.hasLocalStorage) {
      localStorage.setItem(key, JSON.stringify(obj))
    } else {
      _storage[key] = obj
    }
    return value
  },

  /**
   * 删除对应 key 值
   * @param    {string}                key key 值
   * @return   {null}
   * @datetime
   * @author
   */

  removeItem: function (key: string): void {
    if (this.hasLocalStorage) {
      localStorage.removeItem(key)
    } else {
      delete _storage[key]
    }
  },

  /**
   * 返回所有的 keys
   * @return   {array}                返回 key 值数组
   */
  getKeys: function (): Array<string> {
    const keys = []
    if (this.hasLocalStorage) {
      for (const key in localStorage) {
        keys.push(key)
      }
    } else {
      for (const key in _storage) {
        keys.push(key)
      }
    }

    return keys
  },

  /**
   * @Description:
   * @param {*}
   * @return {*}
   * @Date: 2022-05-03 20:45:04
   * @Author: Jiahuis
   */
  removeExpired: function (): void {
    if (this.hasLocalStorage) {
      for (const key in localStorage) {
        this.getItem(key)
      }
    } else {
      for (const key in _storage) {
        this.getItem(key)
      }
    }
  }
}

/**
 * 检测storage 是否可用
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function detect(type: string): boolean {
  try {
    const storage = (window as any)[type]
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return false
  }
}

export default storage
