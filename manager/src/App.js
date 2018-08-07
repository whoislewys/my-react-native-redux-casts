import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDE6lzNnXq6hwGOhKPGxCDCSTbgZ3ofM00',
      authDomain: 'manager-f3191.firebaseapp.com',
      databaseURL: 'https://manager-f3191.firebaseio.com',
      projectId: 'manager-f3191',
      storageBucket: 'manager-f3191.appspot.com',
      messagingSenderId: '582386940328'
    };
    firebase.initializeApp(config);
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
