import React from 'react';
import * as Auth0Api from '../apis/Auth0Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const LoggedinsuccessfullyScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;

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
      <View style={styles.ViewId}>
        <Text style={[styles.TextSr, { color: theme.colors.strong }]}>
          {'Logged in successfully!'}
        </Text>
      </View>

      <View style={{ backgroundColor: theme.colors.primary, borderRadius: 5 }}>
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
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolidaO,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Get Started'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextSr: {
    fontSize: 20,
  },
  ViewId: {
    alignSelf: 'center',
    marginBottom: '10%',
  },
  ButtonSolidaO: {
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

export default withTheme(LoggedinsuccessfullyScreen);
