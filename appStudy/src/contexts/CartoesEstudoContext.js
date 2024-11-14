import React, { createContext, useState, useEffect, useContext } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { AuthContext } from './AuthContext'; // Importe o AuthContext

const CartoesEstudoContext = createContext();

export const ProvedorCartoesEstudo = ({ children }) => {
    const [cartoes, setCartoes] = useState([]);
    const { user } = useContext(AuthContext); // Verifique o usuário autenticado

    useEffect(() => {
        if (user) {
            carregarCartoes();
        }
    }, [user]);

    const carregarCartoes = async () => {
        try {
            const cartoesSnapshot = await getDocs(collection(db, 'cartoes'));
            const cartoesList = cartoesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCartoes(cartoesList);
            console.log('Cartões carregados do Firestore:', cartoesList);
        } catch (error) {
            console.error('Erro ao carregar cartões:', error);
        }
    };

    const adicionarCartao = async (cartao) => {
        try {
            const docRef = await addDoc(collection(db, 'cartoes'), cartao);
            const novoCartao = { id: docRef.id, ...cartao };
            setCartoes([...cartoes, novoCartao]);
            console.log('Cartão adicionado ao Firestore:', novoCartao);
        } catch (error) {
            console.error('Erro ao adicionar cartão:', error);
        }
    };

    const atualizarCartao = async (id, atualizacoes) => {
        try {
            const cartaoRef = doc(db, 'cartoes', id);

            const dataTerminoFormatada = atualizacoes.dataTermino instanceof Date
                ? atualizacoes.dataTermino.toISOString()
                : atualizacoes.dataTermino;

            await updateDoc(cartaoRef, { ...atualizacoes, dataTermino: dataTerminoFormatada });
            setCartoes(cartoes.map(cartao => (cartao.id === id ? { ...cartao, ...atualizacoes, dataTermino: dataTerminoFormatada } : cartao)));
            console.log('Cartão atualizado:', { id, ...atualizacoes, dataTermino: dataTerminoFormatada });
        } catch (error) {
            console.error('Erro ao atualizar cartão:', error);
        }
    };

    const excluirCartao = async (id) => {
        try {
            await deleteDoc(doc(db, 'cartoes', id));
            setCartoes(cartoes.filter(cartao => cartao.id !== id));
            console.log('Cartão excluído com ID:', id);
        } catch (error) {
            console.error('Erro ao excluir cartão:', error);
        }
    };

    return (
        <CartoesEstudoContext.Provider value={{ cartoes, adicionarCartao, atualizarCartao, excluirCartao }}>
            {children}
        </CartoesEstudoContext.Provider>
    );
};

export default CartoesEstudoContext;