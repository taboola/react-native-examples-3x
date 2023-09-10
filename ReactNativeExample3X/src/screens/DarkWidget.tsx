// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useMemo,} from 'react';

import {
    Text,
    ScrollView,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TextProps,
    View,
} from 'react-native';

import {
    ClassicUnitRefType,
    Taboola,
    TBL_PLACEMENT_TYPE,
    TBLClassicUnit,
    useGetPageId, useNodeRef
} from '@taboola/react-native-plugin-3x';


const DarkWidget = () => {

    const page = useMemo(
        () =>
            Taboola.getClassicPage(
                'https://www.example.com/articles?id=123',
                'article'
            ),
        []
    );
    const [pageId] = useGetPageId(page);
    page.setPageExtraProperties({darkMode: "true"})


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
                <TBLClassicUnit
                    isAutoFetch={true}
                    publisherParams={{
                        classicPageId: pageId,
                        placement: "Below Article",
                        mode: "alternating-widget-without-video-1x4",
                        placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
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

