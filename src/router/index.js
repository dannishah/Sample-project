// Composables
import { createRouter, createWebHistory } from 'vue-router'
import PageOne from "@/components/PageOne.vue";
import PageTwo from "@/components/PageTwo.vue";
import test from "@/components/test.vue";


const router = createRouter({
    history:createWebHistory(),
    routes:[
      {
        name : "PageOne",
        path : "/",
        component : PageOne
      },
      {
        name : "PageTwo",
        path : "/2",
        component : PageTwo
      },
      {
        name : "test",
        path : "/test",
        component : test
      }
    ]

});

export default router;
