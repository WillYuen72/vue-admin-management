import Axios from 'axios'

const AxiosPlugin = {}

AxiosPlugin.install = function (Vue, config) {
  Vue.prototype.$log.info('loading axios config', config)

  const interceptorsForRequest = (axiosConfig) => {}
  const interceptorsForResponse = (axiosResponse) => {}

  const instance = Axios.create()
  instance.interceptors.request.use(interceptorsForRequest)
  instance.interceptors.response.use(interceptorsForResponse)

  Vue.prototype.$axios = {}
}

export default AxiosPlugin
