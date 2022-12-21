import * as React from 'react';
import { Image, Linking, Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import {Taboola, TBL_PLACEMENT_TYPE} from "@taboola/react-native-plugin-3x";
import {useEffect, useState} from "react";

const FeedWithWEbView=()=> {
    const page = Taboola.getClassicPage(
        'https://www.example.com/articles?id=123',
        'article'
    ).init();
    const [Unit, unitRef] = page.useGetUnit(
        'Mid Article',
        'alternating-widget-without-video-1x4',
        TBL_PLACEMENT_TYPE.PAGE_MIDDLE
    );
    const [height,setHeight] = useState(0)

    useEffect(() => {
        return () => {
            //clear page from hashMap on the bridge
            page.removePage();
        };
    }, [page]);

    useEffect(() => {
        unitRef.fetchContent();
    }, [unitRef]);

    const [webViewHeight, setWebViewHeight] = React.useState(null);

    const onMessage = (event) => {
        setWebViewHeight(Number(event.nativeEvent.data));
    }

    const onShouldStartLoadWithRequest = (request) => {
        if (request.navigationType === 'click') {
            // Open all new click-throughs in external browser.
            Linking.openURL(request.url);
            return false;
        }
        return true;
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{  height:  webViewHeight}}>

                <WebView
                    source={{ uri: 'https://tofugear.com' }}
                    bounces={true}
                    scrollEnabled={false}
                    onMessage={onMessage}
                    injectedJavaScript="window.ReactNativeWebView.postMessage(Math.max(document.body.offsetHeight, document.body.scrollHeight));"
                    style={styles.content}
                    onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
                />
                    <Unit
                        onResize={(e)=>setHeight(e)}
                        style={{
                            width: '100%',
                            backgroundColor:'red'
                        }}
                    />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    content: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        opacity: 0.99,
        overflow: 'hidden',
    },
});

export default FeedWithWEbView
