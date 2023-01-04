// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useEffect, useState} from 'react';

import {
    Text,
    ScrollView,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TextProps,
    View, Button,
} from 'react-native';

// import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
import {Taboola, TBL_PLACEMENT_TYPE} from '@taboola/react-native-plugin-3x';
import Widget from "./Widget";


const DarkWidget = () => {
    const page = Taboola.getClassicPage(
        'https://www.example.com/articles?id=123',
        'article'
    ).init();

    return (
        // if we get heigher height form the screen than the screen will not fully cover the all screen on android.
        <ScrollView style={{width: '100%'}}>
            <View style={{flex: 1}}>
                <AppText style={{fontWeight: 'bold', fontSize: 40}}>Dark Widget</AppText>
                <AppText>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt.
                </AppText>
            </View>

            <View style={{flex: 1}}>
                <Widget
                    page={page}
                    extraProperties={{
                    "darkMode": "true"
                }}
                />

            </View>
        </ScrollView>
    );
};

export default DarkWidget;

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
