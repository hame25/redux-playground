import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';  
import { fetchBasket } from '../../../actions'
import ProductList from '../../product-list';

const mapStateToProps = ({products}) => ({ 
  products: products
});

const mapDispatchToProps = (dispatch) => ({
  fetchBasket: () => dispatch(fetchBasket())
})

class BasketPage extends React.Component {

  componentDidMount () {
    if (!this.props.products) {
      this.props.fetchBasket();
    }
  }

  static fetchData ({store}) {
    return store.dispatch(fetchBasket());
  }

  renderProductList () {
    if(this.props.products) {
      return <ProductList products={this.props.products} />
    } else {
      return <p>{'Loading products'}</p>
    }
  }
  
  render () {  
    return (
      <div>
        <h1>{'Basket Page'}</h1>
        <p>{'My basket page'}</p>
        <Link to='/order-summary'>{'Summary'}</Link>
        { this.renderProductList() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
