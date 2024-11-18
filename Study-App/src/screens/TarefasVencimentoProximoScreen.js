import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import CartoesEstudoContext from '../contexts/CartoesEstudoContext'

const TarefasVencimentoProximoScreen = () => {

    const { cartoes } = useContext(CartoesEstudoContext)

    const hoje = new Date()
    const cartoesVencimentoProximo = cartoes.filter(cartao => {
        const dataTermino = new Date(cartao.dataTermino)
        const diferencaDias = (dataTermino - hoje) / (1000 * 60 * 60 * 24)
        return diferencaDias >= 0 && diferencaDias <= 15
    })

    const renderizarCartao = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Data/Hora de Término: {new Date(item.dataTermino).toLocaleString()}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tarefas a Vencer nos Próximos 15 Dias</Text>
            <FlatList
                data={cartoesVencimentoProximo}
                keyExtractor={item => item.id.toString()}
                renderItem={renderizarCartao}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f8ff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
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
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default TarefasVencimentoProximoScreen;
