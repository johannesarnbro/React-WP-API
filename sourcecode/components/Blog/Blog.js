import React from 'react';
import BlogPostList from './BlogPostList.js';

class Blog extends React.Component {
  render () {

    return (
      <div>
        <h2>Blog</h2>
        <BlogPostList />
      </div>
    );
  }
}

export default Blog;
