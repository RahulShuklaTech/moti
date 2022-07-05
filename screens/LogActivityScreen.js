import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  Touchable,
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
import { Fetch } from 'react-request';

const LogActivityScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [Mood1, setMood1] = React.useState(false);
  const [Mood2, setMood2] = React.useState(false);
  const [Mood3, setMood3] = React.useState(false);
  const [Mood4, setMood4] = React.useState(false);
  const [Mood5, setMood5] = React.useState(false);
  const [MoodValue, setMoodValue] = React.useState(0);
  const [input1Value, setInput1Value] = React.useState('');
  const [input2Value, setInput2Value] = React.useState('');
  const [input3Value, setInput3Value] = React.useState('');
  const [input4Value, setInput4Value] = React.useState('');
  const [input5Value, setInput5Value] = React.useState('');
  const [input6Value, setInput6Value] = React.useState('');
  const [input7Value, setInput7Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.ViewuE}>
          <IconButton
            icon={'AntDesign/arrowleft'}
            size={32}
            color={theme.colors.light}
          />
        </View>

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingViewk0}
          enabled={true}
          behavior={'padding'}
        >
          <View
            style={[
              styles.View_3P,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 37}>
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
                  <View style={styles.ViewSY}>
                    <Text
                      style={[styles.Textsc, { color: theme.colors.strong }]}
                    >
                      {prompt1SectionData?.prompt_1}
                    </Text>
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
                            styles.TextInputg0,
                            { borderColor: theme.colors.background },
                          ]}
                          value={input1Value}
                          placeholder={'Tap to type...'}
                          multiline={true}
                        />
                      )}
                    </>
                  </View>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
          </View>

          <View
            style={[
              styles.Viewxa,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.Viewv3}>
              <Text style={[styles.Text_6H, { color: theme.colors.strong }]}>
                {'How did it make you feel?'}
              </Text>
            </View>

            <View style={styles.ViewbK}>
              <View style={styles.View_9f}>
                <Touchable
                  onPress={() => {
                    try {
                      setMood1(true);
                      setMood2(false);
                      setMood3(false);
                      setMood4(false);
                      setMood5(false);
                      setMoodValue('1');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.TouchableOQ}
                >
                  <>
                    {Mood1 ? null : (
                      <Image
                        style={styles.ImagePs}
                        resizeMode={'contain'}
                        source={Images.Unhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.Imagee2}
                    source={Images.Unhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.View_3j}>
                <Touchable
                  onPress={() => {
                    try {
                      setMood1(false);
                      setMood2(true);
                      setMood3(false);
                      setMood4(false);
                      setMood5(false);
                      setMoodValue('2');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.Touchable_6Q}
                >
                  <>
                    {Mood2 ? null : (
                      <Image
                        style={styles.ImageXx}
                        resizeMode={'contain'}
                        source={Images.Mediumunhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageYU}
                    source={Images.Mediumunhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewBN}>
                <Touchable
                  onPress={() => {
                    try {
                      setMood1(false);
                      setMood2(false);
                      setMood3(true);
                      setMood4(false);
                      setMood5(false);
                      setMoodValue('3');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.Touchablea1}
                >
                  <>
                    {Mood3 ? null : (
                      <Image
                        style={styles.Imagev4}
                        resizeMode={'contain'}
                        source={Images.Middleblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageS3}
                    source={Images.Middleblack1}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewQ5}>
                <Touchable
                  onPress={() => {
                    try {
                      setMood1(false);
                      setMood2(false);
                      setMood3(false);
                      setMood4(true);
                      setMood5(false);
                      setMoodValue('4');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.TouchableRW}
                >
                  <>
                    {Mood4 ? null : (
                      <Image
                        style={styles.Image_1c}
                        resizeMode={'contain'}
                        source={Images.Mediumhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageaG}
                    source={Images.Mediumhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewgW}>
                <Touchable
                  onPress={() => {
                    try {
                      setMood1(false);
                      setMood2(false);
                      setMood3(false);
                      setMood4(false);
                      setMood5(true);
                      setMoodValue('5');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.TouchablepY}
                >
                  <>
                    {Mood5 ? null : (
                      <Image
                        style={styles.ImageKv}
                        resizeMode={'contain'}
                        source={Images.Happyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageYO}
                    source={Images.Happygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.ViewG0,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 37}>
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
                  <View style={styles.ViewnU}>
                    <Text
                      style={[styles.TextbP, { color: theme.colors.strong }]}
                    >
                      {prompt1SectionData?.prompt_2}
                    </Text>
                    <>
                      {!prompt1SectionData?.prompt_2 ? null : (
                        <TextInput
                          onChangeText={newInput2Value => {
                            try {
                              setInput2Value(newInput2Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.TextInputrd,
                            { borderColor: theme.colors.background },
                          ]}
                          value={input2Value}
                          placeholder={'Tap to type...'}
                          multiline={true}
                        />
                      )}
                    </>
                  </View>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
          </View>

          <View style={styles.ViewMD}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await XanoApi.postToEntries2022POST(Constants, {
                    exercise_number: props.route?.params?.id ?? 37,
                    input_1: input1Value,
                    input_2: input2Value,
                    input_3: input3Value,
                    input_4: input4Value,
                    input_5: input5Value,
                    input_6: input6Value,
                    input_7: input7Value,
                    mood: MoodValue,
                  });
                  navigation.navigate('Tabs', {
                    screen: 'TodayNavigator',
                    params: { screen: 'ExerciseFinishScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid_0Q,
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
  ViewuE: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  Textsc: {
    textAlign: 'left',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputg0: {
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
    marginBottom: 20,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  ViewSY: {
    paddingBottom: 0,
  },
  Fetchrq: {
    minHeight: 40,
  },
  View_3P: {
    width: '95%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  Text_6H: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  Viewv3: {
    width: '100%',
  },
  ImagePs: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imagee2: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableOQ: {
    height: 40,
    width: 40,
  },
  View_9f: {
    height: 40,
    width: 40,
  },
  ImageXx: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageYU: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchable_6Q: {
    width: 40,
    height: 40,
  },
  View_3j: {
    height: 40,
    width: 40,
  },
  Imagev4: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageS3: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchablea1: {
    width: 40,
    height: 40,
  },
  ViewBN: {
    height: 40,
    width: 40,
  },
  Image_1c: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageaG: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableRW: {
    width: 40,
    height: 40,
  },
  ViewQ5: {
    height: 40,
    width: 40,
  },
  ImageKv: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageYO: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchablepY: {
    width: 40,
    height: 40,
  },
  ViewgW: {
    height: 40,
    width: 40,
  },
  ViewbK: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  Viewxa: {
    width: '95%',
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  TextbP: {
    textAlign: 'left',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputrd: {
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
    marginBottom: 20,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  ViewnU: {
    paddingBottom: 0,
  },
  Fetchua: {
    minHeight: 40,
  },
  ViewG0: {
    width: '95%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  ButtonSolid_0Q: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  ViewMD: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 20,
  },
  KeyboardAvoidingViewk0: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
    alignItems: 'center',
  },
});

export default withTheme(LogActivityScreen);
