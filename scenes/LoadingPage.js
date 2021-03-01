import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Text, View, Image } from "react-native";
import esculap from "../assets/esculap.png";
import Loader from "react-native-three-dots-loader";

const LoadingPage = ({ setLoading, timeout }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  setTimeout(() => {
    setLoading(false);
  }, timeout * 1000);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: (timeout / 2) * 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appName}>
          System informacji {"\n"} o szpitalach
        </Text>
      </View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image source={esculap} />
      </Animated.View>
      <View>
        <Loader
          useNativeDriver={true}
          size={10}
          dotMargin={10}
          background={"#fff"}
          activeBackground={"#e0e0e0"}
        />
      </View>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#239a7f",
    alignItems: "center",
    justifyContent: "space-around",
  },

  appName: {
    textAlign: "center",
    fontSize: 35,
    color: "#fff",
  },
});
