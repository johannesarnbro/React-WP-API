import React from 'react';
import PageStore from '../stores/PageStore';
import PageActions from '../actions/PageActions.js';
import SiteActions from '../actions/SiteActions.js';
import createMarkup from '../utils/createMarkup.js';

class Page extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.getState(props);
    this.onPageStoreChange = this.onPageStoreChange.bind(this);
  }

  componentDidMount () {
    PageStore.addListener('change', this.onPageStoreChange);
    PageActions.fetchBySlug(this.props.params.slug);
  }

  componentWillUnmount () {
    PageStore.removeListener('change', this.onPageStoreChange);
  }

  componentWillReceiveProps (props) {
    this.setState(this.getState(props));
    PageActions.fetchBySlug(props.params.slug);
  }

  onPageStoreChange () {
    const props = this.props;
    this.setState(this.getState(props));
  }

  getState (props) {
    const slug = props.params.slug;
    return {
      page: PageStore.getPageBySlug(slug),
    };
  }

  render () {

    const page = this.state.page;
    if (!page) {
      return false;
    }

    SiteActions.setThemeColor(page.getIn(['meta', 'background']));

    const title = page.get('title');
    const content = createMarkup(page.get('content'));

    return (
      <div>
        <h2>{title}</h2>

        <div dangerouslySetInnerHTML={content}>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  params: React.PropTypes.object,
};

export default Page;
