import React, { FC, useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { Text, ScrollView, TextProps, View, StyleSheet, } from 'react-native';
import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/react-native-plugin-3x';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#61dafb"
  },
});

const ArticleWithWidgetInFlatList1 = () => {
  const page = Taboola.getClassicPage(
    'https://www.example.com/articles?id=123',
    'article'
  ).init();

  const [Unit, unitRef] = page.useGetUnit(
    'Feed without video',
    'thumbs-feed-01',
    TBL_PLACEMENT_TYPE.FEED
  );

  useEffect(() => {
    return () => {
      page
        .removePage()
        .then((e) => console.log(e))
        .catch((e) => console.log(e));
    };
  }, [page]);

  useEffect(() => {
    unitRef.fetchContent();
  }, [unitRef]);

  return (

    // if we get heigher height form the screen than the screen will not fully cover the all screen on android.
    <ScrollView style={{ width: '100%' }}>


      <View style={{ flex: 1 }}>


        <AppText style={{ fontWeight: 'bold', fontSize: 40 }}>Feed With WebView</AppText>
        <AppText>
          Below is a webView element followed by a Taboola feed.
        </AppText>
      </View>

      <View
        renderToHardwareTextureAndroid={true}>
        <WebView nestedScrollEnabled
          source={{ uri: 'https://www.taboola.com/' }}
          style={{ height: 300 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Unit

          onItemClick={(e) => console.log(e)}
          onAdReceiveFail={(e) => console.log(e)}
          onResize={(e) => {
            console.log(e, 'new Height');
          }}
          style={{
            width: '100%',
            flex: 1,
          }}
        />



      </View>


    </ScrollView>
  );
};

export default ArticleWithWidgetInFlatList1;

const AppText: FC<TextProps> = ({ ...props }) => {
  return (
    <Text
      style={{
        fontSize: 16,
        marginVertical: 8,
      }}
      {...props}
    />
  );
};
