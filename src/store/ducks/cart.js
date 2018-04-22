import Immutable from 'seamless-immutable';

export const Types = {
  GET_CART_REQUEST: 'cart/GET_CART_REQUEST',
  GET_CART_SUCCESS: 'cart/GET_CART_SUCCESS',
  GET_CART_FAILURE: 'cart/GET_CART_FAILURE',

  SET_CART_REQUEST: 'cart/SET_CART_REQUEST',
  SET_CART_SUCCESS: 'cart/SET_CART_SUCCESS',
  SET_CART_FAILURE: 'cart/SET_CART_FAILURE',
};

const initialState = Immutable({
  cartItems: [],
  isLoading: false,
});

export default function cart(state = initialState, action) {

  switch (action.type) {

    case Types.GET_CART_REQUEST:
      return { ...state, isLoading: true, cartItems: state.cartItems };
    case Types.GET_CART_SUCCESS:
      return { ...state, isLoading: false, cartItems: [...action.payload.cart] };
    case Types.GET_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case Types.SET_CART_REQUEST:
      return { ...state, isLoading: true, cartItems: [...action.payload.cart] };
    case Types.SET_CART_SUCCESS:
      return { ...state, isLoading: false, cartItems: action.payload.cart };
    case Types.SET_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      return state;
  }

};

export const Creators = {

  getCartRequest: () => ({
    type: Types.GET_CART_REQUEST,
  }),

  getCartSuccess: cart => ({
    type: Types.GET_CART_SUCCESS,
    payload: { cart },
  }),

  getCartFailure: error => ({
    type: Types.GET_CART_FAILURE,
    payload: { error },
  }),

  setCartRequest: cart => ({
    type: Types.SET_CART_REQUEST,
    payload: { cart },
  }),

  setCartSuccess: cart => ({
    type: Types.SET_CART_SUCCESS,
    payload: { cart },
  }),

  setCartFailure: error => ({
    type: Types.SET_CART_FAILURE,
    payload: { error },
  }),


};
