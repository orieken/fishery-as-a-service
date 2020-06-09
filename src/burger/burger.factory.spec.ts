import { burgerFactory } from '../factory.registry';

describe('BurgerFactory', () => {
  it('Makes a burger named "The Big Cheese', () => {
    const burger = burgerFactory.build({ name: 'The Big Cheese'});

    expect(burger.name).toEqual('The Big Cheese');
  })
})
