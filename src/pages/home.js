import React, { useState } from 'react';
import { render } from 'react-dom';
import { Text, StyleSheet, View, Modal, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function home() {

    const [visivel, setvisivel] = useState(false);
    let [titulo, settitulo] = useState(0);
    let [desc, setdesc] = useState(0);
    const [campoEdit, setcampoEdit] = useState(false);
    const [visivel02, setvisivel02] = useState(false);

    function rederizar(index, index2) {

        settitulo(index);
        setdesc(index2);
        setvisivel(true);

    }

    let [listatarefa, setlistatarefa] = useState([
        {
            id: 0,
            titulo: 'Despertador',
            desc: 'Acordar cedo'
        },
        {
            id: 1,
            titulo: 'Teste2',
            desc: 'descrição teste'
        },
        {
            id: 2,
            titulo: 'Teste333',
            desc: 'descrição teste225'
        },
        {
            id: 3,
            titulo: 'Teste55847',
            desc: 'descrição sjhdkjsahdkjsahd'
        }

    ]);

    return (
        <View>

            <Text>Hello Word</Text>
            <TouchableOpacity
                style={estilo.botao}
                onPress={() => { setvisivel02(true) }}>
                <Text style={estilo.testo}>+</Text>
            </TouchableOpacity>

            <Modal
                animationType='slide'
                transparent={true}
                visible={visivel02}>

                <View style={estilo.modal}>

                    <TextInput
                        placeholder='Titulo'
                        //editable={campoEdit}
                        style={estilo.testo}>

                    </TextInput>

                    <TextInput
                        placeholder='Nota'
                        //editable={campoEdit}
                        style={estilo.testo}>

                    </TextInput>

                    <View style={estilo.botaoview} >

                        <TouchableOpacity
                            style={estilo.botao}                            >
                            <Text style={estilo.testo}>+git pull</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={estilo.botao}
                            onPress={() => { setvisivel02(false) }}>
                            <Text style={estilo.testo}>Voltar</Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>


            <FlatList
                data={listatarefa}
                keyExtractor={(item) => item.id}
                renderItem={(({ item }) =>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text onPress={() => rederizar(item.titulo, item.desc)}>{item.titulo}</Text>

                        </View>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={visivel}>

                            <View style={estilo.modal}>
                                <Text style={estilo.testo}> {titulo}</Text>
                                <Text style={estilo.testo}>{desc}</Text>

                                <TextInput
                                    placeholder={titulo}
                                    editable={campoEdit}
                                    style={estilo.testo}>

                                </TextInput>

                                <View style={estilo.botaoview} >

                                    <TouchableOpacity
                                        style={estilo.botao}
                                        onPress={() => { setcampoEdit(true) }}>
                                        <Text style={estilo.testo}>Bo</Text>

                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={estilo.botao}
                                        onPress={() => { setvisivel(false) }}>
                                        <   Text style={estilo.testo}>Botão</Text>

                                    </TouchableOpacity>

                                </View>

                            </View>

                        </Modal>
                    </View>

                )}
            ></FlatList>

        </View>

    );

}

const estilo = StyleSheet.create({
    modal: {
        backgroundColor: '#F8C1BA',
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10
    },

    testo: {
        color: '#FFF',

    },

    campo: {
        backgroundColor: '#000'
    },

    botao: {
        backgroundColor: '#1AB23C',
        borderRadius: 20,
        height: 30,
        width: 30,
        margin: 5,
        alignItems: 'center'

    },
    botaoview: {
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',





    }


});