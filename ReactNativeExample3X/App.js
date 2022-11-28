import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Widget() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <ArticleWithWidgetInFlatList />
      </View>
  );
}
function Feed() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FeedWithArticle />
      </View>
  );
}




function Main() {
  const navo = useNavigation();
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title={'Feed'}
            onPress={() => {
              navo.navigate('Feed');
            }}
        />
        <Button
            title={'Widget'}
            onPress={() => {
              navo.navigate('Widget');
            }}
        />


        <Button
            title={'Tabs Screen'}
            onPress={() => {
              navo.navigate('Tabs');
            }}
        />

      </View>
  );
}

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArticleWithWidgetInFlatList from "./src/screens/ArticleWithWidgetInFlatList";
import FeedWithArticle from "./src/screens/FeedWithArticle";


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="1" component={Feed} />
        <Tab.Screen name="2" component={Feed} />
        <Tab.Screen name="3" component={Feed} />
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Widget" component={Widget} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="LimiteFeed" component={Feed} />
          <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
