// Path: DesignPattern/iDesignPattern/单例模式/实现一个全局唯一的Modal弹框

/**
 * 实现一个全局唯一的Modal弹框
 */

// > 闭包版
const Modal = (function () {
  let modal = null
  return function () {
    if (!modal) {
      modal = document.createElement('div')
      modal.innerHTML = '我是一个全局唯一的Modal弹框'
      modal.id = 'modal'
      modal.style.display = 'none'
      document.body.appendChild(modal)
    }
    return modal
  }
})()

// 打开Modal谈框
function openModal() {
  const modal = new Modal()
  modal.style.display = 'block'
}

// 关闭Modal谈框
function closeModal() {
  const modal = new Modal()
  if (modal) {
    modal.style.display = 'none'
  }
}

// 添加监听事件
function addListener() {
  const openBtn = document.getElementById('open')
  const closeBtn = document.getElementById('close')

  openBtn.addEventListener('click', openModal)
  closeBtn.addEventListener('click', closeModal)
}

addListener()