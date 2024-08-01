import React, { useState } from "react";
import { View, TextInput, Text } from 'react-native'

export default (props:any) => {
    const [name, setName ] = useState('teste')
    return (
        <View>
            <Text>{name}</Text>
            <TextInput 
                placeholder="Nome da Receptora"
                value={name}
                onChangeText={(name => setName(name))}
            />
        </View>
    )
}