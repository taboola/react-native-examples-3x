import * as React from 'react';
import {Linking, View, ScrollView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {ClassicUnitRefType, Taboola, TBL_PLACEMENT_TYPE, TBLClassicUnit} from "@taboola/react-native-plugin-3x";
import {useEffect, useState} from "react";

const FeedWithWEbView = () => {
    const page = Taboola.getClassicPage(
        'https://www.example.com/articles?id=123',
        'article'
    ).init();


    const [ref, setRef] = useState<ClassicUnitRefType | null>(null);

    useEffect(() => {
        return () => {
            page.remove();
        };
    }, [page]);

    useEffect(() => {
        ref?.fetchContent();
    }, [ref]);

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
        <View style={{
            flex: 1,
            width: '100%',
            overflow: 'hidden'
        }}>
            <ScrollView overScrollMode="never"  contentContainerStyle={{height: webViewHeight}}>
                <WebView
                    source={{uri: 'https://tofugear.com'}}
                    bounces={true}
                    scrollEnabled={false}
                    onMessage={onMessage}
                    injectedJavaScript="window.ReactNativeWebView.postMessage(Math.max(document.body.offsetHeight, document.body.scrollHeight));"
                    style={styles.content}
                    onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}

                />
                <TBLClassicUnit
                    onAdReceiveFail={() => {}}
                    ref={setRef}
                    onItemClick={(e) => console.log(e)}
                    onResize={(e) => {
                        console.log(e, 'new Height');
                    }}
                    extraProperties={{
                        enableHorizontalScroll: 'true',
                        keepDependencies: 'true',
                    }}
                    style={{
                        width: '100%',
                        backgroundColor: "red",
                    }}
                    publisherParams={{
                        placement: "Feed without video",
                        classicPageId: page?.pageId,
                        mode: "thumbs-feed-01",
                        placementType: TBL_PLACEMENT_TYPE.FEED,
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
        overflow: 'hidden',
        marginTop: 20,
    },
});

export default FeedWithWEbView
