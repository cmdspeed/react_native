import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

import PhotoBG from "../../assets/images/PhotoBG.png";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={PhotoBG} style={styles.image}>
        <Text style={styles.text}>test</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  text: {
    color: "red",
    textAlign: "center",
  },
});

export default RegistrationScreen;
