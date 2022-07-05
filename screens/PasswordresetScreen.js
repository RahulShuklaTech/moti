import React from 'react';
import * as XanoAuthApi from '../apis/XanoAuthApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const PasswordresetScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const parseJson = async response => {
    return response.json();
  };

  const getXanoAuthToken = json => {
    return 'authToken' in json ? 'Bearer ' + json['authToken'] : 'false';
  };

  const handleErrorMessage = json => {
    if ('message' in json) {
      return 'message' in json ? json['message'] : '';
    }
  };

  const throwError = json => {
    if ('message' in json) {
      throw new Error();
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const [signupEmail, setSignupEmail] = React.useState('');
  const [signupPassword, setSignupPassword] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true} hasTopSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewas}
        enabled={true}
        behavior={'position'}
      >
        <View style={styles.Viewtk}>
          <Image
            style={styles.ImageTc}
            resizeMode={'contain'}
            source={Images.Cojologo}
          />
        </View>

        <View style={styles.ViewKw}>
          <Image
            style={styles.Imagedq}
            resizeMode={'contain'}
            source={Images.UnboxingDoodle}
          />
          <View style={styles.ViewAT}>
            <Text style={[styles.TexttC, { color: theme.colors.strong }]}>
              {"Let's change your password"}
            </Text>
          </View>

          <View style={styles.ViewNT}>
            <TextInput
              onChangeText={newEmailValue => {
                const signupEmail = newEmailValue;
                try {
                  setSignupEmail(signupEmail);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputfi,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Email'}
              value={signupEmail}
            />
            <TextInput
              onChangeText={newPasswordValue => {
                const signupPassword = newPasswordValue;
                try {
                  setSignupPassword(signupPassword);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputYB,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Password'}
              value={signupPassword}
            />
            <>
              {!Constants['SIGNUP_ERROR'] ? null : (
                <Text style={[styles.TextAb, { color: theme.colors.error }]}>
                  {'This account is already in use'}
                </Text>
              )}
            </>
            <ButtonSolid
              onPress={async () => {
                try {
                  const signupResponseJSON = await XanoAuthApi.authSignupPOST(
                    Constants,
                    {
                      name: Name,
                      signupEmail: signupEmail,
                      signupPassword: signupPassword,
                    }
                  );
                  const authToken = signupResponseJSON.authToken;
                  const message = signupResponseJSON.message;
                  setGlobalVariableValue({
                    key: 'SIGNUP_ERROR',
                    value: message,
                  });
                  if (!authToken) {
                    return;
                  }
                  setGlobalVariableValue({
                    key: 'XANO_AUTHORIZATION_HEADER',
                    value: 'Bearer ' + authToken,
                  });
                  navigation.navigate('StackNavigator', {
                    screen: 'Onboard1Screen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidhv,
                {
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.medium,
                },
              ]}
              title={'Save New Password'}
            />
            <ButtonOutline
              onPress={() => {
                try {
                  navigation.navigate('StackNavigator', {
                    screen: 'LoginScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.ButtonOutlinesC}
              title={'Back to login'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageTc: {
    width: 150,
    height: 60,
  },
  Viewtk: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  Imagedq: {
    width: 250,
    height: 200,
  },
  TexttC: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewAT: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  TextInputfi: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    height: 45,
  },
  TextInputYB: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginBottom: 20,
    height: 45,
  },
  TextAb: {
    marginBottom: 20,
  },
  ButtonSolidhv: {
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    height: 45,
  },
  ButtonOutlinesC: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  ViewNT: {
    width: '80%',
    marginTop: 20,
  },
  ViewKw: {
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
    paddingTop: 20,
  },
  KeyboardAvoidingViewas: {
    height: '100%',
    flex: 1,
  },
});

export default withTheme(PasswordresetScreen);
