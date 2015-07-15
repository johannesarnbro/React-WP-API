import React from 'react';
import SiteActions from '../actions/SiteActions.js';
import ProjectStore from '../stores/ProjectStore.js';
import ProjectActions from '../actions/ProjectActions.js';

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getState(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    const slug = this.props.slug;
    ProjectStore.addListener('change', this.onStoreChange);
    ProjectActions.fetchBySlug(slug);
  }

  componentWillUnmount() {
    ProjectStore.removeListener('change', this.onStoreChange);
  }

  componentWillReceiveProps(props) {
    const slug = props.slug;
    this.setState(this.getState(props));
    ProjectActions.fetchBySlug(slug);
  }

  onStoreChange() {
    const props = this.props;
    this.setState(this.getState(props));
  }

  getState(props) {
    const slug = props.slug;
    return {
      page: ProjectStore.getProjectBySlug(slug),
    };
  }

  render() {

    if (!this.state.page) {
      return false;
    }

    const title = this.state.page.get('title');
    const color = this.state.page.getIn(['meta', 'color']);

    SiteActions.setThemeColor(color);


    const styles = {
      height: '640px',
      background: color,
      marginBottom: '30px',
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
      <div>
        <div style={styles}>
          {title}
        </div>
      </div>
    );
  }

}

Project.propTypes = {
  content: React.PropTypes.string,
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default Project;
