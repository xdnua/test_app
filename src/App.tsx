import React from 'react';
import Router from './navigations/router';
import store from './redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
