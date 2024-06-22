import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import Index from './components/index.vue';

/**
 * Створюємо новий додаток Vue
 */
const app = createApp({});

/**
 * Реєструємо компоненти
 */
app.component('index-app', Index);

/**
 * Використовуємо маршрутизацію
 */
app.use(router);

/**
 * Монтуюємо додаток до HTML елементу з id="app"
 */
app.mount('#app');
