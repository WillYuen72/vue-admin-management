<template>
  <div>
    <el-select v-model="selected" @change="changeLanguage">
      <el-option v-for="(key, index) in langs" :key="index" :value="key" :label="key.toUpperCase()"></el-option>
    </el-select>
  </div>
</template>

<script>
import i18n from '../../locales'

export default {
  name: 'language-dropdown-box',
  data () {
    return {
      selected: i18n.locale,
      langs: i18n.availableLocales
    }
  },
  methods: {
    changeLanguage () {
      i18n.locale = this.selected
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
