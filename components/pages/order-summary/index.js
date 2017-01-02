import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { updateTitle } from '../../../actions';

const mapStateToProps = ({products, title}) => ({ 
  products,
  title
});

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (title) => dispatch(updateTitle(title))
}); 

class SummaryPage extends React.Component {

  componentDidMount () {
    this.props.updateTitle('Order Summary');
  }

  static fetchData ({store}) {
    return store.dispatch(updateTitle('Order Summary'));
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{'My summary page'}</p>
        <Link to='/basket'>{'Basket'}</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);
