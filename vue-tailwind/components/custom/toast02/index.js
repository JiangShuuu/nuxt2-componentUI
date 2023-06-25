import Vue from 'vue'
import Toast from './Toast'

// https://juejin.cn/post/6844903729305485320
const instances = []
let initIndex = 0

const ToastConstructor = Vue.extend(Toast)
const verticalOffset = 16

function generteInstance(options) {
  const instance = new ToastConstructor({
    propsData: options,
  }).$mount(document.createElement('div'))

  if (typeof options.onClose === 'function') {
    instance.onClose = options.onClose
  }

  const id = 'toast_' + initIndex++
  instance.id = id

  // 計算偏移量
  instance.verticalOffset = initVerticalOffset(instance.position)

  console.log('position', typeof instance.verticalOffset)

  // 監聽組件 $emit 事件 close
  instance.$once('toastClose', function () {
    const curInstance = this
    // 當關閉 Toast 時, 重新計算垂直方向偏移量
    updateVericalOffset(curInstance)

    if (typeof curInstance.onClose === 'function') {
      curInstance.onClose()
    }
  })

  return instance
}

// 初始化計算每個 Toast 在頁面中的垂直位置
function initVerticalOffset(position) {
  // 篩選同一方向的 Toast 組件
  const typeInstances = instances.filter((item) => item.position === position)

  return typeInstances.reduce(
    (sum, elem) => elem.$el.offsetHeight + sum + verticalOffset,
    verticalOffset
  )
}

function updateVericalOffset(removeInstance) {
  let index = 0
  let removeHeight = removeInstance.verticalOffset

  for (; index < instances.length; index++) {
    if (instances[index].id === removeInstance.id) break
  }
  instances.splice(index, 1)

  // 刪除關閉的 Toast 組件
  instances.splice(index, 1)
  // 更新在刪除位置之後的其他組件位置
  for (; index < instances.length; ++index) {
    if (instances[index].position === removeInstance.position) {
      ;[instances[index].verticalOffset, removeHeight] = [
        removeHeight,
        instances[index].verticalOffset,
      ]
    }
  }
}

function registryToast() {
  Vue.prototype.$toast02 = (options = {}) => {
    const instance = generteInstance(options)
    instances.push(instance)
  }
}

export default registryToast
