import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo/vector-icons

const SearchBarExample = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Mango' },
        { id: 5, name: 'Pineapple' },
        { id: 6, name: 'Grapes' },
        { id: 7, name: 'Watermelon' },
    ]);

    const handleSearch = text => {
        setSearchQuery(text);
        // Filter data based on search query
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        // Set filtered data to be rendered
        setData(filteredData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <FontAwesome name="bars" size={20} color="#fff" />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" size={20} color="#777" style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Where are you at??"
                        onChangeText={text => handleSearch(text)}
                        value={searchQuery}
                    />
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    itemContainer: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
});

export default SearchBarExample;
