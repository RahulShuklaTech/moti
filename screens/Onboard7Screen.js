import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard7Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.Viewqx}>
        <ImageBackground
          style={styles.ImageBackgroundaF}
          resizeMode={'cover'}
          source={Images.Onboard7}
        />
      </View>

      <View style={styles.Viewa5}>
        <View>
          <Text style={[styles.Textre, { color: theme.colors.primary }]}>
            {'7/8'}
          </Text>

          <Text style={[styles.TextDu, { color: theme.colors.strong }]}>
            {'100% Encrypted'}
          </Text>

          <Text style={[styles.TextoV, { color: theme.colors.strong }]}>
            {
              'Your entries are only readable on your logged in phone and we never share your data with anybody.'
            }
          </Text>
        </View>

        <View style={styles.Viewz6}>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard6Screen',
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
                navigation.navigate('Onboard8Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidsG,
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
  ImageBackgroundaF: {
    width: '100%',
    height: '100%',
  },
  Viewqx: {
    flex: 2,
  },
  Textre: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextDu: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  TextoV: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSolidsG: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  Viewz6: {
    width: '100%',
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Viewa5: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default withTheme(Onboard7Screen);
