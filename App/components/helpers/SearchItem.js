
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const Item = (props) => {

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, backgroundColor: 'transparent',}}>
        <Image
          style={styles.pic}
          source={{
            uri:
              'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
      </View>
      <View style={{flex: 3, backgroundColor: 'transparent', margin: 5, marginLeft: 10 }}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{props.pic}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 70,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    marginRight: 10,
    marginLeft: 5,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.6,
    borderBottomColor: '#fff',
    alignContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default Item;