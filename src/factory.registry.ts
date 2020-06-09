import { register } from 'fishery';
import { BurgerFactory } from './burger/burger.factory';

const burgerFactory = BurgerFactory;
export const factories = register({burgerFactory});

export { burgerFactory };
