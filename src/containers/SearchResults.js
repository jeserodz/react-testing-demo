import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from '../components/SearchResult';

export class SearchResults extends Component {
  renderResults() {
    const { posts } = this.props;
    return posts.map(post => (
      <SearchResult
        key={post.id}
        title={post.title}
        body={post.body}
      />
    ));
  }

  render = () => (
    <div>
      {this.renderResults()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.post.posts
  }
}

export default connect(mapStateToProps)(SearchResults);