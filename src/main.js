/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";
import { VStepper } from "vuetify/labs/VStepper";
const app = createApp(App)

app.component("VDataTable", VDataTable);
app.component("VDataTableServer", VDataTableServer);
app.component("VDataTableVirtual", VDataTableVirtual);
app.component("VStepper", VStepper);

registerPlugins(app)

app.mount('#app')
