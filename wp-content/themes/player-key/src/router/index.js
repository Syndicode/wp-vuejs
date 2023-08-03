import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignUpRoleView from '../views/SignUpRoleView.vue'
import SignInView from '../views/SignInView.vue'
import BoardView from '../views/BoardView.vue'
import CompleteParentView from '../views/CompleteParentView.vue'
import CompleteAthleteView from '../views/CompleteAthleteView.vue'
import PasswordResetView from '../views/PasswordResetView.vue'
import AthleteView from '../views/AthleteView.vue'
import TeamView from '../views/TeamView.vue'
import PageView from '../views/PageView.vue'
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
            component: SignUpView,
            meta: {
                title: `Sign up - ${SITE_TITLE}`
            },
        },
        {
            path: '/password-reset',
            name: 'password-reset',
            component: PasswordResetView,
            meta: {
                title: `Password reset - ${SITE_TITLE}`
            },
        },
        {
            path: '/sign-up/:role',
            name: 'sign-up-role',
            component: SignUpRoleView,
            meta: {
                title: `Sign up - ${SITE_TITLE}`
            },
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: SignInView,
            meta: {
                title: `Sign in - ${SITE_TITLE}`
            },
        },
        {
            path: '/board',
            name: 'board',
            component: BoardView,
            meta: {
                title: `Board - ${SITE_TITLE}`
            },
        },
        {
            path: '/board/:entity',
            name: 'board-entity',
            component: BoardView,
            meta: {
                title: `Board - ${SITE_TITLE}`
            },
        },
        {
            path: '/complete/parent',
            name: 'complete-parent',
            component: CompleteParentView,
            meta: {
                title: `Complete Parent information - ${SITE_TITLE}`
            },
        },
        {
            path: '/complete/athlete',
            name: 'complete-athlete',
            component: CompleteAthleteView,
            meta: {
                title: `Complete Athlete information - ${SITE_TITLE}`
            },
        },
        {
            path: '/athlete/:slug',
            name: 'athlete',
            component: AthleteView,
            meta: {
                title: `Athlete - ${SITE_TITLE}`
            },
        },
        {
            path: '/team/:slug',
            name: 'team',
            component: TeamView,
            meta: {
                title: `Team - ${SITE_TITLE}`
            },
        },
        {
            path: '/:slug',
            component: PageView,
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
        router.push({name: 'board'});
    }
})

router.afterEach((to, from) => {
    document.title = to.meta.title || SITE_TITLE
});

export default router
