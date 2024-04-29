import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

export default function Acesso({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        verificarCadastro();
    }, []);

    const verificarCadastro = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData !== null) {
                navigation.navigate('sucedido');
            }
        } catch (error) {
            console.error('Erro ao verificar cadastro:', error);
        }
    };

    const acessar = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData !== null) {
                const { email: storedEmail, senha: storedSenha } = JSON.parse(userData);
                if (email === storedEmail && senha === storedSenha) {
                    navigation.navigate('sucedido');
                } else {
                    alert('Email ou senha incorretos.');
                }
            } else {
                alert('Não há cadastro.');
            }
        } catch (error) {
            console.error('Erro ao acessar dados:', error);
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>

                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Bem-vindo(a)</Text>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            placeholder='Digite um email...'
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                        />
                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='Sua senha'
                            style={styles.input}
                            onChangeText={text => setSenha(text)}
                        />
                        <TouchableOpacity style={styles.button} onPress={acessar}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('cadastro')}>
                            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('index')}>
                            <Ionicons size={32} name="chevron-back-outline" />
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        paddingEnd: "5%"
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
    }
})