import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "@/components/Header";

const cart = () => {
  return (
    <SafeAreaView>
      <View>
        <Header text="My Cart" />
      </View>
    </SafeAreaView>
  );
};

export default cart;
