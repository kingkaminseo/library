import {createRouter, createWebHistory} from 'vue-router';
import signComponent from '@/view/signComponent.vue';
import homeComponent from '@/view/homeComponent.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: homeComponent
        },

        {
            path:'/sign',
            name:'Sign',
            component: signComponent
        },
    ]
});

export default router;
