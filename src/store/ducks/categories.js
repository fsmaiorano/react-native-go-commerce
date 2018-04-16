import Immutable from 'seamless-immutable';

export const Types = {
  GET_CATEGORIES_REQUEST: 'categories/GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'categories/GET_CATEGORIES_FAILURE',

  SET_SELECTED_CATEGORY_REQUEST: 'categories/SET_SELECTED_CATEGORY',
  SET_SELECTED_CATEGORY_SUCCESS: 'categories/SET_SELECTED_CATEGORY_SUCCESS',
  SET_SELECTED_CATEGORY_FAILURE: 'categories/SET_SELECTED_CATEGORY_FAILURE',

  GET_PRODUCTS_BY_CATEGORY_REQUEST: 'categories/GET_PRODUCTS_BY_CATEGORY_REQUEST',
  GET_PRODUCTS_BY_CATEGORY_SUCCESS: 'categories/GET_PRODUCTS_BY_CATEGORY_SUCCESS',
  GET_PRODUCTS_BY_CATEGORY_FAILURE: 'categories/GET_PRODUCTS_BY_CATEGORY_FAILURE',

};

const initialState = Immutable({
  categories: [],
  selectedCategory: {},
  isLoading: false,
});

export default function categories(state = initialState, action) {

  switch (action.type) {

    case Types.GET_CATEGORIES_REQUEST:
      return { ...state, isLoading: true };
    case Types.GET_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, getCategories: action.payload.categories };
    case Types.GET_CATEGORIES_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case Types.SET_SELECTED_CATEGORY_REQUEST:
      return { ...state, isLoading: true, selectedCategory: action.payload.category };
    case Types.SET_SELECTED_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, selectedCategory: action.payload.category };

    case Types.GET_PRODUCTS_BY_CATEGORY_REQUEST:
      return { ...state, isLoading: true, products: action.payload.category };
    case Types.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, products: action.payload.products };
    case Types.GET_PRODUCTS_BY_CATEGORY_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      return state;
  }

};

export const Creators = {

  //Categories

  getCategoriesRequest: () => ({
    type: Types.GET_CATEGORIES_REQUEST,
  }),

  getCategoriesSuccess: categories => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: { categories },
  }),

  getCategoriesFailure: error => ({
    type: Types.GET_CATEGORIES_FAILURE,
    payload: { error },
  }),

  // Set Selected Category

  setSelectedCategory: category => ({
    type: Types.SET_SELECTED_CATEGORY_REQUEST,
    payload: { category },
  }),

  setSelectedCategorySuccess: category => ({
    type: Types.SET_SELECTED_CATEGORY_SUCCESS,
    payload: { category },
  }),

  setSelectedCategoryFailure: category => ({
    type: Types.SET_SELECTED_CATEGORY_FAILURE,
    payload: { category },
  }),

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
