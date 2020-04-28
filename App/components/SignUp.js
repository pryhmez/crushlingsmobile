import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, View, TouchableOpacity, ScrollView } from 'react-native';
import PhoneVerification from './helpers.js/PhoneVerification';
import SignUpForm from './helpers.js/SignUpForm';
import Ionicons from 'react-native-vector-icons/Ionicons';


class SignUp extends React.Component {
    // const CELL_COUNT = 5;
    constructor(props) {
        super(props)
        this.state = {
            phone: ''
        }
    }

    setPhone = (phone) => {
        this.setState(() => ({ phone }))
        // console.warn('aergaweg')
    }
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#1a1a1c' }]}>

                <StatusBar barStyle="light-content" backgroundColor="#1a1a1c" />
                <View style={styles.container}>
                    <View style={styles.appBarContainer}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={'ios-arrow-round-back'} size={27} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    {this.state.phone
                        ?
                        <SignUpForm phone={this.state.phone}/>
                        :
                        <PhoneVerification cellcount={6} sendPhone={this.setPhone} />}
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1c',
        flex: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        width: '90%',
        alignSelf: 'center',
        marginTop: '3%'
    },
    headerTxt: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white',
        marginBottom: '6%'
    },
    appBarContainer: {
        backgroundColor: 'transparent',
        height: 49,
        justifyContent: 'center',
    },
    backBtn: {
        marginLeft: 14
    },
    root: { flex: 1, padding: 20 },
    title: { fontSize: 15, color: '#A49B95' },
    codeFiledRoot: { marginTop: 20, width: '100%' },
    cell: {
        width: 50,
        height: 60,
        lineHeight: 70,
        color: '#1a1a1c',
        fontSize: 30,
        borderWidth: 2,
        borderColor: '#A49B95',
        textAlign: 'center',
        borderRadius: 50,
        backgroundColor: 'transparent',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5
    },
    focusCell: {
        borderColor: '#19191B',
        backgroundColor: 'white'
    },
});

export default SignUp;