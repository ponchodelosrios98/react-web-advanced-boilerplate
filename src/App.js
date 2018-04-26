import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './redux/reducers';
import sagas from './redux/sagas';

import Navbar from './components/core/NavBar';
import Home from './components/views/Home';
import Outcomes from './components/views/Outcomes';
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
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/outcomes" component={Outcomes} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
