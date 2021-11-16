import { Button, Text, View, StyleSheet } from "react-native";
import React, {useState, useEffect} from 'react';






const HomeScreen = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style = {{fontSize:40}}>Home Screen</Text>
           {

            tweetData.map( tweet => (
                <Text key= { tweet.id }> {tweet.tweet_text}</Text>
            ))

           }
            
        </View>
    );
}


export default HomeScreen