import './bootstrap';
import { createApp } from 'vue';
import store from './store';
import router from './router';
import Index from './components/index.vue';

const app = createApp({});

app.component('index-app', Index);

app.use(router);
app.use(store);

app.mount('#app');
