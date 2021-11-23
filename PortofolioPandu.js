import * as React from 'react';
import {View, Text, Button, ScrollView, Image, TouchableOpacity, ImageBackground, Linking} from 'react-native';

export const PanduPortofolioScreen = () => {
    return (
        <View style={{
            flex:1,
            backgroundColor:"#A9FFFA"
        }}>

            <View style={{flex:2.5, justifyContent:"center", alignItems:"center"}}>
                <View style={{width: "80%", backgroundColor: "#FF7474", borderRadius: 50, padding:10}}>
                    <Text style={{fontFamily: "Rubik", color: "#fff", textAlign: "center", fontSize: 30}}>
                        Portofolio
                    </Text>
                </View>
            </View>

            <View style={{
                flex:9.5,
                backgroundColor: "rgba(132, 181, 255, 0.76)",
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
            }}>
                <View style={{
                    flex: 1,
                    marginTop: 50,
                    marginLeft: 20,
                    marginRight: 20,
                }}>

                    <View style={{
                        flex: 4,
                        backgroundColor: "#fff",
                        elevation: 10,
                        borderWidth: 1, 
                        borderColor: "#4F4F4F",
                        borderRadius: 10,
                        marginBottom: 30,
                    }}>
                        <View style={{flex: 1, padding: 10, paddingLeft: 20}}>

                            <Text style={{fontFamily: "Rubik", color: "black", fontSize: 26, marginBottom: 10}}>
                                Education
                            </Text>

                            <Text style={{fontFamily: "Rubik", color: "black", fontSize: 20}}>
                                1. Telkom University;{"\n"}
                                <Text style={{color: "#fff"}}>1. </Text>Computer Engineering{"\n"}
                                2. SMA AL IRSYAD 
                            </Text>

                        </View>
                    </View>

                    <View style={{
                        flex: 4,
                        backgroundColor: "#fff",
                        elevation: 10,
                        borderWidth: 1, 
                        borderColor: "#4F4F4F",
                        borderRadius: 10,
                        marginBottom: 30,      
                    }}>
                        <View style={{flex: 1, padding: 10, paddingLeft: 20}}>
                            <Text style={{fontFamily: "Rubik", color: "black", fontSize: 26, marginBottom: 10}}>
                                Organizational Experience
                            </Text>

                            <Text style={{fontFamily: "Rubik", color: "black", fontSize: 20}}>
                                1. PMR{"\n"}
                                2. KIR
                            </Text>

                        </View>
                    </View>

                    <View style={{
                        flex: 4,
                        backgroundColor: "#fff",
                        elevation: 10,
                        borderWidth: 1, 
                        borderColor: "#4F4F4F",
                        borderRadius: 10,
                        marginBottom: 30, 
                        }}>
                            <View style={{flex: 1, padding: 10, paddingLeft: 20}}>
                    
                            <Text style={{fontFamily: "Rubik", color: "black", fontSize: 26, marginBottom: 10}}>
                                Skills
                            </Text>
                    
                            <Text style={{fontFamily: "Rubik", color: "black", fontSize: 20}}>
                                1. UI / UX Designer{"\n"}
                                2. Mobile Development{"\n"}
                                3. Data Analyst
                            </Text>
                    
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}