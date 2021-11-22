import React from 'react';
import { View, Text, Button } from "react-native";


const FeedScreen = ({ navigation, route }) => {
    // const { id, name } = route.params;
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> {itemId}{otherParam} </Text>
            {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.push('FeedScreen')}
        /> */}

            <Button title="Atras" onPress={() => navigation.goBack()} />
            <Button
                title="cargar otra ventana"
                onPress={() => navigation.push('FeedScreen')}
            />

        </View>
    );
}

export default FeedScreen;