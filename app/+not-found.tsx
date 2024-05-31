import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Can't find the page</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
