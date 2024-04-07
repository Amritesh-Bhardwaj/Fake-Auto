import { Button, StyleSheet, Text, View } from "react-native";
import SearchBarExample from "../components/SearchBarExample";
import MapComponent from "../components/MapComponent";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	return (
		<>
			<View style={styles.search}>
				<SearchBarExample />
			</View>
			<View style={styles.container}>
				<MapComponent />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	screen: {
		color: "#000",
		textAlign: "center",
		padding: 20,
		backgroundColor: "#667790",
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		color: "#000",
		textAlign: "center",
		// padding: 0,
		marginTop: 60,
		marginLeft: 20,
		marginRight: 20,
		// width: 10,
		flexDirection: "row",
		height: 450,
		backgroundColor: "#667790",
		justifyContent: "center",
    shadowColor: "#ccc", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4,
		overflow: "hidden",
		borderRadius: 50,
		alignItems: "center",
	},
  
});

export default HomeScreen;
