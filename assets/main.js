import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/main.css'
import './bootstrap.js';
// assets/app.js
import { registerVueControllerComponents } from '@symfony/ux-vue';

registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));



createApp(App)
    .use(store)
    .use(router)
    
    .mount('#app');
