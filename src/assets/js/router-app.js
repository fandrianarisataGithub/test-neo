import {createRouter, createWebHistory} from 'vue-router';
import routes from './../js/route';

const router = createRouter({
    history : createWebHistory(),
    mode : 'abstract',
    routes,
})

export default router;