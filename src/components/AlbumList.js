import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import AlbumData from "../json/albumlist.json";
const Albumlist=()=>{
    return(
        <ScrollView style={styles.backGroundStyle}>
            <View style={styles.cardContainerStyle}>
              
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: AlbumData[0].image}}
                    />
                </View> 
                
                <View style={styles.headerContentStyle1}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{
                                uri: AlbumData[0].logo
                                }}
                            />
                            
                        </View> 
                        <View>
                            <Text style={styles.textStyle1}>{AlbumData[0].title}</Text>
                            <Text style={styles.textStyle2}>{AlbumData[0].artist}</Text>
                        </View>
                        
                </View>
               
            </View>

              {/* --------------2-------------- */}  
                       
              <View style={styles.cardContainerStyle}>
               
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: AlbumData[1].image}}
                    />
                </View> 
                <View style={styles.headerContentStyle2}>
                        <View style={styles.thumbnailContainerStyle}>
                                    <Image
                                        style={styles.thumbnailStyle}
                                        source={{
                                            uri: AlbumData[1].logo
                                        }}
                                    />
                                    
                        </View>
                        <View>
                            <Text style={styles.textStyle3}>{AlbumData[1].title}</Text>
                            <Text style={styles.textStyle4}>{AlbumData[1].artist}</Text>
                        </View>
                   
                </View>
            </View>

             {/* --------------3-------------- */}  

            <View style={styles.cardContainerStyle}>
              
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: AlbumData[2].image}}
                    />
                </View> 
                <View style={styles.headerContentStyle3}>
                    <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{
                                    uri: AlbumData[2].logo
                                 }}
                            />
                                        
                    </View>
                    <View>
                        <Text style={styles.textStyle5}>{AlbumData[2].title}</Text>
                        <Text style={styles.textStyle6}>{AlbumData[2].artist}</Text>
                    </View>
                 
                </View>
            </View>

           

             {/* --------------4-------------- */}  
                       
            <View style={styles.cardContainerStyle}>
            
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: AlbumData[3].image}}
                    />
                </View> 
                <View style={styles.headerContentStyle4}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{
                                    uri: AlbumData[3].logo
                                 }}
                            />
                                        
                        </View>

                    <View>
                        <Text style={styles.textStyle7}>{AlbumData[3].title}</Text>
                        <Text style={styles.textStyle8}>{AlbumData[3].artist}</Text>
                    </View>
                   
                </View>
            </View> 

             {/* --------------5-------------- */}  
                       
            <View style={styles.cardContainerStyle}>
       
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: AlbumData[4].image}}
                    />
                </View> 
                <View style={styles.headerContentStyle5}> 
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{
                                uri: AlbumData[4].logo
                             }}
                        />
                                        
                    </View>


                    <View>
                        <Text style={styles.textStyle9}>{AlbumData[4].title}</Text>
                        <Text style={styles.textStyle0}>{AlbumData[4].artist}</Text>
                    </View>
               
                   
                </View>
            </View>                                   
        </ScrollView>   
    
    );
};

const styles = StyleSheet.create({

    backGroundStyle:{
        backgroundColor:"#f8edeb",
       
    },

    
    // -------------------1----------------
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
               backgroundColor:"#faedcb",
               width:280,
               height:80,
               shadowColor: "#283618",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              // Android Only
              elevation: 4,
              flexDirection:"row",
        
        },


// -------------------2----------------
    textStyle3: {
        fontSize: 18, 
        marginLeft:3,
        color:"#001845",
        },
        textStyle4: {
            fontSize: 14,
            marginLeft:7,
            
            color:"#e27396",
        },

        headerContentStyle2:{
            
            alignItems: "center", 
            backgroundColor:"#e7e5e5",
            width:280,
            height:80,
            shadowColor: "#283618",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            // Android Only
            elevation: 4,
            flexDirection:"row",
        },

        
    // -------------------3----------------
    textStyle5: {
        fontSize: 18, 
        marginLeft:7,
        color:"#432818",
        },
        textStyle6: {
            fontSize: 14,
            marginLeft:8,
            
            color:"#ff477e",
          },
    
          headerContentStyle3:{
            alignItems: "center", 
               backgroundColor:"#faf4ea",
               width:280,
               height:80,
               shadowColor: "#283618",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              // Android Only
              elevation: 4,
              flexDirection:"row",
        },


// -------------------4----------------
    textStyle7: {
        fontSize: 18, 
        marginLeft:7,
        color:"#240046",
        },
        textStyle8: {
            fontSize: 14,
            marginLeft:8,
          
            color:"#ff477e",
        },

        headerContentStyle4:{
            alignItems: "center", 
            backgroundColor:"#ffd8be",
            width:280,
            height:80,
            shadowColor: "#283618",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            // Android Only
            elevation: 4,
            flexDirection:"row",
        },

        // -------------------5----------------
    textStyle9: {
        fontSize: 18, 
        marginLeft:7,
        color:"#495057",
        },
        textStyle0: {
            fontSize: 14,
            marginLeft:5,
            
            color:"#ff477e",
        },

        headerContentStyle5:{
            alignItems: "center",  
            backgroundColor:"#eecfd4",
            width:280,
            height:80,
            shadowColor: "#283618",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            // Android Only
            elevation: 4,
            flexDirection:"row",
    },










    // headerContentStyle: {
    
    //    justifyContent: "center",
    // //    alignItems: "center", 
    //    backgroundColor:"#e8e8e4",
    //    width:280,
    //    height:80,
    //    shadowColor: "#283618",
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.5,
    //   // Android Only
    //   elevation: 4,

    // },
    
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
      padding: 5,
      shadowColor: "#283618",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      // Android Only
      elevation: 2,
      
    },
    imageStyle: {
      
      
      height: 274,
      width: 274,
    },



    thumbnailContainerStyle: {
        // flexDirection: "row",
        justifyContent: "flex-start",
        
    },
    thumbnailStyle: {
        marginLeft:8,
        height: 50,
        width: 50,
        borderRadius:40,
    },
  });

   

  export default Albumlist;