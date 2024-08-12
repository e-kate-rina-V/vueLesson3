import './assets/main.css'
import MessageComp from '@/components/MessageComp.vue';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// Створіть нові компоненти та зареєструйте іх локально і глобально (хоча б один компонент).
app.component('MessageComp', MessageComp);

app.mount('#app');

//createApp(App).mount('#app')

