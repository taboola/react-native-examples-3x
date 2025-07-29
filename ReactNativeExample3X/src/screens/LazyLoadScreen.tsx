// import React, { FC, useMemo } from 'react';
// import {
//   Taboola,
//   TBL_PLACEMENT_TYPE,
//   TBLClassicUnit,
//   useGetPageId,
//   useNodeRef,
// } from '@taboola/react-native-plugin-3x';
// import { StyleSheet, Text, TextProps, View } from 'react-native';
// import { FlashList } from '@shopify/flash-list';
// import {
//   FeedWithoutVideo,
//   GREEN,
//   MidArticle,
//   mode_feed_1,
//   mode_widget_without_video_4_cards, PAGE_TYPE, PAGE_URL,
// } from './constants';
//
//
// /**
//  * This screen's purpose is to showcase lazy load our widgets in their screen.
//  * This is done using a FlashList and estimatedItemSize. There are 6 widgets here plus a feed as a footer.
//  * Due to the lazy loading nature, when the user scrolls down/up, Taboola units get reloaded which is
//  * against our guidelines
//  *
//  */
// const LazyLoadScreen = () => {
//   const [setRef1] = useNodeRef((node) => {
//     //onComponent mount
//     node.fetchContent();
//   });
//
//   const [setRef2] = useNodeRef((node) => {
//     //onComponent mount
//     node.fetchContent();
//   });
//
//   const [setRef3] = useNodeRef((node) => {
//     //onComponent mount
//     node.fetchContent();
//   });
//
//   const [setRef4] = useNodeRef((node) => {
//     //onComponent mount
//     node.fetchContent();
//   });
//
//   const [setRef5] = useNodeRef((node) => {
//     //onComponent mount
//     node.fetchContent();
//   });
//
//   const page = useMemo(
//     () =>
//       Taboola.getClassicPage(
//         PAGE_URL,
//         PAGE_TYPE
//       ),
//     []
//   );
//
//   const [pageId] = useGetPageId(page);
//
//   const texts:
//     | readonly { type: string; index: number; value: JSX.Element }[]
//     | (React.ReactElement<
//         any,
//         string | React.JSXElementConstructor<any>
//       > | null)[]
//     | null
//     | undefined = [];
//   for (let i = 0; i < 150; i++) {
//     if (i === 10) {
//       texts.push({
//         type: 'taboola',
//         index: i,
//         value: (
//           <View style={styles.container}>
//             <TBLClassicUnit
//               ref={setRef1}
//               extraProperties={{
//                 enableHorizontalScroll: 'true',
//                 keepDependencies: 'true',
//               }}
//               style={{
//                 width: '100%',
//                 flex: 1,
//                 backgroundColor: GREEN,
//               }}
//               publisherParams={{
//                 placement: MidArticle,
//                 classicPageId: pageId,
//                 mode: mode_widget_without_video_4_cards,
//                 placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//               }}
//             />
//           </View>
//         ),
//       });
//     } else if (i === 20) {
//       texts.push({
//         type: 'taboola',
//         index: i,
//         value: (
//           <View style={styles.container}>
//             <TBLClassicUnit
//               ref={setRef2}
//               extraProperties={{
//                 enableHorizontalScroll: 'true',
//                 keepDependencies: 'true',
//               }}
//               style={{
//                 width: '100%',
//                 flex: 1,
//                 backgroundColor: GREEN,
//               }}
//               publisherParams={{
//                 placement: MidArticle,
//                 classicPageId: pageId,
//                 mode: mode_widget_without_video_4_cards,
//                 placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//               }}
//             />
//           </View>
//         ),
//       });
//     } else if (i === 30) {
//       texts.push({
//         type: 'taboola',
//         index: i,
//         value: (
//           <View style={styles.container}>
//             <TBLClassicUnit
//               ref={setRef3}
//               extraProperties={{
//                 enableHorizontalScroll: 'true',
//                 keepDependencies: 'true',
//               }}
//               style={{
//                 width: '100%',
//                 flex: 1,
//                 backgroundColor: GREEN,
//               }}
//               publisherParams={{
//                 placement: MidArticle,
//                 classicPageId: pageId,
//                 mode: mode_widget_without_video_4_cards,
//                 placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//               }}
//             />
//           </View>
//         ),
//       });
//     } else if (i === 40) {
//       texts.push({
//         type: 'taboola',
//         index: i,
//         value: (
//           <View style={styles.container}>
//             <TBLClassicUnit
//               ref={setRef4}
//               extraProperties={{
//                 enableHorizontalScroll: 'true',
//                 keepDependencies: 'true',
//               }}
//               style={{
//                 width: '100%',
//                 flex: 1,
//                 backgroundColor: GREEN,
//               }}
//               publisherParams={{
//                 placement: MidArticle,
//                 classicPageId: pageId,
//                 mode: mode_widget_without_video_4_cards,
//                 placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//               }}
//             />
//           </View>
//         ),
//       });
//     } else if (i === 50) {
//       texts.push({
//         type: 'taboola',
//         index: i,
//         value: (
//           <View style={styles.container}>
//             <TBLClassicUnit
//               ref={setRef5}
//               extraProperties={{
//                 enableHorizontalScroll: 'true',
//                 keepDependencies: 'true',
//               }}
//               style={{
//                 width: '100%',
//                 flex: 1,
//                 backgroundColor: GREEN,
//               }}
//               publisherParams={{
//                 placement: MidArticle,
//                 classicPageId: pageId,
//                 mode: mode_widget_without_video_4_cards,
//                 placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//               }}
//             />
//           </View>
//         ),
//       });
//     } else {
//       texts.push({
//         type: 'static',
//         index: i,
//         value: (
//           <AppText key="p{i+1}">
//             <Text style={{ fontWeight: 'bold', fontSize: 30 }}>P{i + 1}</Text>
//             {'\n'}
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//             ultrices gravida velit. Quisque lacinia dui elit, id suscipit metus
//             egestas sed. Nulla facilisi. Nulla euismod felis a lectus malesuada,
//             maximus finibus eros sodales. Nullam gravida risus eget condimentum
//             lobortis. Suspendisse potenti. Integer quis nisi sed urna rutrum
//             elementum. Sed gravida rutrum efficitur. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Aenean ultrices gravida velit. Quisque
//             lacinia dui elit, id suscipit metus egestas sed. Nulla facilisi.
//             Nulla euismod felis a lectus malesuada, maximus finibus eros
//             sodales. Nullam gravida risus eget condimentum lobortis. Suspendisse
//             potenti. Integer quis nisi sed urna rutrum elementum. Sed gravida
//             rutrum efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
//             elit. Aenean ultrices gravida velit. Quisque lacinia dui elit, id
//             suscipit metus egestas sed. Nulla facilisi. Nulla euismod felis a
//             lectus malesuada, maximus finibus eros sodales. Nullam gravida risus
//             eget condimentum lobortis. Suspendisse potenti. Integer quis nisi
//             sed urna rutrum elementum. Sed gravida rutrum efficitur. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Aenean ultrices gravida
//             velit. Quisque lacinia dui elit, id suscipit metus egestas sed.
//             Nulla facilisi. Nulla euismod felis a lectus malesuada, maximus
//             finibus eros sodales. Nullam gravida risus eget condimentum
//             lobortis. Suspendisse potenti. Integer quis nisi sed urna rutrum
//             elementum. Sed gravida rutrum efficitur.
//           </AppText>
//         ),
//       });
//     }
//   }
//
//   const footer = () => {
//     return (
//       <View style={styles.container}>
//         <TBLClassicUnit
//           ref={setRef5}
//           extraProperties={{
//             enableHorizontalScroll: 'true',
//             keepDependencies: 'true',
//           }}
//           style={{
//             width: '100%',
//             flex: 1,
//             backgroundColor: GREEN,
//           }}
//           publisherParams={{
//             placement: FeedWithoutVideo,
//             classicPageId: pageId,
//             mode: mode_feed_1,
//             placementType: TBL_PLACEMENT_TYPE.PAGE_BOTTOM,
//           }}
//         />
//       </View>
//     );
//   };
//
//   return (
//     <View style={{ height: '100%' }}>
//       <Text
//         style={{
//           fontSize: 26,
//           marginVertical: 10,
//         }}
//       >
//         FlashList Example
//       </Text>
//
//       <FlashList
//         data={texts}
//         renderItem={({ item }) => {
//           switch (item.type) {
//             case 'taboola first widget':
//               return (
//                 <View style={styles.container}>
//                   <TBLClassicUnit
//                     ref={setRef1}
//                     extraProperties={{
//                       enableHorizontalScroll: 'true',
//                       keepDependencies: 'true',
//                     }}
//                     style={{
//                       width: '100%',
//                       flex: 1,
//                       backgroundColor: GREEN,
//                     }}
//                     publisherParams={{
//                       placement: MidArticle,
//                       classicPageId: pageId,
//                       mode: mode_widget_without_video_4_cards,
//                       placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//                     }}
//                   />
//                 </View>
//               );
//             case 'taboola second widget':
//               return (
//                 <View style={styles.container}>
//                   <TBLClassicUnit
//                     ref={setRef2}
//                     extraProperties={{
//                       enableHorizontalScroll: 'true',
//                       keepDependencies: 'true',
//                     }}
//                     style={{
//                       width: '100%',
//                       flex: 1,
//                       backgroundColor: GREEN,
//                     }}
//                     publisherParams={{
//                       placement: MidArticle,
//                       classicPageId: pageId,
//                       mode: mode_widget_without_video_4_cards,
//                       placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//                     }}
//                   />
//                 </View>
//               );
//             case 'taboola third widget':
//               return (
//                 <View style={styles.container}>
//                   <TBLClassicUnit
//                     ref={setRef3}
//                     extraProperties={{
//                       enableHorizontalScroll: 'true',
//                       keepDependencies: 'true',
//                     }}
//                     style={{
//                       width: '100%',
//                       flex: 1,
//                       backgroundColor: GREEN,
//                     }}
//                     publisherParams={{
//                       placement: MidArticle,
//                       classicPageId: pageId,
//                       mode: mode_widget_without_video_4_cards,
//                       placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//                     }}
//                   />
//                 </View>
//               );
//             case 'taboola fourth widget':
//               return (
//                 <View style={styles.container}>
//                   <TBLClassicUnit
//                     ref={setRef4}
//                     extraProperties={{
//                       enableHorizontalScroll: 'true',
//                       keepDependencies: 'true',
//                     }}
//                     style={{
//                       width: '100%',
//                       flex: 1,
//                       backgroundColor: GREEN,
//                     }}
//                     publisherParams={{
//                       placement: MidArticle,
//                       classicPageId: pageId,
//                       mode: mode_widget_without_video_4_cards,
//                       placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//                     }}
//                   />
//                 </View>
//               );
//             case 'taboola fifth widget':
//               return (
//                 <View style={styles.container}>
//                   <TBLClassicUnit
//                     ref={setRef4}
//                     extraProperties={{
//                       enableHorizontalScroll: 'true',
//                       keepDependencies: 'true',
//                     }}
//                     style={{
//                       width: '100%',
//                       flex: 1,
//                       backgroundColor: GREEN,
//                     }}
//                     publisherParams={{
//                       placement: MidArticle,
//                       classicPageId: pageId,
//                       mode: mode_widget_without_video_4_cards,
//                       placementType: TBL_PLACEMENT_TYPE.PAGE_MIDDLE,
//                     }}
//                   />
//                 </View>
//               );
//             default:
//               let element = texts[item.index - 1];
//               return element ? element.value : null;
//           }
//         }}
//         estimatedItemSize={81}
//         ListFooterComponent={footer}
//       />
//     </View>
//   );
// };
//
// export default LazyLoadScreen;
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
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
