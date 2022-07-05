import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import Images from '../config/Images';
import {
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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const EveningScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const {
    isLoading: screenLoading,
    data: screenData,
    error: screenError,
  } = XanoApi.useUserInfoGET();

  if (screenLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (screenError) {
    return null;
  }

  if (!screenData) {
    return null;
  }

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.Viewmx}>
          <IconButton
            style={styles.IconButtonKZ}
            icon={'AntDesign/arrowleft'}
            size={26}
            color={theme.colors.light}
          />
          <View style={styles.View_5s}>
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
                    listKey={'o6uQOoX4'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Text
                          style={[
                            styles.TextDk,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Hi '}
                          {listData?.Name}
                          {', take a moment for yourself before bed'}
                        </Text>
                      );
                    }}
                    contentContainerStyle={styles.FlatListo6Content}
                    numColumns={1}
                  />
                );
              }}
            </XanoApi.FetchUserInfoGET>
          </View>
        </View>

        <View>
          <XanoApi.FetchFetchExercisesByGuidedmacroIdGET
            guidedmacrofilter_id={11}
          >
            {({
              loading,
              error,
              data,
              refetchFetchExercisesByGuidedmacroId,
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
                <FlatList
                  data={fetchData}
                  listKey={'1fRlAI0v'}
                  keyExtractor={({ item }) => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate(
                              'GuidedExerciseInputTodayScreen',
                              { id: listData?.id }
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={styles.TouchableFt}
                      >
                        <View
                          style={[
                            styles.Viewyo,
                            {
                              backgroundColor: theme.colors.background,
                              borderRadius: 3,
                            },
                          ]}
                        >
                          <View style={styles.ViewpZ}>
                            <Image
                              style={styles.ImagefN}
                              resizeMode={'cover'}
                              source={{ uri: `${listData?.DailyImage?.url}` }}
                            />
                          </View>

                          <View style={styles.Viewc9}>
                            <Text
                              style={[
                                styles.Text_0S,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.name}
                            </Text>

                            <Text
                              style={[
                                styles.TextaF,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.sub_heading}
                            </Text>
                          </View>
                        </View>
                      </Touchable>
                    );
                  }}
                  style={[
                    styles.FlatList_1f,
                    { backgroundColor: theme.colors.divider },
                  ]}
                  contentContainerStyle={styles.FlatList_1fContent}
                  numColumns={1}
                />
              );
            }}
          </XanoApi.FetchFetchExercisesByGuidedmacroIdGET>
        </View>

        <View style={styles.ViewQ2}>
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('GuidedExerciseInputTodayScreen', {
                  id: 42,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={{ borderRadius: 3 }}
          >
            <View
              style={[
                styles.ViewqN,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 3,
                },
              ]}
            >
              <ImageBackground
                style={[styles.ImageBackground_9q, { borderRadius: 3 }]}
                source={Images.BlankEntryCard}
                resizeMode={'cover'}
              >
                <Text style={[styles.Text_80, { color: theme.colors.strong }]}>
                  {'Start a blank entry'}
                </Text>

                <Text style={[styles.TextSt, { color: theme.colors.strong }]}>
                  {'Tap to start typing'}
                </Text>
              </ImageBackground>
            </View>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconButtonKZ: {
    marginRight: 10,
    marginBottom: 10,
  },
  TextDk: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 0,
  },
  FlatListo6Content: {
    flex: 1,
  },
  FetchJE: {
    minHeight: 40,
  },
  View_5s: {
    maxWidth: '80%',
  },
  Viewmx: {
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    minWidth: '100%',
    paddingBottom: 20,
    alignItems: 'flex-start',
    marginBottom: 0,
    maxHeight: 200,
    height: 150,
  },
  ImagefN: {
    width: 91,
    height: '100%',
    opacity: 0.96,
  },
  ViewpZ: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    alignContent: 'flex-end',
  },
  Text_0S: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
  },
  TextaF: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
  Viewc9: {
    maxWidth: '70%',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 20,
  },
  Viewyo: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 0,
    justifyContent: 'space-between',
    minHeight: 80,
    height: 90,
  },
  TouchableFt: {
    marginTop: 15,
    height: 90,
  },
  FlatList_1f: {
    width: '100%',
  },
  FlatList_1fContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  FetchNX: {
    minHeight: 40,
  },
  Text_80: {
    fontSize: 17,
    fontFamily: 'Montserrat_700Bold',
  },
  TextSt: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBackground_9q: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewqN: {
    width: '100%',
    height: 90,
  },
  ViewQ2: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 20,
  },
});

export default withTheme(EveningScreen);
