import { createContainer, asClass, InjectionMode } from "awilix";
import config from "./dbConfig";
import KnexDBConnector from "./knexDBConnector";

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  knexDBConnector: asClass(KnexDBConnector).inject(() => ({ config }))
});

export default container;
