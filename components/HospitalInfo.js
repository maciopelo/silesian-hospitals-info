import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Foundation,
  Entypo,
} from "@expo/vector-icons";

import { Linking } from "react-native";

const HospitalInfo = ({ hospitalInfo }) => {
  const iconSize = 44;

  const preparePhoneNumbers = (phoneNumString) => {
    const commaDelimeter = phoneNumString.split(",");

    const wordDelimeter = phoneNumString.split("lub");

    if (commaDelimeter.length > 1) {
      return commaDelimeter.map((phoneNum) => {
        const properPhoneNum = parseInt(
          phoneNum.toString().trim().replace(/\s+/g, "")
        );
        return (
          properPhoneNum != NaN && (
            <Text
              key={phoneNum}
              style={styles.infoText}
              onPress={() => Linking.openURL(`tel:${`${phoneNum}`}`)}
            >
              {!isNaN(properPhoneNum) ? properPhoneNum : "brak numeru"}
            </Text>
          )
        );
      });
    } else if (wordDelimeter.length > 1) {
      return wordDelimeter.map((phoneNum) => {
        const properPhoneNum = parseInt(
          phoneNum.toString().trim().replace(/\s+/g, "")
        );

        return (
          properPhoneNum != NaN && (
            <Text
              key={phoneNum}
              style={styles.infoText}
              onPress={() => Linking.openURL(`tel:${`${phoneNum}`}`)}
            >
              {!isNaN(properPhoneNum) ? properPhoneNum : "brak numeru"}
            </Text>
          )
        );
      });
    } else {
      const properPhoneNum = parseInt(
        commaDelimeter[0].toString().trim().replace(/\s+/g, "")
      );

      return (
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL(`tel:${`${commaDelimeter[0]}`}`)}
        >
          {!isNaN(properPhoneNum) ? properPhoneNum : "brak numeru"}
        </Text>
      );
    }
  };

  return (
    <View>
      <Text style={styles.hospitalName}>{hospitalInfo.hospitalName}</Text>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text>
            <MaterialCommunityIcons
              name="hospital"
              size={iconSize}
              color="black"
            />
          </Text>
          <Text style={styles.infoText}>
            {`${hospitalInfo.type.split(" i ")[0]}`}
            {hospitalInfo.type.split(" i ").length > 1
              ? `\ni ${hospitalInfo.type.split(" i ")[1]}`
              : ""}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text>
            <Entypo name="address" size={iconSize} color="black" />
          </Text>
          <Text style={styles.infoText}>
            {`${hospitalInfo.adress.split(",")[0]},\n${
              hospitalInfo.adress.split(",")[1]
            }`}
          </Text>
        </View>

        {hospitalInfo.telephone.length > 0 && (
          <View style={styles.infoItem}>
            <Text>
              <Foundation name="telephone" size={iconSize} color="black" />
            </Text>
            {preparePhoneNumbers(hospitalInfo.telephone)}
          </View>
        )}

        <View style={styles.infoItem}>
          <Text>
            <MaterialCommunityIcons name="bed" size={iconSize} color="black" />
          </Text>
          <Text
            style={styles.infoText}
          >{`${hospitalInfo.freePlaces} - wolne miejsca`}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text>
            <MaterialCommunityIcons
              name="calendar-refresh-outline"
              size={iconSize}
              color="black"
            />
          </Text>
          <Text style={styles.infoText}>{hospitalInfo.updateAt}</Text>
        </View>

        {hospitalInfo.mapUrl && (
          <View style={styles.infoItem}>
            <Text>
              <MaterialIcons name="place" size={iconSize} color="black" />
            </Text>
            <Text
              style={styles.infoText}
              onPress={() => Linking.openURL(hospitalInfo.mapUrl)}
            >
              {"zobacz na mapie"}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HospitalInfo;

const styles = StyleSheet.create({
  hospitalName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 22,
    padding: 5,
    fontWeight: "bold",
  },

  info: {
    marginTop: 15,
  },
  infoText: {
    fontSize: 20,
    paddingLeft: 10,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
  },
});
