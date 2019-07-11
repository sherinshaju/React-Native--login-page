import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Input, Button, Image, colors } from "react-native-elements";

export default class App extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="position" enabled>
          <ScrollView>
            <View>
              <View style={styles.container}>
                <Image
                  source={require("./public/images/az-logo2.png")}
                  style={styles.image_Al}
                />
                <Text style={styles.text} inputContainerStyle="rounded">
                  Shop Online
                </Text>
              </View>
              <View style={styles.p_4}>
                <TextInput style={styles.loginText} placeholder="UserName" />
              </View>
              <View style={styles.p_4}>
                <TextInput style={styles.loginText} placeholder="Password" />
              </View>
              <View style={styles.p_2}>
                <Button title="Login" style={styles.btn_login} />
              </View>
              <View style={styles.p_2}>
                <Button title=" Login with Facebook" type="outline" />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mb_2: {
    paddingTop: "8%"
  },
  p_2: {
    padding: "3%"
  },
  p_4: {
    padding: "4%"
  },
  h_10: {
    height: "30"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    color : "#09BBDA"
  },
  container: {
    display : "flex",
    flex : 1,
    alignItems: "center",
    justifyContent : "center"
  },
  loginText: {
    borderColor: "#bbc0c447",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 15,
    borderRadius: 6,
    height: 45,
    paddingLeft: 10,
    shadowColor: "#bbc0c447",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
  btn_login: {
    marginTop: "5%"
  },
  image_Al:{
    width : 200,
    height : 70,
    marginTop : "40%",
    marginBottom: 20
  }
});
