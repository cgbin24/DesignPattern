// Path: DesignPattern/iDesignPattern/单例模式/实现一个全局唯一的Modal弹框

/**
 * 实现一个全局唯一的Modal弹框
 */

// > 静态方法版
class Modal {
  static getInstance() {
    if (!Modal.instance) {
      const modal = document.createElement('div')
      modal.innerHTML = '我是一个全局唯一的Modal弹框'
      modal.id = 'modal'
      modal.style.display = 'none'
      Modal.instance = modal
      document.body.appendChild(modal)
    }
    return Modal.instance
  }
  static closeModal() {
    const modal = Modal.getInstance()
    if (modal) {
      // 关闭缩放，由大变小
      requestAnimationFrame(() => {
        modal.style.transform = 'scale(0)'
      }, 0)
      // 最后消失
      setTimeout(() => {
        modal.style.display = 'none'
      }, 500)
    }
  }
  static openModal() {
    const modal = Modal.getInstance()
    if (modal) {
      modal.style.display = 'block'
      // 打开缩放，由小变大
      requestAnimationFrame(() => {
        modal.style.transform = 'scale(1)'
      }, 0)
    }
  }
}

// 打开Modal谈框
function handleOpenModal() {
  Modal.openModal()
}

// 关闭Modal谈框
function handleCloseModal() {
  Modal.closeModal()
}

// 添加监听事件
function addListener() {
  const openBtn = document.getElementById('open')
  const closeBtn = document.getElementById('close')

  openBtn.addEventListener('click', handleOpenModal)
  closeBtn.addEventListener('click', handleCloseModal)
}

addListener()