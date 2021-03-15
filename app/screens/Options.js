//import liraries rnfc SHORTCUT
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';


const image = { uri: "https://reactjs.org/logo-og.png" };
// create a component
const Options = () => {
    return (
       
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
          }
});

//make this component available to the app
export default Options;
