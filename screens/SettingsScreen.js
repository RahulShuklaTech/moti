import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View style={styles.Viewaq}>
        <ImageBackground
          style={[
            styles.ImageBackgroundYb,
            { backgroundColor: theme.colors.primary },
          ]}
          source={Images.Feather}
          resizeMode={'cover'}
        >
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
              style={styles.ImageSc}
              source={Images.Arrow}
              resizeMode={'cover'}
            />
          </Touchable>
          <View style={styles.Viewva} />
          <Text style={styles.TextXB}>{'Info'}</Text>
        </ImageBackground>
      </View>

      <View style={styles.Viewy2}>
        <Touchable
          onPress={() => {
            try {
              Linking.openURL('https://www.getcojo.com/faqs');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchableta}
        >
          <View
            style={[
              styles.ViewBB,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.ViewN6}>
              <Icon
                size={34}
                color={theme.colors.strong}
                name={'MaterialCommunityIcons/test-tube'}
              />
              <Text
                style={[
                  theme.typography.headline6,
                  styles.TextTe,
                  { color: theme.colors.strong },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Beta Info'}
              </Text>
            </View>

            <View style={styles.ViewXu}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              Linking.openURL('https://www.getcojo.com/cojo-terms-conditions');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablekr}
        >
          <View
            style={[
              styles.Viewbs,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.View_7q}>
              <Icon
                size={34}
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[
                  theme.typography.headline6,
                  styles.TextxK,
                  { color: theme.colors.strong },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Terms & Conditions'}
              </Text>
            </View>

            <View style={styles.View_3J}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              Linking.openURL('https://www.getcojo.com/cojo-privacy-policy');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[styles.Touchable_7T, { borderRadius: 10 }]}
        >
          <View
            style={[
              styles.ViewJa,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.ViewtJ}>
              <Icon
                size={34}
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[
                  theme.typography.headline6,
                  styles.TextYZ,
                  { color: theme.colors.strong },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Privacy Policy'}
              </Text>
            </View>

            <View style={styles.ViewNb}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageSc: {
    width: 30,
    height: 30,
  },
  Viewva: {
    height: 10,
  },
  TextXB: {
    textAlign: 'left',
    marginBottom: 0,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
  },
  ImageBackgroundYb: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    alignItems: 'flex-start',
  },
  Viewaq: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  TextTe: {
    marginLeft: 8,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewN6: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewXu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewBB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  Touchableta: {
    marginBottom: 15,
  },
  TextxK: {
    marginLeft: 8,
    fontFamily: 'Montserrat_700Bold',
  },
  View_7q: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_3J: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewbs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  Touchablekr: {
    marginBottom: 15,
  },
  TextYZ: {
    marginLeft: 8,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewtJ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewNb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewJa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  Touchable_7T: {
    marginBottom: 16,
  },
  Viewy2: {
    paddingLeft: 32,
    paddingBottom: 14,
    paddingTop: 25,
    paddingRight: 32,
  },
});

export default withTheme(SettingsScreen);
