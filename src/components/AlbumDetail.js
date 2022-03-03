import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";

const AlbumDetail=(props)=>{
    const{image,logo,title,artist}=props.album;
    return(
        <View>
            <View style={styles.cardContainerStyle}>
              
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri:image}}
                    />
                </View> 
                
                <View style={styles.headerContentStyle1}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{uri:logo}}
                        />   
                    </View> 
                    <View>
                        <Text style={styles.textStyle1}>{title}</Text>
                        <Text style={styles.textStyle2}>{artist}</Text>
                    </View>    
                </View>
            </View> 
        </View>   
    
    );
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 18, 
        marginLeft:7,
        color:"#081c15",
    },
    textStyle2: {
        fontSize: 14,
        marginLeft:8,
        color:"#e27396",
    },
    headerContentStyle1:{
        alignItems: "center", 
        backgroundColor:"#f3dad8",
        width:280,
        height:80,
        shadowColor: "#283618",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        // Android Only
        elevation: 8,
        flexDirection:"row",
    },
    cardContainerStyle: {
      width:400,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 50,
      height:400,
      justifyContent: "center",
      alignItems: "center",
    },
    cardSectionStyle: {
      padding: 4,
      shadowColor: "#0000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      // Android Only
      elevation: 8,
      
    },
    imageStyle: {
      height: 280,
      width: 280,
      shadowColor: "#9381ff",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      // Android Only
      elevation: 8,
    },
    thumbnailContainerStyle: { justifyContent: "flex-start",},
    thumbnailStyle: {
        marginLeft:8,
        height: 50,
        width: 50,
        borderRadius:40,
    },
  });

   

  export default AlbumDetail;