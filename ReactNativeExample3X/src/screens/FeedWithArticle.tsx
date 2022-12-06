// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import React, { FC, useEffect, useState } from 'react';
//
// import {
//   Text,
//   ScrollView,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   TextProps,
//   View,
// } from 'react-native';
//
// // import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
// import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
//
//
// const ArticleWithWidgetInFlatList1 = () => {
//   const page = Taboola.getClassicPage(
//     'https://www.example.com/articles?id=123',
//     'article'
//   ).init();
//
//   const [Unit, unitRef] = page.useGetUnit(
//     'Feed without video',
//     'thumbs-feed-01',
//     TBL_PLACEMENT_TYPE.FEED
//   );
//
//   useEffect(() => {
//     return () => {
//       page
//         .removePage()
//         .then((e) => console.log(e))
//         .catch((e) => console.log(e));
//     };
//   }, [page]);
//
//   useEffect(() => {
//     unitRef.fetchContent();
//   }, [unitRef]);
//
//   return (
//     // if we get heigher height form the screen than the screen will not fully cover the all screen on android.
//     <ScrollView style={{ width: '100%' }}>
//       <View style={{ flex: 1 }}>
//         <AppText style={{ fontWeight: 'bold', fontSize: 40 }}>Feed </AppText>
//         <AppText>
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//           accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
//           ab illo inventore veritatis et quasi architecto beatae vitae dicta
//           sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//           aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
//           qui ratione voluptatem sequi nesciunt.
//         </AppText>
//       </View>
//       <View style={{ flex: 1 }}>
//         <Unit
//
//           onItemClick={(e) => console.log(e)}
//           onAdReceiveFail={(e) => console.log(e)}
//           onResize={(e) => {
//             console.log(e, 'new Height');
//           }}
//           style={{
//             width: '100%',
//             flex: 1,
//             backgroundColor:'red'
//           }}
//         />
//
//       </View>
//     </ScrollView>
//   );
// };
//
// export default ArticleWithWidgetInFlatList1;
//
// const AppText: FC<TextProps> = ({ ...props }) => {
//   return (
//     <Text
//       style={{
//         fontSize: 16,
//         marginVertical: 8,
//       }}
//       {...props}
//     />
//   );
// };
