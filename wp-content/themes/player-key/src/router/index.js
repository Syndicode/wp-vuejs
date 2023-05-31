import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignUpRoleView from '../views/SignUpRoleView.vue'
import SignInView from '../views/SignInView.vue'
import BoardView from '../views/BoardView.vue'
import ActivationParentView from '../views/ActivationParentView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUpView
        },
        {
            path: '/register/:role',
            component: SignUpRoleView
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: SignInView
        },
        {
            path: '/board',
            name: 'board',
            component: BoardView
        },
        {
            path: '/board/:entity',
            name: 'board-entity',
            component: BoardView
        },
        {
            path: '/activation/parent',
            name: 'activation-parent',
            component: ActivationParentView
        },
    ]
});

export default router
