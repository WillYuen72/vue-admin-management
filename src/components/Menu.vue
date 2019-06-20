<template>
  <el-aside width="200px" v-bind="$attrs" v-on="$listeners">
    <el-menu v-bind="menuAttrs" @select="select" @open="open" @close="close">
      <template v-for="(item, index) in menuItems" >
        <!-- has children -->
        <el-submenu v-if="hasSubMenu(item.children)"
                    :key="index"
                    :index="(item.index || index).toString()">

          <!-- parent menu for sub menu -->
          <template slot="title">
            <i v-if="item.needIcon" :class="item.icon || ''"></i>
            <span>{{ item.name }}</span>
          </template>

          <template v-for="(subItem, subItemIndex) in item.children">
            <!-- sub menu with group -->
            <el-menu-item-group :key="subItemIndex" v-if="subItem.isGroup">

              <!-- group name -->
              <template slot="title"> {{ subItem.name }}</template>
              <el-menu-item v-for="(itemInGroup, itemInGroupIndex) in subItem.items"
                            :key="itemInGroupIndex"
                            :index="`${item.index || index}-${subItem.index || subItemIndex}-${itemInGroup.index || itemInGroupIndex}`"
                            @click="goto(itemInGroup)">
                {{ itemInGroup.name }}
              </el-menu-item>

            </el-menu-item-group>

            <!-- simple sub menu -->
            <el-menu-item v-else
                          :key="subItemIndex"
                          :index="`${item.index || index}-${subItem.index || subItemIndex}`"
                          @click="goto(subItem)">
              {{subItem.name}}
            </el-menu-item>
          </template>
        </el-submenu>

        <!-- level one only -->
        <el-menu-item v-else :key="index" :index="`${item.index || index}`" @click="goto(item)">
          <i v-if="item.needIcon" :class="item.icon || ''"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>

      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import isUndefined from 'lodash/isUndefined'
import isArray from 'lodash/isArray'

export default {
  name: 'custom-menu',
  props: {
    menuAttrs: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    menuItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    select (index, indexPath) {
      this.$log.debug('menu select', index, indexPath)
      this.$emit('select', index, indexPath)
    },
    open (index, indexPath) {
      this.$log.debug('menu open', index, indexPath)
      this.$emit('open', index, indexPath)
    },
    close (index, indexPath) {
      this.$log.debug('menu close', index, indexPath)
      this.$emit('close', index, indexPath)
    },
    hasSubMenu (children) {
      return !isUndefined(children) && isArray(children)
    },
    goto (menuItem) {
      this.$log.debug('router', menuItem.path)
      if (!isUndefined(menuItem.path)) {
        this.$router.push(menuItem.path)
      } else {
        throw new Error(`menu [${menuItem.name}] path is undefined.`)
      }
    }
  }
}
</script>

<style>

</style>
