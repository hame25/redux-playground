import React from 'react';
import Header from './shared/header/';
import Footer from './shared/footer/';
import ProgressBar from '../containers/progress-bar';
import BasketPage from './pages/basket';
import SummaryPage from './pages/summary';
import { Router, Route, browserHistory } from 'react-router';

const app = () => (
  <div>
    <Header />
    <ProgressBar />
    <div className='main'>
      <Router history={browserHistory}>
        <Route path='/' component={BasketPage} />
        <Route path='/summary' component={SummaryPage} />
      </Router>
    </div>
    <Footer />
  </div>
);

export default app;
