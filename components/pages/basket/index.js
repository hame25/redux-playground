import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'  
import { fetchBasket } from '../../../actions'
import ProductList from '../../product-list';

const mapStateToProps = ({products}) => ({
  products: products
});

const mapDispatchToProps = (dispatch) => ({
  fetchBasket: () => dispatch.fetchBasket()
})

class BasketPage extends React.Component {

  componentDidMount () {
    if (!this.props.products) this.props.fetchBasket();
  }

  static fetchData ({store}) {
    return Promise.resolve(store.dispatch(fetchBasket()));
  }
  
  render () {
    console.log('basket', this.props.products);
    return (
      <div>
        <h1>{'Basket Page'}</h1>
        <p>{'My basket page'}</p>
        <Link to='/'>{'Basket'}</Link>
        <Link to='/order-summary'>{'Summary'}</Link>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
