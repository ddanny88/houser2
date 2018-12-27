import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          {routes}
        </div>
      </Provider>
    );
  }
}

export default App;
