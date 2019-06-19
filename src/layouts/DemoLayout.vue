<template>
  <el-container style="height: auto; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="[]">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">Table</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

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
import Languages from '../components/selectInput/Languages'

export default {
  name: 'demo-index',
  components: {
    [Languages.name]: Languages
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
