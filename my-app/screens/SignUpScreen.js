import React, { useState } from "react";
import { Button, Text, View, TextInput,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState(""); // Add email state
  const [password, setPassword] = React.useState(""); // Existing password state

  const handleSignUp = () => {
    // Implement your sign-up logic here (e.g., send data to backend for registration)
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Sign Up Successful!"); // Replace with actual success handling
    navigation.navigate("Home Page");
  };

  // React Native code

// const handleSignUp = async () => {
//     try {
//         const response = await fetch('http://your-django-backend-url/api/signup/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email,
//                 password,
//             }),
//         });

//         if (!response.ok) {
//             throw new Error('Sign up failed');
//         }

//         const data = await response.json();
//         alert(data.success); // Display success message
//     } catch (error) {
//         console.error(error);
//         alert('Sign up failed');
//     }
// };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Set keyboard type for email
      />

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button title="SIGN UP" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center", // Center elements horizontally
      justifyContent: "center", // Center elements vertically
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 20,
    },
    text: {
      color: "red",
      fontSize: 44,
      marginBottom: 20, // Add space below title
    },
    textInput: {
      width: "100%",
      padding: 10,
      marginBottom: 10,
      backgroundColor: "#eee",
      borderRadius: 5,
    },
  });