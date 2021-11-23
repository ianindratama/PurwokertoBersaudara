import * as React from 'react';
import {View, Text, Button, ScrollView, Image, TouchableOpacity, ImageBackground, Linking} from 'react-native';

export const PanduScreen = ( {navigation} ) => {
    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground source={require("./images/pandubg.png")} style={{flex: 1}}>

                <View style={{flex: 1, marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight: 10}}>
                    
                    <View style={{flex: 2.5, marginTop: 20, marginBottom: 20, alignItems: "center"}}>
                        <Image source ={require("./images/panducircle.png")} style= {{height:"100%", resizeMode:"contain"}}/>
                    </View>

                    <View style={{flex:1.5, alignItems: "center"}}>
                        <Text style={{fontFamily: "Rubik", color:"#fff", textAlign: "center", fontSize: 24}}>
                            Pandu Adhimakayasa {"\n"}
                            1103190113
                        </Text>
                    </View>

                    <View style={{flex:6.5}}>

                        <View style={{flex: 5, backgroundColor: "#C3D8DE", borderRadius: 10}}>
                            
                            <View style={{flex:6.5, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>

                                <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL("https://www.instagram.com/panduadisaster/")} style={{marginLeft:20}}>
                                    <Image source={require("./images/instagram.png")} style={{height: "100%", resizeMode: "contain"}}/>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL('https://www.facebook.com/')}>
                                    <Image source={require("./images/facebook.png")} style={{height: "100%", resizeMode: "contain"}}/>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL('https://www.twitter.com/')}>
                                    <Image source={require("./images/twitter.png")} style={{height: "100%", resizeMode: "contain"}}/>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL('https://www.github.com/')} style={{marginRight: 20}}>
                                    <Image source={require("./images/github.png")} style={{height: "100%", resizeMode: "contain"}}/>
                                </TouchableOpacity>

                            </View>
                        
                            <View style={{flex: 4.5}} />

                        </View>

                        <View style={{flex: 7, backgroundColor: "#FDE3E3", borderRadius: 10, marginTop: -75, marginLeft: 5, marginRight: 5, marginBottom: 20}}>
                            <View style={{flex: 4, justifyContent: "center", alignItems: "center"}}>
                                <Text style={{width: "80%", fontFamily: "Rubik", color: "black", textAlign: "center", fontSize: 24, borderBottomWidth: 3, borderBottomColor: "black", paddingBottom: 10, marginTop: -10}}>
                                    About Me
                                </Text>
                            </View>
                            <View style={{flex: 8, justifyContent: "center", alignItems: "center"}}>
                                <Text style={{width: "80%", fontFamily: "Rubik", color: "black", textAlign: "center", fontSize: 20, paddingBottom: 50}}>
                                    Man Jadda Wajada
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flex: 1.5, justifyContent: "center", alignItems: "center"}}>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('PanduPortofolio')} style={{width: "80%", height: "60%", backgroundColor: "rgba(94, 211, 248, 0.7)", borderRadius: 50}}>
                            <Text style={{width: "100%", height: "100%", fontFamily: "Rubik", color: "black", textAlign: "center", fontSize: 24, textAlignVertical: "center"}}>
                                Portofolio
                            </Text>
                        </TouchableOpacity> 
                    </View>

                </View>

            </ImageBackground>
        </View>
    )
}