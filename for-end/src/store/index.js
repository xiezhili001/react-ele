// 创建 仓库
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todo';
import cityReducer from './reducers/city';
import detailCityReducer from './reducers/detailCity';

// 这个 combineReducers 就是对小 reduer
const store = createStore(combineReducers({
  city: cityReducer,
  todos: todoReducer,
  detailCity: detailCityReducer
}), applyMiddleware(thunk, logger));

export default store;
