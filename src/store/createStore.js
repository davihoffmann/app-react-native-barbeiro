import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhacer = __DEV__
    ? compose(
        // INTEGRAÇÃO DO REDUX COM REACTOTRON
        console.tron.createEnhancer(),

        // OS MIDDLEWARES DA APLICAÇÃO
        applyMiddleware(...middlewares)
      )
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhacer);
};
