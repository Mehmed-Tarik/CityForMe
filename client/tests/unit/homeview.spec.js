import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {

    it('should render text: Find your Dream City', () => {
        const wrapper = mount(HomeView)
        const landingMsg = wrapper.find('h2')

        expect(wrapper.find('h2').exists()).toBeTruthy() 
        expect(landingMsg.text()).toContain('Find your Dream City')
    })
})