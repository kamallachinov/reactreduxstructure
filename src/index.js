import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './Reducers/Index'
import { Provider } from 'react-redux';
//PROVIDER CONNECTS OUR GLOBAL STATES OR STORE TO OUR ENTIRE <APP/> DOWN


//ALL DATAS ARE STORED THERE
const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

