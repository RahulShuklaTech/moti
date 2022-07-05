import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard5Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.View_2u}>
        <ImageBackground
          style={styles.ImageBackgroundRI}
          resizeMode={'cover'}
          source={Images.Onboard5}
        />
      </View>

      <View style={styles.Viewak}>
        <View>
          <Text style={[styles.TextRK, { color: theme.colors.primary }]}>
            {'5/8'}
          </Text>

          <Text style={[styles.Textbh, { color: theme.colors.strong }]}>
            {'Guided Exercises'}
          </Text>

          <Text style={[styles.TextmX, { color: theme.colors.strong }]}>
            {
              'Prompts on a range of topics to help you find calm, reflect on the day, understand yourself and much more!'
            }
          </Text>
        </View>

        <View style={styles.Viewv7}>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard4Screen',
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
                navigation.navigate('Onboard6Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidAZ,
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
  ImageBackgroundRI: {
    width: '100%',
    height: '100%',
  },
  View_2u: {
    flex: 2,
  },
  TextRK: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textbh: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  TextmX: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSolidAZ: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  Viewv7: {
    width: '100%',
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Viewak: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default withTheme(Onboard5Screen);
