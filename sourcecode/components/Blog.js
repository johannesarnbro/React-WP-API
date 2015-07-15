'use strict';

import React from 'react';
import PostStore from '../stores/PostStore.js';
import Post from './Post.js';
import PostActions from '../actions/PostActions.js';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getStoreState2(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    PostStore.addListener('change', this.onStoreChange);
    PostActions.fetchIndex();
  }

  componentWillUnmount() {
    PostStore.removeListener('change', this.onStoreChange);
  }

  componentWillReceiveProps(props) {
    this.setState(this.getStoreState2(props));
  }

  onStoreChange() {
    const props = this.props;
    this.setState(this.getStoreState2(props));
  }

  getStoreState2(props) {
    return {
      posts: PostStore.getAll(),
    };
  }

  render() {

    const posts = this.state.posts.map((post) => {
      const props = post.toJSON();
      return (<Post key={props.ID} {...props} />);
    }).toArray();

    return (
      <div>
        <h2>Blog</h2>
        {posts}
      </div>
    );
  }
}

export default Blog;
