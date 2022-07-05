import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
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

const Yourjournalingweek2Screen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const myFunctionName = time => {
    return new Date(time).toLocaleString();
  };

  const { theme } = props;
  const { navigation } = props;

  const deleteEntryDELETE = XanoApi.useDeleteEntryDELETE();

  return (
    <ScreenContainer scrollable={true}>
      <View
        style={[styles.Viewtr, { backgroundColor: theme.colors.background }]}
      >
        <ImageBackground
          style={[
            styles.ImageBackgroundCV,
            { backgroundColor: theme.colors.strongInverse },
          ]}
          resizeMode={'cover'}
        >
          <Text style={[styles.TextNN, { color: theme.colors.strong }]}>
            {'Your journaling'}
          </Text>

          <Text style={[styles.Text_7E, { color: theme.colors.strong }]}>
            {'Explore and reflect on your writing.'}
          </Text>

          <View style={styles.ViewiN}>
            <View
              style={[
                styles.ViewtI,
                { borderRadius: 64, backgroundColor: theme.colors.divider },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Tabs', {
                      screen: 'YourJournaling',
                      params: { screen: 'YourjournalingtodayScreen' },
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableNQ}
              >
                <View style={[styles.ViewbW, { borderRadius: 64 }]}>
                  <Text style={[styles.TextRi, { color: theme.colors.strong }]}>
                    {'Today'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Tabs', {
                      screen: 'YourJournaling',
                      params: { screen: 'Yourjournalingweek2Screen' },
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableam}
              >
                <View
                  style={[
                    styles.View_2R,
                    { borderRadius: 64, backgroundColor: theme.colors.primary },
                  ]}
                >
                  <Text
                    style={[styles.Text_2n, { color: theme.colors.strong }]}
                  >
                    {'This week'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Tabs', {
                      screen: 'YourJournaling',
                      params: { screen: 'Yourjournalingall2Screen' },
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_8t}
              >
                <View style={[styles.ViewNu, { borderRadius: 64 }]}>
                  <Text style={[styles.TexteJ, { color: theme.colors.strong }]}>
                    {'All'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </ImageBackground>
      </View>

      <XanoApi.FetchEntriesDecryptedWeek2022GET>
        {({ loading, error, data, refetchEntriesDecryptedWeek2022 }) => {
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
              listKey={'rQnWgC78'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View
                    style={[
                      styles.ViewHx,
                      {
                        backgroundColor: theme.colors.background,
                        borderRadius: 3,
                      },
                    ]}
                  >
                    <View style={styles.ViewF2}>
                      <>
                        {listData?.MoodZero ? null : (
                          <View style={styles.Viewf6}>
                            <>
                              {!listData?.MoodOne ? null : (
                                <View style={styles.ViewuV}>
                                  <Image
                                    style={styles.Image_8r}
                                    source={Images.Unhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodTwo ? null : (
                                <View style={styles.ViewUj}>
                                  <Image
                                    style={styles.ImageVx}
                                    source={Images.Mediumunhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodThree ? null : (
                                <View style={styles.Viewtr}>
                                  <Image
                                    style={styles.Imagevs}
                                    source={Images.Middleblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodFour ? null : (
                                <View style={styles.ViewIk}>
                                  <Image
                                    style={styles.Image_8C}
                                    source={Images.Mediumhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodFive ? null : (
                                <View style={styles.Viewmx}>
                                  <Image
                                    style={styles.Image_2L}
                                    source={Images.Happyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                          </View>
                        )}
                      </>
                      <Text
                        style={[
                          styles.Textaq,
                          { color: theme.colors.custom_rgb0_0_0 },
                        ]}
                      >
                        {myFunctionName(listData?.created_at)}
                      </Text>
                      <IconButton
                        onPress={() => {
                          try {
                            setGlobalVariableValue({
                              key: 'visibleActionSheet',
                              value: 'true',
                            });
                            setGlobalVariableValue({
                              key: 'deleteid',
                              value: listData?.id,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        icon={'Feather/edit'}
                        size={25}
                        color={theme.colors.strong}
                      />
                    </View>

                    <View style={styles.ViewJe}>
                      <>
                        {!listData?.Input_1 ? null : (
                          <View style={styles.ViewYF}>
                            <Text
                              style={[
                                styles.TextP3,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_1}
                            </Text>

                            <Text
                              style={[
                                styles.Textiu,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.Input_1}
                            </Text>
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.Input_2 ? null : (
                          <View style={styles.ViewiA}>
                            <Text
                              style={[
                                styles.TextSH,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_2}
                            </Text>

                            <Text
                              style={[
                                styles.TextiI,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.Input_2}
                            </Text>
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.Input_3 ? null : (
                          <View style={styles.View_4h}>
                            <Text
                              style={[
                                styles.Textp6,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_3}
                            </Text>

                            <Text
                              style={[
                                styles.TextAR,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.Input_3}
                            </Text>
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.Input_4 ? null : (
                          <View style={styles.View_5p}>
                            <Text
                              style={[
                                styles.Texthm,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_4}
                            </Text>

                            <Text
                              style={[
                                styles.Text_04,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.Input_4}
                            </Text>
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.Input_5 ? null : (
                          <View style={styles.ViewFd}>
                            <Text
                              style={[
                                styles.TextXZ,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_5}
                            </Text>

                            <Text
                              style={[
                                styles.Texto0,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.Input_5}
                            </Text>
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.Input_6 ? null : (
                          <View style={styles.View_36}>
                            <Text
                              style={[
                                styles.Textzc,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_6}
                            </Text>

                            <Text
                              style={[
                                styles.Text_5l,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.Input_6}
                            </Text>
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.Input_7 ? null : (
                          <View style={styles.Viewcf}>
                            <Text
                              style={[
                                styles.Text_2l,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_7}
                            </Text>

                            <Text
                              style={[
                                styles.Text_2F,
                                { color: theme.colors.strong },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.Input_7}
                            </Text>
                          </View>
                        )}
                      </>
                    </View>
                  </View>
                );
              }}
              style={[
                styles.FlatListrQ,
                { backgroundColor: theme.colors.divider },
              ]}
              contentContainerStyle={styles.FlatListrQContent}
              numColumns={1}
            />
          );
        }}
      </XanoApi.FetchEntriesDecryptedWeek2022GET>
      <View style={[styles.Viewqz, { backgroundColor: theme.colors.divider }]}>
        <Image
          style={styles.ImageYT}
          source={Images.GroovySittingDoodle}
          resizeMode={'contain'}
        />
        <Text style={[styles.Text_5w, { color: theme.colors.strong }]}>
          {"There's nothing else here!"}
        </Text>
      </View>

      <ActionSheet visible={Constants['visibleActionSheet']}>
        <ActionSheetItem
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'confirmdelete',
                value: true,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemzG}
          label={'Delete entry'}
          color={theme.colors.custom_rgb0_0_0}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'visibleActionSheet',
                value: false,
              });
              setGlobalVariableValue({
                key: 'deleteid',
                value: '',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Cancel'}
          color={theme.colors.error}
        />
      </ActionSheet>

      <ActionSheet visible={Constants['confirmdelete']}>
        <ActionSheetItem
          onPress={async () => {
            try {
              await deleteEntryDELETE.mutateAsync({
                entries_id: Constants['deleteid'],
              });
              setGlobalVariableValue({
                key: 'deleteid',
                value: '0',
              });
              setGlobalVariableValue({
                key: 'confirmdelete',
                value: false,
              });
              setGlobalVariableValue({
                key: 'visibleActionSheet',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemeJ}
          label={'Confirm delete'}
          color={theme.colors.custom_rgb0_0_0}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'deleteid',
                value: '0',
              });
              setGlobalVariableValue({
                key: 'confirmdelete',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Cancel'}
          color={theme.colors.error}
        />
      </ActionSheet>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextNN: {
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 10,
  },
  Text_7E: {
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  TextRi: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewbW: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableNQ: {
    width: 100,
  },
  Text_2n: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  View_2R: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableam: {
    width: 100,
  },
  TexteJ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewNu: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_8t: {
    width: 100,
  },
  ViewtI: {
    flexDirection: 'row',
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
    minHeight: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
  ViewiN: {
    maxWidth: '100%',
  },
  ImageBackgroundCV: {
    width: '100%',
    height: '100%',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  Viewtr: {
    minHeight: 150,
    width: '100%',
    alignSelf: 'flex-start',
    minWidth: '100%',
    maxHeight: 220,
  },
  Image_8r: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewuV: {
    height: 25,
    width: 25,
  },
  ImageVx: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewUj: {
    height: 25,
    width: 25,
  },
  Imagevs: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  Viewtr: {
    height: 25,
    width: 25,
  },
  Image_8C: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewIk: {
    height: 25,
    width: 25,
  },
  Image_2L: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  Viewmx: {
    height: 25,
    width: 25,
  },
  Viewf6: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  Textaq: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    textAlign: 'right',
  },
  ViewF2: {
    width: '100%',
    minHeight: 50,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 5,
  },
  TextP3: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Textiu: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  ViewYF: {
    marginBottom: 20,
  },
  TextSH: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextiI: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  ViewiA: {
    marginBottom: 20,
  },
  Textp6: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextAR: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  View_4h: {
    marginBottom: 20,
  },
  Texthm: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Text_04: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  View_5p: {
    marginBottom: 20,
  },
  TextXZ: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Texto0: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewFd: {
    marginBottom: 20,
  },
  Textzc: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Text_5l: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  View_36: {
    marginBottom: 20,
  },
  Text_2l: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Text_2F: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  Viewcf: {
    marginBottom: 0,
  },
  ViewJe: {
    maxWidth: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  ViewHx: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: 20,
    marginTop: 0,
    justifyContent: 'space-between',
  },
  FlatListrQ: {
    width: '100%',
  },
  FlatListrQContent: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    paddingBottom: 20,
    paddingTop: 20,
  },
  Fetch_9P: {
    minHeight: 40,
  },
  ImageYT: {
    width: 250,
    height: 250,
  },
  Text_5w: {
    fontFamily: 'Montserrat_600SemiBold',
  },
  Viewqz: {
    minHeight: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  ActionSheetItem_2i: {
    textAlign: 'center',
  },
  ActionSheetItemzG: {
    textAlign: 'center',
  },
  ActionSheetItemeJ: {
    textAlign: 'center',
  },
});

export default withTheme(Yourjournalingweek2Screen);
