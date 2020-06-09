import { factories } from './src/factory.registry';

export const Routes: { [key: string]: () => any } = {
  burger: () => factories.burgerFactory.build(),
};
