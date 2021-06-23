import React, { Component } from 'react'
import { Text, View } from 'react-native'

class ImageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => this.props.navigation.navigate('Home')} > ImageScreen </Text>

            </View>
        )
    }
}

export default ImageScreen
