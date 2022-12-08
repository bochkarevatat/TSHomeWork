import Cart from '../service/Cart';
import Book from '../domain/Book';

test('',() => {
    const cart = new Cart();
    const expected = cart.items.length
    expect(expected).toBe(0)
});

test('add a new items to a cart',()=>{
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    cart.add(book);
    const expected = cart.items;
    const recieved = [book];
    expect(expected).toEqual(recieved)
})

