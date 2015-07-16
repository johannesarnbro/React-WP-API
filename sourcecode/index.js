import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import App from './components/App.js';
import Page from './components/Page.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import PortfolioCasePage from './components/Portfolio/PortfolioCasePage.js';
import Blog from './components/Blog/Blog.js';
import BlogPage from './components/Blog/BlogPostPage.js';

ReactDOM.render((
  <Router history={new BrowserHistory()}>
    <Route path='/' component={App}>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/portfolio/:slug' component={PortfolioCasePage}/>
      <Route path='/blogg' component={Blog}/>
      <Route path='/blogg/:slug' component={BlogPage}/>
      <Route path='/:slug' component={Page}/>
    </Route>
  </Router>
), document.getElementById('app'));
