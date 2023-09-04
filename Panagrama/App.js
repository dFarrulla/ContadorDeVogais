import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Vogais() {
  const [word, setWord] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const countVowels = () => {
    // Converte a palavra para minúsculas para tratar maiúsculas e minúsculas da mesma forma
    const lowercaseWord = word.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;

    for (let i = 0; i < lowercaseWord.length; i++) {
      if (vowels.indexOf(lowercaseWord[i]) !== -1) {
        count++;
      }
    }

    setVowelCount(count);
  };

  return (
    <View style={styles.container}>
      <Text>Contador de Vogais</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma palavra"
        onChangeText={(text) => setWord(text)}
        value={word}
      />
      <Button title="Contar Vogais" onPress={countVowels} color="green"/>
      <Text>Número de vogais na palavra: {vowelCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    borderRadius: 30, // Adicione esta linha para criar bordas arredondadas
  },
});
