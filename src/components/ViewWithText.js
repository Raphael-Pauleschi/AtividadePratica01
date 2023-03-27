import React from 'react';
import {View, Text} from 'react-native';
import Style from './Style';

const ViewWithText = () =>{
    return (
        <View>
            <Text style={Style.bigText}>"Testema ?"</Text>
        </View>
    )
}

export default ViewWithText;