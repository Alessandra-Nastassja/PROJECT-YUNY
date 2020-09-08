import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";

import stylesMain from "../styles";

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateProfession() {
    navigation.navigate("DecideProfession");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.main}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <View style={styles.content}>
          <Text style={stylesMain.title}>yuni</Text>
          <Text style={[stylesMain.description, { maxWidth: 260 }]}>
            Decida a sua profissão
          </Text>
        </View>
        <TouchableOpacity
          style={[
            stylesMain.buttonPrimary,
            { backgroundColor: "#14AEED", width: "90%" },
          ]}
          onPress={handleNavigateProfession}
        >
          <Text style={[stylesMain.buttonTextPrimary, { color: "#FFF" }]}>
            Começar agora
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[stylesMain.buttonSecondary, { backgroundColor: "#FBFBFB", width: "90%" }]}
        >
          <Text style={[stylesMain.buttonTextSecondary, { color: "#14AEED" }]}>
            Já tenho uma conta  
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginBottom: 100,
  },
  logo: {
    width: "40%",
    height: 165,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 32,
  },
});

export default Home;
