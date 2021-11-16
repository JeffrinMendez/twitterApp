import { Button, Text, View, StyleSheet } from "react-native";
import React from 'react';



const tweetData = [
    { "id": 1, "user_id": 1, "tweet_text": "Hello World", "tweet_date": "2021-11-16T02:22:12.216915" },
     { "id": 2, "user_id": 1, "tweet_text": "Soy Hacker", "tweet_date": "2021-11-16T02:22:19.444136" },
      { "id": 3, "user_id": 1, "tweet_text": "Mamá estoy programando", "tweet_date": "2021-11-16T02:22:31.572241" },
  





]



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