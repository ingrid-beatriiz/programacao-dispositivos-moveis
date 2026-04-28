import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, Card, Text, Button, Avatar } from 'react-native-paper';
import { router } from 'expo-router';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Showcase de UI" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Card style={styles.card}>
          <Card.Title
            title="Componente Card"
            subtitle="React Native Paper"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content style={styles.content}>
            <Text variant="titleLarge">Design Consistente</Text>
            <Text variant="bodyMedium">
              Cards são componentes eficientes para agrupar informações e ações contextuais em um único bloco.
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button onPress={() => {}}>Cancelar</Button>
            <Button mode="contained" onPress={() => router.push('/details')}>
              Ver Detalhes
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scroll: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  content: {
    marginBottom: 16,
    gap: 8,
  }
});