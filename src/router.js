import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages//ProjectList.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            //name non obbligatorio
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs,
        },
        {
            path: '/contact',
            name: 'contacts',
            component: ContactUs,
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject,
        },
        //facoltativa: pagina 404
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export {router}