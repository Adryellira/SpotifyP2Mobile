import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar, TextInput, FlatList, Image, Pressable, TouchableHighlight, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons, AntDesign, Entypo } from '@expo/vector-icons';
import musicList from "./FPSGmusics";

export default function FPSGSearch() {
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMusicList, setFilteredMusicList] = useState(musicList);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            const filteredData = musicList.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.artist.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredMusicList(filteredData);
        } else {
            setFilteredMusicList(musicList);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container} >
                <View style={{ paddingTop: StatusBar.currentHeight + 12, backgroundColor: '#303030', paddingBottom: 0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 18, paddingVertical: 6, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#505050', width: '75%', padding: 5, paddingHorizontal: 9, justifyContent: 'space-between', alignItems: 'center', borderRadius: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Octicons name="search" size={18} color="#A5A4A5" />
                                <TextInput
                                    style={{ fontSize: 18, fontWeight: '400', marginLeft: 5, color: 'white' }}
                                    placeholder="O que você quer ouvir?"
                                    placeholderTextColor={'#A5A4A5'}
                                    value={searchQuery}
                                    onChangeText={handleSearch}
                                    onSubmitEditing={Keyboard.dismiss}

                                />
                            </View>
                            <Pressable onPress={() => setSearchQuery('')}>
                                <AntDesign name="close" size={24} color="#A5A4A5" />
                            </Pressable>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchMenu')} activeOpacity={0.6} style={{ width: '19%', marginRight: '1%', paddingVertical: 5 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: '600', fontSize: 17 }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal={true} showsVerticalScrollIndicator={false} overScrollMode='never' style={{ paddingVertical: 12, paddingHorizontal: 18 }}>
                        <View style={{ backgroundColor: '#16833A', padding: 5, paddingHorizontal: 16, borderRadius: 100, marginRight: 9, borderWidth: 1, borderColor: '#27C360' }}>
                            <Text style={styles.textFilter}>Melhores resultados</Text>
                        </View>
                        <View style={styles.boxFilter}>
                            <Text style={styles.textFilter}>Músicas</Text>
                        </View>
                        <View style={styles.boxFilter}>
                            <Text style={styles.textFilter}>Playlists</Text>
                        </View>
                        <View style={styles.boxFilter}>
                            <Text style={styles.textFilter}>Artisas</Text>
                        </View>
                        <View style={styles.boxFilter}>
                            <Text style={styles.textFilter}>Álbuns</Text>
                        </View>
                        <View style={styles.boxFilter}>
                            <Text style={styles.textFilter}>Podcasts e programas</Text>
                        </View>
                        <View style={[styles.boxFilter, { marginRight: 30 }]}>
                            <Text style={styles.textFilter}>Perfis</Text>
                        </View>
                    </ScrollView>

                </View>
                {searchQuery === '' ? (
                    <View style={{ alignSelf: 'center', marginTop: '65%' }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: '700', textAlign: 'center' }}>Encontre o que você quer ouvir</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 13.3, textAlign: 'center' }}>Busque artistas, músicas, podcasts e muito mais.</Text>
                    </View>
                ) : (
                    <FlatList
                        data={filteredMusicList}
                        style={{ marginTop: 9 }}
                        keyExtractor={(item) => item.id}
                        overScrollMode='never'
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableHighlight onPress={() => console.log('Apertado')}>
                                <View style={styles.itemContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            source={item.image}
                                            resizeMode="cover"
                                            style={styles.itemImage}
                                        />
                                        <View style={{ paddingVertical: 6, paddingLeft: 13 }}>
                                            <Text style={styles.itemTitle}>{item.title}</Text>
                                            <Text style={styles.itemArtist}>{item.artist}</Text>
                                        </View>
                                    </View>
                                    <Entypo name="chevron-thin-right" size={21} color="#A5A4A5" />
                                </View>
                            </TouchableHighlight>
                        )}
                    />
                )}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    boxFilter: {
        padding: 5,
        paddingHorizontal: 16,
        borderRadius: 100,
        marginRight: 9,
        borderWidth: 1,
        borderColor: '#A5A4A5'
    },
    textFilter: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },
    itemContainer: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingVertical: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemImage: {
        width: 55,
        height: 55,
    },
    itemTitle: {
        fontSize: 18,
        color: '#fff',
    },
    itemArtist: {
        fontSize: 14,
        color: '#A5A4A5',
    },
})