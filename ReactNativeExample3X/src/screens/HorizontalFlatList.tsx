import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';

import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TextProps, ScrollView, Dimensions,
} from 'react-native';

import Widget from "./Widget";

const SCENES = ['WIDGET', 'WIDGET', 'WIDGET'];

const HorizontalFlatList = () => {
    // const ref = useRef(null);
    const p1 = <AppText key="p1">{paragraphs[0]}</AppText>;


    const renderWidgetScene = () => (
        <ScrollView contentContainerStyle={{flex: 1, width: Dimensions.get('window').width}}>
            {p1}
            <Widget/>
        </ScrollView>
    );

    const renderListItem = ({item}) => {
        switch (item) {
            case 'WIDGET':
                return renderWidgetScene();
            case 'WIDGET':
                return renderWidgetScene();
            case 'WIDGET':
                return renderWidgetScene();
            default:
                return <View/>;
        }
    };

    return (
        <View style={{flex: 1}}>
            <Text
                style={{
                    fontSize: 26,
                    marginVertical: 10,
                }}
            >
                Here's a Taboola Widget in FlatList
            </Text>
            <FlatList
                data={SCENES}
                renderItem={renderListItem}
                horizontal
                removeClippedSubviews={false}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 30,
                }}
                keyExtractor={item => item}
                onEndReachedThreshold={0.1}
                directionalLockEnabled
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={0}
            />
        </View>
    );
};

export default HorizontalFlatList;
const paragraphs = [
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
];

const AppText: FC<TextProps> = ({...props}) => {
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
