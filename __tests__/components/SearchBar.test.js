import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../../src/components/SearchBar';

describe('Test SearchBar component', () => {
  it('Should render', () => {
    const component = renderer.create(
      <SearchBar />
    );
  
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
});