import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index.js'

const SITE_TITLE = 'Player Key ID';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: SITE_TITLE
            },
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: () => import('../views/SignUpView.vue'),
            meta: {
                title: `Sign up - ${SITE_TITLE}`
            },
        },
        {
            path: '/password-reset',
            name: 'password-reset',
            component: () => import('../views/PasswordResetView.vue'),
            meta: {
                title: `Password reset - ${SITE_TITLE}`
            },
        },
        {
            path: '/sign-up/:role',
            name: 'sign-up-role',
            component: () => import('../views/SignUpRoleView.vue'),
            meta: {
                title: `Sign up - ${SITE_TITLE}`
            },
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: () => import('../views/SignInView.vue'),
            meta: {
                title: `Sign in - ${SITE_TITLE}`
            },
        },
        {
            path: '/board',
            name: 'board',
            component: () => import('../views/BoardView.vue'),
            meta: {
                title: `Board - ${SITE_TITLE}`
            },
        },
        {
            path: '/board/:entity',
            name: 'board-entity',
            component: () => import('../views/BoardView.vue'),
            meta: {
                title: `Board - ${SITE_TITLE}`
            },
        },
        {
            path: '/complete/parent',
            name: 'complete-parent',
            component: () => import('../views/CompleteParentView.vue'),
            meta: {
                title: `Complete Parent information - ${SITE_TITLE}`
            },
        },
        {
            path: '/complete/athlete',
            name: 'complete-athlete',
            component: () => import('../views/CompleteAthleteView.vue'),
            meta: {
                title: `Complete Athlete information - ${SITE_TITLE}`
            },
        },
        {
            path: '/athlete/:slug',
            name: 'athlete',
            component: () => import('../views/AthleteView.vue'),
            meta: {
                title: `Athlete - ${SITE_TITLE}`
            },
        },
        {
            path: '/team/:slug',
            name: 'team',
            component: () => import('../views/TeamView.vue'),
            meta: {
                title: `Team - ${SITE_TITLE}`
            },
        },
        {
            path: '/:slug',
            component: () => import('../views/PageView.vue'),
        },
    ]
});

router.beforeEach(async (to, from) => {
    if (!store.state.authentication.isUserLoggedIn && localStorage.getItem('pki-auth')) {
        await store.dispatch('check', localStorage.getItem('pki-auth')).then(() => {
            return store.state.authentication.isUserLoggedIn;
        });
    }
    if ((to.name === 'sign-in' || to.name === 'sign-up') && store.state.authentication.isUserLoggedIn) {
        await router.push({name: 'board'});
    }
})

router.afterEach((to, from) => {
    document.title = to.meta.title || SITE_TITLE
});

export default router
