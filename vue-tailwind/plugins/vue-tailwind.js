import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import TModal from 'vue-tailwind/dist/t-modal'
import TTable from 'vue-tailwind/dist/t-table'


const settings = {
  TModal: {
    component: TModal,
    props: {
      fixedClasses: {
        overlay:
          'p-2 z-100 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-60 bg-black',
        wrapper: 'z-50 relative mx-auto',
        modal: '',
        body: '',
        header: '',
        footer: '',
        close: 'absolute right-6 top-6 focus:outline-none text-gray',
        closeIcon: 'h-5 w-5 fill-current',
      },
      classes: {
        overlay: '',
        // 寬
        wrapper: 'w-[1200px] my-5',
        modal: '',
        body: '',
        header: '',
        footer: '',
        close: '',
        closeIcon: '',
      },
      escToClose: false,
    },
  },
  TTable: {
    component: TTable,
    props: {
      classes: {
        table: 'min-w-full shadow-sm',
        thead: '',
        theadTr: '',
        theadTh: 'px-4 py-6 font-semibold text-left',
        tbody: '',
        tr: '',
        td: 'px-4 py-6 border',
        tfoot: '',
        tfootTr: '',
        tfootTd: '',
      },
    },
  },
}

Vue.use(VueTailwind, settings)
