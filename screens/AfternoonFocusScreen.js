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

const AfternoonFocusScreen = props => {
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
        <View style={styles.Viewc3}>
          <IconButton
            style={styles.IconButtonvb}
            icon={'AntDesign/arrowleft'}
            size={26}
            color={theme.colors.light}
          />
          <View style={styles.ViewbN}>
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
                    listKey={'x9AQ6tvC'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Text
                          style={[
                            styles.Text_7k,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Hi '}
                          {listData?.Name}
                          {', what would you like to focus on this afternoon?'}
                        </Text>
                      );
                    }}
                    contentContainerStyle={styles.FlatListx9Content}
                    numColumns={1}
                  />
                );
              }}
            </XanoApi.FetchUserInfoGET>
          </View>
        </View>

        <View>
          <XanoApi.FetchFetchExercisesByGuidedmacroIdGET
            guidedmacrofilter_id={10}
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
                  listKey={'huRVlYXI'}
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
                        style={styles.TouchableG3}
                      >
                        <View
                          style={[
                            styles.ViewoW,
                            {
                              backgroundColor: theme.colors.background,
                              borderRadius: 3,
                            },
                          ]}
                        >
                          <View style={styles.ViewLv}>
                            <Image
                              style={styles.ImageBy}
                              resizeMode={'cover'}
                              source={{ uri: `${listData?.DailyImage?.url}` }}
                            />
                          </View>

                          <View style={styles.ViewAW}>
                            <Text
                              style={[
                                styles.TextzP,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.name}
                            </Text>

                            <Text
                              style={[
                                styles.TextSX,
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
                    styles.FlatListhu,
                    { backgroundColor: theme.colors.divider },
                  ]}
                  contentContainerStyle={styles.FlatListhuContent}
                  numColumns={1}
                />
              );
            }}
          </XanoApi.FetchFetchExercisesByGuidedmacroIdGET>
        </View>

        <View style={styles.View_5l}>
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('GuidedExerciseInputTodayScreen', {
                  id: 41,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={{ borderRadius: 3 }}
          >
            <View
              style={[
                styles.Viewa4,
                {
                  backgroundColor: theme.colors.strongInverse,
                  borderRadius: 3,
                },
              ]}
            >
              <ImageBackground
                style={[styles.ImageBackgroundqX, { borderRadius: 3 }]}
                source={Images.BlankEntryCard}
                resizeMode={'cover'}
              >
                <Text style={[styles.Text_70, { color: theme.colors.strong }]}>
                  {'Start a blank entry'}
                </Text>

                <Text style={[styles.TextAn, { color: theme.colors.strong }]}>
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
  IconButtonvb: {
    marginRight: 10,
    marginBottom: 10,
  },
  Text_7k: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 0,
  },
  FlatListx9Content: {
    flex: 1,
  },
  FetchbS: {
    minHeight: 40,
  },
  ViewbN: {
    maxWidth: '80%',
  },
  Viewc3: {
    minHeight: 90,
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    minWidth: '100%',
    paddingBottom: 20,
    alignItems: 'flex-start',
    marginBottom: 0,
    height: 150,
    maxHeight: 200,
  },
  ImageBy: {
    width: 91,
    height: '100%',
    opacity: 0.96,
  },
  ViewLv: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    alignContent: 'flex-end',
  },
  TextzP: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
  },
  TextSX: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
  ViewAW: {
    maxWidth: '70%',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 20,
  },
  ViewoW: {
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
  TouchableG3: {
    marginTop: 15,
    height: 90,
  },
  FlatListhu: {
    width: '100%',
  },
  FlatListhuContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  Fetchwn: {
    minHeight: 40,
  },
  Text_70: {
    fontSize: 17,
    fontFamily: 'Montserrat_700Bold',
  },
  TextAn: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBackgroundqX: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewa4: {
    width: '100%',
    height: 90,
  },
  View_5l: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 20,
  },
});

export default withTheme(AfternoonFocusScreen);
