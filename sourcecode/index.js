import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import App from './components/App.js';
import Page from './components/Page.js';
import Blog from './components/Blog.js';
import Projects from './components/Projects.js';
import ProjectPage from './components/ProjectPage.js';

ReactDOM.render((
  <Router history={new BrowserHistory()}>
    <Route path='/' component={App}>
      <Route path='/webgl' component={Projects}/>
      <Route path='/webgl/:slug' component={ProjectPage}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/:slug' component={Page}/>
    </Route>
  </Router>
), document.getElementById('app'));
