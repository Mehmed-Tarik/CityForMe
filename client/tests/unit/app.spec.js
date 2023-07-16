import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('App.vue', () => {
    it('should render HomeView and AboutView components via routing', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'about',
                component: AboutView
            },
            {
                path: '/',
                name: 'home',
                component: HomeView
            }]
        })

        await router.push('/about');
        await router.isReady();

        const wrapperAbout = mount(App, {
            global: {
              plugins: [router]
            }
          });
      
          expect(wrapperAbout.findComponent(AboutView).exists()).toBe(true);

          await router.push('/');
          await router.isReady();
  
          const wrapperHome = mount(App, {
              global: {
                plugins: [router]
              }
            });
        
          expect(wrapperHome.findComponent(HomeView).exists()).toBe(true);
    })
})