import Axios from 'axios'

const AxiosPlugin = {}

AxiosPlugin.install = function (Vue, apiConfig) {
  Vue.prototype.$log.info('loading axios config', apiConfig)
  const instances = {}
  const apis = apiConfig.apis
  for (const key in apis) {
    const instance = Axios.create({
      baseURL: `${apis[key].baseURL}${apis[key].tag}${apis[key].version}`,
      timeout: apiConfig.common.timeout
    })

    instance.interceptors.request.use((config) => {
      return config
    }, (error) => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use((response) => {
      return response
    }, (error) => {
      return Promise.reject(error)
    })

    instances[key] = instance
    Vue.prototype.$log.info('created axios instance for', key)
  }
  Vue.prototype.$axios = instances
}

export default AxiosPlugin
