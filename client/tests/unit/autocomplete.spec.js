import { mount } from '@vue/test-utils'
import Autocomplete from '@/components/Filters/Autocomplete.vue'

describe('Autocomplete.vue', () => {
    it('should receive and display prop correctly in label', () => {
      const propValue = 'continent';
  
      const wrapper = mount(Autocomplete, {
        props: {
            labelText: propValue,
        },
      });
      expect(wrapper.find('label').text()).toBe(`${propValue}:`);
    });

    it('should trigger selectOption event and update data', () => {
      const wrapper = mount(Autocomplete);

      wrapper.vm.selectOption('Asia');

      expect(wrapper.vm.inputValue).toBe('Asia');
      expect(wrapper.vm.filteredOptions).toEqual([]);
      
    });

  });