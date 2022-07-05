import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const GuidedHabitsScreen = props => {
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
        <View style={styles.ViewkE}>
          <View style={styles.Viewfy}>
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
                style={styles.Image_4w}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>
        </View>

        <View
          style={[
            styles.Viewjk,
            {
              backgroundColor: theme.colors.divider,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          ]}
        >
          <Text style={[styles.Textzk, { color: theme.colors.strong }]}>
            {'Track your mood & habits'}
          </Text>
        </View>
      </View>

      <View>
        <View
          style={[styles.ViewTC, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LogMoodGuidedoldScreen', { id: 45 });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchable_50}
          >
            <View
              style={[
                styles.ViewDI,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View style={styles.View_7x}>
                <Text style={[styles.Textjk, { color: theme.colors.strong }]}>
                  {'Log mood/activity'}
                </Text>

                <Text style={[styles.Text_6P, { color: theme.colors.strong }]}>
                  {'Explore correlations'}
                </Text>
              </View>

              <View>
                <Image
                  style={styles.Image_7w}
                  resizeMode={'cover'}
                  source={Images.Calm1}
                />
              </View>
            </View>
          </Touchable>
        </View>
      </View>

      <View
        style={[
          styles.ViewH2,
          {
            backgroundColor: theme.colors.divider,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        ]}
      >
        <Text style={[styles.Textv8, { color: theme.colors.strong }]}>
          {'Explore habits'}
        </Text>
      </View>

      <View style={[styles.ViewZL, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 9 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableEx}
        >
          <View
            style={[
              styles.View_5H,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.Viewom}>
              <Text style={[styles.TextCj, { color: theme.colors.strong }]}>
                {'Positive habits'}
              </Text>

              <Text style={[styles.Textga, { color: theme.colors.strong }]}>
                {'Habits for happiness'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImageH1}
                resizeMode={'cover'}
                source={Images.Calmillustration}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={[styles.ViewpQ, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 10 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchable_4M}
        >
          <View
            style={[
              styles.ViewK8,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.ViewBe}>
              <Text style={[styles.TextMe, { color: theme.colors.strong }]}>
                {'Negative habits'}
              </Text>

              <Text style={[styles.TextQk, { color: theme.colors.strong }]}>
                {'Identify areas to improve'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImageQN}
                resizeMode={'cover'}
                source={Images.Difficult}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View
        style={[
          styles.ViewTq,
          {
            backgroundColor: theme.colors.divider,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        ]}
      >
        <Text style={[styles.Textac, { color: theme.colors.strong }]}>
          {'Gratitude exercises'}
        </Text>
      </View>

      <View style={[styles.ViewIO, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 22 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableO3}
        >
          <View
            style={[
              styles.Viewfy,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.View_6e}>
              <Text style={[styles.TextD3, { color: theme.colors.strong }]}>
                {'Gratitude journal'}
              </Text>

              <Text style={[styles.Textf5, { color: theme.colors.strong }]}>
                {'Record thankful moments'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Imagezi}
                resizeMode={'contain'}
                source={Images.Difficult}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={[styles.Viewyb, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 66 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableQG}
        >
          <View
            style={[
              styles.View_9Q,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.View_8a}>
              <Text style={[styles.TextKq, { color: theme.colors.strong }]}>
                {'Letter to a friend'}
              </Text>

              <Text style={[styles.TextLv, { color: theme.colors.strong }]}>
                {'Practise gratitude'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.ImagejE}
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
  Image_4w: {
    width: 30,
    height: 30,
  },
  Viewfy: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  TextnA: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  Viewi9: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablejM: {
    width: 100,
  },
  Textb8: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  Viewrr: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableua: {
    width: 100,
  },
  Viewyj: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ViewkE: {
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
  Textz1: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewYP: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableob: {
    marginRight: 10,
  },
  TextSW: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewVl: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableZr: {
    marginRight: 10,
  },
  ViewUu: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  Textzk: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Viewjk: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Textjk: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_6P: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_7x: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Image_7w: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewDI: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_50: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewTC: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Textv8: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewH2: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  TextCj: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textga: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewom: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageH1: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_5H: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableEx: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewZL: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  TextMe: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextQk: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewBe: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageQN: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewK8: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_4M: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewpQ: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Textac: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewTq: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  TextD3: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textf5: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_6e: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imagezi: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewfy: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  TouchableO3: {
    minHeight: 100,
  },
  ViewIO: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  TextKq: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextLv: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_8a: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImagejE: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_9Q: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableQG: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewyb: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 75,
    marginBottom: 0,
  },
  Text_7A: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextCF: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewNP: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imageko: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewDQ: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_9T: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_6Y: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
});

export default withTheme(GuidedHabitsScreen);
