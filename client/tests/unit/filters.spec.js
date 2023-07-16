import { mount } from '@vue/test-utils'
import Filters from '@/components/Filters/Filters.vue'


describe('Filters.vue', () => {
    it('should update filterData.continent when a continent option is selected', async () => {

        const wrapper = mount(Filters);
        
        // Simulate selecting a continent option
        const continentOption = 'Asia';
        await wrapper.vm.selectContinent(continentOption);
    
        expect(wrapper.vm.filterData.continent).toBe(continentOption);
      });
})