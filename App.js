import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from "react-native";

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://i.imgur.com/K3KJ3w4h.jpg",
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>Taylor Swift</Text>
            <Text>Taylor Swift</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/zh/c/ca/TWICE-Eyes_wide_open.jpg",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
    opacity:0.5,
  },
  textStyle: {
    fontSize: 20,
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  imageStyle: {
    height: 300,
    width: null,
  },
});

export default App;