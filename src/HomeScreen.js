import React, { Component } from 'react'
import { Text, View } from 'react-native'

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => this.props.navigation.navigate('Profile')} > HomeScreen </Text>

            </View>
        )
    }
}

export default HomeScreen
