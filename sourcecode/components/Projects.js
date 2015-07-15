'use strict';

import React from 'react';
import ProjectList from './ProjectList.js';

class Blog extends React.Component {
  render() {
    const styles = {
      paddingTop: '30px',
    };
    return (
      <div style={styles}>
        <ProjectList />
      </div>
    );
  }
}

export default Blog;
