// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import React, { FC, useEffect, useLayoutEffect } from 'react';
//
// import {
//     Text,
//     ScrollView,
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     TextProps,
// } from 'react-native';
//
// // import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
// import { Taboola, TBL_PLACEMENT_TYPE } from '@taboola/rnt-dev';
//
// const LimitedFeed = () => {
//     // const [unitRef, setRef] = useState<any>(null);
//     // const feedHeight = Dimensions.get('window').height * 2;
//     // if (Platform.OS === 'android') {
//     //   //this update the height anyway, on IOS its cause to a problem when switching between landscape to portrait
//     //   Dimensions.addEventListener('change', (res) => {
//     //     setHeight(res.window.height);
//     //   });
//     // }
//
//
//     // useEffect(() => {
//     //   setHeight(feedHeight);
//     //   console.log(height);
//     // }, [feedHeight]);
//
//     const page = Taboola.getClassicPage(
//         'https://www.example.com/articles?id=123',
//         'article'
//     ).init();
//
//     const [Unit, unitRef] = page.useGetUnit(
//         'Below Article Thumbnails Limited-20',
//         'thumbs-feed-01',
//         TBL_PLACEMENT_TYPE.FEED
//     );
//     // const pa = page.pageId
//     // useEffect(()=>{
//     //
//     //   if (pa){
//     //     page.getPageViewId().then(re=>console.log(re))
//     //   }
//     // },[pa])
//
//     useEffect(() => {
//         return () => {
//             console.log('clean');
//             page.removePage();
//         };
//     }, [page]);
//
//     useLayoutEffect(() => {
//         unitRef.fetchContent();
//     }, [unitRef]);
//     return (
//         // if we get heigher height form the screen than the screen will not fully cover the all screen on android.
//         <ScrollView style={{ width: '100%' }}>
//             <AppText style={{ fontWeight: 'bold', fontSize: 40 }}>
//                 Feed limited
//             </AppText>
//             <AppText>
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//                 illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//                 explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//                 odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//                 voluptatem sequi nesciunt.
//             </AppText>
//             <Unit
//                 onItemClick={(e) => console.log(e)}
//                 onAdReceiveFail={(e) => console.log(e)}
//                 onResize={(e) => {
//                     console.log(e, 'new Height');
//                 }}
//
//                 extraProperties={{
//                     enableHorizontalScroll: 'true',
//                 }}
//                 style={{
//                     width: '100%',
//                     flex: 1,
//                 }}
//             />
//         </ScrollView>
//     )
// };
//
// export default LimitedFeed;
//
// const AppText: FC<TextProps> = ({ ...props }) => {
//     return (
//         <Text
//             style={{
//                 fontSize: 16,
//                 marginVertical: 8,
//             }}
//             {...props}
//         />
//     );
// };
