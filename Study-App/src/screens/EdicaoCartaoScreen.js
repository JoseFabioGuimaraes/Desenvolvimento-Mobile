
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CartoesEstudoContext from '../contexts/CartoesEstudoContext';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from 'react-native-vector-icons';

const EdicaoCartaoScreen = ({ route, navigation }) => {
    const { id } = route.params || {};
    const { cartoes, adicionarCartao, atualizarCartao } = useContext(CartoesEstudoContext);
    const cartao = cartoes.find(c => c.id === id) || {};

    const [titulo, setTitulo] = useState(cartao.titulo || '');
    const [notas, setNotas] = useState(cartao.notas || '');
    const [status, setStatus] = useState(cartao.status || 'backlog');
    const [dataTermino, setDataTermino] = useState(cartao.dataTermino ? new Date(cartao.dataTermino) : new Date());
    const [mostraDataPicker, setMostraDataPicker] = useState(false);

    useEffect(() => {
        if (id) {
            setTitulo(cartao.titulo);
            setStatus(cartao.status);
            setNotas(cartao.notas);
            setDataTermino(new Date(cartao.dataTermino));
        }
    }, [id, cartao]);

    const salvar = () => {
        const dadosCartao = { titulo, notas, status, dataTermino: dataTermino.toISOString() };
        if (id) {
            atualizarCartao(id, dadosCartao);
        } else {
            adicionarCartao(dadosCartao);
        }
        navigation.goBack();
    };

    const exibirDataPicker = () => setMostraDataPicker(true);
    const ocultarDataPicker = () => setMostraDataPicker(false);
    const confirmarData = (data) => {
        setDataTermino(data);
        ocultarDataPicker();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título:</Text>
            <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} placeholder="Título do Cartão..." />

            <Text style={styles.label}>Notas:</Text>
            <TextInput style={styles.input} value={notas} onChangeText={setNotas} placeholder="Insira uma descrição..." multiline />

            <Text style={styles.label}>Data de Término:</Text>
            <TouchableOpacity style={styles.button} onPress={exibirDataPicker}>
                <MaterialIcons name="date-range" size={20} color="#ffffff" />
                <Text style={styles.buttonText}>Escolher Data</Text>
            </TouchableOpacity>
            <DateTimePickerModal isVisible={mostraDataPicker} mode="datetime" onConfirm={confirmarData} onCancel={ocultarDataPicker} />
            <Text style={styles.selectedDateLabel}>Data selecionada: {dataTermino.toLocaleDateString()}</Text>

            <Text style={styles.label}>Status:</Text>
            <Picker selectedValue={status} style={styles.input} onValueChange={(itemValue) => setStatus(itemValue)}>
                <Picker.Item label="Backlog" value="backlog" />
                <Picker.Item label="Em Progresso" value="in_progress" />
                <Picker.Item label="Concluído" value="done" />
            </Picker>

            <TouchableOpacity style={styles.saveButton} onPress={salvar}>
                <MaterialIcons name="save" size={20} color="#ffffff" />
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        borderColor: '#ddd',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 8,
    },
    saveButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32cd32',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
    },
    selectedDateLabel: {
        fontSize: 16,
        marginBottom: 15,
        color: '#555',
    },
});

export default EdicaoCartaoScreen;
