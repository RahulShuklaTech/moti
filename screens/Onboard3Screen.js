import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={styles.screen}>
      <View style={styles.Viewaa}>
        <ImageBackground
          style={styles.ImageBackgroundPb}
          resizeMode={'cover'}
          source={Images.Onboard3}
        />
      </View>

      <View style={styles.ViewUg}>
        <View>
          <Text style={[styles.Textom, { color: theme.colors.primary }]}>
            {'3/8'}
          </Text>

          <Text style={[styles.Text_27, { color: theme.colors.strong }]}>
            {'Make it Yours'}
          </Text>

          <Text style={[styles.Text_8K, { color: theme.colors.strong }]}>
            {
              'Choose the daily prompts that suit you and find your own journaling rhythm.'
            }
          </Text>
        </View>

        <View style={styles.View_9j}>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard2Screen',
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
                  screen: 'Onboard4Screen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidwv,
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
  ImageBackgroundPb: {
    width: '100%',
    height: '100%',
  },
  Viewaa: {
    flex: 2,
  },
  Textom: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
  },
  Text_27: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  Text_8K: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSolidwv: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  View_9j: {
    width: '100%',
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ViewUg: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
  screen: {
    marginBottom: 5,
  },
});

export default withTheme(Onboard3Screen);
