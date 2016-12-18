import React from 'react';
import Header from '../shared/header/';
import Footer from '../shared/footer/';
import ProgressBar from '../../containers/progress-bar';

const app = (props) => (
  <div>
    <Header />
    <ProgressBar />
    <div className='main'>
     {props.children}
    </div>
    <Footer />
  </div>
);

export default app;
