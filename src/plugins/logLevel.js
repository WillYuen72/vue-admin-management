import loglevel from 'loglevel'

const LogLevelPlugin = {}
LogLevelPlugin.install = function (Vue, config) {
  loglevel.setLevel(config.level)
  Vue.prototype.$log = loglevel
}

export default LogLevelPlugin
