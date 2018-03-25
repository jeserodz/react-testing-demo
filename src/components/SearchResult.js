import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

class SearchResult extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }

  state = { favorited: false }

  onFavoriteClick = () => {
    this.setState({ favorited: !this.state.favorited });
  }

  render = () => (
    <Container>
      <SearchResultHeader>
        <SearchResultTitle>{this.props.title}</SearchResultTitle>
        <SearchResultFavorite
          id="favorite-button"
          favorited={this.state.favorited}
          onClick={this.onFavoriteClick}
        />
      </SearchResultHeader>

      <SearchResultBody id="search-result-body">
        {this.props.body}
      </SearchResultBody>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
`

const SearchResultHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchResultTitle = styled.h1`
  font-size: 24px;
  color: #007FFF;
  display: inline;
`

const SearchResultFavorite = styled.button`
  width: 30px;
  min-width: 30px;
  height: 30px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  background-size: contain;
  background-image: url(https://png.icons8.com/metro/1600/star.png);
  outline: none;

  ${props => props.favorited && css`
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2000px-Star_icon_stylized.svg.png);
  `}
`;

const SearchResultBody = styled.div`
  width: 100%;
`

export default SearchResult;