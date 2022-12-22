import {View, StyleSheet} from "react-native";
import {Taboola, TBL_PLACEMENT_TYPE} from "@taboola/react-native-plugin-3x";
import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';

const Widget = () => {
    const page = Taboola.getClassicPage(
        'https://www.example.com/articles?id=123',
        'article'
    ).init();

    const [Unit, unitRef] = page.useGetUnit(
        'Mid Article',
        'alternating-widget-without-video-1x4',
        TBL_PLACEMENT_TYPE.PAGE_MIDDLE
    );


    useEffect(() => {
        return () => {
            //clear page from hashMap on the bridge
            page.removePage();
        };
    }, [page]);

    useEffect(() => {
        unitRef.fetchContent();
    }, [unitRef]);
    return (
        <Unit
            onItemClick={(e) => console.log(e)}
            onAdReceiveFail={(e) => console.log(e)}
            onResize={(e) => {
                console.log(e, "new Height")

            }}
            style={{

                width: '100%',
                flex: 1,
            }}
        />
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
