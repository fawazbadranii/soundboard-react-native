//import liraries rnfc SHORTCUT
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';

import {Entypo} from '@expo/vector-icons';
// https://oblador.github.io/react-native-vector-icons/



const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between' //maximize distance between rows
    },
    text: {
        fontSize: 16,
        color: "#343434"
    },
    seperator: {
       backgroundColor: "#E2E2E2",
       height: StyleSheet.hairlineWidth,
       marginLeft: 20 
    }

});

// create a component
const AudioList = () => {

    const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/fire2.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);



    return (
        <SafeAreaView>
            <TouchableOpacity style = {styles.row} onPress={() => alert("Hey there!")}>
                <Text style = {styles.text}>
                    Mehdi
                </Text>
                <Entypo name ="rss" size={20} color="#0000FF" />
                
            </TouchableOpacity>

            <View style={styles.separator} />

            <TouchableOpacity style = {styles.row} onPress ={() => playSound()}>
                <Text style = {styles.text}>
                    Ali
                </Text>
            </TouchableOpacity>

            <View style={styles.separator} />


            <TouchableOpacity style = {styles.row} >
                <Text style = {styles.text}>
                    Shamseen
                </Text>
            </TouchableOpacity>

            <View style={styles.separator} />

            <TouchableOpacity style = {styles.row} >
                <Text style = {styles.text}>
                    bob
                </Text>
            </TouchableOpacity>

            <View style={styles.separator} />

        </SafeAreaView>
    );
};





//make this component available to the app
export default AudioList;
