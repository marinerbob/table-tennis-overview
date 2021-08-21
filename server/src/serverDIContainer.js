import { createContainer, asClass, InjectionMode } from 'awilix';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
});

container.register({});

export default container;
