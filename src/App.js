/* eslint-disable react/no-deprecated */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

// import Header from "./components/common/Header";

console.disableYellowBox = true;

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCDWrmBE4g6YO9XlufX3A46Ad8AKSU7Pdk",
      authDomain: "manager-5c2fa.firebaseapp.com",
      databaseURL: "https://manager-5c2fa.firebaseio.com",
      projectId: "manager-5c2fa",
      storageBucket: "",
      messagingSenderId: "992661286631",
      appId: "1:992661286631:web:ab4f9a5d710a8fee"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
