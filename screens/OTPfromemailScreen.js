import React from 'react';
import * as Auth0Api from '../apis/Auth0Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const OTPfromemailScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [apiResponseVar, setApiResponseVar] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <View style={styles.Viewch}>
        <Text style={[styles.TextbF, { color: theme.colors.strong }]}>
          {'Verification Code sent to:'}
        </Text>

        <Text style={[styles.Textd7, { color: theme.colors.strong }]}>
          {props.route?.params?.email ?? ''}
        </Text>

        <Text style={[styles.TextvV, { color: theme.colors.strong }]}>
          {apiResponseVar}
        </Text>
      </View>

      <View style={{ backgroundColor: theme.colors.primary, borderRadius: 5 }}>
        <TextInput
          onChangeText={newOtpInputValue => {
            try {
              setTextInputValue(newOtpInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.TextInput_53,
            {
              borderColor: theme.colors.divider,
              backgroundColor: theme.colors.divider,
            },
          ]}
          placeholder={'Enter code from email'}
          value={textInputValue}
          keyboardType={'number-pad'}
          returnKeyType={'done'}
          placeholderTextColor={theme.colors.medium}
          maxLength={6}
          autoFocus={true}
        />
        <ButtonSolid
          onPress={async () => {
            try {
              const apiResponse = await Auth0Api.$api$passwordless$tokenPOST(
                Constants,
                { email: 'motileocom@gmail.com', otp_code: textInputValue }
              );
              const id_token = apiResponse.api.data.id_token;
              setGlobalVariableValue({
                key: 'AUTHORIZATION_HEADER',
                value: id_token,
              });
              navigation.navigate('LoggedinsuccessfullyScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolidoq,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Get Started'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextbF: {
    fontSize: 20,
  },
  Textd7: {
    fontSize: 20,
  },
  TextvV: {
    fontSize: 20,
  },
  Viewch: {
    alignSelf: 'center',
    marginBottom: '10%',
  },
  TextInput_53: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    textAlign: 'center',
  },
  ButtonSolidoq: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  screen: {
    paddingLeft: 16,
    paddingRight: 16,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(OTPfromemailScreen);
