import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import TDropdown from 'vue-tailwind/dist/t-dropdown'
import TModal from 'vue-tailwind/dist/t-modal'
import TPagination from 'vue-tailwind/dist/t-pagination'
// import TInput from 'vue-tailwind/dist/t-input'
import TTable from 'vue-tailwind/dist/t-table'
// import TCheckbox from 'vue-tailwind/dist/t-checkbox'
// import TRadio from 'vue-tailwind/dist/t-radio'
// import TDatepicker from 'vue-tailwind/dist/t-datepicker'
import TSelect from 'vue-tailwind/dist/t-select'

// eslint-disable-next-line import/no-named-as-default
// import Mandarin from 'vue-tailwind/dist/l10n/zh'

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
  TSelect: {
    component: TSelect,
    props: {
      fixedClasses:
        'bg-white focus:outline-none focus:border-black border border-gray-500 rounded py-2 px-2 block leading-normal lg:text-base text-xs',
      classes:
        'bg-white focus:outline-none focus:border-black border border-gray-500 rounded py-2 px-2 block leading-normal lg:text-base text-xs',
    },
  },
  TDropdown: {
    component: TDropdown,
    props: {
      classes: {
        button:
          'px-4 py-2 flex items-center border rounded hover:text-gray-700',
        wrapper: 'inline-flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown:
          'origin-top-left absolute left-0 w-40 shadow-lg bg-white mt-2',
        enterClass: '',
        enterActiveClass:
          'transition ease-out duration-100 transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveClass: 'transition ease-in transform opacity-100 scale-100',
        leaveActiveClass: '',
        leaveToClass: 'transform opacity-0 scale-95 duration-75',
      },
      variants: {
        right: {
          dropdown:
            'origin-top-right absolute right-0 w-32 shadow-lg bg-white rounded mt-1',
        },
        user: {
          dropdown: 'origin-top-right absolute right-0 w-56 bg-gray-200 mt-3',
          enterActiveClass: '',
          leaveClass: '',
          leaveToClass: '',
        },
        search: {
          dropdownWrapper: 'static lg:relative z-10',
          dropdown:
            'origin-top-right absolute left-0 right-0 lg:left-auto w-full lg:w-64 bg-gray-200 mt-3',
          enterActiveClass: '',
          leaveClass: '',
          leaveToClass: '',
        },
        playerbtn: {
          dropdown:
            'origin-bottom bottom-0 left-50 absolute flex flex-col-reverse items-center w-16 bg-black mb-12 py-4 rounded-lg transform -translate-x-1/2 space-y-4 space-y-reverse',
        },
        playlist: {
          wrapper: 'inline-flex flex-col w-full lg:w-auto',
          dropdown:
            'origin-top left-0 right-auto top-0 bottom-auto lg:origin-bottom lg:left-auto lg:right-0 lg:top-auto lg:bottom-0 absolute bg-gray-200 lg:bg-black mt-2 lg:mt-0 lg:mb-12 p-4 rounded-lg w-full lg:w-auto',
        },
        share: {
          dropdown:
            'origin-top top-0 bottom-auto lg:origin-bottom left-auto right-0 lg:top-auto lg:bottom-0 absolute bg-gray-200 lg:bg-black mt-2 lg:mt-0 lg:mb-12 p-2 rounded-lg w-auto',
        },
      },
    },
  },
  TPagination: {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'flex justify-center',
        element: 'w-8 h-8 mx-1',
        activeElement: 'w-8 h-8 mx-1',
        disabledElement: 'w-8 h-8 mx-1',
        ellipsisElement: 'w-8 h-8 mx-1',
        activeButton:
          'bg-secondary w-full h-full rounded-full  text-white focus:outline-none',
        disabledButton:
          'opacity-25 w-full h-full cursor-not-allowed focus:outline-none',
        button:
          'hover:bg-secondary w-full h-full rounded-full hover:text-white focus:outline-none',
        ellipsis: '',
      },
      variants: {
        white: {
          wrapper: 'flex justify-center',
          element: 'w-8 h-8 mx-1',
          activeElement: 'w-8 h-8 mx-1',
          disabledElement: 'w-8 h-8 mx-1',
          ellipsisElement: 'w-8 h-8 mx-1',
          activeButton:
            'bg-black w-full h-full rounded-full  text-white focus:outline-none',
          disabledButton:
            'opacity-25 w-full h-full cursor-not-allowed focus:outline-none',
          button:
            'hover:bg-black w-full h-full rounded-full text-white focus:outline-none',
          ellipsis: 'text-white',
        },
      },
    },
  },
  // TInput: {
  //   component: TInput,
  //   props: {
  //     classes:
  //       'bg-white focus:outline-none focus:border-black border border-gray-400 rounded py-2 px-2 block leading-normal lg:text-base text-xs',
  //     variants: {
  //       error:
  //         'text-red bg-red-light focus:outline-none focus:shadow-outline border border-secondary rounded py-2 px-4 block w-full leading-normal placeholder-secondary',
  //       success:
  //         'text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal placeholder-green-300',
  //     },
  //   },
  // },
}

Vue.use(VueTailwind, settings)
