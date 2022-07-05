import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
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
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const TodayScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(async () => {
    try {
      if (!isFocused) {
        return;
      }
      const dailies = await XanoApi.checkDailyEntriesGET(Constants);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [test, setTest] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
        <View style={styles.View_8f}>
          <ImageBackground
            style={styles.ImageBackgroundts}
            resizeMode={'cover'}
            source={Images.Toughtime}
            backgroundColor={theme.colors.primary}
          >
            <View style={[styles.ViewOS, { borderRadius: 20 }]}>
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
                      listKey={'mh2Zh8sF'}
                      keyExtractor={({ item }) =>
                        item?.id || item?.uuid || item
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <View style={styles.ViewGt}>
                            <Text
                              style={[
                                styles.TextqK,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'Hi '}
                              {listData?.Name}
                            </Text>
                            <>
                              {listData?.Name ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolid_2L,
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
                      contentContainerStyle={styles.FlatListmhContent}
                      numColumns={1}
                    />
                  );
                }}
              </XanoApi.FetchUserInfoGET>
              <IconButton
                onPress={() => {
                  try {
                    navigation.navigate('ProfileStack', {
                      screen: 'ProfileScreen',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                icon={'FontAwesome/user-circle-o'}
                size={32}
                color={theme.colors.strong}
              />
            </View>
          </ImageBackground>
        </View>
        <View
          style={[styles.ViewJ8, { backgroundColor: theme.colors.primary }]}
        />
        <View style={{ backgroundColor: theme.colors.primary }}>
          <View
            style={[
              styles.View_3p,
              {
                backgroundColor: theme.colors.divider,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            ]}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('LogMoodScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchablefZ}
            >
              <View
                style={[
                  styles.View_1L,
                  {
                    backgroundColor: theme.colors.background,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.Vieww1}>
                  <View style={styles.ViewUi}>
                    <Text
                      style={[styles.TextlO, { color: theme.colors.strong }]}
                    >
                      {'Log mood / activity'}
                    </Text>

                    <Text
                      style={[styles.TextBb, { color: theme.colors.strong }]}
                    >
                      {'How do you feel?'}
                    </Text>
                  </View>
                </View>

                <View style={styles.ViewaV}>
                  <Image
                    style={styles.ImageMe}
                    resizeMode={'cover'}
                    source={Images.Feeling}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          <>
            {Constants['setup'] ? null : (
              <View
                style={[
                  styles.Viewee,
                  { backgroundColor: theme.colors.divider },
                ]}
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
                  style={styles.Touchablev8}
                >
                  <View
                    style={[
                      styles.ViewCb,
                      {
                        borderRadius: 10,
                        backgroundColor: theme.colors.card_green,
                      },
                    ]}
                  >
                    <View style={styles.ViewKa}>
                      <Text
                        style={[styles.TextTX, { color: theme.colors.strong }]}
                      >
                        {'Make CoJo your own!'}
                      </Text>

                      <Text
                        style={[styles.Textsc, { color: theme.colors.strong }]}
                      >
                        {
                          'Edit your daily exercises to find the ones that work for you and help you find your journaling rhythm and achieve your goals.'
                        }
                      </Text>
                      <ButtonSolid
                        onPress={() => {
                          try {
                            setGlobalVariableValue({
                              key: 'setup',
                              value: true,
                            });
                            navigation.navigate('ProfileStack', {
                              screen: 'SetFavouritesScreen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={[
                          styles.ButtonSolid_2q,
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
            )}
          </>
        </View>

        <View style={styles.ViewVv}>
          <Text style={[styles.Texte0, { color: theme.colors.strong }]}>
            {'Start your day'}
          </Text>
        </View>
        <>
          {!Constants['morning_check_in'] ? null : (
            <View style={styles.Viewx8}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 1,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchabley0}
              >
                <View
                  style={[
                    styles.ViewqH,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.View_86}>
                    <View style={[styles.ViewAh, { borderRadius: 20 }]}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.Viewz9}>
                              <Icon
                                style={styles.IconYP}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.Icon_5D}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewLp}>
                      <Text
                        style={[styles.Textpd, { color: theme.colors.strong }]}
                      >
                        {'Morning pages'}
                      </Text>

                      <Text
                        style={[styles.TextL8, { color: theme.colors.strong }]}
                      >
                        {'Clear your mind'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.Viewm8}>
                    <Image
                      style={styles.ImageTe}
                      resizeMode={'cover'}
                      source={Images.Coffee}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <>
          {!Constants['daily_intention'] ? null : (
            <View style={styles.Viewg2}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 39,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableOU}
              >
                <View
                  style={[
                    styles.ViewUr,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.ViewbI}>
                    <View style={styles.Viewbb}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.ViewaI}>
                              <Icon
                                style={styles.IconQf}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.IconFR}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewPD}>
                      <Text
                        style={[styles.TextxE, { color: theme.colors.strong }]}
                      >
                        {'Daily intention'}
                      </Text>

                      <Text
                        style={[styles.TextDg, { color: theme.colors.strong }]}
                      >
                        {'Set a daily mindful focus'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.View_4k}>
                    <Image
                      style={styles.ImageXN}
                      resizeMode={'cover'}
                      source={Images.SwingingDoodle}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <>
          {!Constants['plan_today'] ? null : (
            <View style={styles.View_8L}>
              <View style={styles.ViewTR} />
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 76,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablead}
              >
                <View
                  style={[
                    styles.Viewnf,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.ViewBf}>
                    <View style={styles.ViewqI}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.View_0S}>
                              <Icon
                                style={styles.Iconnq}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <>
                                {!fetchData?.plan_today ? null : (
                                  <Icon
                                    style={styles.Icon_7a}
                                    size={24}
                                    name={'Ionicons/checkmark-circle'}
                                    color={theme.colors.primary}
                                  />
                                )}
                              </>
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewBE}>
                      <Text
                        style={[styles.Text_1g, { color: theme.colors.strong }]}
                      >
                        {'Plan your day'}
                      </Text>

                      <Text
                        style={[styles.Textzs, { color: theme.colors.strong }]}
                      >
                        {'Productive focus'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.View_8y}>
                    <Image
                      style={styles.ImageTy}
                      resizeMode={'cover'}
                      source={Images.Difficult2}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <>
          {!Constants['morning_gratitude'] ? null : (
            <View style={styles.ViewKa}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 38,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableoO}
              >
                <View
                  style={[
                    styles.View_6v,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.View_3f}>
                    <View style={styles.ViewQC}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.ViewXK}>
                              <Icon
                                style={styles.IconI3}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.IconvL}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewhN}>
                      <Text
                        style={[styles.Textmv, { color: theme.colors.strong }]}
                      >
                        {'Morning Gratitude'}
                      </Text>

                      <Text
                        style={[styles.TextYz, { color: theme.colors.strong }]}
                      >
                        {'Reflect and appreciate'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.ViewUO}>
                    <Image
                      style={styles.ImageTZ}
                      resizeMode={'cover'}
                      source={Images.Gratitiude}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <View style={styles.Viewzf}>
          <Text style={[styles.TextIN, { color: theme.colors.strong }]}>
            {'Afternoon focus'}
          </Text>
        </View>
        <>
          {!Constants['daily_prompt'] ? null : (
            <View style={styles.ViewOe}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Tabs', {
                      screen: 'TodayNavigator',
                      params: { screen: 'PromptInputTodayScreen' },
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableuo}
              >
                <View
                  style={[
                    styles.Viewi8,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.ViewLR}>
                    <View style={styles.ViewlR}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.Viewgu}>
                              <Icon
                                style={styles.IconuW}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.IconbV}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewDO}>
                      <Text
                        style={[styles.Textdl, { color: theme.colors.strong }]}
                      >
                        {'Daily prompt'}
                      </Text>

                      <Text
                        style={[styles.TextOQ, { color: theme.colors.strong }]}
                      >
                        {'Daily random prompts'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.ViewjD}>
                    <Image
                      style={styles.ImageKk}
                      resizeMode={'cover'}
                      source={Images.Prompt}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <>
          {!Constants['afternoon_check_in'] ? null : (
            <View style={styles.ViewAh}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 34,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableBa}
              >
                <View
                  style={[
                    styles.ViewbN,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.ViewHX}>
                    <View style={styles.Viewe1}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.ViewvP}>
                              <Icon
                                style={styles.Icon_8a}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.Iconkg}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.View_4M}>
                      <Text
                        style={[styles.Text_3f, { color: theme.colors.strong }]}
                      >
                        {'Afternoon check-in'}
                      </Text>

                      <Text
                        style={[styles.TexttL, { color: theme.colors.strong }]}
                      >
                        {'Check in with yourself'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.Vieweq}>
                    <Image
                      style={styles.ImageEB}
                      resizeMode={'cover'}
                      source={Images.Afternoon168556}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <>
          {!Constants['midday_gratitude'] ? null : (
            <View style={styles.ViewwC}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 35,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablegT}
              >
                <View
                  style={[
                    styles.ViewXa,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.ViewXc}>
                    <View style={styles.ViewyU}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.ViewdP}>
                              <Icon
                                style={styles.IconAf}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.IconfG}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewhU}>
                      <Text
                        style={[styles.TextRh, { color: theme.colors.strong }]}
                      >
                        {'Midday gratitude'}
                      </Text>

                      <Text
                        style={[styles.TextQa, { color: theme.colors.strong }]}
                      >
                        {'Reflect and give thanks'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.Viewcu}>
                    <Image
                      style={styles.Imagec7}
                      resizeMode={'cover'}
                      source={Images.Icecream}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <View style={styles.View_4L}>
          <Text style={[styles.TextPA, { color: theme.colors.strong }]}>
            {'Evening wind-down'}
          </Text>
        </View>
        <>
          {!Constants['reflect_on_the_day'] ? null : (
            <View style={styles.View_5v}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableXY}
              >
                <View
                  style={[
                    styles.ViewUc,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.ViewDf}>
                    <View style={styles.Viewmq}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.ViewBv}>
                              <Icon
                                style={styles.IconSu}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.IconS2}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.Viewau}>
                      <Text
                        style={[styles.TextoS, { color: theme.colors.strong }]}
                      >
                        {'Reflect on the day'}
                      </Text>

                      <Text
                        style={[styles.TexthW, { color: theme.colors.strong }]}
                      >
                        {'Review and unwind'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.ViewXd}>
                    <Image
                      style={styles.ImageID}
                      resizeMode={'cover'}
                      source={Images.Reading}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <>
          {!Constants['evening_gratitude'] ? null : (
            <View style={styles.ViewxL}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 43,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_2P}
              >
                <View
                  style={[
                    styles.View_9E,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.ViewVx}>
                    <View style={styles.ViewC7}>
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.Viewqc}>
                              <Icon
                                style={styles.Iconez}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.IconpN}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewgX}>
                      <Text
                        style={[styles.Text_5t, { color: theme.colors.strong }]}
                      >
                        {'Evening gratitude'}
                      </Text>

                      <Text
                        style={[styles.Text_9i, { color: theme.colors.strong }]}
                      >
                        {'Appreciate and reflect'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.ViewYU}>
                    <Image
                      style={styles.Imageo5}
                      resizeMode={'cover'}
                      source={Images.Eveningdoodle}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <>
          {!Constants['plan_for_tomorrow'] ? null : (
            <View style={styles.ViewPQ}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('GuidedExerciseInputTodayScreen', {
                      id: 44,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableeB}
              >
                <View
                  style={[
                    styles.ViewGW,
                    {
                      backgroundColor: theme.colors.background,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={styles.View_4Z}>
                    <View
                      style={[
                        styles.Viewu1,
                        {
                          backgroundColor: theme.colors.divider,
                          borderRadius: 20,
                        },
                      ]}
                    >
                      <XanoApi.FetchCheckDailyEntriesGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchCheckDailyEntries,
                        }) => {
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
                            <View style={styles.Viewy9}>
                              <Icon
                                style={styles.Iconay}
                                size={24}
                                name={'FontAwesome/circle'}
                                color={theme.colors.divider}
                              />
                              <Icon
                                style={styles.IconrQ}
                                size={24}
                                name={'Ionicons/checkmark-circle'}
                                color={theme.colors.primary}
                              />
                            </View>
                          );
                        }}
                      </XanoApi.FetchCheckDailyEntriesGET>
                    </View>

                    <View style={styles.ViewHa}>
                      <Text
                        style={[styles.Text_3m, { color: theme.colors.strong }]}
                      >
                        {'Plan for tomorrow'}
                      </Text>

                      <Text
                        style={[styles.TextQv, { color: theme.colors.strong }]}
                      >
                        {"Setup tomorrow's success"}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.ViewLx}>
                    <Image
                      style={styles.Image_58}
                      resizeMode={'cover'}
                      source={Images.Plan}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          )}
        </>
        <View style={styles.ViewjA} />
      </ScrollView>

      <View
        style={[
          styles.Viewqq,
          { backgroundColor: theme.colors.primary, borderRadius: 64 },
        ]}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GuidedExerciseInputTodayScreen', { id: 20 });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchableSx}
        >
          <View style={styles.View_7h}>
            <Icon
              name={'Entypo/pencil'}
              color={theme.colors.strongInverse}
              size={35}
            />
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewYL: {
    width: '100%',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 15,
  },
  TextqK: {
    fontSize: 28,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  ButtonSolid_2L: {
    borderRadius: 8,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
  },
  ViewGt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 20,
  },
  FlatListmhContent: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  Fetchb2: {
    minHeight: 40,
  },
  ViewOS: {
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 0,
    justifyContent: 'space-between',
  },
  ImageBackgroundts: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    minHeight: 100,
    maxHeight: 150,
  },
  View_8f: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    minWidth: '100%',
    maxHeight: 150,
  },
  ViewJ8: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  TextlO: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextBb: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewUi: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Vieww1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageMe: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewaV: {
    height: '100%',
  },
  View_1L: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchablefZ: {
    minHeight: 100,
    maxHeight: 100,
  },
  Textt3: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextoB: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewTE: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Viewm5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageMJ: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewfy: {
    height: '100%',
  },
  ViewgH: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchableqW: {
    minHeight: 100,
    maxHeight: 100,
    marginTop: 15,
  },
  View_3p: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 0,
  },
  TextZ6: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  Textm6: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    textAlign: 'center',
  },
  ViewXz: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBackgroundOR: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    opacity: 1,
  },
  Touchablero: {
    width: '48%',
    minHeight: 70,
    height: 80,
  },
  ViewQK: {
    width: 1,
  },
  Text_8A: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  TextLm: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    textAlign: 'center',
  },
  ViewhO: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBackgroundAy: {
    width: '100%',
    height: '100%',
  },
  Touchable_5p: {
    width: '48%',
    minHeight: 70,
    height: 80,
  },
  ViewXj: {
    minHeight: 70,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    width: '100%',
    paddingTop: 20,
  },
  TextTX: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    marginTop: 5,
  },
  Textsc: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'left',
    marginTop: 10,
  },
  ButtonSolid_2q: {
    borderRadius: 10,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    marginTop: 10,
    width: '100%',
  },
  View_9F: {
    width: 10,
    height: 10,
  },
  ButtonOutlineTW: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ViewKa: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start',
  },
  ViewCb: {
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
  Touchablev8: {
    width: '100%',
    maxWidth: '100%',
  },
  Viewee: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingBottom: 20,
    paddingTop: 15,
  },
  Textut: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
  },
  Textws: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    textAlign: 'left',
    marginTop: 5,
  },
  ViewgA: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  ImageBackgroundOF: {
    width: '100%',
    height: 80,
    minWidth: '100%',
    minHeight: '100%',
  },
  Touchableiz: {
    width: '48%',
    minHeight: 80,
    height: 80,
  },
  Text_2E: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
  },
  Text_3H: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    textAlign: 'left',
    marginTop: 5,
  },
  ViewIS: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  ImageBackgroundh7: {
    width: '100%',
    height: '100%',
  },
  TouchableNm: {
    width: '48%',
    minHeight: 80,
    height: 80,
    marginLeft: 20,
  },
  Viewhz: {
    minHeight: 70,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 0,
    paddingTop: 0,
  },
  TextLJ: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextQ7: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_96: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  ImageRi: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewTP: {
    overflow: 'hidden',
  },
  Viewbm: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    overflow: 'hidden',
  },
  TouchableQP: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewKn: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 20,
  },
  Texte0: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewVv: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  IconYP: {
    position: 'absolute',
  },
  Icon_5D: {
    position: 'absolute',
    zIndex: 5,
  },
  Viewz9: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FetchV7: {
    minHeight: 40,
  },
  ViewAh: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textpd: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextL8: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewLp: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  View_86: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageTe: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewm8: {
    height: '100%',
  },
  ViewqH: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  Touchabley0: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewx8: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  IconQf: {
    position: 'absolute',
  },
  IconFR: {
    position: 'absolute',
    zIndex: 5,
  },
  ViewaI: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FetchoI: {
    minHeight: 40,
  },
  Viewbb: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextxE: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextDg: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewPD: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  ViewbI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageXN: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_4k: {
    height: '100%',
  },
  ViewUr: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchableOU: {
    minHeight: 100,
    maxHeight: 100,
  },
  Viewg2: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  ViewTR: {
    width: 1,
  },
  Iconnq: {
    position: 'absolute',
  },
  Icon_7a: {
    position: 'absolute',
    zIndex: 5,
  },
  View_0S: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Fetchko: {
    minHeight: 40,
  },
  ViewqI: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  Text_1g: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Textzs: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewBE: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  ViewBf: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageTy: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  View_8y: {
    height: '100%',
  },
  Viewnf: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
    overflow: 'hidden',
  },
  Touchablead: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_8L: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  IconI3: {
    position: 'absolute',
  },
  IconvL: {
    position: 'absolute',
    zIndex: 5,
  },
  ViewXK: {
    width: 24,
    height: 24,
  },
  FetchoD: {
    minHeight: 40,
  },
  ViewQC: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textmv: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextYz: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewhN: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  View_3f: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageTZ: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewUO: {
    height: '100%',
  },
  View_6v: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchableoO: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewKa: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  TextIN: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Viewzf: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 35,
    paddingBottom: 15,
    paddingTop: 30,
  },
  IconuW: {
    position: 'absolute',
  },
  IconbV: {
    position: 'absolute',
    zIndex: 5,
  },
  Viewgu: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  Fetchs0: {
    minHeight: 40,
  },
  ViewlR: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  Textdl: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextOQ: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewDO: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  ViewLR: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageKk: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewjD: {
    height: '100%',
  },
  Viewi8: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  Touchableuo: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewOe: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  Icon_8a: {
    position: 'absolute',
  },
  Iconkg: {
    position: 'absolute',
    zIndex: 5,
  },
  ViewvP: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FetchxZ: {
    minHeight: 40,
  },
  Viewe1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
  Text_3f: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TexttL: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_4M: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  ViewHX: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageEB: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Vieweq: {
    height: '100%',
  },
  ViewbN: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchableBa: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewAh: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  IconAf: {
    position: 'absolute',
  },
  IconfG: {
    position: 'absolute',
    zIndex: 5,
  },
  ViewdP: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Fetchp4: {
    minHeight: 40,
  },
  ViewyU: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
  TextRh: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextQa: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewhU: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  ViewXc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Imagec7: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewcu: {
    height: '100%',
  },
  ViewXa: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchablegT: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewwC: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  TextPA: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  View_4L: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 35,
    paddingBottom: 15,
    paddingTop: 30,
  },
  IconSu: {
    position: 'absolute',
  },
  IconS2: {
    position: 'absolute',
    zIndex: 5,
  },
  ViewBv: {
    width: 24,
    height: 24,
  },
  FetchPC: {
    minHeight: 40,
  },
  Viewmq: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  TextoS: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TexthW: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewau: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  ViewDf: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageID: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewXd: {
    height: '100%',
  },
  ViewUc: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchableXY: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_5v: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  Iconez: {
    position: 'absolute',
  },
  IconpN: {
    position: 'absolute',
    zIndex: 5,
  },
  Viewqc: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FetchzE: {
    minHeight: 40,
  },
  ViewC7: {
    width: 24,
    height: 24,
    alignContent: 'center',
    alignItems: 'center',
  },
  Text_5t: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_9i: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewgX: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  ViewVx: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Imageo5: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewYU: {
    height: '100%',
  },
  View_9E: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  Touchable_2P: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewxL: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  Iconay: {
    position: 'absolute',
  },
  IconrQ: {
    position: 'absolute',
    zIndex: 5,
  },
  Viewy9: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FetchiZ: {
    minHeight: 40,
  },
  Viewu1: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_3m: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextQv: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewHa: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
    marginLeft: 10,
  },
  View_4Z: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image_58: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  ViewLx: {
    height: '100%',
  },
  ViewGW: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
    overflow: 'hidden',
  },
  TouchableeB: {
    minHeight: 100,
    maxHeight: 100,
  },
  ViewPQ: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  ViewjA: {
    height: 60,
  },
  IconXo: {
    position: 'absolute',
  },
  Iconc9: {
    position: 'absolute',
    zIndex: 5,
  },
  ViewE0: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  TextaO: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_7U: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewFo: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    maxWidth: 210,
  },
  Viewtb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImagezN: {
    height: '100%',
    width: 95,
    opacity: 1,
  },
  Viewp2: {
    height: '100%',
  },
  ViewEa: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  TouchableXB: {
    minHeight: 100,
    maxHeight: 100,
  },
  View_3S: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    marginBottom: 15,
  },
  Texte2: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextGA: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewnT: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
  },
  Imageog: {
    width: 85,
    height: 90,
  },
  ViewI3: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TouchableBP: {
    minHeight: 90,
  },
  View_60: {
    paddingLeft: 20,
    paddingTop: 15,
    paddingRight: 20,
    marginBottom: 0,
  },
  TextlI: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextZo: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewpa: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
  },
  ImageRU: {
    width: 85,
    height: 90,
  },
  ViewmE: {
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TouchableIm: {
    minHeight: 90,
  },
  ViewK8: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
  },
  TextYU: {
    fontSize: 17,
    fontFamily: 'Montserrat_700Bold',
  },
  Texto3: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBackground_1r: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewbK: {
    width: '100%',
    height: 90,
  },
  ViewiC: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 0,
    paddingBottom: 10,
  },
  Textll: {
    fontSize: 17,
    fontFamily: 'Montserrat_700Bold',
    paddingLeft: 5,
  },
  Viewbp: {
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  TextJR: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewRy: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 35,
    paddingBottom: 10,
    paddingTop: 20,
  },
  TextQO: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  Text_7I: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewt7: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
  },
  ImageDE: {
    width: 85,
    height: 90,
  },
  Viewoi: {
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TouchableIT: {
    minHeight: 90,
  },
  Viewkt: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
  },
  TextcL: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    marginBottom: 5,
  },
  TextjY: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewGn: {
    justifyContent: 'center',
    paddingTop: 23,
    paddingBottom: 23,
  },
  ImagePI: {
    width: 85,
    height: 90,
  },
  ViewSa: {
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Touchable_2b: {
    minHeight: 90,
  },
  ViewSE: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  Textn0: {
    fontSize: 17,
    fontFamily: 'Montserrat_700Bold',
    paddingLeft: 5,
  },
  ViewNs: {
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  Textu7: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
  },
  TextrR: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
  Text_9C: {
    fontFamily: 'Montserrat_400Regular',
    opacity: 0.5,
  },
  ViewgY: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 8,
  },
  ViewLO: {
    maxWidth: '70%',
  },
  ImagenC: {
    width: 86,
    height: 64,
    opacity: 0.96,
  },
  View_1m: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    alignContent: 'flex-end',
  },
  ViewwG: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  FlatListZYContent: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 80,
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  ViewGh: {
    height: 80,
  },
  Fetch_8Q: {
    minHeight: 40,
  },
  View_7h: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 100,
    flexDirection: 'row',
    width: 70,
  },
  TouchableSx: {
    width: 70,
    height: 70,
  },
  Viewqq: {
    height: 70,
    position: 'absolute',
    right: 20,
    bottom: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(TodayScreen);
