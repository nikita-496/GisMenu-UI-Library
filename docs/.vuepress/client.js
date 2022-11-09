// Override allows for extra functionality to be added into the application.

// The application refers to the documentation site.

// The components are now globally available in the documentation site

// https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-config.html

import { defineClientConfig } from '@vuepress/client'
import GMComponents from '../../src/main'

export default defineClientConfig({
  enhance({ app, router, siteData}){
    app.use(GMComponents)
    //console.log(app)
  },
})