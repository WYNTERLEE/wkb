import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header=()=>{
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>Albums</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: "#f8edeb",
      borderRadius:10,

      justifyContent: "center",
      alignItems: "center",
      height: 60,
      shadowColor: "#590d22",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      // Android Only
      elevation: 8,
      opacity:1,
    },
    textStyle: {
      fontSize: 20,
      color:"#d8a48f",
    },
  });

  export default Header;