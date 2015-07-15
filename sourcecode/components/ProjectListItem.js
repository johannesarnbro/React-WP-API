import React from 'react';
import {Link} from 'react-router';

class Project extends React.Component {

  render() {

    const title = this.props.title;
    const color = this.props.meta.color;
    const URI = '/webgl/' + this.props.slug;

    const styles = {
      background: color,
      float: 'left',
      width: '20%',
      height: '160px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontFamily: 'Helvetica Neue, Helvetica, Arial',
      fontSize: '13px',
      letterSpacing: '2px',
      fontWeight: '200',
    };

    return (
      <Link to={URI}>
        <div style={styles}>
          {title}
        </div>
      </Link>
    );
  }

}

Project.propTypes = {
  content: React.PropTypes.string,
  meta: React.PropTypes.object,
  'meta.color': React.PropTypes.string,
  slug: React.PropTypes.slug,
  title: React.PropTypes.string,
};

export default Project;
