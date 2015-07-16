import React from 'react';
import PortfolioStore from '../../stores/PortfolioStore.js';
import PortfolioCaseListItem from './PortfolioCaseListItem.js';
import PortfolioActions from '../../actions/PortfolioActions.js';

class CaseList extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.getStoreState(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount () {
    PortfolioStore.addListener('change', this.onStoreChange);
    PortfolioActions.fetchAll();
  }

  componentWillUnmount () {
    PortfolioStore.removeListener('change', this.onStoreChange);
  }

  onStoreChange () {
    this.setState(this.getStoreState());
  }

  getStoreState () {
    return {
      cases: PortfolioStore.getAll(),
    };
  }

  render () {
    if (!this.state.cases) {
      return false;
    }

    const caseList = this.state.cases.map((page) => {
      const props = page.toJSON();
      return (<PortfolioCaseListItem key={props.ID} {...props} />);
    }).toArray();

    return (
      <div>
        {caseList}
      </div>
    );
  }
}

export default CaseList;
