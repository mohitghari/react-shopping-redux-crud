
const initialState = {
    cartProducts: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const cart = {
                ...state,
                cartProducts: {
                    ...state.cartProducts,
                }
            }
            cart.cartProducts[action.id] = 1
            return cart
        }
        case 'INCREMENT_QUANTITY': {
            const updateCartProducts = {
                ...state.cartProducts,
                [action.id]: state.cartProducts[action.id] + 1
            }
            return {
                ...state,
                cartProducts: {
                    ...updateCartProducts,
                }
            }
        }
        case 'DECREMENT_QUANTITY': {
            const updateCartProducts = {
                ...state.cartProducts,
                [action.id]: state.cartProducts[action.id] - 1
            }
            return {
                ...state,
                cartProducts: {
                    ...updateCartProducts,
                }
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                cartProducts: {}
            }
        }
        default: {
            return state
        }
    }

}

export default reducer;