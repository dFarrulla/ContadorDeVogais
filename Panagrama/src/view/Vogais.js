import {React, useState} from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import {Check} from '../engines/Vogais';

export const Vogais = () => {
    const[p, setP] = useState("");
    return (
        <View>
            <Text>Vogais</Text>
            <TextInput
                placeholder="informe n"
                onChangeText={palavra => setP(Check(palavra))}
            />
            <Text>{p}</Text>
        </View>
    );
};