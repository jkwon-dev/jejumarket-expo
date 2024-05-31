import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ProductType } from "@/app/(tabs)";
import { Link } from "expo-router";

const ProductCard = ({ item }: { item: ProductType }) => {
  return (
    <Link href={{ pathname: "products/detailedItem", params: item }} asChild>
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceBox}>
          <Text>₩ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  image: {
    width: "100%",
    height: 300,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 4,
  },
  priceBox: {
    flexDirection: "row-reverse",
  },
  price: {
    fontWeight: "400",
  },
});

export default ProductCard;
