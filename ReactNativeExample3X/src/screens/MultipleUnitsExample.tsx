import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextProps,
    View,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
// import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
import {
    TBLClassicUnit,
    ClassicUnitRefType,
    Taboola,
    TBL_PLACEMENT_TYPE,
} from '@taboola/react-native-plugin-3x';


const MultipleUnitsExample = () => {
    const p1 = <AppText key="p1">{paragraphs[0]}</AppText>;
    const p2 = <AppText key="p2">{paragraphs[1]}</AppText>;
    const p3 = <AppText key="p2">{paragraphs[2]}</AppText>;
    const p4 = <AppText key="p2">{paragraphs[3]}</AppText>;
    const p5 = <AppText key="p2">{paragraphs[4]}</AppText>;
    const p6 = <AppText key="p2">{paragraphs[4]}</AppText>;

    const [ref, setRef] = useState<ClassicUnitRefType | null>(null);
    const [ref2, setRef2] = useState<ClassicUnitRefType | null>(null);
    const [ref3, setRef3] = useState<ClassicUnitRefType | null>(null);
    const [ref4, setRef4] = useState<ClassicUnitRefType | null>(null);
    const [ref5, setRef5] = useState<ClassicUnitRefType | null>(null);
    const [ref6, setRef6] = useState<ClassicUnitRefType | null>(null);

    const page = Taboola.getClassicPage(
        'https://www.example.com/articles?id=123',
        'article'
    ).init();

    useEffect(() => {
        return () => {
            page?.remove();
        };
    }, [page]);

    useEffect(() => {
        ref?.fetchContent();
    }, [ref]);
    useEffect(() => {
        ref2?.fetchContent();
    }, [ref2]);
    useEffect(() => {
        ref3?.fetchContent();
    }, [ref3]);
    useEffect(() => {
        ref4?.fetchContent();
    }, [ref4]);
    useEffect(() => {
        ref5?.fetchContent();
    }, [ref5]);
    useEffect(() => {
        ref6?.fetchContent();
    }, [ref6]);

    useEffect(() => {
        return () => {
            console.log('clean');
            page.remove();
        };
    }, [page]);

    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{
                    fontSize: 26,
                    marginVertical: 10,
                }}
            >
                Here's a Taboola Widget in FlatList
            </Text>
            <Button
                title={'refresh page'}
                onPress={() => {
                    page.refresh();
                }}
            />
            <FlatList
                data={[
                    { key: 'p6' },
                    { key: 'taboola2' },
                    { key: 'p1' },
                    { key: 'taboola3' },
                    { key: 'p2' },
                    { key: 'taboola4' },
                    { key: 'p3' },
                    { key: 'taboola6' },
                    { key: 'p4' },
                    { key: 'taboola5' },
                    { key: 'p5' },
                    { key: 'taboola' },
                ]}
                renderItem={({ item }) => {
                    switch (item.key) {
                        case 'taboola2':
                            return (
                                <View style={{ flex: 1 }}>
                                    <Button
                                        title={'refresh first Widget'}
                                        onPress={() => {
                                            ref?.refresh();
                                        }}
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
                                            flex: 1,
                                            backgroundColor: "red",
                                        }}
                                        publisherParams={{
                                            placement: "Mid Article",
                                            classicPageId: page?.pageId,
                                            mode: "alternating-widget-with-video-1x1",
                                            placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
                                        }}
                                    />
                                </View>
                            );
                        case 'taboola5':
                            return (
                                <View style={{ flex: 1 }}>
                                    <TBLClassicUnit
                                        onAdReceiveFail={() => {}}
                                        ref={setRef2}
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
                                            flex: 1,
                                            backgroundColor: "red",
                                        }}
                                        publisherParams={{
                                            placement: "Mid Article",
                                            classicPageId: page?.pageId,
                                            mode: "alternating-widget-with-video-1x1",
                                            placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
                                        }}
                                    />
                                </View>
                            );
                        case 'taboola6':
                            return (
                                <View style={{ flex: 1 }}>
                                    <TBLClassicUnit
                                        onAdReceiveFail={() => {}}
                                        ref={setRef3}
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
                                            flex: 1,
                                            backgroundColor: "red",
                                        }}
                                        publisherParams={{
                                            placement: "Mid Article",
                                            classicPageId: page?.pageId,
                                            mode: "alternating-widget-with-video-1x1",
                                            placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
                                        }}
                                    />
                                </View>
                            );
                        case 'p2':
                            return p2;
                        case 'p3':
                            return p3;
                        case 'p1':
                            return p1;
                        case 'p5':
                            return p5;
                        case 'p6':
                            return p6;
                        case 'taboola4':
                            return (
                                <View style={{ flex: 1 }}>
                                    <TBLClassicUnit
                                        onAdReceiveFail={() => {}}
                                        ref={setRef4}
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
                                            flex: 1,
                                            backgroundColor: "red",
                                        }}
                                        publisherParams={{
                                            placement: "Mid Article",
                                            classicPageId: page?.pageId,
                                            mode: "alternating-widget-with-video-1x1",
                                            placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
                                        }}
                                    />
                                </View>
                            );
                        case 'taboola3':
                            return (
                                <View style={{ flex: 1 }}>
                                    <TBLClassicUnit
                                        onAdReceiveFail={() => {}}
                                        ref={setRef5}
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
                                            flex: 1,
                                            backgroundColor: "red",
                                        }}
                                        publisherParams={{
                                            placement: "Mid Article",
                                            classicPageId: page?.pageId,
                                            mode: "alternating-widget-with-video-1x1",
                                            placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
                                        }}
                                    />
                                </View>
                            );
                        case 'p4':
                            return p4;
                        case 'taboola':
                            return (
                                <View style={styles.container}>
                                    <TBLClassicUnit
                                        onAdReceiveFail={() => {}}
                                        ref={setRef6}
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
                                            flex: 1,
                                            backgroundColor: "red",
                                        }}
                                        publisherParams={{
                                            placement: "Below Article Thumbnails Limited-20",
                                            classicPageId: page?.pageId,
                                            mode: "thumbs-feed-01",
                                            placementType: TBL_PLACEMENT_TYPE.FEED,
                                        }}
                                    />
                                </View>
                            );
                        default:
                            return null;
                    }
                }}
            />
        </View>
    );
};

const paragraphs = [
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
];

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

export default MultipleUnitsExample;
