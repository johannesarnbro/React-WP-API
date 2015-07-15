'use strict';

import React from 'react';
import ProjectStore from '../stores/ProjectStore.js';
import ProjectListItem from './ProjectListItem.js';
import ProjectActions from '../actions/ProjectActions.js';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getStoreState(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    ProjectStore.addListener('change', this.onStoreChange);
    ProjectActions.fetchAll();
  }

  componentWillUnmount() {
    ProjectStore.removeListener('change', this.onStoreChange);
  }

  componentWillReceiveProps(props) {
    this.setState(this.getStoreState(props));
  }

  onStoreChange() {
    const props = this.props;
    this.setState(this.getStoreState(props));
  }

  getStoreState(props) {
    return {
      projects: ProjectStore.getAll(),
    };
  }

  render() {

    const projects = this.state.projects.map((project) => {
      const props = project.toJSON();
      return (<ProjectListItem key={props.ID} {...props} />);
    }).toArray();

    return (
      <div>
        {projects}
      </div>
    );
  }
}

export default Blog;
