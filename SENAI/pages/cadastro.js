import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const cadastrar = async () => {
        if (email && senha && cpf && telefone) {
            try {
                await AsyncStorage.setItem('userData', JSON.stringify({ email, senha, cpf, telefone }));
                navigation.navigate('sucedido');
            } catch (error) {
                console.error('Erro ao armazenar dados:', error);
            }
        } else {
            alert('Todos os campos são obrigatórios.');
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>

                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Cadastre-se!</Text>
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
                        <Text style={styles.title}>CPF</Text>
                        <TextInput
                            placeholder='Seu CPF'
                            style={styles.input}
                            onChangeText={text => setCpf(text)}
                        />
                        <Text style={styles.title}>Telefone</Text>
                        <TextInput
                            placeholder='Seu telefone'
                            style={styles.input}
                            onChangeText={text => setTelefone(text)}
                        />

                        <TouchableOpacity style={styles.button} onPress={cadastrar}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('entrada')}>
                            <Ionicons size={32} name="chevron-back-outline" />
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
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
        marginTop: 26,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 5,
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
    voltar: {
        paddingTop: 25
    }
});
