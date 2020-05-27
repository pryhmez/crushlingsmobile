import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';



const FindPeople = (props) => {

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#1a1a1c' }]}>

            <StatusBar barStyle="light-content" backgroundColor="#1a1a1c" />
            <View style={styles.container}>
                <View style={styles.appBarContainer}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name={'ios-arrow-round-back'} size={27} color={'white'} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.headerText} >Find People</Text>
                    </View>
                </View>
                <View style={{ height: 25, backgroundColor: 'blue' }}>
                    <SearchBar
                        round
                        searchIcon={{ size: 24 }}
                        icon = {{type: 'Ionicons', color: '#86939e', name: 'ios-share' }}
                        // onChangeText={text => this.SearchFilterFunction(text)}
                        // onClear={text => this.SearchFilterFunction('')}
                        placeholder="Type Here..."
                        // value={this.state.search}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1c',
        flex: 1,
        margin: 5
    },
    appBarContainer: {
        backgroundColor: 'transparent',
        height: 49,
        flexDirection: "row"
    },
    headerText: {
        alignSelf: "center",
        fontSize: 20,
        color: "white"
    },
    backBtn: {
        marginLeft: 14,
    },
    text: {
        color: 'white'
    }
})

export default FindPeople;