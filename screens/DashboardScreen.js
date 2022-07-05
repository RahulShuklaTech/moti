import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import * as MotileoAPIApi from '../apis/MotileoAPIApi.js';
import {
  Circle,
  Icon,
  Link,
  ScreenContainer,
  Spacer,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const DashboardScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasTopSafeArea={true}>
      <MotileoAPIApi.FetchUserDetailsGET>
        {({ loading, error, data, refetchUserDetails }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <View style={styles.View_4P}>
              <View style={styles.ViewKZ}>
                <Text style={[styles.TextGD, { color: theme.colors.light }]}>
                  {'Hello,'}
                </Text>

                <Text style={[styles.Text_1p, { color: theme.colors.strong }]}>
                  {fetchData?.query?.FirstName} {fetchData?.query?.LastName}
                </Text>
              </View>
              <Spacer top={8} right={8} bottom={8} left={8} />
              <View>
                <Touchable>
                  <View style={[styles.ViewVA, { borderRadius: 10 }]}>
                    <Image
                      style={styles.ImagedB}
                      source={{ uri: `${fetchData?.signDownloadProfilePic}` }}
                      resizeMode={'cover'}
                    />
                  </View>
                </Touchable>
              </View>
            </View>
          );
        }}
      </MotileoAPIApi.FetchUserDetailsGET>
      <View>
        <Swiper
          style={styles.SwiperZy}
          dotColor={theme.colors.light}
          dotActiveColor={theme.colors.primary}
          dotsTouchable={true}
        >
          <SwiperItem style={styles.SwiperItem_2n}>
            <Touchable>
              <View
                style={[
                  styles.ViewJw,
                  { backgroundColor: theme.colors.primary, borderRadius: 12 },
                ]}
              >
                <View style={styles.View_5u}>
                  <Text
                    style={[styles.TextQK, { color: theme.colors.surface }]}
                  >
                    {'DraftBank Debit'}
                  </Text>
                  <Image
                    style={styles.Imageyi}
                    source={{
                      uri: 'https://static.draftbit.com/images/example-screens/visa-logo.png',
                    }}
                    resizeMode={'contain'}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      styles.TextAQ,
                      { color: theme.colors.lightInverse },
                    ]}
                  >
                    {'Balance'}
                  </Text>

                  <View style={styles.Viewga}>
                    <Text
                      style={[styles.TextpO, { color: theme.colors.surface }]}
                    >
                      {'$'}
                    </Text>

                    <Text
                      style={[styles.TextTF, { color: theme.colors.surface }]}
                    >
                      {'7,900.50'}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </SwiperItem>

          <SwiperItem style={styles.SwiperItemGa}>
            <Touchable>
              <View
                style={[
                  styles.ViewUC,
                  { backgroundColor: theme.colors.strong, borderRadius: 12 },
                ]}
              >
                <View style={styles.View_3j}>
                  <Text
                    style={[styles.Text_7v, { color: theme.colors.surface }]}
                  >
                    {'Apply Pay Card'}
                  </Text>
                  <Image
                    style={styles.ImageA0}
                    source={{
                      uri: 'https://static.draftbit.com/images/example-screens/apple-pay-logo.png',
                    }}
                    resizeMode={'contain'}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      styles.Text_24,
                      { color: theme.colors.lightInverse },
                    ]}
                  >
                    {'Balance'}
                  </Text>

                  <View style={styles.Viewx3}>
                    <Text
                      style={[styles.Textog, { color: theme.colors.surface }]}
                    >
                      {'$'}
                    </Text>

                    <Text
                      style={[styles.Textn0, { color: theme.colors.surface }]}
                    >
                      {'1,440.12'}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </SwiperItem>

          <SwiperItem style={styles.SwiperItem_2G}>
            <Touchable>
              <View
                style={[
                  styles.ViewPW,
                  { backgroundColor: theme.colors.error, borderRadius: 12 },
                ]}
              >
                <View style={styles.ViewS7}>
                  <Text
                    style={[styles.Textnc, { color: theme.colors.surface }]}
                  >
                    {'Wells Fargo Credit'}
                  </Text>
                  <Image
                    style={styles.ImageHo}
                    resizeMode={'cover'}
                    source={{
                      uri: 'https://static.draftbit.com/images/example-screens/mastercard-logo.png',
                    }}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      styles.TextUK,
                      { color: theme.colors.lightInverse },
                    ]}
                  >
                    {'Balance'}
                  </Text>

                  <View style={styles.Viewzy}>
                    <Text
                      style={[styles.Text_2A, { color: theme.colors.surface }]}
                    >
                      {'$'}
                    </Text>

                    <Text
                      style={[styles.TextKT, { color: theme.colors.surface }]}
                    >
                      {'720.72'}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </SwiperItem>
        </Swiper>
      </View>

      <View style={styles.Viewuf}>
        <View style={styles.ViewBQ}>
          <View
            style={[
              styles.ViewV6,
              { backgroundColor: theme.colors.divider, borderRadius: 8 },
            ]}
          >
            <Icon
              name={'Feather/arrow-up'}
              size={26}
              color={theme.colors.light}
            />
          </View>
          <Spacer right={4} left={4} />
          <View style={styles.Viewgs}>
            <Text style={[styles.Textq2, { color: theme.colors.light }]}>
              {'Money Out'}
            </Text>

            <Text style={[styles.Text_09, { color: theme.colors.strong }]}>
              {'$3,227'}
            </Text>
          </View>
        </View>
        <Spacer top={8} right={8} bottom={8} left={8} />
        <View style={styles.ViewNU}>
          <View
            style={[
              styles.Viewji,
              { backgroundColor: theme.colors.divider, borderRadius: 8 },
            ]}
          >
            <Icon
              name={'Feather/arrow-down'}
              size={26}
              color={theme.colors.light}
            />
          </View>
          <Spacer right={4} left={4} />
          <View style={styles.View_2n}>
            <Text style={[styles.TextVE, { color: theme.colors.light }]}>
              {'Money In'}
            </Text>

            <Text style={[styles.Text_5j, { color: theme.colors.strong }]}>
              {'$6,333'}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.View_4e,
          {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.secondary,
          },
        ]}
      >
        <View>
          <View style={styles.ViewWz}>
            <Text style={[styles.TextDQ, { color: theme.colors.strong }]}>
              {'Transactions'}
            </Text>
            <Link
              style={[styles.Linkia, { color: theme.colors.primary }]}
              title={'See all'}
            />
          </View>
          <Spacer top={12} bottom={12} />
          <DraftbitApi.FetchProductsGET limit={5}>
            {({ loading, error, data, refetchProducts }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <FlatList
                  data={fetchData}
                  listKey={'b4qHfilK'}
                  keyExtractor={({ item }) => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <>
                        <View style={styles.ViewlU}>
                          <Circle size={60} bgColor={theme.colors.divider}>
                            <Circle size={56} bgColor={theme.colors.background}>
                              <Icon
                                style={styles.Icony2}
                                name={'Feather/tag'}
                                size={24}
                                color={theme.colors.light}
                              />
                            </Circle>
                          </Circle>
                          <Spacer right={6} left={6} />
                          <View style={styles.Viewps}>
                            <Text
                              style={[
                                styles.Text_4e,
                                { color: theme.colors.light },
                              ]}
                            >
                              {'Apple Store'}
                            </Text>

                            <Text
                              style={[
                                styles.TextlR,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'iPhone 13 Pro'}
                            </Text>
                          </View>
                          <Spacer right={4} left={4} />
                          <View style={styles.ViewJa}>
                            <Text
                              style={[
                                styles.TextRp,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'$1,227.72'}
                            </Text>

                            <Text
                              style={[
                                styles.TextGa,
                                { color: theme.colors.light },
                              ]}
                            >
                              {'4/20/2022'}
                            </Text>
                          </View>
                        </View>
                        <Spacer top={8} bottom={8} />
                        <View style={styles.View_0d}>
                          <Circle size={60} bgColor={theme.colors.divider}>
                            <Circle size={56} bgColor={theme.colors.background}>
                              <Icon
                                style={styles.IconWL}
                                name={'Feather/shopping-bag'}
                                size={24}
                                color={theme.colors.light}
                              />
                            </Circle>
                          </Circle>
                          <Spacer right={6} left={6} />
                          <View style={styles.ViewHx}>
                            <Text
                              style={[
                                styles.TextgQ,
                                { color: theme.colors.light },
                              ]}
                            >
                              {'Whole Foods'}
                            </Text>

                            <Text
                              style={[
                                styles.TextY7,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'Groceries'}
                            </Text>
                          </View>
                          <Spacer right={4} left={4} />
                          <View style={styles.Viewjz}>
                            <Text
                              style={[
                                styles.Textvk,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'$314.15'}
                            </Text>

                            <Text
                              style={[
                                styles.TextlV,
                                { color: theme.colors.light },
                              ]}
                            >
                              {'3/30/2022'}
                            </Text>
                          </View>
                        </View>
                        <Spacer top={8} bottom={8} />
                        <View style={styles.ViewbI}>
                          <Circle size={60} bgColor={theme.colors.divider}>
                            <Circle size={56} bgColor={theme.colors.background}>
                              <Icon
                                style={styles.IconNe}
                                name={'Feather/coffee'}
                                size={24}
                                color={theme.colors.light}
                              />
                            </Circle>
                          </Circle>
                          <Spacer right={6} left={6} />
                          <View style={styles.ViewaU}>
                            <Text
                              style={[
                                styles.Textdj,
                                { color: theme.colors.light },
                              ]}
                            >
                              {'Starbucks'}
                            </Text>

                            <Text
                              style={[
                                styles.TexttM,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'Morning Coffee'}
                            </Text>
                          </View>
                          <Spacer right={4} left={4} />
                          <View style={styles.Viewdz}>
                            <Text
                              style={[
                                styles.Textay,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'$7.27'}
                            </Text>

                            <Text
                              style={[
                                styles.TextKH,
                                { color: theme.colors.light },
                              ]}
                            >
                              {'3/30/2022'}
                            </Text>
                          </View>
                        </View>
                        <Spacer top={8} bottom={8} />
                      </>
                    );
                  }}
                  contentContainerStyle={styles.FlatListb4Content}
                  numColumns={1}
                />
              );
            }}
          </DraftbitApi.FetchProductsGET>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextGD: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  Text_1p: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    marginTop: 4,
  },
  ViewKZ: {
    flex: 1,
    justifyContent: 'center',
  },
  ImagedB: {
    width: 60,
    height: 60,
    overflow: 'hidden',
  },
  ViewVA: {
    overflow: 'hidden',
  },
  View_4P: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingTop: 32,
    paddingRight: 24,
    paddingBottom: 24,
  },
  FetchNR: {
    minHeight: 40,
  },
  TextQK: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  Imageyi: {
    width: 50,
    height: 20,
  },
  View_5u: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextAQ: {
    fontFamily: 'Inter_500Medium',
  },
  TextpO: {
    fontFamily: 'Inter_600SemiBold',
  },
  TextTF: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 26,
    marginLeft: 4,
  },
  Viewga: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  ViewJw: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    height: 220,
    justifyContent: 'space-between',
  },
  SwiperItem_2n: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  Text_7v: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  ImageA0: {
    width: 50,
    height: 20,
  },
  View_3j: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text_24: {
    fontFamily: 'Inter_500Medium',
  },
  Textog: {
    fontFamily: 'Inter_600SemiBold',
  },
  Textn0: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 26,
    marginLeft: 4,
  },
  Viewx3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  ViewUC: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    height: 220,
    justifyContent: 'space-between',
  },
  SwiperItemGa: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  Textnc: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  ImageHo: {
    width: 50,
    height: 20,
  },
  ViewS7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextUK: {
    fontFamily: 'Inter_500Medium',
  },
  Text_2A: {
    fontFamily: 'Inter_600SemiBold',
  },
  TextKT: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 26,
    marginLeft: 4,
  },
  Viewzy: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  ViewPW: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    height: 220,
    justifyContent: 'space-between',
  },
  SwiperItem_2G: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  SwiperZy: {
    height: 280,
  },
  ViewV6: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  Textq2: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  Text_09: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    marginTop: 2,
  },
  Viewgs: {
    flex: 1,
  },
  ViewBQ: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  Viewji: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  TextVE: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  Text_5j: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    marginTop: 2,
  },
  View_2n: {
    flex: 1,
  },
  ViewNU: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  Viewuf: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  TextDQ: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
  },
  Linkia: {
    fontFamily: 'Inter_500Medium',
  },
  ViewWz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Icony2: {
    marginLeft: 4,
  },
  Text_4e: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  TextlR: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginTop: 4,
  },
  Viewps: {
    flex: 1,
  },
  TextRp: {
    fontFamily: 'Inter_700Bold',
  },
  TextGa: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    marginTop: 4,
  },
  ViewJa: {
    alignItems: 'flex-end',
  },
  ViewlU: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconWL: {
    marginLeft: 4,
  },
  TextgQ: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  TextY7: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginTop: 4,
  },
  ViewHx: {
    flex: 1,
  },
  Textvk: {
    fontFamily: 'Inter_700Bold',
  },
  TextlV: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    marginTop: 4,
  },
  Viewjz: {
    alignItems: 'flex-end',
  },
  View_0d: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconNe: {
    marginLeft: 4,
  },
  Textdj: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  TexttM: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginTop: 4,
  },
  ViewaU: {
    flex: 1,
  },
  Textay: {
    fontFamily: 'Inter_700Bold',
  },
  TextKH: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    marginTop: 4,
  },
  Viewdz: {
    alignItems: 'flex-end',
  },
  ViewbI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlatListb4Content: {
    flex: 1,
  },
  FetchWV: {
    minHeight: 40,
  },
  View_4e: {
    paddingLeft: 32,
    paddingTop: 36,
    paddingRight: 32,
    paddingBottom: 36,
    flex: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
});

export default withTheme(DashboardScreen);
