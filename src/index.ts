import * as components from './components'
import { forEach } from 'lodash-es'
import type { App } from 'vue'

export const createInstall = () => {
  // 可以做一些预处理
  return {
    install(app: App) {
      forEach(components, component => {
        app.component(component.name, component)
      })
    }
  }
}

export { components }