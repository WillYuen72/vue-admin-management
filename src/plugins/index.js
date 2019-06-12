import Vue from 'vue'
import logLevel from './logLevel'
import axios from './axios'
import element from './element'

Vue.use(logLevel, { level: process.env.VUE_APP_LOG_LEVEL })

const apiConfig = require(`../config/api.${process.env.VUE_APP_API_TYPE}.json`)
Vue.use(axios, apiConfig)

element(Vue)
