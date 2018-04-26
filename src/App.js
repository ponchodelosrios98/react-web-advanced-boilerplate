import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './redux/reducers';
import sagas from './redux/sagas';

import Home from './components/views/Home';
import './style/core.css';

const App = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store =
    createStore(
      reducers, {},
      composeEnhancers(applyMiddleware(sagaMiddleware, ReduxThunk)),
    );
  sagaMiddleware.run(sagas);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
