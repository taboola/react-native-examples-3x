import {View, StyleSheet, Button, Platform} from "react-native";
import {
    ClassicUnitRefType,
    Taboola,
    TBL_PLACEMENT_TYPE,
    TBLClassicUnit,
    useNodeRef
} from "@taboola/react-native-plugin-3x";
import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';

const Widget = (props) => {


    const [setRef] = useNodeRef((unit) => {
        //onComponent mount
        unit.fetchContent();

    });
    useEffect(() => {
        return () => {
            props.page.remove();
        };
    }, [props.page]);


    return (
        <>

            <TBLClassicUnit

                publisherParams={{
                    classicPageId: props.page?.pageId,
                    placement: "Mid Article",
                    mode: "alternating-widget-without-video-1x4",
                    placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
                }}
                ref={setRef}
                style={{
                    width: '100%',
                    flex: 1,
                }}
                {...props}

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
