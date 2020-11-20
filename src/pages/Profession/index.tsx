import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

import stylesMain from "../styles";

const DecideProfession = () => {
  const navigation = useNavigation();

  function handleNavigatorBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={handleNavigatorBack}>
          <Icon name="arrow-left" size={40} color="#DADFE1" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={[stylesMain.description, { maxWidth: "100%" }]}>
            Eu decidi minha profissão...
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[
                stylesMain.buttonSecondary,
                { backgroundColor: "#FBFBFB" },
              ]}
            >
              <Text
                style={[stylesMain.buttonTextSecondary, { color: "#14AEED" }]}
              >
                Sim, já decidi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesMain.buttonSecondary,
                { backgroundColor: "#FBFBFB" },
              ]}
            >
              <Text
                style={[stylesMain.buttonTextSecondary, { color: "#14AEED" }]}
              >
                Estou em dúvida
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                stylesMain.buttonSecondary,
                { backgroundColor: "#FBFBFB" },
              ]}
            >
              <Text
                style={[stylesMain.buttonTextSecondary, { color: "#14AEED" }]}
              >
                Ainda não
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  content: {
    maxHeight: 400,
    flex: 1,
    marginTop: 100,
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
  },
});

export default DecideProfession;
