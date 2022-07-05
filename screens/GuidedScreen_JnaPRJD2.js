import React from 'react';
import Images from '../config/Images';
import {
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const GuidedScreen_JnaPRJD2 = props => {
  const { theme } = props;
  const { navigation } = props;

  const [moreinfo, setMoreinfo] = React.useState(false);
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');
  const [searchBarValue3, setSearchBarValue3] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.View_2D}>
          <ImageBackground
            style={styles.ImageBackground_9C}
            resizeMode={'cover'}
            source={Images.EXERCISBACK}
            backgroundColor={theme.colors.primary}
          >
            <View style={styles.ViewtN}>
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
                        styles.Textbc,
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
      </View>

      <View style={{ backgroundColor: theme.colors.primary }}>
        <View
          style={[
            styles.View_6b,
            {
              backgroundColor: theme.colors.divider,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          ]}
        >
          <View
            style={[
              styles.ViewMy,
              { borderRadius: 64, backgroundColor: theme.colors.fafafa },
            ]}
          >
            <Touchable style={styles.Touchable_8b}>
              <View
                style={[
                  styles.ViewOa,
                  { borderRadius: 64, backgroundColor: theme.colors.primary },
                ]}
              >
                <Text style={[styles.Texte6, { color: theme.colors.strong }]}>
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
              style={styles.Touchablerc}
            >
              <View
                style={[
                  styles.ViewmX,
                  { borderRadius: 64, backgroundColor: theme.colors.fafafa },
                ]}
              >
                <Text style={[styles.TexteP, { color: theme.colors.strong }]}>
                  {'Prompts'}
                </Text>
              </View>
            </Touchable>
          </View>

          <Text style={[styles.Textj4, { color: theme.colors.strong }]}>
            {'Focus on the good'}
          </Text>

          <Text style={[styles.TextNM, { color: theme.colors.strong }]}>
            {'Positive focus to lift your mood'}
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewNmContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        horizontal={true}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 65 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchable_1r}
        >
          <View
            style={[
              styles.Viewgi,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.Image_1F}
                resizeMode={'contain'}
                source={Images.Happyjournal}
              />
            </View>

            <View style={styles.ViewGx}>
              <Text style={[styles.Text_83, { color: theme.colors.strong }]}>
                {'Happiness journal'}
              </Text>

              <Text style={[styles.TextUb, { color: theme.colors.strong }]}>
                {'Write about the everyday happiness you enjoy'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 77 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableGw}
        >
          <View
            style={[
              styles.ViewSd,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageRh}
                resizeMode={'contain'}
                source={Images.Memorycard}
              />
            </View>

            <View style={styles.ViewrS}>
              <Text style={[styles.Text_5s, { color: theme.colors.strong }]}>
                {'A happy memory'}
              </Text>

              <Text style={[styles.Textly, { color: theme.colors.strong }]}>
                {'Reflect on a memory that makes you feel good!'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 16 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableGL}
        >
          <View
            style={[
              styles.ViewF7,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.Imageol}
                resizeMode={'contain'}
                source={Images.Selfcarecard}
              />
            </View>

            <View style={styles.ViewX4}>
              <Text style={[styles.TextJr, { color: theme.colors.strong }]}>
                {'Plan selfcare'}
              </Text>

              <Text style={[styles.TextXR, { color: theme.colors.strong }]}>
                {'Make a plan to look after your body and your mind'}
              </Text>
            </View>
          </View>
        </Touchable>
      </ScrollView>

      <View style={[styles.Viewut, { backgroundColor: theme.colors.divider }]}>
        <Text style={[styles.TextZs, { color: theme.colors.strong }]}>
          {'Key CBT skills'}
        </Text>

        <Text style={[styles.Text_5X, { color: theme.colors.strong }]}>
          {'Develop & practise CBT techniques'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewwdContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        horizontal={true}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseIntroScreen', { id: 81 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablewb}
        >
          <View
            style={[
              styles.ViewIh,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageKU}
                resizeMode={'contain'}
                source={Images.Gratjournalcard}
              />
            </View>

            <View style={styles.ViewP5}>
              <Text style={[styles.Textkn, { color: theme.colors.strong }]}>
                {'The ABC model'}
              </Text>

              <Text style={[styles.TextPb, { color: theme.colors.strong }]}>
                {'Explore how core beliefs impact actions & mood'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 12 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchable_7a}
        >
          <View
            style={[
              styles.ViewIu,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageKM}
                resizeMode={'contain'}
                source={Images.LetterToAFriendCard}
              />
            </View>

            <View style={styles.Viewzj}>
              <Text style={[styles.TextaD, { color: theme.colors.strong }]}>
                {'Identify distortions'}
              </Text>

              <Text style={[styles.TextTb, { color: theme.colors.strong }]}>
                {'Understand negative patterns of thought'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 78 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableNN}
        >
          <View
            style={[
              styles.Viewv0,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageKg}
                resizeMode={'contain'}
                source={Images.Misscard}
              />
            </View>

            <View style={styles.Viewl1}>
              <Text style={[styles.TextxR, { color: theme.colors.strong }]}>
                {'Positive replacement'}
              </Text>

              <Text style={[styles.Textt7, { color: theme.colors.strong }]}>
                {'Challenge negative automatic thoughts'}
              </Text>
            </View>
          </View>
        </Touchable>
      </ScrollView>

      <View style={[styles.ViewIF, { backgroundColor: theme.colors.divider }]}>
        <Text style={[styles.Text_1N, { color: theme.colors.strong }]}>
          {'Practise gratitude'}
        </Text>

        <Text style={[styles.Textph, { color: theme.colors.strong }]}>
          {'Develop empathy & connection'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewAHContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        horizontal={true}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 67 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableMZ}
        >
          <View
            style={[
              styles.ViewbV,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.Image_4U}
                resizeMode={'contain'}
                source={Images.Gratjournalcard}
              />
            </View>

            <View style={styles.ViewW3}>
              <Text style={[styles.TextJg, { color: theme.colors.strong }]}>
                {'Gratitude journal'}
              </Text>

              <Text style={[styles.TextKU, { color: theme.colors.strong }]}>
                {'Record and reflect on a thankful moment'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 12 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchableah}
        >
          <View
            style={[
              styles.Viewem,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.Imageh1}
                resizeMode={'contain'}
                source={Images.LetterToAFriendCard}
              />
            </View>

            <View style={styles.View_7J}>
              <Text style={[styles.Text_81, { color: theme.colors.strong }]}>
                {'Letter to a friend'}
              </Text>

              <Text style={[styles.TextXk, { color: theme.colors.strong }]}>
                {'Write a letter to a friend to show your thanks'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 78 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableIv}
        >
          <View
            style={[
              styles.ViewXR,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageRl}
                resizeMode={'contain'}
                source={Images.Misscard}
              />
            </View>

            <View style={styles.Viewcw}>
              <Text style={[styles.TextAR, { color: theme.colors.strong }]}>
                {'I would miss...'}
              </Text>

              <Text style={[styles.TextbZ, { color: theme.colors.strong }]}>
                {'Reflect on what you value most in your life'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 79 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableFF}
        >
          <View
            style={[
              styles.ViewPi,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageUE}
                resizeMode={'contain'}
                source={Images.Walkgratcard}
              />
            </View>

            <View style={styles.ViewRD}>
              <Text style={[styles.TextwY, { color: theme.colors.strong }]}>
                {'Gratitude walk'}
              </Text>

              <Text style={[styles.Textju, { color: theme.colors.strong }]}>
                {'Walk, relax and focus on objects of gratitude'}
              </Text>
            </View>
          </View>
        </Touchable>
      </ScrollView>

      <View style={[styles.ViewTl, { backgroundColor: theme.colors.divider }]}>
        <Text style={[styles.TexthR, { color: theme.colors.strong }]}>
          {'Explore mood & habits'}
        </Text>

        <Text style={[styles.TextKG, { color: theme.colors.strong }]}>
          {'Track, record and understand'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewhtContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        horizontal={true}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('LogMoodGuidedScreen_PyPrkSTM');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableQ0}
        >
          <View
            style={[
              styles.ViewxB,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageT4}
                resizeMode={'contain'}
                source={Images.Moodcard}
              />
            </View>

            <View style={styles.ViewNd}>
              <Text style={[styles.Textw0, { color: theme.colors.strong }]}>
                {'Log mood \\ habit'}
              </Text>

              <Text style={[styles.Textyd, { color: theme.colors.strong }]}>
                {'Record how what you do makes you feel'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 9 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchableu5}
        >
          <View
            style={[
              styles.ViewkI,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImagevG}
                resizeMode={'contain'}
                source={Images.PostivieHabsCard}
              />
            </View>

            <View style={styles.ViewpI}>
              <Text style={[styles.TextUM, { color: theme.colors.strong }]}>
                {'Positive habits'}
              </Text>

              <Text style={[styles.Text_2F, { color: theme.colors.strong }]}>
                {'Reflect and reinforce on your positive habits'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 10 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchablewJ}
        >
          <View
            style={[
              styles.ViewXw,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.Imagel5}
                resizeMode={'contain'}
                source={Images.Meghabscard}
              />
            </View>

            <View style={styles.View_7k}>
              <Text style={[styles.TextDA, { color: theme.colors.strong }]}>
                {'Negative habits'}
              </Text>

              <Text style={[styles.TextCS, { color: theme.colors.strong }]}>
                {'Examine and change your negative habits'}
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 80 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchableki}
        >
          <View
            style={[
              styles.ViewnR,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View>
              <Image
                style={styles.ImageLZ}
                resizeMode={'contain'}
                source={Images.ImagienNewHabits}
              />
            </View>

            <View style={styles.View_5J}>
              <Text style={[styles.Text_47, { color: theme.colors.strong }]}>
                {'Ideal habits'}
              </Text>

              <Text style={[styles.TextTK, { color: theme.colors.strong }]}>
                {'What habits would you \nhave in an ideal world?'}
              </Text>
            </View>
          </View>
        </Touchable>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_8p: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewRh: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablexr: {
    marginRight: 10,
  },
  TextPR: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewQ9: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableMr: {
    marginRight: 10,
  },
  ViewLX: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  Textyc: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Viewkw: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  ViewzB: {
    width: '100%',
  },
  Textbc: {
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'right',
    paddingTop: 15,
  },
  ViewtN: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  Textq1: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  View_23: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableKA: {
    width: 100,
  },
  TextUn: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewXS: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableB2: {
    width: 100,
  },
  View_7N: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ImageBackground_9C: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    minHeight: 100,
    maxHeight: 150,
  },
  View_2D: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    minWidth: '100%',
    maxHeight: 150,
  },
  Text_6l: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_2X: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewie: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Image_0P: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewVQ: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchableao: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewxE: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  Text_9R: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextBY: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewkx: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Image_5c: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewgJ: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchablePi: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewDx: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Texte6: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewOa: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_8b: {
    width: '50%',
  },
  TexteP: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewmX: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablerc: {
    width: '50%',
  },
  ViewMy: {
    flexDirection: 'row',
    minHeight: 30,
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  Textj4: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  TextNM: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
    opacity: 0.5,
  },
  View_6b: {
    paddingLeft: 25,
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Image_1F: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Text_83: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextUb: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewGx: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  Viewgi: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  Touchable_1r: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ImageRh: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Text_5s: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  Textly: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewrS: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewSd: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableGw: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  Imageol: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextJr: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextXR: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewX4: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewF7: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableGL: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ScrollViewNmContent: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  TextZs: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Text_5X: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
    opacity: 0.5,
  },
  Viewut: {
    paddingLeft: 25,
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
    alignItems: 'flex-start',
  },
  ImageKU: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Textkn: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextPb: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewP5: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewIh: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  Touchablewb: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ImageKM: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextaD: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextTb: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  Viewzj: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewIu: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  Touchable_7a: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ImageKg: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextxR: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  Textt7: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  Viewl1: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  Viewv0: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableNN: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ScrollViewwdContent: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  Text_1N: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Textph: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
    opacity: 0.5,
  },
  ViewIF: {
    paddingLeft: 25,
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
    alignItems: 'flex-start',
  },
  Image_4U: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextJg: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextKU: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewW3: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewbV: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableMZ: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  Imageh1: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Text_81: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextXk: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  View_7J: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  Viewem: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  Touchableah: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ImageRl: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextAR: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextbZ: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  Viewcw: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewXR: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableIv: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ImageUE: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextwY: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  Textju: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewRD: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewPi: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableFF: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ScrollViewAHContent: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  TexthR: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  TextKG: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
    opacity: 0.5,
  },
  ViewTl: {
    paddingLeft: 25,
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
    alignItems: 'flex-start',
  },
  ImageT4: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Textw0: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  Textyd: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewNd: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewxB: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchableQ0: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ImagevG: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextUM: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  Text_2F: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  ViewpI: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewkI: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  Touchableu5: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  Imagel5: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  TextDA: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextCS: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  View_7k: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewXw: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  TouchablewJ: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ImageLZ: {
    height: 100,
    width: 128,
    opacity: 1,
  },
  Text_47: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
  },
  TextTK: {
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  View_5J: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 200,
  },
  ViewnR: {
    width: 210,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    alignItems: 'center',
    height: 190,
  },
  Touchableki: {
    width: 210,
    height: 190,
    marginRight: 10,
  },
  ScrollViewhtContent: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 80,
  },
  TexthK: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_5F: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewXj: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Image_9A: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewCo: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  Touchableqa: {
    minHeight: 100,
  },
  ViewSG: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  TextNt: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_3L: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewa9: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageTB: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_7s: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  Touchable_2W: {
    minHeight: 100,
  },
  Viewa0: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  Textav: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TexthL: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewYF: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageOb: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewhV: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  TouchabledQ: {
    minHeight: 100,
  },
  ViewSY: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 75,
  },
});

export default withTheme(GuidedScreen_JnaPRJD2);
