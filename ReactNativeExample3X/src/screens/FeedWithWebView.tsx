import * as React from 'react';
import {Linking, View, ScrollView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {
    ClassicUnitRefType,
    Taboola,
    TBL_PLACEMENT_TYPE,
    TBLClassicUnit,
    useNodeRef
} from "@taboola/react-native-plugin-3x";
import {useEffect, useMemo, useState} from "react";
import {useGetPageId} from "../hooks";

const FeedWithWEbView = () => {

    const page = useMemo(
        () =>
            Taboola.getClassicPage(
                'https://www.example.com/articles?id=123',
                'article'
            ),
        []
    );
    const [pageId] = useGetPageId(page);

    const [setRef] = useNodeRef((unit) => {
        //onComponent mount
        unit.fetchContent();

    });

    useEffect(() => {
        return () => {
            page.remove();
        };
    }, [page]);



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
                        classicPageId: pageId,
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
