import React from 'react';
import Menu from './Menu.js';
import SiteID from './SiteID.js';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const styles = {
      base: {
        overflow: 'hidden',
        borderBottom: '1px solid #000',
        paddingBottom: '30px',
      },
    };

    return (
      <div style={styles.base}>
        <SiteID />
        <Menu />
      </div>
    );
  }
}

MenuItem.propTypes = {
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default MenuItem;
