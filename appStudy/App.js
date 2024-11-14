import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/contexts/AuthContext';
import { ProvedorCartoesEstudo } from './src/contexts/CartoesEstudoContext';
import { useContext } from 'react';
import { AuthContext } from './src/contexts/AuthContext';
import ListaCartaoScreen from './src/screens/ListaCartaoScreen';
import EdicaoCartaoScreen from './src/screens/EdicaoCartaoScreen';
import TarefasVencimentoProximoScreen from './src/screens/TarefasVencimentoProximoScreen';
import LoginScreen from './src/screens/LoginScreen'; // Adicione o LoginScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        // Retorne um componente de carregamento se necessário
        return null;
    }

    return (
        <Stack.Navigator initialRouteName={user ? 'EdicaoCartao' : 'Login'}>
            {user ? (
                <>
                    <Stack.Screen name="ListaCartao" component={ListaCartaoScreen} options={{ title: 'Cartões de Estudo' }} />
                    <Stack.Screen name="EdicaoCartao" component={EdicaoCartaoScreen} options={{ title: 'Editar Cartão' }} />
                    <Stack.Screen name="TarefasVencimentoProximo" component={TarefasVencimentoProximoScreen} options={{ title: 'Tarefas a Vencer' }} />
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
            )}
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <ProvedorCartoesEstudo>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </ProvedorCartoesEstudo>
        </AuthProvider>
    );
};

export default App;