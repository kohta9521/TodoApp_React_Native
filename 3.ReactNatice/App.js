import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  // const hello = () => {
  //   Alert.alert("Greeting", "Hello My name is kohta!")[
  //     ({
  //       text: "Cancel",
  //       onPress: () => console.log("キャンセルボタンが押されました。"),
  //       style: "cancel",
  //     },
  //     {
  //       text: "Ok",
  //       onPress: () => console.log("Okボタンが押されました"),
  //     })
  //   ];
  // };

  return (
    <View style={styles.container}>
      {/* <Button title="greeting button" onPress={hello()} style="auto"></Button> */}

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
