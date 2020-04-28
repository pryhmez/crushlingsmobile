import React from 'react';
import { Keyboard, View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import FloatingLabelTextInput from './helpers.js/FloatingLabelTextInput';
import { connect } from 'react-redux';
import { addUser, signInUser } from '../actions/user'
import Ionicons from 'react-native-vector-icons/Ionicons';


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            textentry: true,
            icon: "ios-eye",
            emailErr: '',
            passErr: ''
        }
    }

    managePasswordVisibility = () => {
        (this.state.textentry) ? this.setState({ icon: "ios-eye-off" }) : this.setState({ icon: "ios-eye" })
        this.setState({ textentry: !this.state.textentry });
    }

    SignInUser = () => {
        Keyboard.dismiss
        this.props.signInUser('queen@gmail.com', '123123123');
        // this.props.navigation.navigate('')
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
                    <View style={styles.mainContainer}>
                        <View >
                            <Text style={styles.headerTxt}>Sign in</Text>
                        </View>
                        <View style={{ marginTop: '17%' }}>
                            {/* <TextInput style={styles.inputBox}
                                autoFocus
                                onChangeText={(email) => this.setState({ email })}
                                underlineColorAndroid='#A49B95'
                                placeholder="Email"
                                secureTextEntry={false}
                                keyboardType={"visible-password"}
                                placeholderTextColor="#403F45"
                                autoCapitalize='false'
                                ref={(input) => this.email = input}
                            /> */}
                            <FloatingLabelTextInput
                                label='Email'
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                                style={{...styles.inputBox, backgroundColor: 'green'}}
                            />
                            {this.state.emailErr !== '' && <Error message={this.state.emailErr} />}


                            <View style={{ ...styles.inputBox, marginTop: '3.4%' }}>
                                {/* <TextInput style={styles.inputBox}
                                    autoFocus
                                    onChangeText={(password) => this.setState({ password })}
                                    underlineColorAndroid='#A49B95'
                                    placeholder="Password"
                                    secureTextEntry={this.state.textentry}
                                    placeholderTextColor="#403F45"
                                    autoCapitalize='false'
                                    ref={(input) => this.password = input}
                                /> */}
                                <FloatingLabelTextInput
                                    label='Password'
                                    value={this.state.password}
                                    secureTextEntry={this.state.textentry}
                                    onChangeText={(password) => this.setState({ password })}
                                    style={styles.inputBox}
                                />

                                <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>

                                    <Ionicons name={this.state.icon} color='white' size={20} style={styles.btnImage} />
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end' }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                <Text style={styles.text}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.SignInUser}>
                                <Text style={styles.SignUpText}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{ alignSelf: 'center', flexDirection: 'row', marginBottom: 15 }} onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles.text}>Dont't have an account? </Text>
                                <Text style={{ ...styles.text, fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

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
    text: {
        color: 'white'
    },
    headerTxt: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white'
    },
    appBarContainer: {
        backgroundColor: 'transparent',
        height: 49,
        justifyContent: 'center',
    },
    backBtn: {
        marginLeft: 14
    },
    inputBox: {
        width: '100%',
        fontSize: 16,
        color: '#403F45',
    },
    visibilityBtn: {
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 5,
        alignSelf: 'baseline'
    },
    btnImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        marginTop: 13
    },
    btn: {
        width: '100%',
        height: '17%',
        marginTop: '10%',
        backgroundColor: '#EE5859',
        borderRadius: 30,
        marginVertical: 10,
        paddingVertical: 12,
        elevation: 200,
        justifyContent: 'center'
    },
    SignUpText: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: '900',
        fontSize: 15
    },
})

const mapStateToProps = (state) => {
    return ({
        name: "isaac"
    })
}

export default connect(mapStateToProps, { signInUser })(SignIn)