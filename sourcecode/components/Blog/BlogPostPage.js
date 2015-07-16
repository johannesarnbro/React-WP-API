import React from 'react';
import BlogActions from '../../actions/BlogActions.js';
import BlogStore from '../../stores/BlogStore.js';
import createMarkup from '../../utils/createMarkup.js';

class BlogPage extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.getStoreState(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount () {
    BlogStore.addListener('change', this.onStoreChange);
    BlogActions.fetchBySlug(this.props.params.slug);
  }

  componentWillUnmount () {
    BlogStore.removeListener('change', this.onStoreChange);
  }

  componentWillReceiveProps (props) {
    this.setState(this.getState(props));
    BlogActions.fetchBySlug(props.params.slug);
  }

  onStoreChange () {
    const props = this.props;
    this.setState(this.getStoreState(props));
  }

  getStoreState (props) {
    const slug = props.params.slug;
    return {
      blogpages: BlogStore.getAll(slug),
    };
  }

  render () {
    const blogpages = this.state.blogpages;

    if (!blogpages.size) {
      return false;
    }

    const blogPage = this.state.blogpages.map((post) => {
      const props = post.toJSON();
      return (<div {...props} />);
    }).toArray()[0];

    const title = blogPage.props.title;
    const content = createMarkup(blogPage.props.content);

    return (
      <div>
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={content}/>
      </div>
    );
  }
}

BlogPage.propTypes = {
  params: React.PropTypes.object,
};

export default BlogPage;
