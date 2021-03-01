import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ChosenWard = ({ wardName }) => {
  return (
    <>
      {wardName && (
        <View style={styles.container}>
          <Text style={styles.wardName}>{wardName}</Text>
        </View>
      )}
    </>
  );
};

export default ChosenWard;

const styles = StyleSheet.create({
  wardName: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
