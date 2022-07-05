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

const SignupScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const parseJson = async response => {
    return response.json();
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

  const getXanoAuthToken = json => {
    return 'authToken' in json ? 'Bearer ' + json['authToken'] : 'false';
  };

  const { theme } = props;
  const { navigation } = props;

  const [Name, setName] = React.useState('');
  const [signupEmail, setSignupEmail] = React.useState('');
  const [signupPassword, setSignupPassword] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewqW}
        enabled={true}
        behavior={'position'}
      >
        <View style={styles.ViewPL}>
          <Image
            style={styles.ImagevN}
            resizeMode={'contain'}
            source={Images.Cojologo}
          />
        </View>

        <View style={styles.Viewhh}>
          <Image
            style={styles.ImageGu}
            resizeMode={'contain'}
            source={Images.ReadingDoodle}
          />
          <Text style={[styles.Textaa, { color: theme.colors.strong }]}>
            {'Write your happy'}
          </Text>

          <View style={styles.ViewZV}>
            <TextInput
              onChangeText={newNameValue => {
                const Name = newNameValue;
                try {
                  setName(Name);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputmU,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Nickname'}
              value={Name}
              autoCapitalize={'none'}
            />
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
                styles.TextInputuB,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Email'}
              value={signupEmail}
              autoCapitalize={'none'}
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
                styles.TextInputgb,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Password'}
              value={signupPassword}
              autoCapitalize={'none'}
            />
            <>
              {!Constants['SIGNUP_ERROR'] ? null : (
                <Text style={[styles.TextzM, { color: theme.colors.error }]}>
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
                styles.ButtonSolidjZ,
                {
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.medium,
                },
              ]}
              title={'Sign Up'}
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
              style={styles.ButtonOutlineaO}
              title={'I already have an account'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagevN: {
    width: 60,
    height: 60,
  },
  ViewPL: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  ImageGu: {
    width: 250,
    height: 200,
  },
  Textaa: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
  },
  TextInputmU: {
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
  TextInputuB: {
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
  TextInputgb: {
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
  TextzM: {
    marginBottom: 20,
  },
  ButtonSolidjZ: {
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    height: 45,
  },
  ButtonOutlineaO: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  ViewZV: {
    width: '80%',
    marginTop: 20,
  },
  Viewhh: {
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
    paddingTop: 20,
  },
  KeyboardAvoidingViewqW: {
    height: '100%',
    flex: 1,
  },
});

export default withTheme(SignupScreen);
