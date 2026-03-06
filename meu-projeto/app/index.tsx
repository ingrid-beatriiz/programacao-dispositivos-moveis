import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anoNascimento, setAnoNascimento] = useState('');

  useEffect(() => {
    calcularAno();
  }, [idade, dia, mes]);

  const calcularAno = () => {
  
    if (idade !== '') {
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate();

      let anoCalculado = anoAtual - parseInt(idade);

      if (mes !== '') {
        const mesNascimento = parseInt(mes);
        const diaNascimento = dia !== '' ? parseInt(dia) : 1; 

        if (
          mesAtual < mesNascimento || 
          (mesAtual === mesNascimento && diaAtual < diaNascimento)
        ) {
          anoCalculado--;
        }
      }

      setAnoNascimento(anoCalculado.toString());
    } else {
      setAnoNascimento(''); 
    }
  };

  return (

    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Calculadora de Ano de Nascimento</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Idade:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Ex: 25"
              value={idade}
              onChangeText={setIdade}
              maxLength={3}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Dia de Nascimento:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Ex: 15"
              value={dia}
              onChangeText={setDia}
              maxLength={2}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mês de Nascimento (1-12):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Ex: 8"
              value={mes}
              onChangeText={setMes}
              maxLength={2}
            />
          </View>

          {anoNascimento !== '' && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Ano de Nascimento:</Text>
              <Text style={styles.resultValue}>{anoNascimento}</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 40,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 18,
    color: '#006064',
  },
  resultValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00838f',
    marginTop: 8,
  },
});