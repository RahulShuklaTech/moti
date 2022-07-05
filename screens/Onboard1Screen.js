import React from 'react';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Onboard1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.ViewUB}>
        <ImageBackground
          style={styles.ImageBackgroundHW}
          resizeMode={'cover'}
        />
      </View>

      <View style={styles.ViewSG}>
        <View>
          <Text style={[styles.Text_9j, { color: theme.colors.primary }]}>
            {'1/8'}
          </Text>

          <Text style={[styles.TextbI, { color: theme.colors.strong }]}>
            {'Welcome to CoJo!'}
          </Text>

          <Text style={[styles.TextIE, { color: theme.colors.strong }]}>
            {
              'A smart, encrypted journaling app backed by the science of CBT (cognitive behavioural therapy).'
            }
          </Text>
        </View>

        <View style={styles.View_6N}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard2Screen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidaH,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.strong,
              },
            ]}
            title={'Get Started'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundHW: {
    width: '100%',
    height: '100%',
  },
  ViewUB: {
    flex: 2,
  },
  Text_9j: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextbI: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  TextIE: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  ButtonSolidaH: {
    borderRadius: 8,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  View_6N: {
    width: '100%',
    minHeight: 20,
  },
  ViewSG: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default withTheme(Onboard1Screen);
