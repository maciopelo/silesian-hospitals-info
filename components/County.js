import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
  Dimensions,
  Button,
} from "react-native";
import HospitalInfo from "./HospitalInfo";

const County = ({ countyName, hospitals }) => {
  const [chosenHospital, setHospital] = useState(null);

  const hospitalsName = hospitals.map((hosp) => (
    <TouchableWithoutFeedback
      key={hosp.hospitalName}
      onPress={() => setHospital(hosp)}
    >
      <Text style={styles.hospital}>
        <View>
          <Text style={styles.dot}>{`\u2B24`}</Text>
        </View>
        {hosp.hospitalName}
      </Text>
    </TouchableWithoutFeedback>
  ));

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.countyName}>{countyName}</Text>
      <View style={styles.hospitalResults}>{hospitalsName}</View>

      <Modal
        visible={chosenHospital !== null}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <HospitalInfo hospitalInfo={chosenHospital} />
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Pressable
                style={[styles.button]}
                onPress={() => setHospital(null)}
              >
                <Text style={styles.textStyle}>Zamknij</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default County;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  countyName: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },
  hospital: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "300",
  },
  hospitalResults: {
    marginLeft: 5,
  },
  dot: {
    paddingTop: 6,
    fontSize: 8,
    color: "#fff",
    textAlign: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    width: 0.9 * windowWidth,
    height: 1.5 * windowWidth,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#3218d9",
    width: 0.3 * windowWidth,
    marginBottom: 10,
  },

  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
