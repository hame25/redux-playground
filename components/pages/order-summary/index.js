import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux' 

class SummaryPage extends React.Component {

  static fetchData () {
    return Promise.resolve({});
  }

  render () {
    return (
      <div>
        <h1>{'Summary Page'}</h1>
        <p>{'My summary page'}</p>
        <Link to='/basket'>{'Basket'}</Link>
      </div>
    );
  }
}

export default connect()(SummaryPage);
