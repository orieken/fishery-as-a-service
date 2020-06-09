import { Factory } from 'fishery';
import * as Faker from 'faker';
import { Burger } from './burger';


export const BurgerFactory = Factory.define<Burger>(({sequence, params}) => ({
  id: sequence,
  name: Faker.commerce.productName(),
}));

