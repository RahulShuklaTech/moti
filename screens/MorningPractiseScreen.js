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

const MorningPractiseScreen = props => {
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
      hasTopSafeArea={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.ViewPa}>
          <IconButton
            style={styles.IconButtonUk}
            icon={'AntDesign/arrowleft'}
            size={26}
            color={theme.colors.light}
          />
          <View style={styles.ViewLy}>
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
                    listKey={'IsuzilsB'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Text
                          style={[
                            styles.TextTk,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Good morning '}
                          {listData?.Name}
                          {', how would you like to start your day?'}
                        </Text>
                      );
                    }}
                    numColumns={1}
                  />
                );
              }}
            </XanoApi.FetchUserInfoGET>
          </View>
        </View>

        <View style={styles.ViewU4}>
          <XanoApi.FetchFetchExercisesByGuidedmacroIdGET
            guidedmacrofilter_id={9}
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
                  listKey={'mKgUuXsA'}
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
                        style={styles.Touchableuj}
                      >
                        <View
                          style={[
                            styles.Viewh6,
                            {
                              backgroundColor: theme.colors.background,
                              borderRadius: 3,
                            },
                          ]}
                        >
                          <View style={styles.View_45}>
                            <Image
                              style={styles.Imagega}
                              resizeMode={'cover'}
                              source={{ uri: `${listData?.DailyImage?.url}` }}
                            />
                          </View>

                          <View style={styles.ViewE9}>
                            <Text
                              style={[
                                styles.TextZu,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.name}
                            </Text>

                            <Text
                              style={[
                                styles.TextVM,
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
                    styles.FlatListmK,
                    { backgroundColor: theme.colors.divider },
                  ]}
                  contentContainerStyle={styles.FlatListmKContent}
                  numColumns={1}
                />
              );
            }}
          </XanoApi.FetchFetchExercisesByGuidedmacroIdGET>
          <View style={styles.Viewoc}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('GuidedExerciseInputTodayScreen', {
                    id: 40,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Touchablebd, { borderRadius: 3 }]}
            >
              <View
                style={[
                  styles.ViewRz,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 3,
                  },
                ]}
              >
                <ImageBackground
                  style={[styles.ImageBackgroundjw, { borderRadius: 3 }]}
                  source={Images.BlankEntryCard}
                  resizeMode={'cover'}
                >
                  <Text style={[styles.TextHr, { color: theme.colors.strong }]}>
                    {'Start a blank entry'}
                  </Text>

                  <Text style={[styles.TextoA, { color: theme.colors.strong }]}>
                    {'Tap to start typing'}
                  </Text>
                </ImageBackground>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconButtonUk: {
    marginRight: 10,
    marginBottom: 10,
  },
  TextTk: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
  },
  FetchYv: {
    minHeight: 40,
  },
  ViewLy: {
    maxWidth: '80%',
    height: 100,
  },
  ViewPa: {
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    minWidth: '100%',
    paddingBottom: 20,
    alignItems: 'flex-start',
    maxHeight: 200,
    height: 150,
  },
  Imagega: {
    width: 91,
    height: '100%',
    opacity: 0.96,
  },
  View_45: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    alignContent: 'flex-end',
  },
  TextZu: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
  },
  TextVM: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
  ViewE9: {
    maxWidth: '70%',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 20,
  },
  Viewh6: {
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
  Touchableuj: {
    marginTop: 15,
    height: 90,
  },
  FlatListmK: {
    width: '100%',
  },
  FlatListmKContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  FetchWn: {
    minHeight: 40,
  },
  TextHr: {
    fontSize: 17,
    fontFamily: 'Montserrat_700Bold',
  },
  TextoA: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBackgroundjw: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewRz: {
    width: '100%',
    height: 90,
  },
  Touchablebd: {
    height: 90,
    maxHeight: 90,
  },
  Viewoc: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 20,
  },
  ViewU4: {
    flex: 2,
  },
});

export default withTheme(MorningPractiseScreen);
