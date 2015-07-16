import React from 'react';
import PortfolioActions from '../../actions/PortfolioActions.js';
import PortfolioStore from '../../stores/PortfolioStore.js';
import createMarkup from '../../utils/createMarkup.js';

class PortfolioCasePage extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.getStoreState(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount () {
    PortfolioStore.addListener('change', this.onStoreChange);
    PortfolioActions.fetchBySlug(this.props.params.slug);
  }

  componentWillUnmount () {
    PortfolioStore.removeListener('change', this.onStoreChange);
  }

  componentWillReceiveProps (props) {
    this.setState(this.getState(props));
    PortfolioActions.fetchBySlug(props.params.slug);
  }

  onStoreChange () {
    const props = this.props;
    this.setState(this.getStoreState(props));
  }

  getStoreState (props) {
    const slug = props.params.slug;
    return {
      portfolioCases: PortfolioStore.getAll(slug),
    };
  }

  render () {
    const portfolioCases = this.state.portfolioCases;

    if (!portfolioCases.size) {
      return false;
    }

    const portfolioCase = this.state.portfolioCases.map((post) => {
      const props = post.toJSON();
      return (<div {...props} />);
    }).toArray()[0];

    const title = portfolioCase.props.title;
    const content = createMarkup(portfolioCase.props.content);

    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={content}/>
      </div>
    );
  }
}

PortfolioCasePage.propTypes = {
  params: React.PropTypes.object,
};

export default PortfolioCasePage;
