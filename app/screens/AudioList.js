//import liraries rnfc SHORTCUT
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, SafeAreaView,TouchableHighlight,ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

import {Entypo} from '@expo/vector-icons';
// https://oblador.github.io/react-native-vector-icons/


const image = { uri: "https://live.staticflickr.com/65535/50908787351_9088ef09a2_z.jpg%22" };



const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between', //maximize distance between rows
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    text: {
        fontSize: 16,
        color: 'white'
    },
    seperator: {
       backgroundColor: "#E2E2E2",
       height: StyleSheet.hairlineWidth,
       marginLeft: 20 ,
       borderBottomColor: 'black',
        borderBottomWidth: 1,
        
    },
    header: {
         textAlign: "center",
         padding: 10,
         fontSize: 50,
         color: 'white',
    },container: {
        flex: 1,
        //justifyContent: "center",
       // paddingHorizontal: 10
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
      countContainer: {
        alignItems: "center",
        padding: 10,
      },
      countText: {
        color: "#FF00FF"
      }, image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }


});

// create a component
const AudioList = () => {

    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);
    const [sound, setSound] = React.useState();
 // SOUND 1
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/fire2.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }
 // SOUND 2 
    async function playSound1() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/shams.m4a')
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
        <View style = {styles.container}>
        <ImageBackground source={image} style={styles.image}>

        <SafeAreaView >
                <View>
                    <Text style = {styles.header}>
                    Welcome 
                    </Text>
                </View>
                <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here for nothing to happen</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>
            
        {/* {count ? count : null} */}
        </Text>
      </View>

            
            <TouchableOpacity style = {styles.row} onPress={() => alert("Hey there!")}>
                <Text style = {styles.text}>
                    Mehdi
                </Text>
                <Entypo name ="instagram" size={20} color='white' />
                
            </TouchableOpacity>

            <View style={styles.separator} />

            <TouchableOpacity style = {styles.row} onPress ={() => playSound()}>
                <Text style = {styles.text}>
                    Shams
                </Text>
            </TouchableOpacity>

            <View style={styles.separator} />


            <TouchableOpacity style = {styles.row} onPress ={() => playSound1()}>
                <Text style = {styles.text}>
                    Bo tony
                </Text>
            </TouchableOpacity>

            <View style={styles.separator} />

            <TouchableOpacity style = {styles.row} >
                <Text style = {styles.text}>
                    Suprize
                </Text>
            </TouchableOpacity>

            <View style={styles.separator} />
           
        </SafeAreaView>
        </ImageBackground>
        </View>
    );
};





//make this component available to the app
export default AudioList;
