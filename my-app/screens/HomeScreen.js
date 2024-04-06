import { Button, StyleSheet, Text, View } from "react-native";

import SearchBarExample from "../components/SearchBarExample";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	return (
		<View>
			<SearchBarExample/>
		</View>
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
});

export default HomeScreen;
