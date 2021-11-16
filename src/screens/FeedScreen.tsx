import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FeedScreen = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Feed Screen {itemId} {otherParam} </Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('FeedScreen')}
            />
        </View>
    );
}

export default FeedScreen;