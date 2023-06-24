import vue from 'vue'
import toastComponent from './Toast.vue'

// const instances = []
// const verticalOffset = 16
const ToastConstructor = vue.extend(toastComponent)

// function initVerticalOffset(position) {
//   // 篩選同一方向的 Toast 組件
//   const typeInstances = instances.filter((item) => item.position === position)

//   return typeInstances.reduce(
//     (sum, elem) => elem.$el.offsetHeight + sum + verticalOffset,
//     verticalOffset
//   )
// }

function showToast(text, duration = 2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text,
        position: 'top-center',
        showWrap: true,
        showContent: true,
      }
    },
  })

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
