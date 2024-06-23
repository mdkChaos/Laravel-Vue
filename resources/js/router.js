import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/people',
        name: 'person.index',
        component: () => import('./components/Person/Index.vue').catch(error => {
            console.error('Failed to load the component:', error);
        }),
    },
    {
        path: '/people/create',
        name: 'person.create',
        component: () => import('./components/Person/Create.vue').catch(error => {
            console.error('Failed to load the component:', error);
        }),
    },
    {
        path: '/people/:id/edit',
        name: 'person.edit',
        component: () => import('./components/Person/Edit.vue').catch(error => {
            console.error('Failed to load the component:', error);
        }),
    },
    {
        path: '/people/:id',
        name: 'person.show',
        component: () => import('./components/Person/Show.vue').catch(error => {
            console.error('Failed to load the component:', error);
        }),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
