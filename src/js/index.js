import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createStore from './store/createStore';
import Routes from './routes/routes';
import "../scss/reset.scss";

let store = createStore();

class Main extends Component {
  render(){
    return (
      <Router>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Router>
    )
  }
}
render(<Main />,document.getElementById('app'));