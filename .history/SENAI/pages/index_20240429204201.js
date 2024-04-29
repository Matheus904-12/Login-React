import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function Bem_Vindo() {
    
    const navigation = useNavigation();

    const [fontsLoaded, fontError] = useFonts({
        'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }



    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={1000}
                    animation="flipInY"
                    source={require("../assets/logo_Senai.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <View style={styles.containerForm}>
                    <Text style={styles.title}>
                        Monitore e organize seus recursos didáticos de qualquer lugar!
                    </Text>
                    <Text style={styles.text}>
                        Faça o login para começar
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('entrada')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Acessar
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#880000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontFamily: 'Oswald',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 12,
        color: "#FFF"
    },
    text: {
        color: '#a1a1a1',
        paddingLeft: 80,
        paddingTop: 30,
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#880000',
        fontWeight: 'bold'
    }
})