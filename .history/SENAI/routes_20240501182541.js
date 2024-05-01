import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';
import Sucesso from './pages/sucesso';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="index"
                component={Bem_Vindo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="entrada"
                component={Acesso}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="sucedido"
                component={Sucesso}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
} 