import React from 'react';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard8Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.ViewSL}>
        <ImageBackground
          style={styles.ImageBackgroundHk}
          resizeMode={'cover'}
        />
      </View>

      <View style={styles.View_21}>
        <View>
          <Text style={[styles.TextX8, { color: theme.colors.primary }]}>
            {'8/8'}
          </Text>

          <Text style={[styles.TextFN, { color: theme.colors.strong }]}>
            {"You're all set!"}
          </Text>

          <Text style={[styles.TextMN, { color: theme.colors.strong }]}>
            {'We hope you find calm and happiness through journaling.'}
          </Text>
        </View>

        <View style={styles.ViewlP}>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard7Screen',
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
                navigation.navigate('Tabs', {
                  screen: 'TodayNavigator',
                  params: { screen: 'TodayScreen' },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidft,
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
  ImageBackgroundHk: {
    width: '100%',
    height: '100%',
  },
  ViewSL: {
    flex: 2,
  },
  TextX8: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextFN: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  TextMN: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSolidft: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  ViewlP: {
    width: '100%',
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  View_21: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default withTheme(Onboard8Screen);
