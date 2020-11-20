import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import Onboarding from "react-native-onboarding-swiper";

import { useNavigation } from "@react-navigation/native";

const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";
  } else {
    backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)";
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const OnBoarding = () => {
  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate("Home");
  }
  return (
    <>
      <View style={styles.main}>
        <TouchableOpacity
          style={{ paddingLeft: 32 }}
          onPress={handleNavigateHome}
        >
          <Icon name="x" size={40} color="#DADFE1" />
        </TouchableOpacity>
        <Onboarding
          DotComponent={Square}
          bottomBarColor={"#FBFBFB"}
          showNext={false}
          showSkip={false}
          showDone={false}
          titleStyles={styles.titleOnboarding}
          pages={[
            {
              backgroundColor: "#FBFBFB",
              image: (
                <Image
                  source={require("../../assets/logo.png")}
                  style={styles.logo}
                />
              ),
              title: "Bem vindo(a)!",
              subtitle: (
                <Text style={[styles.descriptionOnBoarding, { maxWidth: 350 }]}>
                  Olá, eu sou a Yuni. Te ajudarei nesta jornada.
                </Text>
              ),
            },
            {
              backgroundColor: "#FBFBFB",
              image: (
                <Image
                  source={require("../../assets/jornada.png")}
                  style={styles.logo}
                />
              ),
              title: "A jornada",
              subtitle: (
                <Text style={[styles.descriptionOnBoarding, { maxWidth: 350 }]}>
                  Com informações importantes para a sua escolha de profissão
                </Text>
              ),
            },
            {
              backgroundColor: "#FBFBFB",
              image: (
                <Image
                  source={require("../../assets/decide.png")}
                  style={styles.logo}
                />
              ),
              title: "E no final, quem decide é você",
              subtitle: (
                <View>
                  <Text
                    style={[styles.descriptionOnBoarding, { maxWidth: 350 }]}
                  >
                    Vamor começar ?
                  </Text>
                </View>
              ),
            },
          ]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 10 + Constants.statusBarHeight,
  },
  titleOnboarding: {
    color: "#14AEED",
    fontSize: 25,
    fontFamily: "Montserrat_600SemiBold",
    maxWidth: 260,
    marginTop: 0,
    textAlign: "center",
  },
  descriptionOnBoarding: {
    color: "#727272",
    fontSize: 20,
    marginTop: 10,
    fontFamily: "Montserrat_400Regular",
    lineHeight: 24,
    textAlign: "center",
  },
  logo: {
    width: "40%",
    height: 165,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 32,
  },
});

export default OnBoarding;
