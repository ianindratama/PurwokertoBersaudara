import * as React from 'react';
import {View, TextInput, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import {IanScreen} from './DetailIan';
import {PanduScreen} from './DetailPandu';
import {AyubScreen} from './DetailAyub';
import {MushlihScreen} from './DetailMushlih';
import {IanPortofolioScreen} from './PortofolioIan';
import {PanduPortofolioScreen} from './PortofolioPandu';
import {AyubPortofolioScreen} from './PortofolioAyub';
import {MushlihPortofolioScreen} from './PortofolioMushlih';

const Stack = createNativeStackNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>

                <Stack.Screen name="Ian" component={IanScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Pandu" component={PanduScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Ayub" component={AyubScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Mushlih" component={MushlihScreen} options={{headerShown: false}}/>

                <Stack.Screen name="IanPortofolio" component={IanPortofolioScreen} options={{headerShown: false}}/>
                <Stack.Screen name="PanduPortofolio" component={PanduPortofolioScreen} options={{headerShown: false}}/>
                <Stack.Screen name="AyubPortofolio" component={AyubPortofolioScreen} options={{headerShown: false}}/>
                <Stack.Screen name="MushlihPortofolio" component={MushlihPortofolioScreen} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppHome;