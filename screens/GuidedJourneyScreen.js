import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const GuidedJourneyScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.primary }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.ViewkC}>
          <View style={styles.View_69}>
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Image
                style={styles.ImagePa}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>
        </View>
      </View>

      <View>
        <View
          style={[
            styles.Viewgo,
            {
              backgroundColor: theme.colors.divider,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          ]}
        >
          <Text style={[styles.TextwG, { color: theme.colors.strong }]}>
            {'Your journey so far'}
          </Text>
        </View>

        <XanoApi.FetchCheckPaths1GET>
          {({ loading, error, data, refetchCheckPaths1 }) => {
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
              <>
                <View
                  style={[
                    styles.ViewUL,
                    { backgroundColor: theme.colors.divider },
                  ]}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        navigation.navigate('GuidedExerciseInputScreen', {
                          id: 65,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={styles.Touchable_9s}
                  >
                    <View
                      style={[
                        styles.ViewkJ,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: 10,
                        },
                      ]}
                    >
                      <View style={styles.ViewNB}>
                        <Text
                          style={[
                            styles.TextOt,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Level 1'}
                        </Text>

                        <Text
                          style={[
                            styles.Text_1h,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'3 sessions'}
                        </Text>
                      </View>
                      <>
                        {!fetchData?.path_1_complete ? null : (
                          <View style={styles.ViewaB}>
                            <Image
                              style={styles.ImagemP}
                              source={Images.Completepath}
                              resizeMode={'cover'}
                            />
                          </View>
                        )}
                      </>
                      <View>
                        <Image
                          style={styles.ImagerU}
                          resizeMode={'cover'}
                          source={Images.GuidedFocus}
                        />
                      </View>
                    </View>
                  </Touchable>
                </View>

                <View
                  style={[
                    styles.ViewgP,
                    { backgroundColor: theme.colors.divider },
                  ]}
                >
                  <>
                    {fetchData?.path_1_complete ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('GuidedExerciseInputScreen', {
                              id: 65,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={styles.TouchableaM}
                      >
                        <View
                          style={[
                            styles.ViewHm,
                            {
                              backgroundColor: theme.colors.card_green,
                              borderRadius: 10,
                            },
                          ]}
                        >
                          <View style={styles.ViewZ7}>
                            <Text
                              style={[
                                styles.TextQp,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'Level 2'}
                            </Text>

                            <Text
                              style={[
                                styles.Textxo,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'4 sessions'}
                            </Text>
                          </View>

                          <View style={styles.ViewKb}>
                            <Image
                              style={styles.ImagebV}
                              source={Images.LockedPadlock}
                              resizeMode={'contain'}
                            />
                          </View>

                          <View style={styles.ViewB8}>
                            <Image
                              style={styles.Imageza}
                              resizeMode={'cover'}
                              source={Images.GuidedFocus}
                            />
                          </View>
                        </View>
                      </Touchable>
                    )}
                  </>
                  <>
                    {!fetchData?.path_1_complete ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('GuidedExerciseInputScreen', {
                              id: 65,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={styles.TouchableNA}
                      >
                        <View
                          style={[
                            styles.Viewn2,
                            {
                              backgroundColor: theme.colors.primary,
                              borderRadius: 10,
                            },
                          ]}
                        >
                          <View style={styles.View_0F}>
                            <Text
                              style={[
                                styles.TextA1,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'Level 2'}
                            </Text>

                            <Text
                              style={[
                                styles.Text_7j,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'4 sessions'}
                            </Text>
                          </View>

                          <View>
                            <Image
                              style={styles.Imagevt}
                              resizeMode={'cover'}
                              source={Images.GuidedFocus}
                            />
                          </View>
                        </View>
                      </Touchable>
                    )}
                  </>
                </View>
              </>
            );
          }}
        </XanoApi.FetchCheckPaths1GET>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagePa: {
    width: 30,
    height: 30,
  },
  View_69: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Textqt: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewY4: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_4k: {
    width: 100,
  },
  Texth3: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewOj: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablenz: {
    width: 100,
  },
  Viewfn: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ViewkC: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
    minWidth: '100%',
    paddingBottom: 20,
    maxHeight: 150,
  },
  TextIZ: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewZH: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableUa: {
    marginRight: 10,
  },
  TextRQ: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewgk: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableBi: {
    marginRight: 10,
  },
  ViewC6: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  TextwG: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Viewgo: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  TextOt: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_1h: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewNB: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImagemP: {
    width: 50,
    height: 50,
  },
  ViewaB: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImagerU: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewkJ: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_9s: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewUL: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  TextQp: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textxo: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewZ7: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    opacity: 0.25,
  },
  ImagebV: {
    width: 65,
    height: 65,
  },
  ViewKb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imageza: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewB8: {
    opacity: 0.25,
  },
  ViewHm: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    opacity: 1,
  },
  TouchableaM: {
    minHeight: 100,
    maxHeight: 100,
  },
  TextA1: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_7j: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_0F: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imagevt: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewn2: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableNA: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewgP: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  Fetch_6T: {
    minHeight: 40,
  },
});

export default withTheme(GuidedJourneyScreen);
