import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

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
            <TextInput
                style={styles.input}
                placeholder="Where are you at??"
                onChangeText={text => handleSearch(text)}
                value={searchQuery}
            />
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
    input: {
        backgroundColor: '#fff',
        height: 40,
        // borderColor: 'gray',
        // borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 30,
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
