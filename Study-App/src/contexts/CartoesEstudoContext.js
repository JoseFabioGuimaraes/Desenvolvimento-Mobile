import React, { createContext, useState, useEffect, useContext } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { AuthContext } from './AuthContext';

const CartoesEstudoContext = createContext();

export const ProvedorCartoesEstudo = ({ children }) => {
    const [cartoes, setCartoes] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            carregarCartoes();
        }
    }, [user]);

    const carregarCartoes = async () => {
        try {
            const q = query(collection(db, 'cartoes'), where('uid', '==', user.uid)); 
            const cartoesSnapshot = await getDocs(q);
            const cartoesList = cartoesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCartoes(cartoesList);
        } catch (error) {
            console.error('Erro ao carregar cartões:', error);
        }
    };

    const adicionarCartao = async (cartao) => {
        try {
            const novoCartao = { ...cartao, uid: user.uid }; 
            
            const docRef = await addDoc(collection(db, 'cartoes'), novoCartao);
            setCartoes([...cartoes, { id: docRef.id, ...novoCartao }]);
            console.log('Cartão adicionado ao Firestore:', novoCartao);
        } catch (error) {
            console.error('Erro ao adicionar cartão:', error);
        }
    };

    const atualizarCartao = async (id, atualizacoes) => {
        try {
            const cartaoRef = doc(db, 'cartoes', id);
            await updateDoc(cartaoRef, atualizacoes);
            setCartoes(cartoes.map(cartao => (cartao.id === id ? { ...cartao, ...atualizacoes } : cartao)));
            console.log('Cartão atualizado:', { id, ...atualizacoes });
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