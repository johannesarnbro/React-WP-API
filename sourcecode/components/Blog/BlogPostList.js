import React from 'react';
import BlogStore from '../../stores/BlogStore.js';
import BlogPostListItem from './BlogPostListItem.js';
import PostActions from '../../actions/BlogActions.js';

class BlogPostList extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.getStoreState(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount () {
    BlogStore.addListener('change', this.onStoreChange);
    PostActions.fetchByCategory('blogg');
  }

  componentWillUnmount () {
    BlogStore.removeListener('change', this.onStoreChange);
  }

  onStoreChange () {
    this.setState(this.getStoreState());
  }

  getStoreState () {
    return {
      posts: BlogStore.getAll(),
    };
  }

  render () {
    if (!this.state.posts) {
      return false;
    }

    const blogPosts = this.state.posts.map((post) => {
      const props = post.toJSON();
      return (<BlogPostListItem key={props.ID} {...props} />);
    }).toArray();

    return (
      <div>
        {blogPosts}
      </div>
    );
  }
}

export default BlogPostList;
