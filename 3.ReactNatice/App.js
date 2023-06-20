import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textRed]}>Hello World!</Text>
      <View style={styles.viewStyle}>
        <Text>テスト</Text>
      </View>
      <Image
      resizeMode="contain"
        style={styles.profileImg}
        source={require("./assets/Person.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "black",
    padding: 10,
  },
  textRed: {
    color: "red",
    fontWeight: "bold",
  },
  viewStyle: {
    width: 200,
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: 100,
    height: 100,
  },
});
