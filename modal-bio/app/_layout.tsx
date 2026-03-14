import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Tela inicial padrão */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      
      {/* Aqui é onde a mágica do modal acontece conforme a documentação */}
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'transparentModal', // Fundo semi-transparente
          animation: 'fade', // Efeito suave ao abrir
          headerShown: false, // Esconde o cabeçalho
        }}
      />
    </Stack>
  );
}