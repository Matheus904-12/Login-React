import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

export default function Sucesso({navigation}) {
    return (

        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro Realizado!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <View style={styles.mensagem}>
                    <Image source={require('../assets/sucesso.gif')}
                        style={styles.logo}
                    />
                    <Text style={styles.mensagemTexto}>
                        Seja Bem-Vindo(a)!
                    </Text>
                </View>
            </Animatable.View>
        </View>
            )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
        alignItems:"center"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    voltar: {
        paddingTop: 25
    },
    logo:{
        width:300,
        height:300
    },
    mensagem:{
        flexDirection:"column",
        alignItems:"center",
        paddingTop:40
    },
    mensagemTexto:{
        width:300,
        textAlign:"center",
        fontSize:18,
        fontWeight:'700'
    },
    voltar:{
        backgroundColor: '#880000',
        width:270,
        height:40,
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15
    },
    voltarTexto:{
        color:'white',
        fontSize:16
    }
})