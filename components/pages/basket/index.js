import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';  
import { updateTitle } from '../../../actions'
import ProductList from '../../product-list';

const mapStateToProps = ({products, title}) => ({ 
  products,
  title
});

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (title) => dispatch(updateTitle(title))
});

class BasketPage extends React.Component {

  componentDidMount () {
    this.props.updateTitle('Basket')
  }

  static fetchData ({store}) {
    return store.dispatch(updateTitle('Basket'));
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
        <h1>{this.props.title}</h1>
        <p>{'My basket page'}</p>
        <Link to='/order-summary'>{'Summary'}</Link>
        { this.renderProductList() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
