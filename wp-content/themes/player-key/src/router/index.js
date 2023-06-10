import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignUpRoleView from '../views/SignUpRoleView.vue'
import SignInView from '../views/SignInView.vue'
import BoardView from '../views/BoardView.vue'
import CompleteParentView from '../views/CompleteParentView.vue'
import CompleteAthleteView from '../views/CompleteAthleteView.vue'
import PasswordResetView from '../views/PasswordResetView.vue'
import store from '../store/index.js'


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
            path: '/password-reset',
            name: 'password-reset',
            component: PasswordResetView
        },
        {
            path: '/sign-up/:role',
            name: 'sign-up-role',
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
            path: '/complete/parent',
            name: 'complete-parent',
            component: CompleteParentView
        },
        {
            path: '/complete/athlete',
            name: 'complete-athlete',
            component: CompleteAthleteView
        },
    ]
});

router.beforeEach(async (to, from) => {
    if (!store.state.authentication.isUserLoggedIn && localStorage.getItem('pki-auth')) {
        await store.dispatch('check', localStorage.getItem('pki-auth')). then(() => {
            return store.state.authentication.isUserLoggedIn;
        });
    }
})

export default router
