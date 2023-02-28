// https://nuxt.com/docs/api/configuration/nuxt-config
// 覆盖或扩展应用程序
import ElementPlus from 'unplugin-element-plus/vite'

// useRuntimeConfig
export default defineNuxtConfig({
    typescript:{
        shim:false,
    },
    app:{
        head:{
            title: '仿掘金',
            link:[{rel:'icon',type:"image/png",href:'favicon.png'}],
        },
    },
    runtimeConfig:{
        public:{
        }
    },
    components:[{
        path: '~/components/',
        pathPrefix: false,//根据组件名称而不是路径
    }],
    css:['@/assets/css/main.css','element-plus/dist/index.css'],
    build:{
        transpile: ['element-plus/es'],
    },
    vite:{
        plugins:[
            ElementPlus()
        ],
        
    },
    modules: ['@nuxtjs/strapi'],
    strapi:{
        url: 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    }
})
