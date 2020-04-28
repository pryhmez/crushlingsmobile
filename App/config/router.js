import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from '../components/helpers.js/badge';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/Home';
import SplashScreen from '../components/SplashScreen';
import Notifications from '../components/Notifications';
import ActiveChats from '../components/ActiveChats';
import Connections from '../components/Connections';
import FindPeople from '../components/FindPeople';
import PendingRequests from '../components/PendingRequests';

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import AuthPage from '../components/AuthPage';
import ForgotPassword from '../components/ForgotPassword';

function HomeIconWithBadge(props) {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
}

const Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#EE5859',
        background: '#1a1a1c',
        card: '#1a1a1c',
        border: '#1c1c1c'
    }
}
// console.warn(JSON.stringify(DarkTheme))
const Stack = createStackNavigator();
// const HomeStack = createStackNavigator();
const HomeStack = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <NavigationContainer theme={Theme}>
            <HomeStack.Navigator initialRouteName='ActiveChats' headerMode='none'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let s = 21;

                        if (route.name === 'FindPeople') {
                            s = focused
                                ? 25
                                : 21;
                            return (
                                <HomeIconWithBadge
                                    name={
                                        'ios-search'
                                    }
                                    size={size}
                                    color={color} />);

                        } else if (route.name === 'Connections') {
                            iconName = 'ios-wifi'
                            s = focused
                                ? 25
                                : 21;
                        } else if (route.name === 'ActiveChats') {
                            iconName = 'ios-chatboxes'
                            s = focused
                                ? 25
                                : 21;
                        } else if (route.name === 'Requests') {
                            iconName = 'ios-people';
                            s = focused
                                ? 25
                                : 21;
                        } else if (route.name === 'Notifications') {
                            iconName = 'ios-notifications';
                            s = focused
                                ? 25
                                : 21;
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={s} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#EE5859',
                    inactiveTintColor: 'gray',
                    showLabel: false
                }}>
                {/* <HomeStack.Screen name='Home' component={Home} /> */}
                <HomeStack.Screen name='FindPeople' component={FindPeople} />
                <HomeStack.Screen name='Connections' component={Connections} />
                <HomeStack.Screen name='ActiveChats' component={ActiveChats} />
                <HomeStack.Screen name='Requests' component={PendingRequests} />
                <HomeStack.Screen name='Notifications' component={Notifications} />
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

const AuthScreenNav = () => {
    return (
        <NavigationContainer >
            <AuthStack.Navigator initialRouteName='AuthPage' headerMode='none'>
                <AuthStack.Screen name='AuthPage' component={AuthPage} />
                <AuthStack.Screen name='SignIn' component={SignIn} options={({navigation}) => ({
                   })} />
                <AuthStack.Screen name='SignUp' component={SignUp} />
                <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

const SplashScreenNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                    options={{
                        title: 'My splash',
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#33383E',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export {
    AuthScreenNav,
    HomeStackScreen,
    SplashScreenNav
};