import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri1: require("./src/images/dice1.png"),
      uri2: require("./src/images/dice1.png")
    };
  }
  playButton = () => {
    var x = this.getRandomValue();
    switch (x) {
      case 1:
        this.setState({ uri1: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ uri1: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ uri1: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ uri1: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ uri1: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({ uri1: require("./src/images/dice6.png") });
        break;
    }
    var y = this.getRandomValue();
    switch (y) {
      case 1:
        this.setState({ uri2: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ uri2: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ uri2: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ uri2: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ uri2: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({ uri2: require("./src/images/dice6.png") });
        break;
    }
  };
  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <Image
            style={{ width: 100, height: 100, marginRight: 10 }}
            source={this.state.uri1}
          />
          <Image style={{ width: 100, height: 100 }} source={this.state.uri2} />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.playButton();
          }}
        >
          <Text style={styles.btn}>🙈Play Game🙈</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#4834DF",
    color: "white",
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 35,
    borderColor: "#45CE30",
    borderRadius: 7,
    borderWidth: 2
  }
});
