import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
// import { Button, ThemeProvider } from 'react-native-elements';


const AuthPage = (props) => {
    const onSignUpClick = () => {
        props.navigation.navigate('SignUp')
    }

    const onSignInClick = () => {
        props.navigation.navigate('SignIn')
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#1a1a1c' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#1a1a1c" />
            <View style={styles.container}>
                <View style={{ ...styles.btnContainer, flex: 1.2, justifyContent: null, marginTop: '18%', alignItems: null, width: '90%', alignSelf: "center" }}>
                    <Text style={{ ...styles.text, alignSelf: null, fontSize: 35, fontWeight: 'bold' }}>WELCOME</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={onSignUpClick}>
                        <Text style={styles.text}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#272D69' }} onPress={onSignInClick}>
                        <Text style={styles.text}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(26, 26, 28)',
        flex: 1
    },
    textWelcome: {
        color: 'blue',
        alignSelf: null
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: '900',
        fontSize: 18
    },
    btnContainer: {
        flex: 1,
        // marginTop: '70%',
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: '90%',
        height: '18%',
        backgroundColor: '#EE5859',
        borderRadius: 30,
        marginVertical: 10,
        paddingVertical: 12,
        elevation: 200,
    }
})

export default AuthPage;