import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import combinedReducers from './src/redux/reducer/index';
import dataSaga from './src/redux/saga/index';
import RootScreen from './src/screens/RootScreen';

const sagaMiddleware = createSagaMiddleware();
//Описать combinedReducers and dataSaga и RootScreen
function configureStore() {
  const store = createStore(combinedReducers,applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <RootScreen />
  </Provider>
);

export default App;
