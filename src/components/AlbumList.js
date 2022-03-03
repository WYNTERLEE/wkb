import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";

const Albumlist=()=>{
    return(
        <ScrollView style={styles.backGroundStyle}>
            {/* --------------1-------------- */}
            <View style={styles.cardContainerStyle}>
              
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcc96d39-785d-4796-bb89-fede2ff7fe12/deawoz5-4cbea740-a36c-4cb0-be29-b736c51f34a6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjYzk2ZDM5LTc4NWQtNDc5Ni1iYjg5LWZlZGUyZmY3ZmUxMlwvZGVhd296NS00Y2JlYTc0MC1hMzZjLTRjYjAtYmUyOS1iNzM2YzUxZjM0YTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a8gu5YBvWEPkc-wI32Ye2tVIiUeOKl94EloWt4MhSLo",}}
                    />
                </View> 
                
                <View style={styles.headerContentStyle1}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{
                                uri: "http://tqareer.net/wp-content/uploads/2017/07/twice-logo.jpg",
                                }}
                            />
                            
                        </View> 
                        <View>
                            <Text style={styles.textStyle1}>MORE&MORE</Text>
                            <Text style={styles.textStyle2}>TWICE</Text>
                        </View>
                        
                </View>
               
            </View>

              {/* --------------2-------------- */}  
                       
              <View style={styles.cardContainerStyle}>
               
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://kgasa.com/wp-content/uploads/2021/10/Formula-of-Love-OT3.jpg",}}
                    />
                </View> 
                <View style={styles.headerContentStyle2}>
                        <View style={styles.thumbnailContainerStyle}>
                                    <Image
                                        style={styles.thumbnailStyle}
                                        source={{
                                        uri: "http://tqareer.net/wp-content/uploads/2017/07/twice-logo.jpg",
                                        }}
                                    />
                                    
                        </View>
                        <View>
                            <Text style={styles.textStyle3}> Scientist</Text>
                            <Text style={styles.textStyle4}>TWICE</Text>
                        </View>
                   
                </View>
            </View>

             {/* --------------3-------------- */}  

            <View style={styles.cardContainerStyle}>
              
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://upload.wikimedia.org/wikipedia/zh/7/78/Feel_Special.jpg",}}
                    />
                </View> 
                <View style={styles.headerContentStyle3}>
                    <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{
                                uri: "http://tqareer.net/wp-content/uploads/2017/07/twice-logo.jpg",
                                 }}
                            />
                                        
                    </View>
                    <View>
                        <Text style={styles.textStyle5}>Feel Special</Text>
                        <Text style={styles.textStyle6}>TWICE</Text>
                    </View>
                 
                </View>
            </View>

           

             {/* --------------4-------------- */}  
                       
            <View style={styles.cardContainerStyle}>
            
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1c31a81-4afe-49b1-a6b4-5eb06b074adb/dcrdnqt-9e8d6f97-07c8-4dd7-887d-12d266d1aef9.png/v1/fill/w_800,h_800,q_80,strp/twice___yes_or_yes_by_herestodesign_dcrdnqt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvZjFjMzFhODEtNGFmZS00OWIxLWE2YjQtNWViMDZiMDc0YWRiXC9kY3JkbnF0LTllOGQ2Zjk3LTA3YzgtNGRkNy04ODdkLTEyZDI2NmQxYWVmOS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KWHyoVNb91Z4WKZK4YgY0_9la-kngcSUsOemWxmR5GM",}}
                    />
                </View> 
                <View style={styles.headerContentStyle4}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{
                                uri: "http://tqareer.net/wp-content/uploads/2017/07/twice-logo.jpg",
                                 }}
                            />
                                        
                        </View>

                    <View>
                        <Text style={styles.textStyle7}>YES or YES </Text>
                        <Text style={styles.textStyle8}>TWICE</Text>
                    </View>
                   
                </View>
            </View> 

             {/* --------------5-------------- */}  
                       
            <View style={styles.cardContainerStyle}>
       
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://pm1.narvii.com/6665/a00459541a365fef5db56446c3761d78e5c3ec22_hq.jpg",}}
                    />
                </View> 
                <View style={styles.headerContentStyle5}> 
                    <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{
                                uri: "http://tqareer.net/wp-content/uploads/2017/07/twice-logo.jpg",
                                 }}
                            />
                                        
                        </View>


                    <View>
                        <Text style={styles.textStyle9}>Heart Shaker</Text>
                        <Text style={styles.textStyle0}> TWICE</Text>
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

    // textStyle: {
    // //   marginTop:20,
    //   fontSize: 18, 
    //   marginLeft:15,
    //   color:"#f27a7d",
    // },
    // text2Style: {
    //     fontSize: 14,
    //     marginLeft:16,
    //     marginTop:5,
    //   },

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