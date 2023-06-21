import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  function hello() {
    Alert.alert("あいさつ", "こんにちは、田中たろうです", [
      {
        text: "Cancel",
        pnPress: () => console.log("キャンセルボタンが押されました。"),
        style: "cancel",
      },
      {
        text: "Ok!",
        onPress: () => console.log("OKボタンが押されました。"),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>sample code</Text> */}
      <View style={styles.baseView}>
        <Image
          style={styles.profileImg}
          source={require("./assets/Person.png")}
        ></Image>
        <View>
          <Text style={styles.text}>田中　太郎</Text>
          <Text style={styles.text}>趣味は読書です</Text>
        </View>
        <Button title="あいさつ" onPress={hello()}></Button>
      </View>
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
  baseView: {
    flexDirection: "row",
    borderWidth: 2,
    height: 120,
    padding: 10,
    width: "90%",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    padding: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
  },
});
