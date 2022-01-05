import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import esculap from "../assets/esculap.png";

const AppName = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.appName}>
          System informacji {"\n"} o szpitalach
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Image style={{ width: 80, height: 80 }} source={esculap} />
      </View>
    </SafeAreaView>
  );
};

export default AppName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },

  appName: {
    fontSize: 26,
    textAlign: "center",
    marginRight: 15,
    color: "#fff",
  },
});
