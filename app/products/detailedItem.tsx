import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";

const detailedItem = () => {
  const item = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={{ uri: item.image as string }} style={styles.image} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.priceBox}>
          <Text style={styles.price}>₩ {item.price}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.orderBox}>
        <Text style={styles.order}>Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 600,
  },
  textBox: {
    margin: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: "600",
  },
  description: {
    fontSize: 24,
  },
  priceBox: {
    flexDirection: "row-reverse",
  },
  price: {
    fontSize: 20,
    fontWeight: "400",
  },
  orderBox: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    width: "90%",
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.light.tint,
  },
  order: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: Colors.light.background,
  },
});
export default detailedItem;
