import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './features/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export function makeStore(preloadedState) {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}

export const store = makeStore();
