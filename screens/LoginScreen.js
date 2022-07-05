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
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const LoginScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const handleErrorMessage = json => {
    if ('message' in json) {
      return 'message' in json ? json['message'] : '';
    }
  };

  const toLowerCase = input => {
    return input.toLowerCase();
  };

  const consoleLog = param => {
    console.log(param);
  };

  const throwError = json => {
    if ('message' in json) {
      throw new Error();
    }
  };

  const parseJson = async response => {
    return response.json();
  };

  const getXanoAuthToken = json => {
    return 'authToken' in json ? 'Bearer ' + json['authToken'] : 'false';
  };
  // Redirects login
  //
  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(async () => {
    try {
      if (!isFocused) {
        return;
      }
      setLoading(true);
      const Authmeresponse = await XanoAuthApi.newEndpointMeGET(Constants);
      const email = Authmeresponse.email;
      setLoading(false);
      console.log(JSON.stringify(Authmeresponse));
      if (!email) {
        return;
      }
      navigation.navigate('Tabs', {
        screen: 'TodayNavigator',
        params: { screen: 'TodayScreen' },
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [loading, setLoading] = React.useState(true);
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true}>
      <>
        {loading ? null : (
          <KeyboardAvoidingView
            style={styles.KeyboardAvoidingViewVo}
            enabled={true}
            behavior={'position'}
          >
            <View style={styles.ViewX3}>
              <Image
                style={styles.ImageY6}
                resizeMode={'contain'}
                source={Images.Cojologo}
              />
            </View>

            <View style={styles.ViewAH}>
              <Image
                style={styles.Imagepd}
                resizeMode={'contain'}
                source={Images.MeditatingDoodle119552}
              />
              <Text style={[styles.Text_2J, { color: theme.colors.strong }]}>
                {'Welcome back'}
              </Text>

              <View style={styles.ViewQE}>
                <TextInput
                  onChangeText={newEmailValue => {
                    const loginEmail = newEmailValue;
                    try {
                      setLoginEmail(loginEmail);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.TextInputqV,
                    { borderColor: theme.colors.divider },
                  ]}
                  placeholder={'Email'}
                  value={loginEmail}
                  autoCapitalize={'none'}
                />
                <TextInput
                  onChangeText={newPasswordValue => {
                    const loginPassword = newPasswordValue;
                    try {
                      setLoginPassword(loginPassword);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.TextInput_8N,
                    { borderColor: theme.colors.divider },
                  ]}
                  placeholder={'Password'}
                  value={loginPassword}
                  secureTextEntry={true}
                  autoCapitalize={'none'}
                />
                <>
                  {!Constants['LOGIN_ERROR'] ? null : (
                    <Text
                      style={[styles.Textsz, { color: theme.colors.error }]}
                    >
                      {'Invalid Password'}
                    </Text>
                  )}
                </>
                <ButtonSolid
                  onPress={async () => {
                    try {
                      const loginResponseJson = await XanoAuthApi.authLoginPOST(
                        Constants,
                        {
                          loginEmail: toLowerCase(loginEmail),
                          loginPassword: loginPassword,
                        }
                      );
                      const authToken = loginResponseJson.authToken;
                      loginResponseJson.message;
                      consoleLog(loginResponseJson);
                      setGlobalVariableValue({
                        key: 'LOGIN_ERROR',
                        value: true,
                      });
                      if (!authToken) {
                        return;
                      }
                      setGlobalVariableValue({
                        key: 'XANO_AUTHORIZATION_HEADER',
                        value: 'Bearer ' + authToken,
                      });
                      navigation.navigate('Tabs', { screen: 'TodayScreen' });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolid_4I,
                    {
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.medium,
                    },
                  ]}
                  title={'Log In'}
                />
                <ButtonOutline
                  onPress={() => {
                    try {
                      navigation.navigate('StackNavigator', {
                        screen: 'SignupScreen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.ButtonOutlineem}
                  title={'Create Account'}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        )}
      </>
      <>
        {!loading ? null : (
          <View style={styles.ViewXu}>
            <>
              {!loading ? null : (
                <ActivityIndicator
                  style={styles.ActivityIndicatorBa}
                  size={'small'}
                  animating={true}
                  hidesWhenStopped={true}
                />
              )}
            </>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageY6: {
    width: 150,
    height: 60,
  },
  ViewX3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  Imagepd: {
    width: 250,
    height: 250,
  },
  Text_2J: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
  },
  TextInputqV: {
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
  TextInput_8N: {
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
  Textsz: {
    textAlign: 'center',
    marginBottom: 20,
  },
  ButtonSolid_4I: {
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    height: 45,
  },
  ButtonOutlineem: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  ViewQE: {
    width: '80%',
    marginTop: 20,
  },
  ViewAH: {
    alignItems: 'center',
    paddingTop: 20,
    height: '100%',
    minHeight: '100%',
  },
  KeyboardAvoidingViewVo: {
    flex: 1,
  },
  ActivityIndicatorBa: {
    width: 50,
    height: 50,
  },
  ViewXu: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default withTheme(LoginScreen);
