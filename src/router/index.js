import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [  
    {  
      path: '/',  
      name: 'TabOne',  
      component: () => import('../components/TabOne.vue'),
    },  
    {  
      path: '/two',  
      name: 'TabTwo',  
      component: () => import('../components/TabTwo.vue'),  
    },  
    {  
      path: '*',  
      redirect: '/one',  
    },  
  ],  
})

export default router
