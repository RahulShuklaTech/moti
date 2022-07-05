import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const YourdatastudioScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider, borderRadius: 20 }}
      hasSafeArea={true}
      scrollable={true}
    >
      <View style={styles.ViewmD}>
        <View>
          <View
            style={[styles.ViewpU, { backgroundColor: theme.colors.primary }]}
          >
            <ImageBackground
              style={styles.ImageBackgroundkJ}
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
                style={styles.Touchableii}
              >
                <Image
                  style={styles.Imageyg}
                  source={Images.Arrow}
                  resizeMode={'cover'}
                />
              </Touchable>

              <Text style={[styles.TextWR, { color: theme.colors.strong }]}>
                {'Data studio'}
              </Text>

              <Text style={[styles.TextpQ, { color: theme.colors.strong }]}>
                {'Information about your data and how you can manage it.'}
              </Text>
            </ImageBackground>
          </View>

          <View style={{ backgroundColor: theme.colors.primary }}>
            <View
              style={[
                styles.View_3M,
                {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            ></View>
          </View>

          <ScrollView
            contentContainerStyle={styles.ScrollViewGTContent}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <View style={[styles.View_2j, { borderRadius: 5 }]}>
              <View style={styles.Viewd4}>
                <View style={styles.ViewQB}>
                  <Text style={[styles.TextgV, { color: theme.colors.strong }]}>
                    {'Info about encryption'}
                  </Text>

                  <Text
                    style={[styles.Text_6A, { color: theme.colors.strong }]}
                  >
                    {
                      'All your entries are automatically encrypted. This means that they are stored on our servers as a random string of characters. The only way to turn that string into readable text is to decrypt them, which requires your logged in device.'
                    }
                  </Text>
                </View>
                <Image
                  style={styles.ImagenS}
                  source={Images.Onboard72}
                  resizeMode={'cover'}
                />
              </View>
            </View>

            <Touchable style={[styles.TouchableRt, { borderRadius: 5 }]}>
              <View
                style={[
                  styles.ViewtK,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 5,
                  },
                ]}
              >
                <View style={styles.ViewIa}>
                  <View style={styles.ViewV0}>
                    <Text
                      style={[styles.TextAL, { color: theme.colors.strong }]}
                    >
                      {'Request data deletion'}
                    </Text>

                    <Text
                      style={[styles.TextHX, { color: theme.colors.strong }]}
                    >
                      {
                        'Remove all your data from our serves including all entries and personal info.\n\n(You can also delete entries from your journals page)'
                      }
                    </Text>
                  </View>
                </View>
                <ButtonSolid
                  onPress={() => {
                    try {
                      Linking.openURL('https://www.getcojo.com/your-data-hub');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidWa,
                    {
                      backgroundColor: theme.colors.error,
                      color: theme.colors.strong,
                    },
                  ]}
                  title={'Request data deletion'}
                />
              </View>
            </Touchable>
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageyg: {
    width: 30,
    height: 30,
  },
  Touchableii: {
    width: 30,
    height: 30,
  },
  TextWR: {
    textAlign: 'left',
    marginBottom: 6,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    marginTop: 20,
  },
  TextpQ: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  ImageBackgroundkJ: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 35,
    paddingBottom: 24,
    maxHeight: 200,
  },
  ViewpU: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'flex-start',
    maxHeight: 200,
  },
  Text_5Q: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
  },
  View_3M: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 20,
    paddingLeft: 20,
    alignContent: 'center',
  },
  TextgV: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  Text_6A: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
    lineHeight: 20,
  },
  ViewQB: {
    maxWidth: '100%',
  },
  ImagenS: {
    width: '100%',
    height: 350,
  },
  Viewd4: {
    maxWidth: '100%',
    width: '100%',
    alignItems: 'center',
  },
  View_2j: {
    width: '100%',
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 0,
    paddingRight: 0,
  },
  TextAL: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  TextHX: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  ViewV0: {
    maxWidth: '100%',
  },
  ViewIa: {
    maxWidth: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ButtonSolidWa: {
    borderRadius: 10,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  ViewtK: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableRt: {
    marginBottom: 20,
  },
  ScrollViewGTContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
  ViewmD: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default withTheme(YourdatastudioScreen);
