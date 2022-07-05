import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import Images from '../config/Images';
import {
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const GuidedIdeasScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [moreinfo, setMoreinfo] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');
  const [searchBarValue3, setSearchBarValue3] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.strongInverse }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.ViewJD}>
          <ImageBackground
            style={styles.ImageBackgroundt0}
            resizeMode={'cover'}
            source={Images.EXERCISBACK}
            backgroundColor={theme.colors.primary}
          >
            <View style={styles.Viewwr}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <>
                  {moreinfo ? null : (
                    <IconButton
                      onPress={() => {
                        try {
                          setMoreinfo(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      icon={'Entypo/help-with-circle'}
                      size={30}
                      color={theme.colors.strongInverse}
                    />
                  )}
                </>
                <>
                  {!moreinfo ? null : (
                    <IconButton
                      onPress={() => {
                        try {
                          setMoreinfo(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      icon={'AntDesign/upcircle'}
                      size={30}
                      color={theme.colors.strongInverse}
                    />
                  )}
                </>
              </Touchable>

              <View>
                <>
                  {!moreinfo ? null : (
                    <Text
                      style={[
                        styles.Textv7,
                        { color: theme.colors.custom_rgb0_0_0 },
                      ]}
                    >
                      {
                        'Guided exercises and prompts designed to help you get writing.'
                      }
                    </Text>
                  )}
                </>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={[styles.View_4v, { backgroundColor: theme.colors.primary }]}
        >
          <View
            style={[
              styles.Viewid,
              {
                backgroundColor: theme.colors.divider,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            ]}
          >
            <View
              style={[
                styles.ViewPE,
                { borderRadius: 64, backgroundColor: theme.colors.fafafa },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedScreen_JnaPRJD2');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableht}
              >
                <View
                  style={[
                    styles.ViewRW,
                    { borderRadius: 64, backgroundColor: theme.colors.fafafa },
                  ]}
                >
                  <Text style={[styles.TextkA, { color: theme.colors.strong }]}>
                    {'Exercises'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedIdeasScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableG0}
              >
                <View
                  style={[
                    styles.ViewN7,
                    { borderRadius: 64, backgroundColor: theme.colors.primary },
                  ]}
                >
                  <Text style={[styles.TextxD, { color: theme.colors.strong }]}>
                    {'Prompts'}
                  </Text>
                </View>
              </Touchable>
            </View>

            <Text style={[styles.Texta7, { color: theme.colors.strong }]}>
              {'Feeling lucky?'}
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.Viewwv, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedPromptsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchablekJ}
        >
          <View
            style={[
              styles.ViewoT,
              { backgroundColor: theme.colors.primary, borderRadius: 10 },
            ]}
          >
            <View style={styles.ViewLE}>
              <Text style={[styles.Textyd, { color: theme.colors.strong }]}>
                {'Get a random prompt'}
              </Text>

              <Text style={[styles.TextI7, { color: theme.colors.strong }]}>
                {"Let's get writing!"}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImageeM}
                resizeMode={'cover'}
                source={Images.Prompt}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={[styles.ViewbV, { backgroundColor: theme.colors.divider }]}>
        <Text style={[styles.TextTm, { color: theme.colors.strong }]}>
          {'Explore by theme'}
        </Text>
      </View>

      <XanoApi.FetchFetchCategoryGET>
        {({ loading, error, data, refetchFetchCategory }) => {
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
              listKey={'QkRbRuC3'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <Touchable
                    onPress={() => {
                      try {
                        navigation.navigate('GuidedThemePromptsScreen', {
                          id: listData?.id,
                          Cat_name: listData?.cat_name,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TouchableUe,
                      {
                        backgroundColor: theme.colors.background,
                        borderRadius: 10,
                        borderColor: theme.colors.divider,
                      },
                    ]}
                  >
                    <View style={{ borderRadius: 10 }}>
                      <View style={styles.ViewLQ}>
                        <Image
                          style={styles.Imageus}
                          source={{
                            uri: `${
                              listData &&
                              listData['Image'] &&
                              listData['Image']['url']
                            }`,
                          }}
                          resizeMode={'contain'}
                        />
                        <View style={styles.ViewIp}>
                          <Text
                            style={[
                              styles.TextEn,
                              { color: theme.colors.custom_rgb0_0_0 },
                            ]}
                            allowFontScaling={true}
                          >
                            {listData?.cat_name}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Touchable>
                );
              }}
              style={[
                styles.FlatListQk,
                { backgroundColor: theme.colors.divider },
              ]}
              contentContainerStyle={styles.FlatListQkContent}
            />
          );
        }}
      </XanoApi.FetchFetchCategoryGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textv7: {
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'right',
    paddingTop: 15,
  },
  Viewwr: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  TextTl: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewRn: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableS4: {
    width: 100,
  },
  Text_8v: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewQp: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchabler7: {
    width: 100,
  },
  ViewbA: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ImageBackgroundt0: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    minHeight: 100,
    maxHeight: 150,
  },
  ViewJD: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    minWidth: '100%',
    maxHeight: 150,
  },
  TextTE: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewmB: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablezK: {
    marginRight: 10,
  },
  Texth0: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewLi: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableam: {
    marginRight: 10,
  },
  ViewAm: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  TextkA: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewRW: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableht: {
    width: '50%',
  },
  TextxD: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewN7: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableG0: {
    width: '50%',
  },
  ViewPE: {
    flexDirection: 'row',
    minHeight: 30,
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  Texta7: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Viewid: {
    paddingLeft: 25,
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  View_4v: {
    width: '100%',
  },
  Textyd: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextI7: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewLE: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageeM: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewoT: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchablekJ: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewwv: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  Text_0h: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextsS: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewZi: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageG8: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewhN: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableZF: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewI1: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TextTm: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewbV: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Imageus: {
    width: 55,
    height: 55,
  },
  TextEn: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
  },
  ViewIp: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  ViewLQ: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 12,
    paddingTop: 12,
    alignItems: 'center',
  },
  TouchableUe: {
    alignContent: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    flexGrow: 1,
    width: 148,
    marginBottom: 16,
  },
  FlatListQk: {
    width: '100%',
    flexGrow: 1,
  },
  FlatListQkContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-evenly',
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 20,
    marginBottom: 60,
  },
});

export default withTheme(GuidedIdeasScreen);
