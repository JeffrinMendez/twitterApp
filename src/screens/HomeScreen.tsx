import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FeedScreen from './FeedScreen';


const HomeScreen = ({ navigation }) => {

  const [tweetsData, setTweetsData] = useState([])

  
  const getTweets = async  () => {

      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      
      const data = await resp.json()

      setTweetsData(data)

  }


  useEffect(() => {
      getTweets()
  }, [])


  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          
          <Text style={{ fontSize: 30 }}>Home Screen</Text>
          {
              tweetsData.map(tweet => (
                  <Text key={tweet.id}>{tweet.text}</Text>
              ))

          }
          <Button
                title="Go to FeedScreen"
                onPress={() => navigation.navigate('FeedScreen', {
                    itemId: TweetsData.
                    otherParam: 'anything you want here',
                  })}
            />
      </View>
  );
}

export default HomeScreen;
