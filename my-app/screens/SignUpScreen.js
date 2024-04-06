import React, { useState } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    alert("Sign Up Successful!"); // Replace with actual success handling
    navigation.navigate("Home Page");
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Sign Up</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#ffff"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.textInput}
          textContentType="Email"
          placeholder="Email"
          autoComplete="email"
          placeholderTextColor="#ffff"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#ffff"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          placeholderTextColor="#ffff"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Button title="SIGN UP" onPress={handleSignUp} style={styles.btn} />
      </View>
    </View>
  );
};

export default SignUpScreen;



const styles = StyleSheet.create({
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
    marginLeft: 20,
    marginRight: 20,
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
    marginBottom: 10,
    backgroundColor: "#201F1D", // Darkest background color
    borderRadius: 5,
    color: "#fff", // White text color
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
    marginLeft: 20,
    marginRight: 20,
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
    marginBottom: 10,
    backgroundColor: "#252422", // Darkest background color
    borderRadius: 5,
    color: "#fff", // White text color
    
  },
});
