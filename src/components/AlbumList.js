import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";

const Albumlist=()=>{
    return(
        <ScrollView style={styles.cardContainerStyle}>
            {/* --------------1-------------- */}
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcc96d39-785d-4796-bb89-fede2ff7fe12/deawoz5-4cbea740-a36c-4cb0-be29-b736c51f34a6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjYzk2ZDM5LTc4NWQtNDc5Ni1iYjg5LWZlZGUyZmY3ZmUxMlwvZGVhd296NS00Y2JlYTc0MC1hMzZjLTRjYjAtYmUyOS1iNzM2YzUxZjM0YTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a8gu5YBvWEPkc-wI32Ye2tVIiUeOKl94EloWt4MhSLo",}}
                    />
                </View> 
                <View style={styles.headerContentStyle}>
                    <Text> TWICE<Text>MORE&MORE</Text></Text>
                </View>
            </View>

              {/* --------------2-------------- */}  
                       
              <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                    
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://kgasa.com/wp-content/uploads/2021/10/Formula-of-Love-OT3.jpg",}}
                    />
                </View> 
                <View style={styles.headerContentStyle}>
                    <Text> TWICE<Text>MORE&MORE</Text></Text>
                </View>
            </View>

             {/* --------------3-------------- */}  

            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                    <Image style={styles.thumbnailStyle}
                        source={{
                            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcc96d39-785d-4796-bb89-fede2ff7fe12/deawoz5-4cbea740-a36c-4cb0-be29-b736c51f34a6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjYzk2ZDM5LTc4NWQtNDc5Ni1iYjg5LWZlZGUyZmY3ZmUxMlwvZGVhd296NS00Y2JlYTc0MC1hMzZjLTRjYjAtYmUyOS1iNzM2YzUxZjM0YTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a8gu5YBvWEPkc-wI32Ye2tVIiUeOKl94EloWt4MhSLo",
                    }}
                    />
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://upload.wikimedia.org/wikipedia/zh/7/78/Feel_Special.jpg",}}
                    />
                </View> 
                <View style={styles.headerContentStyle}>
                    <Text> TWICE<Text>MORE&MORE</Text></Text>
                </View>
            </View>

           

             {/* --------------4-------------- */}  
                       
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                    <Image style={styles.thumbnailStyle}
                        source={{
                            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1c31a81-4afe-49b1-a6b4-5eb06b074adb/dcrdnqt-9e8d6f97-07c8-4dd7-887d-12d266d1aef9.png/v1/fill/w_800,h_800,q_80,strp/twice___yes_or_yes_by_herestodesign_dcrdnqt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvZjFjMzFhODEtNGFmZS00OWIxLWE2YjQtNWViMDZiMDc0YWRiXC9kY3JkbnF0LTllOGQ2Zjk3LTA3YzgtNGRkNy04ODdkLTEyZDI2NmQxYWVmOS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KWHyoVNb91Z4WKZK4YgY0_9la-kngcSUsOemWxmR5GM",
                    }}
                    />
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1c31a81-4afe-49b1-a6b4-5eb06b074adb/dcrdnqt-9e8d6f97-07c8-4dd7-887d-12d266d1aef9.png/v1/fill/w_800,h_800,q_80,strp/twice___yes_or_yes_by_herestodesign_dcrdnqt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvZjFjMzFhODEtNGFmZS00OWIxLWE2YjQtNWViMDZiMDc0YWRiXC9kY3JkbnF0LTllOGQ2Zjk3LTA3YzgtNGRkNy04ODdkLTEyZDI2NmQxYWVmOS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KWHyoVNb91Z4WKZK4YgY0_9la-kngcSUsOemWxmR5GM",}}
                    />
                </View> 
                <View style={styles.headerContentStyle}>
                    <Text> TWICE<Text>MORE&MORE</Text></Text>
                </View>
            </View> 

             {/* --------------5-------------- */}  
                       
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                    <Image style={styles.thumbnailStyle}
                        source={{
                            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcc96d39-785d-4796-bb89-fede2ff7fe12/deawoz5-4cbea740-a36c-4cb0-be29-b736c51f34a6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjYzk2ZDM5LTc4NWQtNDc5Ni1iYjg5LWZlZGUyZmY3ZmUxMlwvZGVhd296NS00Y2JlYTc0MC1hMzZjLTRjYjAtYmUyOS1iNzM2YzUxZjM0YTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a8gu5YBvWEPkc-wI32Ye2tVIiUeOKl94EloWt4MhSLo",
                    }}
                    />
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: "https://pm1.narvii.com/6665/a00459541a365fef5db56446c3761d78e5c3ec22_hq.jpg",}}
                    />
                </View> 
                <View style={styles.headerContentStyle}>
                    <Text> TWICE<Text>MORE&MORE</Text></Text>
                </View>
            </View>                                   
        </ScrollView>   
    
    );
};

const styles = StyleSheet.create({

    textStyle: {
      fontSize: 24,
      
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
        justifyContent: "space-around", 
       alignItems: "flex-end",
    },
    cardContainerStyle: {
      borderColor: "#ddd",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      height:400,
      justifyContent: "center",
      alignItems: "center",
    },
    cardSectionStyle: {
      padding: 5,
      backgroundColor: "#fff",
      borderColor: "#ddd",
      borderBottomWidth: 1,
    },
    imageStyle: {
      
      
      height: 300,
      width: 300,
    },
  });

  export default Albumlist;