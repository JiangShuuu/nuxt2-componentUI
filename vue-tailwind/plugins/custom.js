import Vue from 'vue'
import toast from '../custom/toast/index'

const tooltipDirective = {
  inserted(el, binding) {
    const tooltipText = binding.value

    // 建立 tooltip element
    const tooltip = document.createElement('div')
    tooltip.className = 'tooltiptext'
    tooltip.textContent = tooltipText

    el.style.position = 'relative'
    el.appendChild(tooltip)

    // Tooltip 樣式
    const style = document.createElement('style');
    style.textContent = `
      .tooltiptext {
        visibility: hidden;
        min-width: 100px;
        background-color: #292929;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 130%;
        left: 50%;
        opacity: 0;
        transition: opacity 0.3s;
        transform: translateX(-50%);
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
    
    el.addEventListener('mouseenter', function () {
      clearTimeout(this.timer)
      tooltip.style.visibility = 'visible'
      tooltip.style.opacity = '1'
    })
    el.addEventListener('mouseleave', function () {
      tooltip.style.opacity = '0'
      this.timer = setTimeout(() => {
        tooltip.style.visibility = 'hidden'
      }, 500)
    })
  },
}

Vue.directive('tooltip', tooltipDirective)
Vue.use(toast)
