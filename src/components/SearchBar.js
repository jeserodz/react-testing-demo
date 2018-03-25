import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  }

  state = { searchText: '' }

  render() {
    return (
      <Bar>
        <SearchInput 
          id="search-input"
          onChange={e => this.setState({ searchText: e.target.value })}
        />
        <SearchButton
          id="search-button"
          onClick={() => this.props.onSearch(this.state.searchText)}
        >
          Search
        </SearchButton>
      </Bar>
    );
  }
}

const Bar = styled.div`
  height: 40px;
  width: 300px;
  display: flex;
  margin-top: 1em;
`

const SearchInput = styled.input`
  width: 200px;
  height: 100%;
  padding: 0;
  margin: 0;
  margin-right: 1em;
  background-color: transparent;
  border: 2px solid #3399FF;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  outline: none;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: #3399FF;
  border: 2px solid #3399FF;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export default SearchBar;