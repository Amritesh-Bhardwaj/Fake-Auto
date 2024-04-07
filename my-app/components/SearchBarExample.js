import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  DrawerLayoutAndroid
} from "react-native";
import React, { useState } from "react";

import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from expo/vector-icons

const SearchBarExample = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]); // Use separate state for filtered data
  const [fullData, setFullData] = useState([
    // Maintain original data
    { id: 1, name: "Hostel J" },
    { id: 2, name: "Hostel H" },
    { id: 3, name: "Hostel D" },
    { id: 4, name: "Hostel Q" },
    { id: 5, name: "Hostel O" },
    { id: 6, name: "Hostel K" },
    { id: 7, name: "Hostel I" },
  ]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = fullData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered); // Update filtered data state
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
          <FontAwesome name="bars" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <FontAwesome
            name="search"
            size={20}
            color="#777"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search Hostels"
            onChangeText={handleSearch}
            value={searchQuery}
            // Clear search query on focus if it matches filtered data
            onFocus={() => {
              if (
                filteredData.length === 1 &&
                filteredData[0].name === searchQuery
              ) {
                setSearchQuery("");
                setFilteredData([]); // Reset to full data on refocus with exact match
              }
            }}
          />
          {/* Conditionally render dropdown list */}
          {filteredData.length > 0 && (
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              style={styles.dropdownList}
            />
          )}
        </View>
      </View>
      {/* Render original FlatList or filtered results */}
      <FlatList
        data={searchQuery ? filteredData : fullData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    paddingHorizontal: 10,

    // Shadow styles
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Optional: Add elevation for a more lifted effect (Android)
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});
export default SearchBarExample;
