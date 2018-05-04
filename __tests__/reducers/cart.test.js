import cartReducer from '../../src/store/ducks/cart';
import { Creators as actions } from '../../src/store/ducks/cart';

const cart = [
  {
    "id": 1,
    "name": "Camiseta Hyperas Preta",
    "brand": "Quiksilver",
    "image": "https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg",
    "price": 49.99,
    "amount": 1
  }
];

describe('Testing set cart reducer', () => {

  it('add a new item', () => {
    const state = cartReducer([], actions.setCartRequest(cart));
    expect(state.cartItems).toHaveLength(1);
  });

  it('success when add a new item', () => {
    const state = cartReducer([], actions.setCartSuccess(cart));
    expect(state.cartItems).toHaveLength(1);
  });

  it('failure when add a new item', () => {
    const state = cartReducer([], actions.setCartFailure("Error"));
    expect(state.error).toBe("Error");
  });

});

describe('Testing get cart reducer', () => {

  it('get cart', () => {
    const state = cartReducer([], actions.setCartSuccess(cart));
    expect(state.cartItems).toHaveLength(1);
  });

  it('get cart failure', () => {
    const state = cartReducer([], actions.setCartFailure("Error"));
    expect(state.error).toBe("Error");
  });

});
