import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableHighlight, TouchableOpacity, StatusBar, Image, Modal, Pressable, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function FPSGProfile() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [tempName, setTempName] = useState('Adryel Lira');
    const [name, setName] = useState('Adryel Lira');

    const saveName = () => {
        setName(tempName);
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#121212', '#866D75',]}
                start={{ x: 0, y: 0.9 }}
                end={{ x: 0, y: 0 }}
                style={styles.background}
            >
                <AntDesign name="ellipsis1" size={26} color="white" style={{ marginTop: StatusBar.currentHeight, alignSelf: 'flex-end' }} />

                <View style={{ alignSelf: 'center', alignItems: 'center', width: '100%', marginBottom: 25 }}>
                    <Image
                        source={require('../../assets/profile.jpg')}
                        style={{ width: 150, height: 150, borderRadius: 100, backgroundColor: 'gray' }}
                    />
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>{name}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 6, width: 110, borderRadius: 65, alignItems: 'center', backgroundColor: 'rgba(100, 100, 100, 0.4)' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignSelf: 'center' }}>
                    <View style={styles.follow}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>76</Text>
                        <Text style={{ color: '#A5A4A5', fontWeight: '600' }}>SEGUIDORES</Text>
                    </View>
                    <View style={styles.follow}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>76</Text>
                        <Text style={{ color: '#A5A4A5', fontWeight: '600' }}>SEGUIDORES</Text>
                    </View>
                </View>
            </LinearGradient>

            <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', paddingLeft: 18, marginBottom: 13 }}>Playlists</Text>

            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/Home/Head/i1.png')}
                            style={styles.box}
                        />
                        <View style={styles.boxName}>
                            <Text style={styles.title}>Trabalho</Text>
                            <Text style={styles.likes}>0 curtidas</Text>
                        </View>
                    </View>
                    <Entypo name="chevron-thin-right" size={26} color="white" />
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/Home/Head/i1.png')}
                            style={styles.box}
                        />
                        <View style={styles.boxName}>
                            <Text style={styles.title}>Trabalho</Text>
                            <Text style={styles.likes}>0 curtidas</Text>
                        </View>
                    </View>
                    <Entypo name="chevron-thin-right" size={26} color="white" />
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/Home/Head/i1.png')}
                            style={styles.box}
                        />
                        <View style={styles.boxName}>
                            <Text style={styles.title}>Trabalho</Text>
                            <Text style={styles.likes}>0 curtidas</Text>
                        </View>
                    </View>
                    <Entypo name="chevron-thin-right" size={26} color="white" />
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={[styles.options, { height: 40 }]}>
                    <Text style={{ fontSize: 17, color: 'white' }}>Ver todas as 5 playlists</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>

            <Modal
                visible={modalVisible}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, backgroundColor: '#121212', padding: 18, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} activeOpacity={0.5}>
                                <AntDesign name="close" size={30} color="white" style={{ width: 56 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 19, fontWeight: '600' }}>Editar perfil</Text>
                            <Pressable onPress={saveName}>
                                <Text style={{ color: tempName === name ? '#A5A4A5' : 'white', fontSize: 19, width: 56 }}>Salvar</Text>
                            </Pressable>

                        </View>
                        <Image
                            source={require('../../assets/profile.jpg')}
                            style={{ width: 150, height: 150, borderRadius: 150, marginVertical: 35 }}
                        />
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', paddingBottom: 10, borderBottomWidth: 0.6, borderColor: '#A5A4A5', width: '100%' }}>
                            <Text style={{ color: 'white', fontSize: 21, fontWeight: '700', marginRight: 25 }}>Nome</Text>
                            <TextInput
                                value={tempName}
                                onChangeText={setTempName}
                                placeholder="Seu nome"
                                placeholderTextColor={'#A5A4A5'}
                                style={{ color: 'white', fontSize: 18, width: '100%' }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',

    },
    background: {
        width: '100%',
        height: '50%',
        padding: 18,
        justifyContent: 'space-between'
    },
    follow: {
        alignItems: 'center'
    },
    options: {
        width: '100%',
        height: 70,
        marginVertical: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18
    },
    box: {
        width: 60,
        height: 60,
        backgroundColor: 'gray'
    },
    boxName: {
        marginLeft: 13,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    likes: {
        color: '#A5A4A5',
        fontWeight: '600',
    }
})