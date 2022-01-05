import React from "react";
import { StyleSheet, Text, View } from "react-native";
import County from "./County";

const FoundHospitalsList = ({ selectedWardData }) => {
  const counties =
    selectedWardData === null
      ? []
      : selectedWardData.map((county, idx) => (
          <County
            key={county.countyName + idx}
            countyName={county.countyName}
            hospitals={county.hospitals}
          />
        ));

  return selectedWardData && <View>{counties}</View>;
};

export default FoundHospitalsList;

const styles = StyleSheet.create({});
