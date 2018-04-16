import Immutable from 'seamless-immutable';

export const Types = {

  GET_PRODUCTS_BY_CATEGORY_REQUEST: 'products/GET_PRODUCTS_BY_CATEGORY_REQUEST',
  GET_PRODUCTS_BY_CATEGORY_SUCCESS: 'products/GET_PRODUCTS_BY_CATEGORY_SUCCESS',
  GET_PRODUCTS_BY_CATEGORY_FAILURE: 'products/GET_PRODUCTS_BY_CATEGORY_FAILURE',

};

const initialState = Immutable({
  category: {},
  isLoading: false,
});


export default function products(state = initialState, action) {
  switch (action.type) {

    case Types.GET_PRODUCTS_BY_CATEGORY_REQUEST:
      return { ...state, isLoading: true, category: action.payload.category };
    case Types.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, ...action.payload.products };
    case Types.GET_PRODUCTS_BY_CATEGORY_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      return state;
  }
};

export const Creators = {

  // Get Products by Category

  getProductsByCategoryRequest: category => ({
    type: Types.GET_PRODUCTS_BY_CATEGORY_REQUEST,
    payload: { category },
  }),

  getProductsByCategorySuccess: products => ({
    type: Types.GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    payload: { products },
  }),

  getProductsByCategoryFailure: products => ({
    type: Types.GET_PRODUCTS_BY_CATEGORY_FAILURE,
    payload: { error },
  }),

};
