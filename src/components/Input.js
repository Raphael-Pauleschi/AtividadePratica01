import React from 'react'
import { SafeAreaView, TextInput } from 'react-native'

const Input = () => {
    const [text, onChangeText] = React.useState('Texto inutil');
    const [number, onChangeNumber] = React.useState('');

    <SafeAreaView>
        <TextInput
            value={text}
            onChangeText={onChangeText}
        />
        <TextInput
            value={number}
            onChangeText={onChangeNumber}
            keyboardType="numeric" />
    </SafeAreaView>
}

export default Input;