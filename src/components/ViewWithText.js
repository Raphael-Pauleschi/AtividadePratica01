import React from 'react';
import { View, Image, Text } from 'react-native';
import Style from './Style';

const ViewWithText = () => {
    return (
        <View>
            <Text style={Style.bigText}>Tinkaton</Text>
            <Image style={Style.smallImage} source={require('../../assets/Tinkaton.png')} />
        </View>
    )
}

export default ViewWithText;