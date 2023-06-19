import Vue from 'vue'
import toast from '../custom/toast/index'
import ToastT from '../components/ToastT'

// 定義自訂指令
const tooltipDirective = {
  inserted(el, binding) {
    const tooltipText = binding.value

    // 建立 tooltip element
    const tooltip = document.createElement('div')
    tooltip.className = 'tooltiptext'
    tooltip.textContent = tooltipText

    // 將 tooltip element 加入到目標元素中
    el.style.position = 'relative'
    el.appendChild(tooltip)

    // Tooltip 樣式
    const style = document.createElement('style');

    style.textContent = `
      .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #292929;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .tooltiptext::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #292929 transparent transparent transparent;
      }
    `
    document.head.appendChild(style);
    
    // hover 事件處理
    el.addEventListener('mouseenter', function () {
      tooltip.style.visibility = 'visible'
      tooltip.style.opacity = '1'
    })
    el.addEventListener('mouseleave', function () {
      tooltip.style.visibility = 'hidden'
      tooltip.style.opacity = '0'
    })
  },
}

// 註冊自訂指令
Vue.directive('tooltip', tooltipDirective)
Vue.component(ToastT)
Vue.use(toast)
