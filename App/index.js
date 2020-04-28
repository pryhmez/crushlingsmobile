import React, {Component} from 'react';
import { Provider} from 'react-redux';
import Nav from './App/config/router';
import getStore from './App/config/configureStore';
const store = getStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav/>
      </Provider>
    );
  }
}

export default App;