import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const DifficultThoughtsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [input1Value, setInput1Value] = React.useState('');
  const [input2Value, setInput2Value] = React.useState('');
  const [input3Value, setInput3Value] = React.useState('');
  const [input4Value, setInput4Value] = React.useState('');
  const [input5Value, setInput5Value] = React.useState('');
  const [input6Value, setInput6Value] = React.useState('');
  const [input7Value, setInput7Value] = React.useState('');
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);
  const [show5, setShow5] = React.useState(false);
  const [show6, setShow6] = React.useState(false);
  const [show7, setShow7] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.Viewaq}>
          <IconButton
            icon={'AntDesign/arrowleft'}
            size={32}
            color={theme.colors.light}
          />
        </View>

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingViewDR}
          enabled={true}
          behavior={'padding'}
        >
          <View style={styles.Viewpb}>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 7}>
              {({ loading, error, data, refetchFetchExercise }) => {
                const prompt1SectionData = data;
                if (!prompt1SectionData || loading) {
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
                  <>
                    {!prompt1SectionData?.prompt_1 ? null : (
                      <View
                        style={[
                          styles.ViewMm,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.Viewt6}>
                          <View style={styles.Viewz4}>
                            <Text
                              style={[
                                styles.Textm2,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt1SectionData?.prompt_1}
                            </Text>
                          </View>

                          <View style={styles.ViewMB}>
                            <>
                              {show1 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow1(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={'AntDesign/questioncircle'}
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                            <>
                              {!show1 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow1(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={
                                    'MaterialCommunityIcons/arrow-up-drop-circle'
                                  }
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show1 ? null : (
                            <Text
                              style={[
                                styles.TextNk,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt1SectionData?.info_1}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt1SectionData?.prompt_1 ? null : (
                            <TextInput
                              onChangeText={newInput1Value => {
                                const input1Value = newInput1Value;
                                try {
                                  setInput1Value(input1Value);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInputhA,
                                { borderColor: theme.colors.background },
                              ]}
                              value={input1Value}
                              placeholder={'Tap to type...'}
                              multiline={true}
                            />
                          )}
                        </>
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 7}>
              {({ loading, error, data, refetchFetchExercise }) => {
                const prompt2SectionData = data;
                if (!prompt2SectionData || loading) {
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
                  <>
                    {!prompt2SectionData?.prompt_2 ? null : (
                      <View
                        style={[
                          styles.Viewi5,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewqM}>
                          <View style={styles.View_0p}>
                            <Text
                              style={[
                                styles.Textjj,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt2SectionData?.prompt_2}
                            </Text>
                          </View>

                          <View style={styles.ViewgH}>
                            <>
                              {show2 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow2(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={'AntDesign/questioncircle'}
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                            <>
                              {!show2 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow2(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={
                                    'MaterialCommunityIcons/arrow-up-drop-circle'
                                  }
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show2 ? null : (
                            <Text
                              style={[
                                styles.TextAb,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt2SectionData?.info_2}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt2SectionData?.prompt_2 ? null : (
                            <TextInput
                              onChangeText={newInput2Value => {
                                const input2Value = newInput2Value;
                                try {
                                  setInput2Value(input2Value);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInput_5E,
                                { borderColor: theme.colors.background },
                              ]}
                              value={input2Value}
                              placeholder={'Tap to type...'}
                              multiline={true}
                            />
                          )}
                        </>
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 7}>
              {({ loading, error, data, refetchFetchExercise }) => {
                const prompt3SectionData = data;
                if (!prompt3SectionData || loading) {
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
                  <>
                    {!prompt3SectionData?.prompt_3 ? null : (
                      <View
                        style={[
                          styles.ViewCa,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewVg}>
                          <View style={styles.ViewEH}>
                            <>
                              {!prompt3SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextSW,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt3SectionData?.prompt_3}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewYM}>
                            <>
                              {show3 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow3(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={'AntDesign/questioncircle'}
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                            <>
                              {!show3 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow3(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={
                                    'MaterialCommunityIcons/arrow-up-drop-circle'
                                  }
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show3 ? null : (
                            <Text
                              style={[
                                styles.Textzp,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt3SectionData?.info_3}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt3SectionData?.prompt_3 ? null : (
                            <TextInput
                              onChangeText={newInput3Value => {
                                const input3Value = newInput3Value;
                                try {
                                  setInput3Value(input3Value);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInputqD,
                                { borderColor: theme.colors.background },
                              ]}
                              value={input3Value}
                              placeholder={'Tap to type...'}
                              multiline={true}
                            />
                          )}
                        </>
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 7}>
              {({ loading, error, data, refetchFetchExercise }) => {
                const prompt4SectionData = data;
                if (!prompt4SectionData || loading) {
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
                  <>
                    {!prompt4SectionData?.Prompt_4 ? null : (
                      <View
                        style={[
                          styles.Viewrv,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.Viewxq}>
                          <View style={styles.ViewBA}>
                            <>
                              {!prompt4SectionData?.Prompt_4 ? null : (
                                <Text
                                  style={[
                                    styles.Textiq,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt4SectionData?.Prompt_4}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.Viewkb}>
                            <>
                              {show4 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow4(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={'AntDesign/questioncircle'}
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                            <>
                              {!show4 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow4(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={
                                    'MaterialCommunityIcons/arrow-up-drop-circle'
                                  }
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show4 ? null : (
                            <Text
                              style={[
                                styles.Textcn,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt4SectionData?.info_4}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt4SectionData?.Prompt_4 ? null : (
                            <TextInput
                              onChangeText={newInput4Value => {
                                const input4Value = newInput4Value;
                                try {
                                  setInput4Value(input4Value);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInputTS,
                                { borderColor: theme.colors.background },
                              ]}
                              value={input4Value}
                              placeholder={'Tap to type...'}
                              multiline={true}
                            />
                          )}
                        </>
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 7}>
              {({ loading, error, data, refetchFetchExercise }) => {
                const prompt5SectionData = data;
                if (!prompt5SectionData || loading) {
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
                  <>
                    {!prompt5SectionData?.Prompt_5 ? null : (
                      <View
                        style={[
                          styles.ViewBm,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.View_4p}>
                          <View style={styles.ViewEQ}>
                            <>
                              {!prompt5SectionData?.Prompt_5 ? null : (
                                <Text
                                  style={[
                                    styles.Text_5E,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt5SectionData?.Prompt_5}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewwT}>
                            <>
                              {show5 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow5(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={'AntDesign/questioncircle'}
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                            <>
                              {!show5 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow5(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={
                                    'MaterialCommunityIcons/arrow-up-drop-circle'
                                  }
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show5 ? null : (
                            <Text
                              style={[
                                styles.TextV2,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt5SectionData?.info_5}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt5SectionData?.Prompt_5 ? null : (
                            <TextInput
                              onChangeText={newInput5Value => {
                                const input5Value = newInput5Value;
                                try {
                                  setInput5Value(input5Value);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInputxx,
                                { borderColor: theme.colors.background },
                              ]}
                              value={input5Value}
                              placeholder={'Tap to type...'}
                              multiline={true}
                            />
                          )}
                        </>
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 7}>
              {({ loading, error, data, refetchFetchExercise }) => {
                const prompt6SectionData = data;
                if (!prompt6SectionData || loading) {
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
                  <>
                    {!prompt6SectionData?.Prompt_6 ? null : (
                      <View
                        style={[
                          styles.ViewF0,
                          {
                            borderRadius: 5,
                            backgroundColor: theme.colors.strongInverse,
                          },
                        ]}
                      >
                        <View style={styles.ViewjD}>
                          <View style={styles.View_6Z}>
                            <>
                              {!prompt6SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextM6,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt6SectionData?.Prompt_6}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewBO}>
                            <>
                              {show6 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow6(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={'AntDesign/questioncircle'}
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                            <>
                              {!show6 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow6(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={
                                    'MaterialCommunityIcons/arrow-up-drop-circle'
                                  }
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show6 ? null : (
                            <Text
                              style={[
                                styles.TextD1,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt6SectionData?.info_6}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt6SectionData?.Prompt_6 ? null : (
                            <TextInput
                              onChangeText={newInput6Value => {
                                const input6Value = newInput6Value;
                                try {
                                  setInput6Value(input6Value);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInputMb,
                                { borderColor: theme.colors.background },
                              ]}
                              value={input6Value}
                              placeholder={'Tap to type...'}
                              multiline={true}
                            />
                          )}
                        </>
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 7}>
              {({ loading, error, data, refetchFetchExercise }) => {
                const prompt7SectionData = data;
                if (!prompt7SectionData || loading) {
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
                  <>
                    {!prompt7SectionData?.Prompt_7 ? null : (
                      <View
                        style={[
                          styles.ViewYl,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.Viewjz}>
                          <View style={styles.ViewMi}>
                            <Text
                              style={[
                                styles.Textly,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt7SectionData?.Prompt_7}
                            </Text>
                          </View>

                          <View style={styles.Viewnc}>
                            <>
                              {show7 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow7(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={'AntDesign/questioncircle'}
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                            <>
                              {!show7 ? null : (
                                <IconButton
                                  onPress={() => {
                                    try {
                                      setShow7(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  icon={
                                    'MaterialCommunityIcons/arrow-up-drop-circle'
                                  }
                                  size={26}
                                  color={theme.colors.divider}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show7 ? null : (
                            <Text
                              style={[
                                styles.TextFt,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt7SectionData?.info_7}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt7SectionData?.Prompt_7 ? null : (
                            <TextInput
                              onChangeText={newInput7Value => {
                                const input7Value = newInput7Value;
                                try {
                                  setInput7Value(input7Value);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={[
                                styles.TextInputjm,
                                { borderColor: theme.colors.background },
                              ]}
                              value={input7Value}
                              placeholder={'Tap to type...'}
                              multiline={true}
                            />
                          )}
                        </>
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
          </View>

          <View style={styles.View_01}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await XanoApi.postToEntries2022POST(Constants, {
                    exercise_number: props.route?.params?.id ?? 7,
                    input_1: input1Value,
                    input_2: input2Value,
                    input_3: input3Value,
                    input_4: input4Value,
                    input_5: input5Value,
                    input_6: input6Value,
                    input_7: input7Value,
                  });
                  navigation.navigate('Tabs', {
                    screen: 'GuidedNavigator',
                    params: { screen: 'ExerciseFinishGuidedScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidtd,
                { backgroundColor: theme.colors.primary },
              ]}
              title={'Save Entry'}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewaq: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  Textm2: {
    textAlign: 'left',
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  Viewz4: {
    width: '85%',
  },
  ViewMB: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewt6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextNk: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputhA: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    minHeight: 80,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  ViewMm: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
  },
  FetchfN: {
    minHeight: 40,
  },
  Textjj: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  View_0p: {
    width: '85%',
  },
  ViewgH: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewqM: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
  },
  TextAb: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInput_5E: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    minHeight: 80,
  },
  Viewi5: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: '95%',
  },
  FetchOF: {
    minHeight: 40,
  },
  TextSW: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewEH: {
    width: '85%',
  },
  ViewYM: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewVg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  Textzp: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputqD: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    minHeight: 80,
  },
  ViewCa: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchXY: {
    minHeight: 40,
  },
  Textiq: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewBA: {
    width: '85%',
  },
  Viewkb: {
    alignItems: 'flex-end',
    width: '10%',
  },
  Viewxq: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  Textcn: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputTS: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    minHeight: 80,
  },
  Viewrv: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  Fetchv2: {
    minHeight: 40,
  },
  Text_5E: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewEQ: {
    width: '85%',
  },
  ViewwT: {
    width: '10%',
    alignItems: 'flex-end',
  },
  View_4p: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextV2: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputxx: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    minHeight: 80,
  },
  ViewBm: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
    marginTop: 20,
  },
  FetchDL: {
    minHeight: 40,
  },
  TextM6: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  View_6Z: {
    width: '85%',
  },
  ViewBO: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewjD: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextD1: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputMb: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    minHeight: 80,
  },
  ViewF0: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  Fetcha6: {
    minHeight: 40,
  },
  Textly: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewMi: {
    width: '85%',
  },
  Viewnc: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewjz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextFt: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputjm: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    marginBottom: 0,
    minHeight: 80,
  },
  ViewYl: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
    width: '95%',
    marginBottom: 0,
  },
  Fetch_2r: {
    minHeight: 40,
  },
  Viewpb: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonSolidtd: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  View_01: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  KeyboardAvoidingViewDR: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
});

export default withTheme(DifficultThoughtsScreen);
