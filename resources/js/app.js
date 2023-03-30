require('./bootstrap');


import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
    resolve: name => {
    let page= require(`./Pages/${name}`).default

    
      page.layout ??= MainLayout

      return page;
    
  },
    //   const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    //   return pages[`./Pages/${name}.vue`]
  
    setup({ el, app, props, plugin }) {
      createApp({ render: () => h(app, props) })
        .use(plugin)
        .mount(el)
    },
  })
  