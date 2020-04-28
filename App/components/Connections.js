import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Connections = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello from Connections</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#22383E',
        flex: 1
    },
    text: {
        color: 'white'
    }
})

export default Connections;