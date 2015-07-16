import React from 'react';
import {Link} from 'react-router';

class PortfolioCaseListItem extends React.Component {

  render () {
    const URI = '/portfolio/' + this.props.slug;
    const featuredImage = this.props.featured_image || {};
    const title = this.props.title || 'Title';

    const styles = {
      link: {
        width: '20%',
        float: 'left',
        featuredImg: {
          width: '100%',
        },
      },
      activeLink: {},
    };

    const linkProps = {
      to: URI,
      style: styles.link,
      activeStyle: styles.activeLink,
    };

    return (
      <div>
        <Link style={styles.link} {...linkProps}>
          <h3>{title}</h3>
          <img
            style={styles.link.featuredImg}
            alt=''
            src={featuredImage.source}
            />
        </Link>
      </div>
    );
  }

}

PortfolioCaseListItem.propTypes = {
  featured_image: React.PropTypes.object,
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default PortfolioCaseListItem;
