// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useEffect, useMemo, useState} from 'react';

import {
  Text,
  ScrollView,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TextProps,
  View,
} from 'react-native';

// import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
import {Taboola, TBL_PLACEMENT_TYPE, TBLClassicUnit, useGetPageId} from "@taboola/react-native-plugin-3x";


const ArticleWithWidgetInFlatList1 = () => {

    const page = useMemo(
        () =>
            Taboola.getClassicPage(
                'https://www.example.com/articles?id=123',
                'article'
            ),
        []
    );
    const [pageId] = useGetPageId(page);

  useEffect(() => {
    return () => {
      page.remove();
    };
  }, [page]);



  return (
    // if we get heigher height form the screen than the screen will not fully cover the all screen on android.
    <ScrollView style={{ width: '100%' }}>
      <View style={{ flex: 1 }}>
        <AppText style={{ fontWeight: 'bold', fontSize: 40 }}>Feed </AppText>
        <AppText>
          Sed ut perspiciatiss unde omnis iste natus error sit voluptatem
          accusantium doloresmque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugitd, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </AppText>
      </View>
      <View style={{ flex: 1 }}>
        <TBLClassicUnit
            onAdReceiveFail={() => {}}
            isAutoFetch={true}
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
              placement: "Feed without video",
              classicPageId: pageId,
              mode: "thumbs-feed-01",
              placementType: TBL_PLACEMENT_TYPE.FEED,
            }}
        />

      </View>
    </ScrollView>
  );
};

export default ArticleWithWidgetInFlatList1;

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
