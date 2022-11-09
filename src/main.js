import { createApp } from 'vue'
import * as components from './components'
import './assets/css/tailwind.css'

const app = createApp({})

const GMComponents = {
  install: (app, options= {}) => {
    for (const componentName in components) {
      const component = components[componentName]
      app.component(component.name, component)
    }
  }
}

export default GMComponents

if (typeof window !== 'undefined' && app) {
  app.use(GMComponents)
}