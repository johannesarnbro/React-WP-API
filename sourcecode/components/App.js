'use strict';

import React from 'react';
import chroma from 'chroma-js';
import Blog from './Blog.js';
import SiteStore from '../stores/SiteStore.js';
import SiteHeader from './SiteHeader.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getState(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    SiteStore.addListener('change', this.onStoreChange);
  }

  componentWillUnmount() {
    SiteStore.removeListener('change', this.onStoreChange);
  }

  onStoreChange() {
    this.setState(this.getState());
  }

  getState(props) {
    return {
      site: SiteStore.getAll(),
    };
  }

  render() {

    const themeColor = this.state.site.get('themeColor') || '#ffffff';
    const backgroundColor = chroma(themeColor).brighten(3).hex();

    const styles = {
      base: {
        height: '100%',
        padding: '0 30px',
        backgroundColor: backgroundColor,
      },
      center: {
        maxWidth: '1440px',
        margin: '0 auto',
      },
    };

    return (
      <div style={styles.base}>
        <div style={styles.center}>
          <SiteHeader />
          {this.props.children || <Blog />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
