import React from 'react';
import * as Auth0Api from '../apis/Auth0Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, TextInput, View } from 'react-native';

const EmailinputpaswordlessScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <View style={styles.ViewXS}>
        <Image
          style={styles.Image_0N}
          source={{
            uri: 'https://motileo.com/assets/app/motileo_logo_final.svg',
          }}
          resizeMode={'cover'}
        />
      </View>

      <View>
        <TextInput
          onChangeText={newEmailInputValue => {
            try {
              setTextInputValue(newEmailInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.TextInput_8V,
            { borderColor: theme.colors.divider, color: theme.colors.strong },
          ]}
          placeholder={'Enter your email'}
          value={textInputValue}
          returnKeyType={'done'}
          spellcheck={true}
          autoCapitalize={'none'}
          textContentType={'emailAddress'}
        />
      </View>

      <View>
        <>
          {!textInputValue?.length ? null : (
            <ButtonSolid
              onPress={async () => {
                try {
                  await Auth0Api.$api$passwordless$startPOST(Constants, {
                    email: textInputValue,
                  });
                  navigation.navigate('OTPfromemailScreen', {
                    email: textInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid_15,
                { backgroundColor: theme.colors.primary },
              ]}
              title={'Login'}
            />
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_0N: {
    width: 250,
    height: 50,
    marginBottom: 40,
  },
  ViewXS: {
    alignItems: 'center',
    height: '50%',
    justifyContent: 'center',
  },
  TextInput_8V: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  ButtonSolid_15: {
    borderRadius: 5,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 18,
  },
  screen: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(EmailinputpaswordlessScreen);
