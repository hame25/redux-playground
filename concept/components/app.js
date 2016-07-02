import React from 'react';
import Header from './shared/header/';
import Footer from './shared/footer/';
import ProgressBar from '../containers/progress-bar';

const app = () => (
  <div>
    <Header />
    <ProgressBar />
    <Footer />
  </div>
);

export default app;
