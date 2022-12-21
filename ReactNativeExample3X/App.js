import * as React from 'react';
import {Button, View, SafeAreaView, StyleSheet, Image, Text, Platform} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import NavButton from './NavButton';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo: {
        width: 20,
        height: 20,
        paddingTop: 30,
        scale: 0.55
    },
    button: {
        width: 800,
        height: undefined,
        padding: 5
    }
});

function Widget() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ArticleWithWidgetInFlatList/>
        </View>
    );
}

function Feed() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FeedWithArticle/>
        </View>
    );
}

function FeedAndWebView() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FeedWithWebView/>
        </View>
    );
}

function MyTabs() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="1" component={Feed}/>
            <Tab.Screen name="2" component={Feed}/>
            <Tab.Screen name="3" component={Feed}/>
        </Tab.Navigator>
    );
}


function FlatList() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ArticleWithWidgetInFlatList/>
        </View>
    );
}

const MenuButton = (prop) => {
    const navo = useNavigation();
    var navigation = String(prop.navigate)
    return (
        <View style={styles.button}>
            <Button title={prop.name} onPress={() => {
                navo.navigate(navigation);
            }}>

            </Button>
        </View>
    );
}

function Main() {
    const getRNVersion = () => {
        const versionData = Platform.constants.reactNativeVersion;
        return `${versionData.major ?? ''}${
            versionData.minor ? `.${versionData.minor}` : ''
        }${versionData.patch ? `.${versionData.patch}` : ''}${
            versionData.prerelease ? `.${versionData.prerelease}` : ''
        }`
    }
    return (
        <View style={styles.container}>
            <Image style={{width: '100%', height: undefined, aspectRatio: 4}}
                   source={require('./assets/taboola-logo.png')}/>
            <Text style={{paddingTop: 15, fontSize: 15}}>Taboola SDK-3.x iOS / 3.x Android </Text>
            <Text style={{paddingTop: 10, fontSize: 15}}> Taboola React Native Plugin - 3.x </Text>
            <Text style={{paddingTop: 10, fontSize: 15}}>React Native version V{getRNVersion()} </Text>
            <MenuButton name="Feed" navigate="Feed"></MenuButton>
            <MenuButton name="Feed And WebView" navigate="FeedAndWebView"></MenuButton>
            <MenuButton name="Widget In Flat List" navigate="Widget"></MenuButton>
            <MenuButton name="Tabs Screen" navigate="Tabs"></MenuButton>
            <MenuButton name="Widget Dark" navigate="WidgetInFlatList"></MenuButton>
            <MenuButton name="Feed" navigate="Feed"></MenuButton>
            <MenuButton name="Feed" navigate="Feed"></MenuButton>
        </View>
    );
}

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ArticleWithWidgetInFlatList from "./src/screens/ArticleWithWidgetInFlatList";
import FeedWithArticle from "./src/screens/FeedWithArticle";
import FeedWithWebView from "./src/screens/FeedWithWebView";


const Stack = createNativeStackNavigator();

function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Main" component={Main}/>
                    <Stack.Screen name="Widget" component={Widget}/>
                    <Stack.Screen name="Feed" component={Feed}/>
                    <Stack.Screen name="LimiteFeed" component={Feed}/>
                    <Stack.Screen name="Tabs" component={MyTabs}/>
                    <Stack.Screen name="FeedAndWebView" component={FeedAndWebView}/>
                    <Stack.Screen name="WidgetInFlatList" component={FlatList}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;
