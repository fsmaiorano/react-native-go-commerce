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


describe('Testing todo reducer', () => {

  it('add a new item', () => {
    const state = cartReducer([], actions.setCartRequest(cart));
    expect(state.cartItems).toHaveLength(1);
  });

  // it('can add new todo', () => {
  //   const state = todoReducer([], actions.addTodo('Fazer café'));
  //   expect(state).toHaveLength(1);
  //   expect(state[0].text).toBe('Fazer café');
  // });

  // it('can remove todo', () => {
  //   const state = todoReducer(todos, actions.removeTodo(1));
  //   expect(state).toHaveLength(1);
  //   expect(state).not.toContainEqual(todos[0]);
  // });

  // it('can mark as complete todo', () => {
  //   let state = todoReducer(todos, actions.completeTodo(1));
  //   expect(state[0].completed).toBe(true);

  //   state = todoReducer(state, actions.completeTodo(1));
  //   expect(state[0].completed).toBe(false);
  // });
});
