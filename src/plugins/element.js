import {
  Button,
  Select,
  Option,
  Card,
  Table,
  TableColumn
} from 'element-ui'
import locale from 'element-ui/lib/locale'
import i18n from '../locales'

const INIT_ELEMENTS = [Button, Select, Option, Card, Table, TableColumn]

function initElementUI (Vue) {
  const availableLocales = i18n.availableLocales
  Vue.prototype.$log.info('loading elementUI language', availableLocales)

  for (const lang of availableLocales) {
    try {
      const elementUILang = require(`element-ui/lib/locale/lang/${lang}`).default
      i18n.mergeLocaleMessage(lang, elementUILang)
    } catch (e) {
      Vue.prototype.$log.warn(e.message)
    }
  }
  locale.i18n((key, value) => i18n.t(key, value))
  AddElementUIComponents(Vue)
}

function AddElementUIComponents (Vue) {
  for (const el of INIT_ELEMENTS) {
    Vue.prototype.$log.info('add', el.name)
    Vue.use(el)
  }
}
export default initElementUI
