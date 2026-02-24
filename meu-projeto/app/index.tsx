import React from 'react';
import { Text, View } from "react-native";
import {StyleSheet, TextInput} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Digite a sua idade');
  const [number, onChangeNumber] = React.useState('');

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Estou Criando Conteúdo</Text>
      <Text>Aula de Front</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Seu ano de nascimento"
          keyboardType="numeric"
        />
    </View>
  );
}
export default TextInputExample;


