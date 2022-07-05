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

const Yourjournalingall2Screen = props => {
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
        style={[styles.ViewoE, { backgroundColor: theme.colors.background }]}
      >
        <ImageBackground
          style={[
            styles.ImageBackgroundm0,
            { backgroundColor: theme.colors.strongInverse },
          ]}
          resizeMode={'cover'}
        >
          <Text style={[styles.TextZq, { color: theme.colors.strong }]}>
            {'Your journaling'}
          </Text>

          <Text style={[styles.TextCD, { color: theme.colors.strong }]}>
            {'Explore and reflect on your writing.'}
          </Text>

          <View style={styles.Viewal}>
            <View
              style={[
                styles.View_7m,
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
                style={styles.Touchablewi}
              >
                <View style={[styles.ViewNK, { borderRadius: 64 }]}>
                  <Text style={[styles.Textku, { color: theme.colors.strong }]}>
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
                style={styles.TouchableYV}
              >
                <View style={[styles.ViewgX, { borderRadius: 64 }]}>
                  <Text style={[styles.TextIi, { color: theme.colors.strong }]}>
                    {'This week'}
                  </Text>
                </View>
              </Touchable>

              <Touchable style={styles.Touchable_84}>
                <View
                  style={[
                    styles.ViewNf,
                    { borderRadius: 64, backgroundColor: theme.colors.primary },
                  ]}
                >
                  <Text style={[styles.TextkI, { color: theme.colors.strong }]}>
                    {'All'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </ImageBackground>
      </View>

      <XanoApi.FetchEntriesDecrypted2022GET>
        {({ loading, error, data, refetchEntriesDecrypted2022 }) => {
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
              listKey={'zu2HPJ3f'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View
                    style={[
                      styles.View_1N,
                      {
                        backgroundColor: theme.colors.background,
                        borderRadius: 3,
                      },
                    ]}
                  >
                    <View style={styles.View_3g}>
                      <>
                        {listData?.MoodZero ? null : (
                          <View style={styles.Viewu2}>
                            <>
                              {!listData?.MoodOne ? null : (
                                <View style={styles.View_3D}>
                                  <Image
                                    style={styles.Imagej4}
                                    source={Images.Unhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodTwo ? null : (
                                <View style={styles.ViewNi}>
                                  <Image
                                    style={styles.Imageuj}
                                    source={Images.Mediumunhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodThree ? null : (
                                <View style={styles.ViewxG}>
                                  <Image
                                    style={styles.ImageHb}
                                    source={Images.Middleblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodFour ? null : (
                                <View style={styles.ViewVn}>
                                  <Image
                                    style={styles.ImagebQ}
                                    source={Images.Mediumhappyblack}
                                    resizeMode={'contain'}
                                  />
                                </View>
                              )}
                            </>
                            <>
                              {!listData?.MoodFive ? null : (
                                <View style={styles.ViewSY}>
                                  <Image
                                    style={styles.ImageTF}
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
                          styles.Text_2X,
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

                    <View style={styles.ViewOB}>
                      <>
                        {!listData?.Input_1 ? null : (
                          <View style={styles.Viewam}>
                            <Text
                              style={[
                                styles.Textd4,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_1}
                            </Text>

                            <Text
                              style={[
                                styles.TextBC,
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
                          <View style={styles.ViewG0}>
                            <Text
                              style={[
                                styles.Text_4g,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_2}
                            </Text>

                            <Text
                              style={[
                                styles.Text_6Z,
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
                          <View style={styles.Viewhh}>
                            <Text
                              style={[
                                styles.TextN5,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.prompt_3}
                            </Text>

                            <Text
                              style={[
                                styles.TextZD,
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
                          <View style={styles.ViewXl}>
                            <Text
                              style={[
                                styles.TextBc,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_4}
                            </Text>

                            <Text
                              style={[
                                styles.Textxe,
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
                          <View style={styles.Viewh8}>
                            <Text
                              style={[
                                styles.TextIs,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_5}
                            </Text>

                            <Text
                              style={[
                                styles.Textaz,
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
                          <View style={styles.ViewSz}>
                            <Text
                              style={[
                                styles.TextFe,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_6}
                            </Text>

                            <Text
                              style={[
                                styles.TextGy,
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
                          <View style={styles.ViewzV}>
                            <Text
                              style={[
                                styles.Text_0b,
                                { color: theme.colors.light },
                              ]}
                              ellipsizeMode={'head'}
                            >
                              {listData?.prompts?.Prompt_7}
                            </Text>

                            <Text
                              style={[
                                styles.TextYU,
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
                styles.FlatListzu,
                { backgroundColor: theme.colors.divider },
              ]}
              contentContainerStyle={styles.FlatListzuContent}
              numColumns={1}
            />
          );
        }}
      </XanoApi.FetchEntriesDecrypted2022GET>
      <View style={[styles.ViewnK, { backgroundColor: theme.colors.divider }]}>
        <Image
          style={styles.Imageha}
          source={Images.GroovySittingDoodle}
          resizeMode={'contain'}
        />
        <Text style={[styles.Texta8, { color: theme.colors.strong }]}>
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
          style={styles.ActionSheetItemRl}
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
          style={styles.ActionSheetItemrp}
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
  TextZq: {
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 10,
  },
  TextCD: {
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  Textku: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewNK: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablewi: {
    width: 100,
  },
  TextIi: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewgX: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableYV: {
    width: 100,
  },
  TextkI: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewNf: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_84: {
    width: 100,
  },
  View_7m: {
    flexDirection: 'row',
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,
    minHeight: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
  Viewal: {
    maxWidth: '100%',
  },
  ImageBackgroundm0: {
    width: '100%',
    height: '100%',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  ViewoE: {
    minHeight: 150,
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 0,
    paddingTop: 0,
    minWidth: '100%',
    maxHeight: 220,
  },
  Imagej4: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  View_3D: {
    height: 25,
    width: 25,
  },
  Imageuj: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewNi: {
    height: 25,
    width: 25,
  },
  ImageHb: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewxG: {
    height: 25,
    width: 25,
  },
  ImagebQ: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewVn: {
    height: 25,
    width: 25,
  },
  ImageTF: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  ViewSY: {
    height: 25,
    width: 25,
  },
  Viewu2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  Text_2X: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    textAlign: 'right',
  },
  View_3g: {
    width: '100%',
    minHeight: 50,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 5,
  },
  Textd4: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextBC: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Viewam: {
    marginBottom: 20,
  },
  Text_4g: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Text_6Z: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  ViewG0: {
    marginBottom: 20,
  },
  TextN5: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextZD: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  Viewhh: {
    marginBottom: 20,
  },
  TextBc: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Textxe: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewXl: {
    marginBottom: 20,
  },
  TextIs: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  Textaz: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  Viewh8: {
    marginBottom: 20,
  },
  TextFe: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextGy: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewSz: {
    marginBottom: 20,
  },
  Text_0b: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  TextYU: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  ViewzV: {
    marginBottom: 0,
  },
  ViewOB: {
    maxWidth: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  View_1N: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: 20,
    marginTop: 0,
    justifyContent: 'space-between',
  },
  FlatListzu: {
    width: '100%',
  },
  FlatListzuContent: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    paddingBottom: 20,
    paddingTop: 20,
  },
  Fetchwu: {
    minHeight: 40,
  },
  Imageha: {
    width: 250,
    height: 250,
  },
  Texta8: {
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewnK: {
    minHeight: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  ActionSheetItemAC: {
    textAlign: 'center',
  },
  ActionSheetItemRl: {
    textAlign: 'center',
  },
  ActionSheetItemrp: {
    textAlign: 'center',
  },
});

export default withTheme(Yourjournalingall2Screen);
