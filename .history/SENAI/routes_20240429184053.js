import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';

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
        </Stack.Navigator>
        )
} 