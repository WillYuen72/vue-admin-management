import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Menu from '@/components/Menu.vue'
import ele from 'element-ui'
import Vue from 'vue'

// https://lmiller1990.github.io/vue-testing-handbook/components-with-props.html#setting-props-with-propsdata
// https://vue-test-utils.vuejs.org/
// https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/9

Vue.use(ele)

describe('Menu.vue', () => {
  it('renders props.menuItems', () => {
    const menuItems = [
      {
        index: 1,
        needIcon: true,
        icon: 'el-icon-menu',
        name: 'Table',
        path: '/demo/paged-table'
      },
      {
        index: 2,
        needIcon: true,
        icon: 'el-icon-menu',
        name: 'Sub Menu',
        children: [
          {
            index: 1,
            name: 'Simple Menu 1'
          }
        ]
      },
      {
        index: 3,
        needIcon: true,
        icon: 'el-icon-menu',
        name: 'Sub Menu with Group',
        children: [
          {
            index: 1,
            isGroup: true,
            name: 'Group 1',
            items: [
              {
                index: 1,
                name: 'Home',
                path: '/'
              }
            ]
          },
          {
            index: 2,
            isGroup: true,
            name: 'Group 2',
            items: [
              {
                index: 1,
                name: 'Sub menu in group 2'
              }
            ]
          }
        ]
      }
    ]

    const wrapper = shallowMount(Menu, {
      propsData: {
        menuItems: menuItems
      }
    })

    expect(wrapper.text()).to.include('TableSub Menu\n            Simple Menu 1\n          Sub Menu with Group Group 1\n              Home\n             Group 2\n              Sub menu in group 2')
  })
})
