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

const LogMoodGuidedoldScreen = props => {
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
        <View style={styles.ViewwL}>
          <IconButton
            icon={'AntDesign/arrowleft'}
            size={32}
            color={theme.colors.light}
          />
        </View>

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingViewG3}
          enabled={true}
          behavior={'padding'}
        >
          <View
            style={[
              styles.ViewZ3,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.Viewqb}>
              <Text style={[styles.Textj0, { color: theme.colors.strong }]}>
                {'How do you feel?'}
              </Text>
            </View>

            <View style={styles.ViewXP}>
              <View style={styles.Viewhu}>
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
                  style={styles.TouchableLm}
                >
                  <>
                    {Mood1 ? null : (
                      <Image
                        style={styles.ImageFC}
                        resizeMode={'contain'}
                        source={Images.Unhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImagepB}
                    source={Images.Unhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewNM}>
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
                  style={styles.TouchableWd}
                >
                  <>
                    {Mood2 ? null : (
                      <Image
                        style={styles.ImageDm}
                        resizeMode={'contain'}
                        source={Images.Mediumunhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageAN}
                    source={Images.Mediumunhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewtH}>
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
                  style={styles.Touchablema}
                >
                  <>
                    {Mood3 ? null : (
                      <Image
                        style={styles.ImagePN}
                        resizeMode={'contain'}
                        source={Images.Middleblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageVp}
                    source={Images.Middleblack1}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.Viewr8}>
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
                  style={styles.Touchablen1}
                >
                  <>
                    {Mood4 ? null : (
                      <Image
                        style={styles.Image_2l}
                        resizeMode={'contain'}
                        source={Images.Mediumhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.Imagesb}
                    source={Images.Mediumhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewdK}>
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
                  style={styles.TouchablerM}
                >
                  <>
                    {Mood5 ? null : (
                      <Image
                        style={styles.ImageXN}
                        resizeMode={'contain'}
                        source={Images.Happyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageRv}
                    source={Images.Happygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.ViewMd,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 36}>
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
                  <View style={styles.Viewio}>
                    <Text
                      style={[styles.Text_3G, { color: theme.colors.strong }]}
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
                            styles.TextInput_85,
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

          <View style={styles.Viewap}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await XanoApi.postToEntries2022POST(Constants, {
                    exercise_number: props.route?.params?.id ?? 36,
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
                styles.ButtonSolidtr,
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
  ViewwL: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  Textj0: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  Viewqb: {
    width: '100%',
  },
  ImageFC: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImagepB: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableLm: {
    height: 40,
    width: 40,
  },
  Viewhu: {
    height: 40,
    width: 40,
  },
  ImageDm: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageAN: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableWd: {
    width: 40,
    height: 40,
  },
  ViewNM: {
    height: 40,
    width: 40,
  },
  ImagePN: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageVp: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchablema: {
    width: 40,
    height: 40,
  },
  ViewtH: {
    height: 40,
    width: 40,
  },
  Image_2l: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imagesb: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchablen1: {
    width: 40,
    height: 40,
  },
  Viewr8: {
    height: 40,
    width: 40,
  },
  ImageXN: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageRv: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchablerM: {
    width: 40,
    height: 40,
  },
  ViewdK: {
    height: 40,
    width: 40,
  },
  ViewXP: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  ViewZ3: {
    width: '95%',
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  Text_23: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  ViewtV: {
    width: '100%',
  },
  Imagezs: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImagePs: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableS8: {
    width: 40,
    height: 40,
  },
  Viewzb: {
    height: 40,
    width: 40,
  },
  ImageHe: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Image_4q: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableE6: {
    width: 40,
    height: 40,
  },
  ViewoA: {
    height: 40,
    width: 40,
  },
  ImageDv: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imagebe: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchablezI: {
    width: 40,
    height: 40,
  },
  ViewB4: {
    height: 40,
    width: 40,
  },
  Image_20: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImagesX: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchableeq: {
    width: 40,
    height: 40,
  },
  ViewWN: {
    height: 40,
    width: 40,
  },
  Image_80: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imagekx: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchableb4: {
    width: 40,
    height: 40,
  },
  ViewPJ: {
    height: 40,
    width: 40,
  },
  View_3O: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  View_8I: {
    width: '95%',
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  Text_3G: {
    textAlign: 'left',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInput_85: {
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
  Viewio: {
    paddingBottom: 0,
  },
  FetchL5: {
    minHeight: 40,
  },
  ViewMd: {
    width: '95%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  ButtonSolidtr: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  Viewap: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 20,
  },
  KeyboardAvoidingViewG3: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
    alignItems: 'center',
  },
});

export default withTheme(LogMoodGuidedoldScreen);
