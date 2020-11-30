import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cart.css'
var data = require('../../assets/products.json');

class Cart extends Component {

    render() {
        const cart = data.products.filter(
            product => this.props.cartProducts[product.id] &&
                this.props.cartProducts[product.id] > 0
        )

        const products = cart.map(
            product => {
                return (
                    <div key={product.id} className="product">
                        <div className="image-div">
                            <img src={product.image_url}
                                alt={product.name}
                                className="product-image" />
                        </div>
                        <div className="info-div">
                            <h3><b>Title:</b>{product.name}</h3>
                            <h3><b>Price:</b>{product.price}$</h3>
                            <h3><b>Quantity:</b>{this.props.cartProducts[product.id]}</h3>
                        </div>
                    </div>
                )
            }
        )

        const getTotalBill = () => {
            return cart.reduce(
                (total, current) => {
                    return total + (current.price * this.props.cartProducts[current.id])
                },
                0)
        }

        const checkOut = () => {
            this.props.clearCart()
            this.props.history.push('/')
        }

        return (
            <div className="body-products">
                <h1>Cart Page</h1>
                <div>
                    {products}
                    {products.length === 0 ? <h6>No products</h6> : null}
                </div>
                <div>
                    {products.length === 0 ? null :
                        <h3><b>Total:</b> {getTotalBill()} </h3>
                    }
                </div>
                <div className="checkout">
                    {products.length === 0 ? null :
                        <button onClick={() => checkOut()}>Checkout</button>
                    }
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
        clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);