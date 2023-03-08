import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebaseConfig";

const auth = getAuth(app);

const Auth = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const inputChangeFunc = (val, name) => {
    setCredentials((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  async function handleSubmit() {
    if (isLogin) {
      if (credentials.email !== "" && credentials.password !== "") {
        try {
          let res = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          console.log(res);
        } catch (error) {
          console.log("ERROR MESSAGE", error.message);
        }
      } else {
        console.log("Fields should not be Empty");
      }
    } else {
      if (
        credentials.email !== "" &&
        credentials.password !== "" &&
        credentials.confirmPassword !== ""
      ) {
        // create user
        try {
          let res = await createUserWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          console.log(res);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        console.log("Fields should not be Empty");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => inputChangeFunc(val, "email")}
        value={credentials.email}
        placeholder="Enter your email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => inputChangeFunc(val, "password")}
        value={credentials.password}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          onChangeText={(val) => inputChangeFunc(val, "confirmPassword")}
          value={credentials.confirmPassword}
          secureTextEntry={true}
          placeholder="Enter your confirm password"
        />
      )}
      <Text
        style={styles.signUpText}
        onPress={() => setIsLogin((prev) => !prev)}
      >
        {isLogin ? "Sign Up" : "Login"} instead
      </Text>
      <View style={styles.button}>
        <Button title={isLogin ? "Login" : "Sign Up"} onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  container: {
    marginHorizontal: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 10,
  },
  signUpText: {
    color: "blue",
  },
  button: {
    marginVertical: 10,
  },
});

export default Auth;
