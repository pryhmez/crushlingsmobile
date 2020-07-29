import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, View, TouchableOpacity, ScrollView, TextInput, Picker, Keyboard } from 'react-native';
import { connect} from 'react-redux';
import { signUpUser} from '../../actions/user';
import Ionicons from 'react-native-vector-icons/Ionicons';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            gender: '',
            age: '',
            icon: "ios-eye",
            textentry: true,
            next: true
        }
    }


    managePasswordVisibility = () => {
        (this.state.textentry) ? this.setState({ icon: "ios-eye-off" }) : this.setState({ icon: "ios-eye" })
        this.setState({ textentry: !this.state.textentry });
    }

    SignUpUser = () => {
        Keyboard.dismiss
        let { firstName, lastName, gender, email, password} = this.state;
        this.props.signUpUser(firstName, lastName, gender, '44', email, this.props.phone, password);
    }


    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#1a1a1c' }]}>

                <StatusBar barStyle="light-content" backgroundColor="#1a1a1c" />
                {/* <View style={styles.container}>
                <View style={styles.appBarContainer}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name={'ios-arrow-round-back'} size={27} color={'white'} />
                    </TouchableOpacity>
                </View> */}

                <ScrollView style={{...styles.mainContainer, height: '100%'}}>
                    <View style={{ marginBottom: 2, height: '10%' }}>
                        <Text style={styles.headerTxt}>Sign Up</Text>
                        {/* <Text style={{...styles.title}}>Sign Up</Text>
                        <Text style={{...styles.title, color: 'white'}}>09035718125</Text> */}
                    </View>
                    <View>

                        <TextInput style={styles.inputBox}
                            // autoFocus
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='#A49B95'
                            placeholder="Your Email"
                            secureTextEntry={false}
                            keyboardType={"visible-password"}
                            placeholderTextColor="#403F45"
                            autoCapitalize='false'
                            ref={(input) => this.email = input}
                        />
                        {/* {this.state.emailErr !== '' && <Error message={this.state.emailErr} />} */}
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={{ ...styles.inputBox, flex: 1 }}
                                // autoFocus
                                onChangeText={(firstName) => this.setState({ firstName })}
                                underlineColorAndroid='#A49B95'
                                placeholder="First Name"
                                secureTextEntry={false}
                                keyboardType={"visible-password"}
                                placeholderTextColor="#403F45"
                                autoCapitalize='false'
                                ref={(input) => this.firstName = input}
                            />
                            <TextInput style={{ ...styles.inputBox, flex: 1 }}
                                // autoFocus
                                onChangeText={(lastName) => this.setState({ lastName })}
                                underlineColorAndroid='#A49B95'
                                placeholder="Last Name"
                                secureTextEntry={false}
                                keyboardType={"visible-password"}
                                placeholderTextColor="#403F45"
                                autoCapitalize='false'
                                ref={(input) => this.lastName = input}
                            />
                        </View>

                        <TextInput style={styles.inputBox}
                            // autoFocus
                            underlineColorAndroid='#A49B95'
                            placeholder="Phone"
                            secureTextEntry={false}
                            keyboardType={"visible-password"}
                            placeholderTextColor="#403F45"
                            editable={false}
                            value={this.props.phone}
                        // ref={(input) => this.state.lastName = input}
                        />


                        <Picker
                            selectedValue={this.state.gender}
                            supportedOrientations={['portrait', 'landscape']}
                            style={{ color: 'white', backgroundColor: 'transparenet' }}
                            itemStyle={{ color: 'red', backgroundColor: 'white' }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })} >
                            <Picker.Item label="Gender" value='male'/>
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />

                        </Picker>
                        <View style={{ ...styles.inputBox }}>
                            <TextInput style={styles.inputBox}
                                // autoFocus
                                onChangeText={(password) => this.setState({ password })}
                                underlineColorAndroid='#A49B95'
                                placeholder="Password"
                                secureTextEntry={this.state.textentry}
                                placeholderTextColor="#403F45"
                                autoCapitalize='false'
                                ref={(input) => this.password = input}
                            />

                            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>

                                <Ionicons name={this.state.icon} color='white' size={20} style={styles.btnImage} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ ...styles.inputBox }}>
                            <TextInput style={styles.inputBox}
                                // autoFocus
                                onChangeText={(password) => this.setState({ password })}
                                underlineColorAndroid='#A49B95'
                                placeholder="Password"
                                secureTextEntry={this.state.textentry}
                                placeholderTextColor="#403F45"
                                autoCapitalize='false'
                                ref={(input) => this.password = input}
                            />

                            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>

                                <Ionicons name={this.state.icon} color='white' size={20} style={styles.btnImage} />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end' }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                <Text style={styles.text}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.SignUpUser}>
                                <Text style={styles.SignUpText}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{ alignSelf: 'center', flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Text style={styles.text}>Already have an account? </Text>
                                <Text style={{ ...styles.text, fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>


                </ScrollView>
                {/* <KeyboardAvoidingView
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      style={styles.container}
    > */}

                {/* </View> */}
            </SafeAreaView>
        )
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
        marginTop: '1%',
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
    inputBox: {
        width: '100%',
        fontSize: 16,
        color: '#403F45',
        marginBottom: 10
    },
    visibilityBtn: {
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 5
    },
    btn: {
        width: '100%',
        height: '9%',
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
    text: {
        color: 'white'
    }
});

const mapStateToProps = (state) => {
    return ({
        name: "isaac"
    })
}


export default connect(mapStateToProps, {signUpUser})(SignUpForm);