import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>

        <Image 
          source={require('../assets/images/foto-ingrid.jpg')} 
          style={styles.image} 
        />
      <Text style={styles.name}>Ingrid Beatriz</Text>
      
      <Text style={styles.bio}>
        Estudante de tecnologia, estagiando em Desenvolvimento de Software Back-End no Banco Bradesco e atuando com desenvolvimento front-end em projeto PIBIC. Atualmente aprofundando os conhecimentos em React Native para a criação de soluções mobile.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#00838f',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    lineHeight: 24,
  },
});