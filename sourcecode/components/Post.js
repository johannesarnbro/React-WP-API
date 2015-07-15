import React from 'react';
import createMarkup from '../utils/createMarkup.js';

class Post extends React.Component {

  render() {

    const title = this.props.title || 'Title';
    const content = createMarkup(this.props.content);

    return (
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={content}></div>
      </div>
    );
  }

}

Post.propTypes = {
  content: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default Post;
