import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppName from "../components/AppName";
import WardFinder from "../components/WardFinder";
import FoundHospitalsList from "../components/FoundHospitalsList";

const MainView = ({ data }) => {
  return (
    <View style={styles.container}>
      <AppName />
      <WardFinder data={data} />
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#239a7f",
    alignItems: "center",
    justifyContent: "center",
  },
});
