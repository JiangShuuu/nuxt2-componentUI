import vue from 'vue'

import toastComponent from './toast.vue'

// 返回一个 Vue extend
const ToastConstructor = vue.extend(toastComponent)

function showToast(text, duration = 2000) {
  // 掛載
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text,
        showWrap: true,
        showContent: true,
      }
    },
  })

  // 塞到 body
  document.body.appendChild(toastDom.$el)

  setTimeout(() => {
    toastDom.showContent = false
  }, duration)

  setTimeout(() => {
    toastDom.showWrap = false
    document.body.removeChild(toastDom.$el)
  }, duration + 1250)
}

function registryToast() {
  vue.prototype.$toast = showToast
}

export default registryToast
