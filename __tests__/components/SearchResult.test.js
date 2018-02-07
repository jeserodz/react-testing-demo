import React from 'react';
import renderer from 'react-test-renderer';
import SearchResult from '../../src/components/SearchResult';

describe('Test SearchResult component', () => {
  it('Should render', () => {
    const component = renderer.create(
      <SearchResult title="Test title" body="Test body" />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
});