import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'hover.css';

import './site.scss';

import { Resume } from './components/Resume';

export default class App extends Component {
  static displayName = App.name;

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/resume' component={Resume}></Route>
          <Layout>
            <Route exact path='/' component={Home} />
          </Layout>
        </Switch>
      </>
    );
  }
}
