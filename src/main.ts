import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store, { key } from './store';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';

createApp(App).use(store, key).mount('#app');
