import React from 'react';
import {Link} from 'react-router';
import SiteStore from '../stores/SiteStore.js';
import SiteActions from '../actions/SiteActions.js';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getStoreState();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    SiteStore.addListener('change', this.onStoreChange);
    SiteActions.fetchAll();
  }

  onStoreChange() {
    const state = this.getStoreState();
    this.setState(state);
  }

  getStoreState() {
    const site = SiteStore.getAll();
    return {
      site: site,
    };
  }

  render() {

    const siteID = this.state.site.get('name');
    const description = this.state.site.get('description');

    const styles = {
      base: {
        float: 'left',
        fontFamily: 'Helvetica, Arial',
        maxWidth: '200px',
      },
      link: {
        display: 'block',
        textDecoration: 'none',
        color: 0x000000,
        paddingTop: '30px',
        borderTop: '3px solid #000000',
      },
      siteID: {
        display: 'block',
        fontSize: '13px',
        fontWeight: 'bold',
        marginBottom: '10px',
      },
      description: {
        display: 'block',
        fontSize: '11px',
      },
    };

    const linkProps = {
      to: '/',
      style: styles.link,
    };

    return (
      <li style={styles.base}>
        <Link {...linkProps}>
          <span style={styles.siteID}>{siteID}</span>
          <span style={styles.description}>{description}</span>
        </Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default MenuItem;
