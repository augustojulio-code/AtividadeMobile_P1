import React, { useState } from 'react';
import { render } from 'react-dom';
import { Text, StyleSheet, View, Modal, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function home() {

    const [visivel, setvisivel] = useState(false);
    let [tarefaid, settarefaID] = useState(0);
    let [titulo, settitulo] = useState(0);
    let [desc, setdesc] = useState(0);
    const [campoEdit, setcampoEdit] = useState(false);
    const [visivel02, setvisivel02] = useState(false);

    function rederizar(index, index2, index3) {

        settarefaID(index3);
        settitulo(index);
        setdesc(index2);
        setvisivel(true);

    }

    function adicionarTarefa() {

        if (titulo.trim() != '' || desc.trim() != '') {
            const dados = {
                id: String(new Date().getTime()),
                titulo: titulo,
                desc: desc
            };

            setlistatarefa((oldState) => [...oldState, dados]);
            settitulo('');
            setdesc('');
            setvisivel02(false)
        }
        else {
            alert('Digite uma Tarefa');
            setvisivel02(false)
        }


    }

    function deletarTarefa(itemid) {

        console.log('id tarefa:' + itemid);

        let novastarefas = [...listatarefa];

        novastarefas = novastarefas.filter((it, i) => {
            if (i != itemid) {
                return true;
            }
            else {
                return false;
            }
        });

        setlistatarefa(novastarefas);

    }

    let [listatarefa, setlistatarefa] = useState([

    ]);

    return (
        <View>

            <Text style={estilo.tituloPrincipal}>ToDo List</Text>

            <Modal
                animationType='slide'
                transparent={true}
                visible={visivel02}>

                <View style={estilo.modal}>

                    <TextInput
                        placeholder='Titulo'
                        //editable={campoEdit}
                        style={estilo.testo}
                        onChangeText={settitulo}>

                    </TextInput>

                    <TextInput
                        placeholder='Nota'
                        //editable={campoEdit}
                        style={estilo.testo}
                        onChangeText={setdesc}>

                    </TextInput>

                    <View style={estilo.botaoview} >

                        <TouchableOpacity
                            style={estilo.botao}
                            onPress={adicionarTarefa}                            >
                            <Text style={estilo.testo}>+</Text>

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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 15 }}>

                            <Text onPress={() => rederizar(item.titulo, item.desc, item.id)}>{item.titulo}</Text>
                            <TouchableOpacity onPress={() => deletarTarefa(item.id)}>
                                <Ionicons name="md-checkmark-circle" size={30} color="green" />
                            </TouchableOpacity>

                        </View>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={visivel}>

                            <View style={estilo.modal}>

                                <TextInput
                                    placeholder={titulo}
                                    editable={campoEdit}
                                    style={estilo.testo}>

                                </TextInput>

                                <TextInput
                                    placeholder={desc}
                                    editable={campoEdit}
                                    style={estilo.testo}>

                                </TextInput>

                                <View style={estilo.botaoview} >

                                    <TouchableOpacity
                                        style={estilo.botao}
                                        onPress={() => { setcampoEdit(true) }}>
                                        <Text style={estilo.testo}>Edit</Text>

                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={estilo.botao}
                                        onPress={() => { setvisivel(false) }}>
                                        <   Text style={estilo.testo}>Voltar</Text>

                                    </TouchableOpacity>

                                </View>

                            </View>

                        </Modal>
                    </View>

                )}
            ></FlatList>

            <View style={estilo.rodape}>

                <TouchableOpacity
                    style={estilo.botao}
                    onPress={() => { setvisivel02(true) }}>
                    <Text style={estilo.testo}>+</Text>
                </TouchableOpacity>

            </View>


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
    },
    tituloPrincipal: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    rodape: {
        alignItems: 'left',
        position: 'relative',
        bottom: 0

    }


});