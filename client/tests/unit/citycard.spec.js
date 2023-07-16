import { mount } from '@vue/test-utils'
import CityCard from '@/components/CityCards/CityCard.vue'

describe('CityCard.vue', () => {
    it('should receive and display prop correctly', async () => {
        const prop = {
            name: "Sydney",
            name_native: "Sydney",
            country: "Australia",
            continent: "Australia",
            latitude: "-33.865143",
            longitude: "151.209900",
            population: "5312000",
            founded: "1788",
            landmarks: [
              "Sydney Opera House",
              "Sydney Harbour Bridge",
              "Queen Victoria Building"
            ]
          }
    
        const wrapper = await mount(CityCard, {
          props: {
            city: prop,
          },
        });
        
        expect(wrapper.find('#population').text()).toBe(prop.population);
        expect(wrapper.find('#founded').text()).toBe(`Founded: ${prop.founded}`);

    });

})