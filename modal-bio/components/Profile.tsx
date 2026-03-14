import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/foto-ingrid.jpg')}
        style={styles.image} 
      />
      
      <Text style={styles.name}>Ingrid Beatriz</Text>
      
      <Text style={styles.bio}>
        Estudante de tecnologia e estagiária em desenvolvimento no Banco Bradesco.
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/modal')} 
      >
        <Text style={styles.buttonText}>Ver mais detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#006064',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});