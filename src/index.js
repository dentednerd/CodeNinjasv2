import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './components/App';
import Home from './pages/Home';
import Level from './pages/Level';
import Credits from './pages/Credits';
import NoMatch from './pages/404';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));
const history = createBrowserHistory();

render(
  (
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/levels/:level" component={Level} />
            <Route path="/credits" component={Credits} />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
);
