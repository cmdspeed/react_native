import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default RegistrationScreen;
