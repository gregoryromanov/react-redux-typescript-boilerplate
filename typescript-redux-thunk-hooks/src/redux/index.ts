import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const enhancer = applyMiddleware(thunk);

const store = createStore(reducers, compose(enhancer, devToolsEnhancer({})));

export default store;
