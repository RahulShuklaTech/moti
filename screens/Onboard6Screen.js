import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard6Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.Viewdb}>
        <ImageBackground
          style={styles.ImageBackground_8z}
          resizeMode={'cover'}
          source={Images.Onbaord6}
        />
      </View>

      <View style={styles.View_2Z}>
        <View>
          <Text style={[styles.TextTM, { color: theme.colors.primary }]}>
            {'6/8'}
          </Text>

          <Text style={[styles.TextNp, { color: theme.colors.strong }]}>
            {'Deep Dive'}
          </Text>

          <Text style={[styles.TextkC, { color: theme.colors.strong }]}>
            {
              'Unpack difficult or complex thoughts and emotions using exercises based on CBT.'
            }
          </Text>
        </View>

        <View style={styles.Viewtn}>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard5Screen',
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
                navigation.navigate('Onboard7Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_0x,
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
  ImageBackground_8z: {
    width: '100%',
    height: '100%',
  },
  Viewdb: {
    flex: 2,
  },
  TextTM: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextNp: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  TextkC: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSolid_0x: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  Viewtn: {
    width: '100%',
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  View_2Z: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default withTheme(Onboard6Screen);
