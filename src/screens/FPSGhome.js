import React, { useState, useEffect, startTransition } from "react";
import { StatusBar, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons, Feather, AntDesign } from '@expo/vector-icons';

export default function FPSGHome() {
    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <LinearGradient
                    colors={['#121212', 'rgba(160, 160, 160, 1)',]}
                    start={{ x: 0, y: 0.65 }}
                    end={{ x: -0.2, y: 0 }}
                >
                    <View style={{ padding: 18, paddingTop: 45, marginTop: StatusBar.currentHeight, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
                        <Text style={{ fontSize: 24, color: 'white', fontWeight: '600' }}>Boa tarde</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '35%', justifyContent: 'space-between' }}>
                            <Feather name="bell" size={30} color="white" />
                            <Octicons name="history" size={25} color="white" />
                            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                                <AntDesign name="setting" size={31} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 18, paddingRight: 18 }}>
                        <View style={[styles.recents, { marginRight: '3%', marginBottom: '3%' }]}>
                            <Image
                                source={require('../../assets/Home/Head/i1.png')}
                                resizeMode="cover"
                                style={styles.imageHead}
                            />
                            <Text style={styles.textHead}>G-drake</Text>
                        </View>
                        <View style={styles.recents}>
                            <Image
                                source={require('../../assets/Home/Head/i2.png')}
                                resizeMode="cover"
                                style={styles.imageHead}
                            />
                            <Text style={styles.textHead}>Mix Justine Skye</Text>
                        </View>
                        <View style={[styles.recents, { marginRight: '3%', marginBottom: '3%' }]}>
                            <Image
                                source={require('../../assets/Home/Head/i3.png')}
                                resizeMode="cover"
                                style={styles.imageHead}
                            />
                            <Text style={styles.textHead}>Mix damso</Text>
                        </View>
                        <View style={styles.recents}>
                            <Image
                                source={require('../../assets/Home/Head/i4.png')}
                                resizeMode="cover"
                                style={styles.imageHead}
                            />
                            <Text style={styles.textHead}>Mix R&B</Text>
                        </View>
                        <View style={[styles.recents, { marginRight: '3%' }]}>
                            <Image
                                source={require('../../assets/Home/Head/i5.png')}
                                resizeMode="cover"
                                style={styles.imageHead}
                            />
                            <Text style={styles.textHead}>Mix Frank Ocean</Text>
                        </View>
                        <View style={styles.recents}>
                            <Image
                                source={require('../../assets/Home/Head/i6.png')}
                                resizeMode="cover"
                                style={styles.imageHead}
                            />
                            <Text style={styles.textHead}>lovaaholic</Text>
                        </View>
                    </View>
                </LinearGradient>


                <Text style={[styles.h1, { paddingLeft: 18 }]}>Episódios para você</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                    <Image
                        source={require('../../assets/Home/episodes.png')}
                    />
                </ScrollView>

                <Text style={[styles.h1, { paddingLeft: 18 }]}>Feito para Adryel</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                    <Image
                        source={require('../../assets/Home/dailymix.png')}
                    />
                </ScrollView>

                <Text style={[styles.h1, { paddingLeft: 18 }]}>Seus artistas favoritos</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                    <Image
                        source={require('../../assets/Home/artistasfav.png')}
                    />
                </ScrollView>

                <Text style={[styles.h1, { paddingLeft: 18 }]}>Seus mixes mais ouvidos</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                    <Image
                        source={require('../../assets/Home/mixesfav.png')}
                    />
                </ScrollView>

                <Text style={[styles.h1, { paddingLeft: 18 }]}>O melhor de cada artista</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.scroll, { marginBottom: 60 }]}>
                    <Image
                        source={require('../../assets/Home/bestartists.png')}
                    />
                </ScrollView>
            </ScrollView>

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
        height: '100%',
    },
    h1: {
        fontSize: 23,
        color: 'white',
        fontWeight: '800',
        marginVertical: 25
    },
    recents: {
        width: '48.4%',
        height: 60,
        borderRadius: 3,
        backgroundColor: 'rgba(150, 150, 150, 0.4)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageHead: {
        height: '100%',
        width: '35%',
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    textHead: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: '5%'
    },
    scroll: {
        paddingLeft: 18
    }
})