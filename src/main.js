import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import './assets/scss/main.scss'
import router from './assets/js/router-app';
import App from './App.vue';
import store from './assets/js/store/store';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

