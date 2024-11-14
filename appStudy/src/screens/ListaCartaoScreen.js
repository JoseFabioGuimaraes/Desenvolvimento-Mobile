import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useContext } from 'react';
import CartoesEstudoContext from '../contexts/CartoesEstudoContext';

const ListaCartaoScreen = ({ navigation }) => {
    const { cartoes, excluirCartao } = useContext(CartoesEstudoContext);

    const cartoesAgrupadosPorStatus = (status) => cartoes.filter(cartao => cartao.status === status);

    const hoje = new Date();
    const cartoesVencimentoProximo = cartoes.filter(cartao => {
        const dataTermino = new Date(cartao.dataTermino);
        const diferencaDias = (dataTermino - hoje) / (1000 * 60 * 60 * 24);
        return diferencaDias >= 0 && diferencaDias <= 15;
    });

    const confirmarExclusao = (id) => {
        Alert.alert(
            "Excluir Cartão",
            "Tem certeza que deseja excluir este cartão?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", onPress: () => excluirCartao(id), style: "destructive" }
            ]
        );
    };

    const renderizarCartao = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Data/Hora de Término: {new Date(item.dataTermino).toLocaleString()}</Text>
            <View>
                <Button title='Editar' onPress={() => navigation.navigate('EdicaoCartao', { id: item.id })} />
                <Button title='Deletar' onPress={() => confirmarExclusao(item.id)} color="#ff6347" />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.dueSoonButton} onPress={() => navigation.navigate('TarefasVencimentoProximo')}>
                <Text style={styles.dueSoonButtonText}>Tarefas a Vencer: {cartoesVencimentoProximo.length}</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Em Progresso</Text>
            <FlatList 
                data={cartoesAgrupadosPorStatus('in_progress')}
                keyExtractor={item => item.id.toString()}
                renderItem={renderizarCartao}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            <View style={styles.divider} />
            
            <Text style={styles.sectionTitle}>Concluído</Text>
            <FlatList 
                data={cartoesAgrupadosPorStatus('done')}
                keyExtractor={item => item.id.toString()}
                renderItem={renderizarCartao}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            <View style={styles.divider} />
            
            <Text style={styles.sectionTitle}>Backlog</Text>
            <FlatList 
                data={cartoesAgrupadosPorStatus('backlog')}
                keyExtractor={item => item.id.toString()}
                renderItem={renderizarCartao}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('EdicaoCartao')}>
                <Text style={styles.addButtonText}>+ Adicionar Novo Cartão</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f0f4f8',
    },
    dueSoonButton: {
        backgroundColor: '#ff4500',
        padding: 15,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    dueSoonButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        margin: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        minWidth: 200,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    addButton: {
        backgroundColor: '#32cd32',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    divider: {
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});

export default ListaCartaoScreen;