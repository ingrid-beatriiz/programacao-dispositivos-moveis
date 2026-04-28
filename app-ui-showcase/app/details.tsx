import { View, StyleSheet } from 'react-native';
import { Appbar, List, Divider, Chip, FAB, Text } from 'react-native-paper';
import { router } from 'expo-router';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Detalhes do Kit" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Componentes Adicionais
        </Text>
        <View style={styles.chipContainer}>
          <Chip icon="information" onPress={() => {}}>Informativo</Chip>
          <Chip icon="star" mode="outlined" onPress={() => {}}>Destaque</Chip>
        </View>
        <List.Section>
          <List.Subheader>Elementos de Lista</List.Subheader>
          <List.Item
            title="Item Interativo"
            description="Exemplo de um item de lista com ícone"
            left={props => <List.Icon {...props} icon="star-circle" />}
          />
          <Divider />
          <List.Item
            title="Configurações"
            description="Componentes estruturados"
            left={props => <List.Icon {...props} icon="cog" />}
          />
        </List.Section>
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {}}
        label="Adicionar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  chipContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});