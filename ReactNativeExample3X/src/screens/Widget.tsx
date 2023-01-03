import {View, StyleSheet, Button} from "react-native";
import {ClassicUnitRefType, Taboola, TBL_PLACEMENT_TYPE, TBLClassicUnit} from "@taboola/react-native-plugin-3x";
import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';

const Widget = (props) => {
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
    return (
        <>
            <TBLClassicUnit
                onAdReceiveFail={() => {}}
                ref={setRef}
                onItemClick={(e) => console.log(e.nativeEvent)}
                onResize={(e) => {
                    console.log(e, 'new Height');
                }}
                extraProperties={{
                    enableHorizontalScroll: 'true',
                    keepDependencies: 'true',
                }}
                style={{
                    width: '100%',
                    flex: 1,
                    backgroundColor: "green",
                }}
                publisherParams={{
                    placement: "Mid Article",
                    classicPageId: page?.pageId,
                    mode: "alternating-widget-without-video-1x4",
                    placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
                }}
            />
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 600,
        height: 60,
        marginVertical: 20,
    },
});

export default Widget
