import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const JourneyScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View
          style={[
            styles.ViewTR,
            { backgroundColor: theme.colors.strongInverse },
          ]}
        >
          <View style={styles.View_4m}>
            <Text style={[styles.TextKf, { color: theme.colors.strong }]}>
              {'Guided exercises'}
            </Text>
          </View>
        </View>

        <View style={styles.ViewMZ}>
          <Text style={[styles.TextwZ, { color: theme.colors.strong }]}>
            {'Record & reflect'}
          </Text>
        </View>
      </View>

      <View style={styles.View_68}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 65 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchable_3e}
        >
          <View
            style={[
              styles.ViewMN,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewnJ}>
              <Text style={[styles.Text_3g, { color: theme.colors.strong }]}>
                {'Happiness journal'}
              </Text>

              <Text style={[styles.Text_0D, { color: theme.colors.strong }]}>
                {'Focus on the good'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Imagej1}
                resizeMode={'cover'}
                source={Images.Happinessj}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.View_3J}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 67 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchablebS}
        >
          <View
            style={[
              styles.Viewhc,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewyF}>
              <Text style={[styles.Textb6, { color: theme.colors.strong }]}>
                {'Gratitude journal'}
              </Text>

              <Text style={[styles.TextNx, { color: theme.colors.strong }]}>
                {'Record thanks'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImagelK}
                resizeMode={'cover'}
                source={Images.Gratitiude}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.ViewAJ}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 66 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablep9}
        >
          <View
            style={[
              styles.Viewzq,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewAT}>
              <Text style={[styles.TextdY, { color: theme.colors.strong }]}>
                {'Trigger journal'}
              </Text>

              <Text style={[styles.TextYB, { color: theme.colors.strong }]}>
                {'Identify your triggers'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImagekU}
                resizeMode={'cover'}
                source={Images.SwingingDoodle}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.ViewIg}>
        <Text style={[styles.Textpa, { color: theme.colors.strong }]}>
          {'Write for calm'}
        </Text>
      </View>

      <View style={styles.ViewEW}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 22 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableTk}
        >
          <View
            style={[
              styles.ViewPe,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewfW}>
              <Text style={[styles.Textba, { color: theme.colors.strong }]}>
                {'Difficult feelings'}
              </Text>

              <Text style={[styles.Text_8p, { color: theme.colors.strong }]}>
                {'Understand emotions'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImageAT}
                resizeMode={'contain'}
                source={Images.Difficult}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.View_2c}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 64 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableDt}
        >
          <View
            style={[
              styles.Viewbc,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewJN}>
              <Text style={[styles.Text_0d, { color: theme.colors.strong }]}>
                {'Difficult thoughts'}
              </Text>

              <Text style={[styles.TextZt, { color: theme.colors.strong }]}>
                {'Unpack and understand'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Image_3t}
                resizeMode={'cover'}
                source={Images.Stressed3}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.Viewc6}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 13 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableQw}
        >
          <View
            style={[
              styles.ViewjT,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewQx}>
              <Text style={[styles.TextT1, { color: theme.colors.strong }]}>
                {'Help with a worry'}
              </Text>

              <Text style={[styles.Text_6e, { color: theme.colors.strong }]}>
                {'Calm and understand'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Imagebi}
                resizeMode={'cover'}
                source={Images.Afternoon168556}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.Viewrs}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 45 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablere}
        >
          <View
            style={[
              styles.Viewsq,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewMn}>
              <Text style={[styles.TexttO, { color: theme.colors.strong }]}>
                {'Clear your mind'}
              </Text>

              <Text style={[styles.Texte2, { color: theme.colors.strong }]}>
                {'Calm the anxious mind'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Imageyf}
                resizeMode={'cover'}
                source={Images.Calmillustration}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.Viewu9}>
        <Text style={[styles.Text_2P, { color: theme.colors.strong }]}>
          {'Habits & mood'}
        </Text>
      </View>

      <View style={styles.View_0k}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('LogMoodGuidedoldScreen', { id: 36 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchable_4e}
        >
          <View
            style={[
              styles.View_7F,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.View_43}>
              <Text style={[styles.TextpU, { color: theme.colors.strong }]}>
                {'Log mood / activity'}
              </Text>

              <Text style={[styles.TextdR, { color: theme.colors.strong }]}>
                {'Track how you feel'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImageCB}
                resizeMode={'cover'}
                source={Images.ThankYouLetter}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={styles.Viewg3}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 69 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchableza}
        >
          <View
            style={[
              styles.ViewMw,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.Viewlz}>
              <Text style={[styles.Text_6O, { color: theme.colors.strong }]}>
                {'Explore a habit'}
              </Text>

              <Text style={[styles.TextMx, { color: theme.colors.strong }]}>
                {'Reflect on frequent activites'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Image_8J}
                resizeMode={'cover'}
                source={Images.Habits}
              />
            </View>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextKf: {
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 6,
  },
  View_4m: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  TextZj: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  View_1B: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableyY: {
    width: 100,
  },
  TextbW: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  Viewvz: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableWP: {
    width: 100,
  },
  ViewaM: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ViewTR: {
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
  Text_4I: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewc6: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHM: {
    marginRight: 10,
  },
  TextyX: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewFI: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableZH: {
    marginRight: 10,
  },
  Viewxv: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  TextwZ: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewMZ: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 15,
  },
  Text_3g: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_0D: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewnJ: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imagej1: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewMN: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_3e: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_68: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  Textb6: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextNx: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewyF: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImagelK: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewhc: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchablebS: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_3J: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  TextdY: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextYB: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewAT: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImagekU: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewzq: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchablep9: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewAJ: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TextGa: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextwL: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_4N: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageNo: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_3X: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableN0: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewBL: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Textpa: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewIg: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Textba: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_8p: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewfW: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageAT: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewPe: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  TouchableTk: {
    minHeight: 100,
  },
  ViewEW: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  Text_0d: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextZt: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewJN: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Image_3t: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewbc: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableDt: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_2c: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TextT1: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_6e: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewQx: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imagebi: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewjT: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableQw: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewc6: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TexttO: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Texte2: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewMn: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imageyf: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewsq: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchablere: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewrs: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Text_2P: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Viewu9: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Text_07: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextpR: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewfG: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImagezD: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewzr: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableYP: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewfG: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TextpU: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextdR: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_43: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageCB: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_7F: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_4e: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_0k: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Text_6O: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextMx: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewlz: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Image_8J: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewMw: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchableza: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewg3: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 60,
  },
  TextdZ: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  View_55: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Textwt: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextwS: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewYd: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageCc: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewbK: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableJW: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewEQ: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TextO3: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textxn: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewbN: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageuF: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewiy: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_2K: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewMD: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
});

export default withTheme(JourneyScreen);
