import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor="#1a1a1c" />

            <Text>Hello from {props.name}</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return ({
        name: "isaac"
    })
}

export default connect(mapStateToProps)(Home);