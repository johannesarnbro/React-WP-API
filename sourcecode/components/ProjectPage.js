import React from 'react';
import ProjectList from './ProjectList.js';
import Project from './Project.js';

class ProjectPage extends React.Component {


  render() {

    const slug = this.props.params.slug;
    const styles = {
      paddingTop: '30px',
    };

    return (
      <div style={styles}>
        <Project slug={slug}/>
        <ProjectList />
      </div>
    );
  }

}

ProjectPage.propTypes = {
  params: React.PropTypes.object,
  'params.slug': React.PropTypes.string,
};

export default ProjectPage;
