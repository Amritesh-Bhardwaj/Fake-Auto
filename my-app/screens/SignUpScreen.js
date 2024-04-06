import React, { useState } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Sign Up Successful!"); // Replace with actual success handling
    navigation.navigate("Home Page");
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Sign Up</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor = '#ffff'
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor ='#ffff'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Button title="SIGN UP" onPress={handleSignUp} />
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
    borderRadius: 20,
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
