import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard2Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.ViewdQ}>
        <ImageBackground
          style={styles.ImageBackgroundDD}
          resizeMode={'cover'}
          source={Images.Onboarding2}
        />
      </View>

      <View style={styles.View_9p}>
        <View>
          <Text style={[styles.TextjT, { color: theme.colors.primary }]}>
            {'2/8'}
          </Text>

          <Text style={[styles.Texta7, { color: theme.colors.strong }]}>
            {'Build a Habit'}
          </Text>

          <Text style={[styles.Text_2I, { color: theme.colors.strong }]}>
            {
              'Complete daily prompts and enjoy little moments of reflection and self discovery.'
            }
          </Text>
        </View>

        <View style={styles.View_2Y}>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard1Screen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'AntDesign/arrowleft'}
            size={32}
            color={theme.colors.divider}
          />
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard3Screen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidX6,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.strong,
              },
            ]}
            title={'Next'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundDD: {
    width: '100%',
    height: '100%',
  },
  ViewdQ: {
    flex: 2,
  },
  TextjT: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    paddingTop: 5,
    marginBottom: 5,
  },
  Texta7: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  Text_2I: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSolidX6: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  View_2Y: {
    width: '100%',
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  View_9p: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default withTheme(Onboard2Screen);
