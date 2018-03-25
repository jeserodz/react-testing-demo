import React from 'react';
import { mount } from 'enzyme';
import SearchResult from '../../src/components/SearchResult';

describe('SearchResult component', () => {
  const wrapper = mount(<SearchResult title="Favorite cocktail" body="Cubalibre is an awesome one." />);

  it('Should render title and body', () => {
    expect(wrapper.find('h1').text()).toEqual('Favorite cocktail');
    expect(wrapper.find('div#search-result-body').text()).toEqual('Cubalibre is an awesome one.');
  });

  it('Should be set as favorite', () => {
    wrapper.find('button#favorite-button').simulate('click');
    expect(wrapper.state().favorited).toEqual(true);
  });

});