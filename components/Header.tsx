import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
  text: string;
};

const Header = ({ text }: Props) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 8,
  },
  text: {
    textAlign: "center",
    color: Colors.light.tint,
    fontSize: 32,
    fontWeight: "800",
  },
});

export default Header;
