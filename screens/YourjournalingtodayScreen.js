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

const YourjournalingtodayScreen = props => {
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
      <View style={[styles.ViewV5, { backgroundColor: theme.colors.primary }]}>
        <ImageBackground
          style={[
            styles.ImageBackgroundkA,
            { backgroundColor: theme.colors.strongInverse },
          ]}
          resizeMode={'cover'}
        >
          <Text style={[styles.TextYk, { color: theme.colors.strong }]}>
            {'Your journaling'}
          </Text>

          <Text style={[styles.Textqb, { color: theme.colors.strong }]}>
            {'Explore and reflect on your writing.'}
          </Text>

          <View style={styles.ViewPz}>
            <View
              style={[
                styles.Viewa2,
                { borderRadius: 64, backgroundColor: theme.colors.divider },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('YourJournaling');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablebO}
              >
                <View
                  style={[
                    styles.ViewQt,
                    { borderRadius: 64, backgroundColor: theme.colors.primary },
                  ]}
                >
                  <Text
                    style={[styles.Text_0G, { color: theme.colors.strong }]}
                  >
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
                style={styles.Touchable_85}
              >
                <View style={[styles.View_10, { borderRadius: 64 }]}>
                  <Text
                    style={[styles.Text_6J, { color: theme.colors.strong }]}
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
                style={styles.TouchablepH}
              >
                <View style={[styles.ViewFB, { borderRadius: 64 }]}>
                  <Text style={[styles.TextAy, { color: theme.colors.strong }]}>
                    {'All'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </ImageBackground>
      </View>

      <XanoApi.FetchEntriesDecryptedToday2022GET>
        {({ loading, error, data, refetchEntriesDecryptedToday2022 }) => {
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
              listKey={'iIobBAw2'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View
                    style={[
                      styles.ViewWL,
                      {
                        backgroundColor: theme.colors.background,
                        borderRadius: 3,
                      },
                    ]}
                  >
                    <View style={styles.View_6i}>
                      <>
                        {listData?.MoodZero ? null : (
                          <View style={styles.ViewQI}>
                            <>
                              {!listData?.MoodOne ? null : (
                                <View style={styles.Viewnm}>
                                  <Image
                                    style={styles.ImageqG}
                                    source={Images.Unhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodTwo ? null : (
                                <View style={styles.View_4a}>
                                  <Image
                                    style={styles.ImageEf}
                                    source={Images.Mediumunhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodThree ? null : (
                                <View style={styles.ViewG8}>
                                  <Image
                                    style={styles.ImagemP}
                                    source={Images.Middleblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodFour ? null : (
                                <View style={styles.Views9}>
                                  <Image
                                    style={styles.Imaget0}
                                    source={Images.Mediumhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodFive ? null : (
                                <View style={styles.ViewcL}>
                                  <Image
                                    style={styles.ImageJb}
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
                          styles.Text_2l,
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

                    <View style={styles.ViewKu}>
                      <>
                        {!listData?.Input_1 ? null : (
                          <View style={styles.View_1j}>
                            <Text
                              style={[
                                styles.Textb1,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_1}
                            </Text>

                            <Text
                              style={[
                                styles.TextfZ,
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
                          <View style={styles.Viewvk}>
                            <Text
                              style={[
                                styles.Text_2J,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_2}
                            </Text>

                            <Text
                              style={[
                                styles.TextCa,
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
                          <View style={styles.View_7s}>
                            <Text
                              style={[
                                styles.Textmq,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_3}
                            </Text>

                            <Text
                              style={[
                                styles.TextIs,
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
                          <View style={styles.ViewAi}>
                            <Text
                              style={[
                                styles.Textcp,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_4}
                            </Text>

                            <Text
                              style={[
                                styles.TextfH,
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
                          <View style={styles.ViewD5}>
                            <Text
                              style={[
                                styles.TextlJ,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_5}
                            </Text>

                            <Text
                              style={[
                                styles.Text_4c,
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
                          <View style={styles.ViewPt}>
                            <Text
                              style={[
                                styles.Textda,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_6}
                            </Text>

                            <Text
                              style={[
                                styles.TextU2,
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
                          <View style={styles.ViewaR}>
                            <Text
                              style={[
                                styles.TextXI,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_7}
                            </Text>

                            <Text
                              style={[
                                styles.Text_3o,
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
                styles.FlatListiI,
                { backgroundColor: theme.colors.divider },
              ]}
              contentContainerStyle={styles.FlatListiIContent}
              numColumns={1}
            />
          );
        }}
      </XanoApi.FetchEntriesDecryptedToday2022GET>
      <View style={[styles.Viewyk, { backgroundColor: theme.colors.divider }]}>
        <Image
          style={styles.ImageeB}
          source={Images.GroovySittingDoodle}
          resizeMode={'contain'}
        />
        <Text style={[styles.Textm0, { color: theme.colors.strong }]}>
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
          style={styles.ActionSheetItemC1}
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
              navigation.navigate('YourjournalingtodayScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemf1}
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
  TextYk: {
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 10,
  },
  Textqb: {
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  Text_0G: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewQt: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablebO: {
    width: 100,
  },
  Text_6J: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  View_10: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_85: {
    width: 100,
  },
  TextAy: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewFB: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablepH: {
    width: 100,
  },
  Viewa2: {
    flexDirection: 'row',
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
    minHeight: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
  ViewPz: {
    maxWidth: '100%',
  },
  ImageBackgroundkA: {
    width: '100%',
    height: '100%',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  ViewV5: {
    minHeight: 150,
    width: '100%',
    alignSelf: 'flex-start',
    minWidth: '100%',
    maxHeight: 220,
  },
  ImageqG: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  Viewnm: {
    height: 25,
    width: 25,
  },
  ImageEf: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  View_4a: {
    height: 25,
    width: 25,
  },
  ImagemP: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewG8: {
    height: 25,
    width: 25,
  },
  Imaget0: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  Views9: {
    height: 25,
    width: 25,
  },
  ImageJb: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewcL: {
    height: 25,
    width: 25,
  },
  ViewQI: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  Text_2l: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    textAlign: 'right',
  },
  View_6i: {
    width: '100%',
    minHeight: 50,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 5,
  },
  Textb1: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextfZ: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  View_1j: {
    marginBottom: 20,
  },
  Text_2J: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextCa: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Viewvk: {
    marginBottom: 20,
  },
  Textmq: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextIs: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  View_7s: {
    marginBottom: 20,
  },
  Textcp: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextfH: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewAi: {
    marginBottom: 20,
  },
  TextlJ: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Text_4c: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewD5: {
    marginBottom: 20,
  },
  Textda: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextU2: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewPt: {
    marginBottom: 20,
  },
  TextXI: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Text_3o: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewaR: {
    marginBottom: 0,
  },
  ViewKu: {
    maxWidth: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  ViewWL: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: 20,
    marginTop: 0,
    justifyContent: 'space-between',
  },
  FlatListiI: {
    width: '100%',
  },
  FlatListiIContent: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    paddingBottom: 20,
    paddingTop: 20,
  },
  Fetch_87: {
    minHeight: 40,
  },
  ImageeB: {
    width: 250,
    height: 250,
  },
  Textm0: {
    fontFamily: 'Montserrat_600SemiBold',
  },
  Viewyk: {
    minHeight: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  ActionSheetItemUu: {
    textAlign: 'center',
  },
  ActionSheetItemC1: {
    textAlign: 'center',
  },
  ActionSheetItemf1: {
    textAlign: 'center',
  },
});

export default withTheme(YourjournalingtodayScreen);
