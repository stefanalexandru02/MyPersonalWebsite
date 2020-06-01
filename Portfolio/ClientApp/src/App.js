import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './site.scss';

export default class App extends Component {
  static displayName = App.name;

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
