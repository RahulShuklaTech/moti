import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as XanoAuthApi from '../apis/XanoAuthApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [newname, setNewname] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={true}
      scrollable={true}
    >
      <Modal
        style={styles.ModalnT}
        visible={Constants['visible']}
        animationType={'slide'}
        presentationStyle={'pageSheet'}
      >
        <View style={[styles.ViewCo, { backgroundColor: theme.colors.fafafa }]}>
          <XanoApi.FetchUserInfoGET>
            {({ loading, error, data, refetchUserInfo }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <FlatList
                  data={fetchData}
                  listKey={'hjJQidJh'}
                  keyExtractor={({ item }) => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles.ViewaE}>
                        <Text
                          style={[
                            styles.TextGA,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Current nickname'}
                        </Text>

                        <Text
                          style={[
                            styles.Text_76,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {listData?.Name}
                        </Text>
                      </View>
                    );
                  }}
                  contentContainerStyle={styles.FlatListhjContent}
                  numColumns={1}
                />
              );
            }}
          </XanoApi.FetchUserInfoGET>
          <View style={styles.Viewm3}>
            <TextInput
              onChangeText={newNewnameValue => {
                const newname = newNewnameValue;
                try {
                  setNewname(newname);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputXh,
                {
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.lightInverse,
                },
              ]}
              placeholder={'Type new nickname'}
              value={newname}
            />
          </View>

          <XanoAuthApi.FetchNewEndpointMeGET>
            {({ loading, error, data, refetchNewEndpointMe }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <ButtonSolid
                  onPress={async () => {
                    try {
                      await XanoApi.postNamePOST(Constants, {
                        newname: newname,
                        user_id: fetchData?.id,
                      });
                      setGlobalVariableValue({
                        key: 'visible',
                        value: false,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSoliddM,
                    {
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.strong,
                    },
                  ]}
                  title={'Save new nickname'}
                />
              );
            }}
          </XanoAuthApi.FetchNewEndpointMeGET>
          <ButtonOutline
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'visible',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlinepv,
              { color: theme.colors.light, borderColor: theme.colors.light },
            ]}
            title={'Cancel'}
          />
        </View>
      </Modal>

      <View style={styles.Viewgn}>
        <View
          style={[styles.ViewjA, { backgroundColor: theme.colors.primary }]}
        >
          <View style={styles.ViewAd}>
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchable_4h}
            >
              <Image
                style={styles.Imagen3}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>

            <View style={[styles.View_19, { borderRadius: 5 }]}>
              <XanoApi.FetchUserInfoGET>
                {({ loading, error, data, refetchUserInfo }) => {
                  const fetchData = data;
                  if (!fetchData || loading) {
                    return <ActivityIndicator />;
                  }

                  if (error) {
                    return (
                      <Text style={{ textAlign: 'center' }}>
                        There was a problem fetching this data
                      </Text>
                    );
                  }

                  return (
                    <FlatList
                      data={fetchData}
                      listKey={'Q9bWaF6a'}
                      keyExtractor={({ item }) =>
                        item?.id || item?.uuid || item
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <View style={styles.ViewU9}>
                            <Text
                              style={[
                                styles.TextC7,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'Hi '}
                              {listData?.Name}
                            </Text>
                            <>
                              {listData?.Name ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'visible',
                                        value: true,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolidUf,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'Tap to add your name'}
                                />
                              )}
                            </>
                          </View>
                        );
                      }}
                      contentContainerStyle={styles.FlatListQ9Content}
                      numColumns={1}
                    />
                  );
                }}
              </XanoApi.FetchUserInfoGET>
              <IconButton
                onPress={() => {
                  try {
                    navigation.navigate('SettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                icon={'AntDesign/infocirlce'}
                size={30}
                color={theme.colors.custom_rgb0_0_0}
              />
            </View>
          </View>

          <View
            style={[
              styles.ViewMJ,
              { borderRadius: 10, backgroundColor: theme.colors.strongInverse },
            ]}
          >
            <View>
              <XanoApi.FetchCountEntriesGET>
                {({ loading, error, data, refetchCountEntries }) => {
                  const fetchData = data;
                  if (!fetchData || loading) {
                    return <ActivityIndicator />;
                  }

                  if (error) {
                    return (
                      <Text style={{ textAlign: 'center' }}>
                        There was a problem fetching this data
                      </Text>
                    );
                  }

                  return (
                    <Text
                      style={[styles.TextR5, { color: theme.colors.strong }]}
                    >
                      {fetchData?.total}
                    </Text>
                  );
                }}
              </XanoApi.FetchCountEntriesGET>
              <Text style={[styles.Textqp, { color: theme.colors.light }]}>
                {'Total entries'}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[styles.ViewMO, { backgroundColor: theme.colors.primary }]}
        >
          <View
            style={[
              styles.ViewAt,
              {
                backgroundColor: theme.colors.divider,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            ]}
          ></View>
        </View>

        <View
          style={[styles.View_2k, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ProfileStack', {
                  screen: 'SetFavouritesScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchableaa}
          >
            <View
              style={[
                styles.Viewc3,
                { borderRadius: 10, backgroundColor: theme.colors.card_green },
              ]}
            >
              <View style={styles.Viewe7}>
                <Text style={[styles.TextQJ, { color: theme.colors.strong }]}>
                  {'Make CoJo your own!'}
                </Text>

                <Text style={[styles.Text_3I, { color: theme.colors.strong }]}>
                  {
                    'Edit your daily exercises to find the ones that work for you and help you find your journaling rhythm and achieve your goals.'
                  }
                </Text>
                <ButtonSolid
                  onPress={() => {
                    try {
                      navigation.navigate('SetFavouritesScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidIU,
                    {
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.strong,
                    },
                  ]}
                  title={'Customise your daily exercises'}
                />
              </View>
            </View>
          </Touchable>
        </View>

        <View
          style={[styles.ViewlX, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ProfileStack', {
                  screen: 'YourdatastudioScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableTz}
          >
            <View
              style={[
                styles.ViewFB,
                {
                  borderRadius: 10,
                  backgroundColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View style={styles.Viewd1}>
                <Text style={[styles.TextXM, { color: theme.colors.strong }]}>
                  {'Your data studio'}
                </Text>
                <Icon name={'Feather/arrow-right'} size={24} />
              </View>
            </View>
          </Touchable>
        </View>

        <View
          style={[styles.ViewYX, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'visible',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableQZ}
          >
            <View
              style={[
                styles.ViewxG,
                {
                  borderRadius: 10,
                  backgroundColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View style={styles.ViewSG}>
                <Text style={[styles.Textrg, { color: theme.colors.strong }]}>
                  {'Edit account details'}
                </Text>
                <Icon name={'Feather/arrow-right'} size={24} />
              </View>
            </View>
          </Touchable>
        </View>

        <View
          style={[styles.ViewyB, { backgroundColor: theme.colors.divider }]}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('StackNavigator', {
                  screen: 'Onboard1Screen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchable_0L}
          >
            <View
              style={[
                styles.ViewZN,
                {
                  borderRadius: 10,
                  backgroundColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View style={styles.Viewmc}>
                <Text style={[styles.TextsA, { color: theme.colors.strong }]}>
                  {'View onboarding'}
                </Text>
                <Icon name={'Feather/arrow-right'} size={24} />
              </View>
            </View>
          </Touchable>
        </View>

        <View
          style={[styles.ViewqE, { backgroundColor: theme.colors.divider }]}
        >
          <ButtonSolid
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'XANO_AUTHORIZATION_HEADER',
                  value: 'false',
                });
                setGlobalVariableValue({
                  key: 'SIGNUP_ERROR',
                  value: '',
                });
                setGlobalVariableValue({
                  key: 'LOGIN_ERROR',
                  value: '',
                });
                navigation.navigate('StackNavigator', {
                  screen: 'LoginScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolids3,
              {
                color: theme.colors.custom_rgb0_0_0,
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              },
            ]}
            title={'Logout'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextGA: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  Text_76: {
    fontSize: 26,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  ViewaE: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlatListhjContent: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  FetchDR: {
    minHeight: 40,
  },
  TextInputXh: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    width: '100%',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  Viewm3: {
    paddingTop: 20,
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
  },
  ButtonSoliddM: {
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    fontSize: 16,
  },
  FetchJu: {
    minHeight: 40,
  },
  ButtonOutlinepv: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 20,
  },
  ViewCo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 60,
    flex: 1,
  },
  ModalnT: {
    height: '100%',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
  },
  Imagen3: {
    width: 30,
    height: 30,
  },
  Touchable_4h: {
    marginBottom: 10,
  },
  TextC7: {
    fontSize: 24,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  ButtonSolidUf: {
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
  },
  ViewU9: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlatListQ9Content: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  FetchhZ: {
    minHeight: 40,
  },
  View_19: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 0,
  },
  ViewAd: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
    minHeight: 60,
  },
  TextR5: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
  },
  FetchPV: {
    minHeight: 40,
  },
  Textqp: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
  },
  ViewMJ: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  ViewjA: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 20,
    width: '100%',
  },
  TextpR: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewAt: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
    width: '100%',
  },
  ViewMO: {
    width: '100%',
  },
  TextQJ: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginTop: 5,
  },
  Text_3I: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'left',
    marginTop: 10,
  },
  ButtonSolidIU: {
    borderRadius: 10,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    marginTop: 10,
    width: '100%',
  },
  Viewe7: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start',
  },
  Viewc3: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
  },
  Touchableaa: {
    width: '100%',
    maxWidth: '100%',
  },
  View_2k: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingBottom: 20,
  },
  TextXo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginTop: 5,
  },
  View_1f: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewLA: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
  },
  TouchableME: {
    width: '100%',
    maxWidth: '100%',
  },
  ViewaR: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingBottom: 20,
  },
  TextXM: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginTop: 5,
  },
  Viewd1: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewFB: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
  },
  TouchableTz: {
    width: '100%',
    maxWidth: '100%',
  },
  ViewlX: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingBottom: 20,
  },
  Textrg: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginTop: 5,
  },
  ViewSG: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewxG: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
  },
  TouchableQZ: {
    width: '100%',
    maxWidth: '100%',
  },
  ViewYX: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingBottom: 20,
  },
  TextsA: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginTop: 5,
  },
  Viewmc: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewZN: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
  },
  Touchable_0L: {
    width: '100%',
    maxWidth: '100%',
  },
  ViewyB: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingBottom: 20,
  },
  TextbV: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginTop: 5,
  },
  ViewSe: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewSw: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
  },
  Touchablebl: {
    width: '100%',
    maxWidth: '100%',
  },
  ViewsL: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingBottom: 20,
  },
  ButtonSolids3: {
    borderRadius: 10,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    height: 45,
    fontSize: 16,
  },
  ViewqE: {
    width: '100%',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  ButtonSolidC6: {
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    height: 45,
    fontSize: 16,
  },
  Viewp7: {
    width: '100%',
    marginTop: 20,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Viewgn: {
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: '0%',
    alignItems: 'center',
  },
});

export default withTheme(ProfileScreen);
