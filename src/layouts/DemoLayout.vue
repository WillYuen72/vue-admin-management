<template>
  <el-container style="height: auto; border: 1px solid #eee">
    <custom-menu :menuItems="menuItems" @select="selected" ></custom-menu>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <language-dropdown-box></language-dropdown-box>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        Footer
      </el-footer>
    </el-container>
  </el-container>

</template>

<script>
import Menu from '../components/Menu'
import Languages from '../components/selectInput/Languages'

export default {
  name: 'demo-index',
  components: {
    [Languages.name]: Languages,
    [Menu.name]: Menu
  },
  data () {
    return {
      menuItems: [
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
    }
  },
  methods: {
    selected (index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

.el-aside {
  color: #333;
}
</style>
