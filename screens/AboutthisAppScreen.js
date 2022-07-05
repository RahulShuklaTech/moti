import React from 'react';
import Images from '../config/Images';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, StyleSheet, Text, View } from 'react-native';

const AboutthisAppScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View>
        <View style={styles.ViewPc}>
          <Image
            style={styles.ImageHa}
            resizeMode={'contain'}
            source={Images.Cojoapplogo}
          />
          <Text style={[styles.TextrO, { color: theme.colors.medium }]}>
            {
              'Thanks for trying this early version of cojo. We are committed to building a tool that can help everyone understand their thoughts and emotions. \n\nIf you have any feedback, positive or negative, we would love to hear it. Email steve@getcojo.com with any thoughts.'
            }
          </Text>

          <Touchable
            onPress={() => {
              try {
                Linking.openURL('https://twitter.com/GetCojo');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchableo8}
          >
            <View style={styles.View_3N}>
              <Icon
                style={styles.IconeC}
                name={'MaterialCommunityIcons/twitter'}
                size={20}
                color={theme.colors.primary}
              />
              <Text
                style={[
                  theme.typography.subtitle2,
                  { color: theme.colors.primary },
                ]}
                textBreakStrategy={'highQuality'}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
              >
                {'@twitter'}
              </Text>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                Linking.openURL('https://www.getcojo.com/');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableFf}
          >
            <View style={styles.View_5d}>
              <Icon
                style={styles.Icongf}
                name={'MaterialCommunityIcons/link-variant'}
                color={theme.colors.primary}
                size={20}
              />
              <Text
                style={[
                  theme.typography.subtitle2,
                  { color: theme.colors.primary },
                ]}
                textBreakStrategy={'highQuality'}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
              >
                {'Website'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View style={styles.ViewIZ}>
          <Divider
            style={styles.Dividerpa}
            color={theme.colors.divider}
            height={1}
          />
          <Touchable
            onPress={() => {
              try {
                Linking.openURL('https://www.getcojo.com/cojo-privacy-policy');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles.Viewv0}>
              <View style={styles.ViewYu}>
                <View style={styles.Viewxa}>
                  <Icon
                    style={styles.Icon_7n}
                    size={34}
                    color={theme.colors.strong}
                    name={'MaterialCommunityIcons/alpha-p-box'}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ]}
                    ellipsizeMode={'tail'}
                    textBreakStrategy={'highQuality'}
                    allowFontScaling={true}
                  >
                    {'Privacy Policy'}
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.IconcA}
                color={theme.colors.strong}
                name={'Ionicons/ios-arrow-forward'}
                size={24}
              />
            </View>
          </Touchable>
          <Divider
            style={styles.DividerYc}
            height={1}
            color={theme.colors.divider}
          />
        </View>
      </View>

      <View style={styles.View_7l}>
        <Text
          style={[theme.typography.caption, { color: theme.colors.medium }]}
          allowFontScaling={true}
          ellipsizeMode={'tail'}
          textBreakStrategy={'highQuality'}
        >
          {'Version 0.1'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageHa: {
    marginBottom: 24,
    width: 120,
    height: 120,
  },
  TextrO: {
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: 'Montserrat_500Medium',
    lineHeight: 22,
  },
  IconeC: {
    width: 24,
    alignSelf: 'flex-start',
    height: 24,
    marginRight: 8,
  },
  View_3N: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Touchableo8: {
    marginBottom: 6,
    marginTop: 12,
    flexWrap: 'wrap',
  },
  Icongf: {
    marginRight: 8,
    height: 24,
    width: 24,
    alignSelf: 'flex-start',
  },
  View_5d: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableFf: {
    flexWrap: 'wrap',
    marginTop: 2,
    marginBottom: 6,
  },
  ViewPc: {
    paddingBottom: 14,
    paddingTop: 64,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'center',
  },
  Dividerpa: {
    height: 1,
  },
  Icon_7n: {
    height: 40,
    width: 40,
  },
  Viewxa: {
    width: 34,
    height: 34,
    marginRight: 14,
  },
  ViewYu: {
    flexDirection: 'row',
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
  },
  IconcA: {
    width: 24,
    height: 24,
  },
  Viewv0: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  DividerYc: {
    height: 1,
  },
  ViewIZ: {
    paddingBottom: 14,
    paddingTop: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_7l: {
    paddingTop: 14,
    paddingBottom: 34,
    paddingRight: 32,
    paddingLeft: 32,
    alignItems: 'center',
    marginTop: 44,
  },
});

export default withTheme(AboutthisAppScreen);
