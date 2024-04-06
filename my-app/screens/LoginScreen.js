import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here (e.g., authenticate with backend)
    console.log("Username:", username);
    console.log("Password:", password);
    // Based on successful login, navigate to Home Page
    navigation.navigate("Home Page");
  };

  return (
    <ImageBackground
      source={require("../assets/images/bgn.jpeg")} // Assuming image is in assets/images
      style={styles.backgroundImage}
    >
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Login</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor="#fff"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} // Hide password characters
          />

          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>New User? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 0.8, // Adjust opacity as needed for readability
  },
  outerContainer: {
    flex: 1,
    backgroundColor: "#CCC5B9", // Lightest background color
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#403D39", // Darker background color
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 200,
  },
  text: {
    color: "#EF8257", // Orange color
    fontSize: 44,
    marginBottom: 20,
  },
  textInput: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#252422", // Darkest background color
    borderRadius: 5,
    color: "#fff", // White text color
  },
  titleText: {
    color: "#fff", // White for better contrast
    fontSize: 48,
    marginBottom: 20,
  },
  
  loginButton: {
    backgroundColor: "#00bfff", // Adjust color based on preference
    padding: 15,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpText: {
    marginTop: 15,
    color: "#EF8257",
    textDecorationLine: "underline", // Underline for emphasis
  },
});
