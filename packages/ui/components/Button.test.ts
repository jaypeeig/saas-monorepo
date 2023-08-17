import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe('Button Component', () => {
  it('renders the button', () => {
    const wrapper = mount(Button);
    expect(wrapper).toBeDefined();
  });

  it('can be disabled with a prop', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBe(true);
  });

  it('accepts a default slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click Me.'
      }
    });
    expect(wrapper.html()).toContain('Click Me.');
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(Button);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});