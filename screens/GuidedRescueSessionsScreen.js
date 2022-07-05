import React from 'react';
import Images from '../config/Images';
import {
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const GuidedRescueSessionsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [moreinfo, setMoreinfo] = React.useState(false);
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.primary }}
      scrollable={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <View>
        <View style={styles.Viewdw}>
          <ImageBackground
            style={styles.ImageBackgroundvp}
            resizeMode={'cover'}
            source={Images.Toughtime}
            backgroundColor={theme.colors.primary}
          >
            <View style={styles.ViewmV}>
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
                        styles.TextXa,
                        { color: theme.colors.custom_rgb0_0_0 },
                      ]}
                    >
                      {
                        'Sessions designed to help you cope with difficult emotions and thoughts. '
                      }
                    </Text>
                  )}
                </>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={[
            styles.ViewPC,
            {
              backgroundColor: theme.colors.divider,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          ]}
        >
          <Text style={[styles.Textum, { color: theme.colors.strong }]}>
            {'Having a tough time?'}
          </Text>
        </View>
        <ImageBackground
          style={styles.ImageBackgroundCv}
          source={{
            uri: 'https://static.draftbit.com/images/placeholder-image-background.png',
          }}
          resizeMode={'cover'}
        />
      </View>

      <View>
        <View
          style={[styles.VieweV, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('RescueExerciseInputScreen', { id: 45 });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableZm}
          >
            <View
              style={[
                styles.Viewvq,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View style={styles.ViewB3}>
                <Text style={[styles.Text_6Z, { color: theme.colors.strong }]}>
                  {'Clear your mind'}
                </Text>

                <Text style={[styles.Textk3, { color: theme.colors.strong }]}>
                  {'Take time to unload'}
                </Text>
              </View>

              <View>
                <Image
                  style={styles.ImageEz}
                  resizeMode={'cover'}
                  source={Images.Calmillustration}
                />
              </View>
            </View>
          </Touchable>
        </View>

        <View
          style={[
            styles.ViewIb,
            {
              backgroundColor: theme.colors.divider,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },
          ]}
        >
          <Text style={[styles.Text_1Z, { color: theme.colors.strong }]}>
            {'Feel better in 5 minutes'}
          </Text>
        </View>

        <View
          style={[styles.ViewT6, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Tabs', {
                  screen: 'Rescue',
                  params: {
                    screen: 'RescueExerciseInputScreen',
                    params: { id: 64 },
                  },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableNN}
          >
            <View
              style={[
                styles.ViewzN,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View>
                <Image
                  style={styles.ImageMC}
                  resizeMode={'contain'}
                  source={Images.Anxietycard}
                />
              </View>

              <View style={styles.View_1W}>
                <Text style={[styles.TextrY, { color: theme.colors.strong }]}>
                  {'Anxiety'}
                </Text>

                <Text style={[styles.TextZw, { color: theme.colors.strong }]}>
                  {'Unpack difficult thoughts'}
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Tabs', {
                  screen: 'Rescue',
                  params: {
                    screen: 'RescueExerciseInputScreen',
                    params: { id: 49 },
                  },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchablevQ}
          >
            <View
              style={[
                styles.Viewuq,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View>
                <Image
                  style={styles.Imageee}
                  resizeMode={'contain'}
                  source={Images.Stresscard}
                />
              </View>

              <View style={styles.ViewuI}>
                <Text style={[styles.Text_3z, { color: theme.colors.strong }]}>
                  {'Stress'}
                </Text>

                <Text style={[styles.TextaD, { color: theme.colors.strong }]}>
                  {'For overwhelming moments'}
                </Text>
              </View>
            </View>
          </Touchable>
        </View>

        <View
          style={[styles.ViewSa, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Tabs', {
                  screen: 'Rescue',
                  params: {
                    screen: 'RescueExerciseInputScreen',
                    params: { id: 13 },
                  },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableCs}
          >
            <View
              style={[
                styles.View_5a,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View>
                <Image
                  style={styles.ImageZ8}
                  resizeMode={'contain'}
                  source={Images.Worrycard}
                />
              </View>

              <View style={styles.ViewlQ}>
                <Text style={[styles.TextHd, { color: theme.colors.strong }]}>
                  {'Worry'}
                </Text>

                <Text style={[styles.Text_5G, { color: theme.colors.strong }]}>
                  {'Address and overcome'}
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Tabs', {
                  screen: 'Rescue',
                  params: {
                    screen: 'RescueExerciseInputScreen',
                    params: { id: 22 },
                  },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableYh}
          >
            <View
              style={[
                styles.Viewx0,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View>
                <Image
                  style={styles.Imagelp}
                  resizeMode={'contain'}
                  source={Images.Emotionscard}
                />
              </View>

              <View style={styles.ViewSC}>
                <Text style={[styles.Textem, { color: theme.colors.strong }]}>
                  {'Emotions'}
                </Text>

                <Text style={[styles.TextTG, { color: theme.colors.strong }]}>
                  {'Unpack negative feelings'}
                </Text>
              </View>
            </View>
          </Touchable>
        </View>
      </View>

      <View
        style={[
          styles.Views7,
          {
            backgroundColor: theme.colors.divider,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        ]}
      >
        <Text style={[styles.TextJl, { color: theme.colors.strong }]}>
          {'Understand your triggers'}
        </Text>
      </View>

      <View style={[styles.ViewkR, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('Tabs', {
                screen: 'TodayNavigator',
                params: {
                  screen: 'GuidedExerciseInputTodayScreen',
                  params: { id: 66 },
                },
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablebf}
        >
          <View
            style={[
              styles.ViewgA,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.Viewdo}>
              <Text style={[styles.TextK2, { color: theme.colors.strong }]}>
                {'Trigger journal'}
              </Text>

              <Text style={[styles.TextH5, { color: theme.colors.strong }]}>
                {'Identify your triggers'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Image_3r}
                resizeMode={'cover'}
                source={Images.SwingingDoodle}
              />
            </View>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextXa: {
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'right',
    paddingTop: 15,
  },
  ViewmV: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  TextIQ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewcE: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablexm: {
    width: 100,
  },
  TextRB: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  Viewt2: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablevK: {
    width: 100,
  },
  ViewpE: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ImageBackgroundvp: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    minHeight: 100,
    maxHeight: 150,
  },
  Viewdw: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    minWidth: '100%',
    maxHeight: 150,
  },
  Textww: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewR1: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableqd: {
    marginRight: 10,
  },
  TextoS: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewta: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableLl: {
    marginRight: 10,
  },
  View_9c: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  Textum: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewPC: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 25,
  },
  ImageBackgroundCv: {
    width: '100%',
    height: '100%',
  },
  Text_6Z: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textk3: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewB3: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageEz: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewvq: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableZm: {
    minHeight: 100,
    maxHeight: 100,
  },
  VieweV: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Text_1Z: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewIb: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  ImageMC: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextrY: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextZw: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  View_1W: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 148,
  },
  ViewzN: {
    width: 160,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableNN: {
    width: 160,
    height: 190,
  },
  Imageee: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Text_3z: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextaD: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewuI: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 148,
  },
  Viewuq: {
    width: 160,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchablevQ: {
    minHeight: 100,
    width: 160,
    height: 190,
  },
  ViewT6: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageZ8: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextHd: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  Text_5G: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewlQ: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 148,
  },
  View_5a: {
    width: 160,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableCs: {
    width: 160,
    height: 190,
  },
  Imagelp: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Textem: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextTG: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewSC: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 148,
  },
  Viewx0: {
    width: 160,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableYh: {
    minHeight: 100,
    width: 160,
    height: 190,
  },
  ViewSa: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Texth2: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textrb: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewpp: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageYs: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_6X: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_8K: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewXV: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TextJl: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Views7: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 25,
  },
  TextK2: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextH5: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewdo: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Image_3r: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewgA: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchablebf: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewkR: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 75,
    marginBottom: 0,
  },
});

export default withTheme(GuidedRescueSessionsScreen);
