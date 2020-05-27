
import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { AuthScreenNav, HomeStackScreen, SplashScreenNav } from './App/config/router'
import getStore from './App/config/configureStore';
const store = getStore();
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  render() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          {
            (() => {
              // console.log(store.getState())
              if (this.state.isLoading)
                return <SplashScreenNav />
              if (!this.state.isLoading){
                if(store.getState().user.token == ''){
                  // return <AuthScreenNav />
                  return <HomeStackScreen/>
                }
                return <HomeStackScreen/>
              }
            })()
          }
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
