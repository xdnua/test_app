import {combineReducers} from '@reduxjs/toolkit';
import collection from './collection';

const appReducer = combineReducers({
  collection,
});

export default appReducer;
