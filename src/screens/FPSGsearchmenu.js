import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export default function FPSGSearchMenu() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ marginTop: StatusBar.currentHeight + 18, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/profile.jpg')}
                        style={{ width: 45, height: 45, borderRadius: 55 }}
                    />
                    <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', paddingLeft: 15 }}>Buscar</Text>
                </View>
                <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 5, marginVertical: 30 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.5} >
                        <Octicons name="search" size={26} color="black" />
                        <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 19, fontWeight: '700', marginLeft: 3 }}> O que você quer ouvir?</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginBottom: 14 }}>Navegar por todas as seções</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View style={[styles.sections, { backgroundColor: '#F037A5', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Músicas</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#148A08' }]}>
                        <Text style={styles.textSections}>Podcasts</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#1E3264', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Eventos ao vivo</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#8D67AB' }]}>
                        <Text style={styles.textSections}>Feito para você</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#E8115B', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Lançamentos</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#4100F5' }]}>
                        <Text style={styles.textSections}>Verão</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#A56752', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Brasil</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#BA5D07' }]}>
                        <Text style={styles.textSections}>Sertanejo</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#27856A', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>No carro</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#B49BC8' }]}>
                        <Text style={styles.textSections}>Paradas de podcast</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#4100F5', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Lançamentos de Podcasts</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#E61E32' }]}>
                        <Text style={styles.textSections}>Creators</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#F037A5', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Originais do Spotify</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#148A08' }]}>
                        <Text style={styles.textSections}>Paradas</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#1E3264', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Funk</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#8D67AB' }]}>
                        <Text style={styles.textSections}>Pop</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#E8115B', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Hip Hop</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#4100F5' }]}>
                        <Text style={styles.textSections}>Samba e pagode</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#A56752', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Descobrir</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#BA5D07' }]}>
                        <Text style={styles.textSections}>Rádio</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#27856A', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>MPB</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#B49BC8' }]}>
                        <Text style={styles.textSections}>AMPLIFIKA</Text>
                    </View>
                    <View style={[styles.sections, { backgroundColor: '#4100F5', marginRight: '3%', marginBottom: '3%' }]}>
                        <Text style={styles.textSections}>Dance/Eletrônica</Text>
                    </View>
                  
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 18
    },
    sections: {
        width: '48.5%',
        height: 100,
        borderRadius: 3,
        backgroundColor: 'rgba(150, 150, 150, 0.4)',
        flexDirection: 'row',
        padding: 7,
        paddingTop: 10
    },
    textSections: {
        fontSize: 19.5,
        color: 'white',
        fontWeight: '500',
        width: '75%'
    }
});