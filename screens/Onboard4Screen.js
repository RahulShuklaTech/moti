import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard4Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.ViewCq}>
        <ImageBackground
          style={styles.ImageBackground_9E}
          resizeMode={'cover'}
          source={Images.Onboard4}
        />
      </View>

      <View style={styles.ViewhZ}>
        <View>
          <Text style={[styles.TextVN, { color: theme.colors.primary }]}>
            {'4/8'}
          </Text>

          <Text style={[styles.Textpj, { color: theme.colors.strong }]}>
            {'Moods & Activity'}
          </Text>

          <Text style={[styles.TextgJ, { color: theme.colors.strong }]}>
            {
              'Track your mood and reflect on how actions and habits impact your everyday mood.'
            }
          </Text>
        </View>

        <View style={styles.ViewUh}>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard3Screen',
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
                navigation.navigate('Onboard5Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSoliddy,
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
  ImageBackground_9E: {
    width: '100%',
    height: '100%',
  },
  ViewCq: {
    flex: 2,
  },
  TextVN: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textpj: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  TextgJ: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSoliddy: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  ViewUh: {
    width: '100%',
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ViewhZ: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default withTheme(Onboard4Screen);
