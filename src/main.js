import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import './assets/scss/main.scss'
import router from './assets/js/router-app';
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');

