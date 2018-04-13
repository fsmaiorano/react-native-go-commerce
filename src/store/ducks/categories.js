import Immutable from 'seamless-immutable';

export const Types = {
  GET_CATEGORIES_REQUEST: 'categories/GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'categories/GET_CATEGORIES_FAILURE',
};

const initialState = Immutable({
  categories: [],
  isLoading: false,
});

export default function categories(state = initialState, action) {

  switch(action.type){
    case Types.GET_CATEGORIES_REQUEST:
      return { ...state, isLoading: true};
    case Types.GET_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload.categories };
    case Types.GET_CATEGORIES_FAILURE:
      return { ...state, isLoading: false, categories: action.payload.error };
    default:
      return state;
  }

};

export const Creators = {

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

};
