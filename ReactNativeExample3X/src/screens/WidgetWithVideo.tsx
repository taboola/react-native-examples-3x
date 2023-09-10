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
import {
  ClassicUnitRefType,
  Taboola,
  TBL_PLACEMENT_TYPE,
  TBLClassicUnit,
  useNodeRef,
  useGetPageId
} from '@taboola/react-native-plugin-3x';



const ArticleWithWidgetInFlatList1 = () => {

  const page = useMemo(
      () =>
          Taboola.getClassicPage(
              'https://www.example.com/articles?id=123',
              'article'
          ),
      []
  );

  const [setRef] = useNodeRef((unit) => {
    //onComponent mount
    unit.fetchContent();

  });
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
        <AppText style={{ fontWeight: 'bold', fontSize: 40 }}>Feed And Video </AppText>
        <AppText>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </AppText>
        <AppText>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </AppText>
      </View>
      <View style={{ flex: 1 }}>
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
              placement: "widget-with-video",
              classicPageId: pageId,
              mode: "alternating-widget-with-video-1x4",
              placementType: TBL_PLACEMENT_TYPE.PAGE_BOTTOM,
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
