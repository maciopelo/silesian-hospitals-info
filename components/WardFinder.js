import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FoundHospitalsList from "../components/FoundHospitalsList";
import ChosenWard from "./ChosenWard";

const WardFinder = ({ data }) => {
  const [selectedWardData, setWardData] = useState(null);
  const [selectedWardName, setWardName] = useState(null);
  const [selectedWard, setWard] = useState({ data: null, name: null });

  const wardsName = data.map((wardInfo) => ({
    label: wardInfo.wardName,
    value: wardInfo.counties,
    color: "#000",
  }));

  const handleSelect = (value, idx) => {
    value !== null ? setWardData(value) : setWardData(null);
    idx > 0 ? setWardName(wardsName[idx - 1].label) : setWardName(null);
  };

  const handleSelectForIos = () => {
    selectedWardData == null && selectedWardName == null
      ? setWard({ data: null, name: null })
      : setWard({ data: selectedWardData, name: selectedWardName });
  };

  return (
    <>
      <View style={styles.selectContainer}>
        <RNPickerSelect
          placeholder={{
            label: "Wybierz odział",
            value: null,
            color: "#c0c0c0",
          }}
          onValueChange={(value, idx) => handleSelect(value, idx)}
          onDonePress={() => handleSelectForIos()}
          items={wardsName}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
        />

        <ChosenWard
          wardName={
            Platform.OS === "ios" ? selectedWard.name : selectedWardName
          }
        />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          <FoundHospitalsList
            selectedWardData={
              Platform.OS === "ios" ? selectedWard.data : selectedWardData
            }
          />
        </ScrollView>
      </View>
    </>
  );
};

export default WardFinder;

const windowWidth = Dimensions.get("window").width;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    color: "#000",
    width: 0.85 * windowWidth,
    backgroundColor: "#fff",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    color: "#000",
    width: 0.85 * windowWidth,
    backgroundColor: "#fff",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  selectContainer: {
    width: 0.85 * windowWidth,
  },

  listContainer: {
    flex: 3,

    width: 0.95 * windowWidth,
  },
});
