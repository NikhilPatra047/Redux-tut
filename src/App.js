import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from 'redux';
import reducer from "./reducer.js"
import {Provider} from "react-redux" //Used to wrap apps, connect() used in components to 
//make use of the values that are passed down through the providers

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5
};

function App() {
  // cart setup

  const store = createStore(reducer, initialStore);

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
