// Path: DesignPattern/单例模式/实现一个Storage

/**
 * 实现Storage，使得该对象为单例，基于 localStorage 进行封装。
 * 实现方法 setItem(key,value) 和 getItem(key)。
 */

// > 静态方法版
class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }
  setItem(key, value) {
    localStorage.setItem(key, value)
  }
  getItem(key) {
    return localStorage.getItem(key)
  }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()
console.log(storage1 === storage2)

storage1.setItem('name', '张三')
console.log(storage2.getItem('name'))
