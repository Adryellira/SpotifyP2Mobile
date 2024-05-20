import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableHighlight, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

export default function FPSGSettings({route}) {
    const navigation = useNavigation();
    const { userName } = route.params || {userName: 'Adryel Lira'};
    

    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
                <View style={{ width: '100%', marginVertical: 45, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                         source={require('../../assets/profile.jpg')}
                         style={{ width: 70, height: 70, borderRadius: 35 }}
                        />
                        <View style={{ marginLeft: 15, alignSelf: 'flex-start' }}>
                            <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>{userName}</Text>
                            <Text style={{ color: '#A5A4A5', marginTop: 5 }}>Ver perfil</Text>
                        </View>
                    </View>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" style={{ right: 0 }} />
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Conta</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Economia de dados</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Idiomas</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Reprodução</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Conteúdo explícito </Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Dispositivos</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Carro</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Redes sociais</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Apertado')}>
                <View style={styles.options}>
                    <Text style={styles.textOptions}>Assistentes de voz e aplicativos</Text>
                    <Entypo name="chevron-thin-right" size={24} color="#A5A4A5" />
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    options: {
        width: '100%',
        height: 40,
        marginVertical: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18
    },
    textOptions: {
        fontSize: 17,
        color: 'white',
    }
})