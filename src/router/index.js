import { createRouter, createWebHashHistory } from 'vue-router'
import firstMenu from '../views/MenuSelect.vue'


const routes = [{
        path: '/',
        name: 'firstMenu',
        component: firstMenu
    },
    {
        path: '/Menupage',
        name: 'Menupage',
        component: () =>
            import ('../views/Menupage.vue')
    },
    {
        path: '/thirdMenu',
        name: 'thirdMenu',
        component: () =>
            import ('../views/Menuthird.vue')
    },
    {
        path: '/lastMenu',
        name: 'lastMenu',
        component: () =>
            import ('../views/Menulast.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router