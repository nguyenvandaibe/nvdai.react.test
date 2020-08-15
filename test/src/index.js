// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { combineReducers, createStore } from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;

    case "CHANGE_AGE":
      state = {
        ...state,
        age: action.payload
      }
      break;

    default:
      break;
  }
  return state;
}

const tweetsReducer = (state = [], action) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch({ type: "CHANGE_NAME", payload: "Dai" });
store.dispatch({ type: "CHANGE_AGE", payload: 21 });
