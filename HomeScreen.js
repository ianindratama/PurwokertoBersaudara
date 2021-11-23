import * as React from 'react';
import {View, Text, Button, ScrollView, Image, TouchableOpacity, ImageBackground} from 'react-native';

export const HomeScreen = ( {navigation} ) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
        }}>

            <View style={{flex: 3}}>
                <ImageBackground source={require("./images/wave.png")} style={{height: "110%", resizeMode: "contain", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontWeight: "bold", color: "#fff", fontSize: 30, textShadowRadius: 25, marginLeft: 20, marginRight: 20, marginBottom: 20}}>Purwokerto Bersaudara</Text>
                </ImageBackground>
            </View>

            <View style={{flex: 9, marginLeft: 10, marginRight: 10, marginBottom: 20}}>

                <View style={{flex: 6, flexDirection: "row", marginBottom: 20}}>

                    <View style={{flex: 3, flexDirection: "column", backgroundColor: "white", marginRight: 10}}> 
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Ian')}>
                            <Image style={{width: "100%", height: "100%", resizeMode: 'contain'}} source={require('./images/ian.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 3, backgroundColor: "white", marginLeft: 10}}> 
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Pandu')}>
                            <Image style={{width: "100%", height: "100%", resizeMode: 'contain'}} source={require('./images/Pandu.png')} />
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={{flex: 6, flexDirection: "row"}}>

                    <View style={{flex: 3, flexDirection: "column", backgroundColor: "white", marginRight: 10}}> 
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Ayub')}>
                            <Image style={{width: "100%", height: "100%", resizeMode: 'contain'}} source={require('./images/Ayub.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 3, backgroundColor: "white", marginLeft: 10}}> 
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Mushlih')}>
                            <Image style={{width: "100%", height: "100%", resizeMode: 'contain'}} source={require('./images/Mushlih.png')} />
                        </TouchableOpacity>
                    </View>
                    
                </View>

            </View>

        </View>

    )
}