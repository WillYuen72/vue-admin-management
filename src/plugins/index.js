import Vue from 'vue'
import logLevel from './logLevel'
import axios from './axios'
import element from './element'

Vue.use(logLevel, { level: process.env.VUE_APP_LOG_LEVEL })
Vue.use(axios, {})
element(Vue)
