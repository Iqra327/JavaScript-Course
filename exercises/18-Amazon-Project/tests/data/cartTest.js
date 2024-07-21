import { addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption } from "../../data/cart.js";

describe('test suite: addToCart', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');

  })
  it('adds an existing product to the cart', () =>{    
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });

    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }]));
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });


  it('adds a new product to the cart', () => {    
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    loadFromStorage();


    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }]));
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });
});

describe('test suite: removeFromcart', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }]);
  });

  loadFromStorage();
  });

  it('remove a product from the cart', () => {
    removeFromCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.length).toEqual(1);  
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }]));
  });

 
  it('does nothing if product is not in the cart', () => {
    removeFromCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }]));
  })
});

describe('test suite: updateDeliveryOption', () =>{
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();
  })
  
  it('update delivery option', () => {
    updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '3');
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(2);
    expect(cart[0].deliveryOptionId).toEqual('3');
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '3'
    }]));
  });

  it('does nothing if product is not in the cart', () => {
    updateDeliveryOption('15b6fc6f-327a-4ec4-896f-486349e85a3d', '3');
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(2);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });

  it('does nothing if delivery option is not in the cart', () => {
    updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '4');
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(2);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});