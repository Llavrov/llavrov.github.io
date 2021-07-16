import React from 'react';
import ReactDOM from 'react-dom';
import MainPizza from './MainPizza';
import {BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux';
 
import store from './redux/store'

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainPizza/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



