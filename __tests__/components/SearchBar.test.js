import React from 'react';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar component', () => {
  
  it('Should have an input element', () => {
    const wrapper = render(<SearchBar onSearch={() => {}} />);
    const inputElement = wrapper.find('input');
    expect(inputElement).toHaveLength(1);
  });

  it('Should be a controlled input', () => {
    const wrapper = mount(<SearchBar onSearch={() => {}} />);
    wrapper.find('input#search-input').simulate('change', { target: { value: 'Coconut Shampoo' } });
    expect(wrapper.state().searchText).toEqual('Coconut Shampoo');
  });

  it('Should call onSearch callback and pass the search query', () => {
    const onSearchCallback = sinon.spy();
    const wrapper = mount(<SearchBar onSearch={(searchText) => onSearchCallback(searchText)} />);
    wrapper.find('input#search-input').simulate('change', { target: { value: 'Pina Colada' } });
    wrapper.find('button#search-button').simulate('click');
    expect(onSearchCallback.called).toEqual(true);
    expect(onSearchCallback.getCall(0).args[0]).toEqual('Pina Colada');
  });

});