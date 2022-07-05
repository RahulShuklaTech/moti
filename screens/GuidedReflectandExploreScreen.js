import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const GuidedReflectandExploreScreen = props => {
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
        <View style={styles.ViewKe}>
          <View style={styles.ViewTM}>
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
                style={styles.Imagezg}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>
        </View>

        <View
          style={[
            styles.ViewRD,
            {
              backgroundColor: theme.colors.divider,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          ]}
        >
          <Text style={[styles.TextBO, { color: theme.colors.strong }]}>
            {'Reflect & Record'}
          </Text>
        </View>
      </View>

      <View>
        <View
          style={[styles.ViewYk, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('GuidedExerciseInputScreen', { id: 65 });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableHR}
          >
            <View
              style={[
                styles.ViewBn,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View style={styles.Viewb9}>
                <Text style={[styles.Text_1z, { color: theme.colors.strong }]}>
                  {'Happiness journal'}
                </Text>

                <Text style={[styles.Text_5e, { color: theme.colors.strong }]}>
                  {'Focus on the good'}
                </Text>
              </View>

              <View>
                <Image
                  style={styles.Imageio}
                  resizeMode={'cover'}
                  source={Images.Calm1}
                />
              </View>
            </View>
          </Touchable>
        </View>

        <View
          style={[styles.Viewhq, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('GuidedExerciseInputScreen', { id: 77 });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchable_84}
          >
            <View
              style={[
                styles.Viewhu,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 10,
                },
              ]}
            >
              <View style={styles.Viewg6}>
                <Text style={[styles.Textbh, { color: theme.colors.strong }]}>
                  {'Reflect on a memory'}
                </Text>

                <Text style={[styles.Textym, { color: theme.colors.strong }]}>
                  {'Remember the good times'}
                </Text>
              </View>

              <View>
                <Image
                  style={styles.ImagegP}
                  resizeMode={'cover'}
                  source={Images.Stressed3}
                />
              </View>
            </View>
          </Touchable>
        </View>
      </View>

      <View
        style={[
          styles.ViewMe,
          {
            backgroundColor: theme.colors.divider,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        ]}
      >
        <Text style={[styles.Text_7X, { color: theme.colors.strong }]}>
          {'Practise gratitude'}
        </Text>
      </View>

      <View style={[styles.ViewuA, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 67 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchableij}
        >
          <View
            style={[
              styles.ViewHi,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.Viewz6}>
              <Text style={[styles.Textva, { color: theme.colors.strong }]}>
                {'Gratitude journal'}
              </Text>

              <Text style={[styles.TextuZ, { color: theme.colors.strong }]}>
                {'Record thankful moments'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Imagerv}
                resizeMode={'contain'}
                source={Images.Difficult}
              />
            </View>
          </View>
        </Touchable>
      </View>

      <View style={[styles.ViewVv, { backgroundColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputScreen', { id: 12 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablesr}
        >
          <View
            style={[
              styles.ViewiO,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.ViewcU}>
              <Text style={[styles.TextN0, { color: theme.colors.strong }]}>
                {'Letter to a friend'}
              </Text>

              <Text style={[styles.Text_4B, { color: theme.colors.strong }]}>
                {'Practise gratitude'}
              </Text>
            </View>

            <View>
              <Image
                style={styles.Imageo4}
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
  Imagezg: {
    width: 30,
    height: 30,
  },
  ViewTM: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  TextdW: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewsR: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableUc: {
    width: 100,
  },
  TextZI: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  Viewde: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablecG: {
    width: 100,
  },
  Viewao: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ViewKe: {
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
  Textf5: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewjp: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableGa: {
    marginRight: 10,
  },
  TextSt: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_2p: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOa: {
    marginRight: 10,
  },
  Viewsl: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  TextBO: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewRD: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Text_1z: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_5e: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewb9: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imageio: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewBn: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableHR: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewYk: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Textbh: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textym: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewg6: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImagegP: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewhu: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchable_84: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewhq: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
  Text_7X: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewMe: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Textva: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextuZ: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewz6: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imagerv: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewHi: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  Touchableij: {
    minHeight: 100,
  },
  ViewuA: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  TextN0: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_4B: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewcU: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Imageo4: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewiO: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  Touchablesr: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewVv: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 75,
    marginBottom: 0,
  },
  Textya: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextwE: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewqm: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageCQ: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_7K: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  TouchableY5: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewak: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 0,
  },
});

export default withTheme(GuidedReflectandExploreScreen);
