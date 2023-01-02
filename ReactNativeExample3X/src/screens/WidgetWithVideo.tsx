// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, useEffect, useState } from 'react';

import {
  Text,
  ScrollView,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TextProps,
  View,
} from 'react-native';

// import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/react-native-plugin-3x';


const ArticleWithWidgetInFlatList1 = () => {
  const page = Taboola.getClassicPage(
    'https://www.example.com/articles?id=123',
    'article'
  ).init();

  const [Feed, feedRef] = page.useGetUnit(
    'widget-with-video',
    'alternating-widget-with-video-1x4',
    TBL_PLACEMENT_TYPE.PAGE_BOTTOM
  );

  useEffect(() => {
    return () => {
      page
        .removePage()
        .then((e) => console.log(e))
        .catch((e) => console.log(e));
    };
  }, [page]);

  useEffect(() => {
    feedRef.fetchContent();
  }, [feedRef]);


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
        <Feed

          onItemClick={(e) => console.log(e)}
          onAdReceiveFail={(e) => console.log(e)}
          onResize={(e) => {
            console.log(e, 'new Height');
          }}
          style={{
            width: '100%',
            flex: 1
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
