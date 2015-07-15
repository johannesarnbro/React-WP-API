import React from 'react';
import {Link} from 'react-router';

class MenuItem extends React.Component {

  render() {

    const URI = this.props.slug;
    const label = this.props.title;
    const description = this.props.description ||
      'Lorem ipsum dolor sit amet foo bar.';

    const styles = {
      base: {
        float: 'left',
        marginLeft: '10px',
        fontFamily: 'Helvetica, Arial',
        maxWidth: '120px',
      },
      link: {
        display: 'block',
        textDecoration: 'none',
        color: 0x000000,
        paddingTop: '30px',
        borderTop: '3px solid transparent',
      },
      activeLink: {
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
        color: '#777',
      },
    };

    const linkProps = {
      to: URI,
      style: styles.link,
      activeStyle: styles.activeLink,
    };

    return (
      <li style={styles.base}>
        <Link {...linkProps}>
          <span style={styles.siteID}>{label}</span>
          <span style={styles.description}>{description}</span>
        </Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  description: React.PropTypes.string,
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default MenuItem;
