import Vue from 'vue'
import { Button } from 'element-ui'
import locale from 'element-ui/lib/locale'
import i18n from '../i18n'
import '../assets/scss/element-variables.scss'

for (const lang of i18n.availableLocales) {
  const elementUILang = require(`element-ui/lib/locale/lang/${lang}`).default
  i18n.mergeLocaleMessage(lang, elementUILang)
}

locale.i18n((key, value) => i18n.t(key, value))

Vue.use(Button)
