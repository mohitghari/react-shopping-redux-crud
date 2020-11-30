import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
var data = require('../../assets/products.json');
class Home extends Component {
    render() {
        console.log('cartProducts', this.props.cartProducts)
        const products = data.products.map(
            product => {
                const button = (this.props.cartProducts[product.id] ||
                    this.props.cartProducts[product.id] > 0
                ) ? <div className="quantity-button">
                        <div className="minus">
                            <span onClick={() => this.props.decrementQuantity(product.id)}>-</span>
                        </div>
                        <div className="text">{this.props.cartProducts[product.id]}</div>
                        <div className="plus">
                            <span onClick={() => this.props.incrementQuantity(product.id)}>+</span>
                        </div>
                    </div>
                    : <button onClick={() => this.props.addProduct(product.id)}> Add to Cart </button>
                return (
                    <div key={product.id} className="product-wrapper">
                        <img src={product.image_url}
                            alt={product.name}
                            className="product-image" />
                        <h3><b>Title:</b>{product.name}</h3>
                        <h3><b>Price:</b>{product.price}$</h3>
                        {button}
                    </div>
                )
            }
        )
        return (
            <div>
                <h1>Do your shoppping.</h1>
                <div className="clear"></div>
                <div className="product-list-warpper">
                    {products}
                    <div className="clear"></div>
                </div>


            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        cartProducts: state.cartProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (id) => dispatch({ type: 'ADD_PRODUCT', id: id }),
        incrementQuantity: (id) => dispatch({ type: 'INCREMENT_QUANTITY', id: id }),
        decrementQuantity: (id) => dispatch({ type: 'DECREMENT_QUANTITY', id: id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)