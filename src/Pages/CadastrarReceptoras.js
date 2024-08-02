import React, {useState} from "react";
import { Text, TextInput, View, Button, TouchableOpacity } from "react-native";

//import DatePicker from '../../node_modules/@react-native-community/datetimepicker'

import style from "../components/style";


export const newReceiverName = ''
export const newReceiverBreed = ''
export const newReceiverDate = ''

export default (props) => {
    const [newReceiverName, setName] = useState(newReceiverName)
    const [newReceiverBreed, setBreed] = useState(newReceiverBreed)

    return (
        <View style={style.menu}>
            <View style={style.divTitle}>
                <Text style={style.titleText}>Cadastro de Receptora</Text>
            </View>
            <View style={style.content}>
            <Text style={style.label}>Nome:</Text>
            <TextInput 
                placeholder="Nome da Receptora"
                value={newReceiverName}
                style={style.input}
                onChangeText={(newReceiverName => setName(newReceiverName))}
            />
        <Text style={style.label}>Raça:</Text>
        <TextInput 
            placeholder="Raça da Receptora"
            value={newReceiverBreed}
            style={style.input}
            onChangeText={(newReceiverBreed => setBreed(newReceiverBreed))}
        />
        
        <Text style={style.label}>Data de Nascimento:</Text>
        <View >
            <TouchableOpacity style={style.button} onPress={() => alert(`Salvo com sucesso!`)}>
                <Text style={style.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
        
        </View>

        </View>
    )
}