import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import AlbumData from "../json/albumlist.json";
import AlbumDetail from "./AlbumDetail";
const Albumlist=()=>{
    return(
        <ScrollView>
            <AlbumDetail album={AlbumData[0]}/>
            <AlbumDetail album={AlbumData[1]}/>
            <AlbumDetail album={AlbumData[2]}/>
            <AlbumDetail album={AlbumData[3]}/>
            <AlbumDetail album={AlbumData[4]}/>
            {/* <View style={styles.cardContainerStyle}>
              
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri: AlbumData[0].image}}
                    />
                </View> 
                
                <View style={styles.headerContentStyle1}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{uri: AlbumData[0].logo}}
                        />   
                    </View> 
                    <View>
                        <Text style={styles.textStyle1}>{AlbumData[0].title}</Text>
                        <Text style={styles.textStyle2}>{AlbumData[0].artist}</Text>
                    </View>    
                </View>
               
            </View>
  
                       
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
                            source={{uri: AlbumData[1].logo }}
                        />
                    </View>
                    <View>
                        <Text style={styles.textStyle3}>{AlbumData[1].title}</Text>
                        <Text style={styles.textStyle4}>{AlbumData[1].artist}</Text>
                    </View>    
                </View>

            </View>


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
                            source={{uri: AlbumData[2].logo}}
                        />
                    </View>
                    <View>
                        <Text style={styles.textStyle5}>{AlbumData[2].title}</Text>
                        <Text style={styles.textStyle6}>{AlbumData[2].artist}</Text>
                    </View>
                </View>

            </View>

                       
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
                            source={{uri: AlbumData[3].logo }}
                        />
                    </View>
                    <View>
                        <Text style={styles.textStyle7}>{AlbumData[3].title}</Text>
                        <Text style={styles.textStyle8}>{AlbumData[3].artist}</Text>
                    </View>
                </View>
            </View> 


            <View style={styles.cardContainerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Image 
                        style={styles.imageStyle}
                        source={{uri: AlbumData[4].image}}
                    />
                </View> 
                <View style={styles.headerContentStyle5}> 
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{uri: AlbumData[4].logo}}
                        />           
                    </View>
                    <View>
                        <Text style={styles.textStyle9}>{AlbumData[4].title}</Text>
                        <Text style={styles.textStyle0}>{AlbumData[4].artist}</Text>
                    </View>
                </View>
            </View>                                    */}
        </ScrollView>   
    
    );
};

  export default Albumlist;