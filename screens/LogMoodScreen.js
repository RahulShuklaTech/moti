import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
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

const LogMoodScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [Gaming, setGaming] = React.useState(false);
  const [Hobbies, setHobbies] = React.useState(false);
  const [Mood1, setMood1] = React.useState(false);
  const [Mood2, setMood2] = React.useState(false);
  const [Mood3, setMood3] = React.useState(false);
  const [Mood4, setMood4] = React.useState(false);
  const [Mood5, setMood5] = React.useState(false);
  const [MoodValue, setMoodValue] = React.useState(0);
  const [TV, setTV] = React.useState(false);
  const [Travel, setTravel] = React.useState(false);
  const [Work, setWork] = React.useState(false);
  const [alcohol, setAlcohol] = React.useState(false);
  const [alone, setAlone] = React.useState(false);
  const [cooking, setCooking] = React.useState(false);
  const [creativity, setCreativity] = React.useState(false);
  const [drugs, setDrugs] = React.useState(false);
  const [family, setFamily] = React.useState(false);
  const [friends, setFriends] = React.useState(false);
  const [habit_id, setHabit_id] = React.useState('');
  const [holiday, setHoliday] = React.useState(false);
  const [input1Value, setInput1Value] = React.useState('');
  const [input2Value, setInput2Value] = React.useState('');
  const [input3Value, setInput3Value] = React.useState('');
  const [input4Value, setInput4Value] = React.useState('');
  const [input5Value, setInput5Value] = React.useState('');
  const [input6Value, setInput6Value] = React.useState('');
  const [input7Value, setInput7Value] = React.useState('');
  const [learning, setLearning] = React.useState(false);
  const [meditate, setMeditate] = React.useState(false);
  const [music, setMusic] = React.useState(false);
  const [reading, setReading] = React.useState(false);
  const [run, setRun] = React.useState(false);
  const [sex, setSex] = React.useState(false);
  const [social_media, setSocial_media] = React.useState(false);
  const [sport, setSport] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [up_early, setUp_early] = React.useState(false);
  const [up_late, setUp_late] = React.useState(false);
  const [workout, setWorkout] = React.useState(false);
  const [writing, setWriting] = React.useState(false);
  const [yoga, setYoga] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View>
          <View
            style={[styles.View_1M, { backgroundColor: theme.colors.primary }]}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Image
                style={styles.ImagehA}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>

          <View
            style={[styles.ViewJJ, { backgroundColor: theme.colors.primary }]}
          >
            <View
              style={[
                styles.ViewLb,
                {
                  backgroundColor: theme.colors.divider,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
              ]}
            />
          </View>
        </View>

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingViewSd}
          enabled={true}
          behavior={'padding'}
        >
          <View
            style={[
              styles.ViewBK,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 10 },
            ]}
          >
            <View style={styles.ViewPv}>
              <Text style={[styles.TextUE, { color: theme.colors.strong }]}>
                {'How do you feel?'}
              </Text>
            </View>

            <View style={styles.Viewvv}>
              <View style={styles.ViewAc}>
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
                  style={styles.TouchableLJ}
                >
                  <>
                    {Mood1 ? null : (
                      <Image
                        style={styles.ImagelN}
                        resizeMode={'contain'}
                        source={Images.Unhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.Imageah}
                    source={Images.Unhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewZD}>
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
                  style={styles.Touchabled5}
                >
                  <>
                    {Mood2 ? null : (
                      <Image
                        style={styles.ImageEd}
                        resizeMode={'contain'}
                        source={Images.Mediumunhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageO5}
                    source={Images.Mediumunhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.Viewzu}>
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
                  style={styles.Touchableu6}
                >
                  <>
                    {Mood3 ? null : (
                      <Image
                        style={styles.ImageSA}
                        resizeMode={'contain'}
                        source={Images.Middleblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageEV}
                    source={Images.Middleblack1}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.Viewit}>
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
                  style={styles.TouchableeZ}
                >
                  <>
                    {Mood4 ? null : (
                      <Image
                        style={styles.ImageDZ}
                        resizeMode={'contain'}
                        source={Images.Mediumhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageS0}
                    source={Images.Mediumhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.Viewjs}>
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
                  style={styles.Touchablea3}
                >
                  <>
                    {Mood5 ? null : (
                      <Image
                        style={styles.Image_1c}
                        resizeMode={'contain'}
                        source={Images.Happyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageRc}
                    source={Images.Happygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.ViewFD,
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
                  <View style={styles.ViewVK}>
                    <Text
                      style={[styles.TextZh, { color: theme.colors.strong }]}
                    >
                      {prompt1SectionData?.prompt_1}
                    </Text>
                  </View>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <View style={styles.View_7b}>
              <View style={styles.ViewXK}>
                <>
                  {run ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setRun(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewmH,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextNa,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Run'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!run ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setRun(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewSz,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextxG,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Run'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.View_1c}>
                <>
                  {workout ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setWorkout(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewl3,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextmX,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Workout'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!workout ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setWorkout(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewV9,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textk7,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Workout'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewyX}>
                <>
                  {yoga ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setYoga(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewhO,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_9d,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Yoga'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!yoga ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setYoga(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewH4,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextwM,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Yoga'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewYH}>
                <>
                  {meditate ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setMeditate(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewVD,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextKW,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Meditate'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!meditate ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setMeditate(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewnz,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextNJ,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Meditate'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.View_4s}>
                <>
                  {cooking ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setCooking(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewRK,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextMK,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cooking'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!cooking ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setCooking(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewBt,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textak,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cooking'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.Viewgt}>
                <>
                  {TV ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setTV(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewLc,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextuX,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'TV'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!TV ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setTV(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewi7,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextJg,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'TV'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.Viewjn}>
                <>
                  {social_media ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSocial_media(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewDB,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextUx,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Social Media'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!social_media ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSocial_media(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.View_65,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Texta2,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Social Media'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.Viewux}>
                <>
                  {family ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFamily(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewYx,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextSR,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Family'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!family ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFamily(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewva,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_33,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Family'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.Viewi4}>
                <>
                  {friends ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFriends(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewxz,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textfh,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Friends'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!friends ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFriends(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewj7,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_2Q,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Friends'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.Viewuo}>
                <>
                  {sport ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSport(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewci,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextCj,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Sport'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!sport ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSport(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewLL,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextEe,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Sport'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewnJ}>
                <>
                  {holiday ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setHoliday(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewDP,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextL7,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Holiday'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!holiday ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setHoliday(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewam,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textpg,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Holiday'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewoK}>
                <>
                  {alone ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setAlone(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.View_5D,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextNB,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Alone'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!alone ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setAlone(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewNL,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_0Y,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Alone'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.View_0s}>
                <>
                  {alcohol ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setAlcohol(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewjq,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textqm,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Alcohol'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!alcohol?.false ? null : (
                    <Touchable>
                      <View
                        style={[
                          styles.ViewFa,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextEu,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Alcohol'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewlR}>
                <>
                  {drugs ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setDrugs(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewAa,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextcN,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Drugs'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!drugs ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setDrugs(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewZZ,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextQs,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Drugs'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewRE}>
                <>
                  {creativity ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setCreativity(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewju,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextbC,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Creativity'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!creativity ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setCreativity(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewt1,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textby,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Creativity'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.View_41}>
                <>
                  {Work ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setWork(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewIz,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textrd,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Work'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!Work ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setWork(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewXE,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextO1,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Work'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewAv}>
                <>
                  {Hobbies ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setHobbies(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewfe,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextO4,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Hobbies'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!Hobbies ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setHobbies(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewIZ,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textw0,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Hobbies'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.View_0o}>
                <>
                  {Gaming ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setGaming(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewra,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextMV,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Gaming'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!Gaming ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setGaming(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.View_0t,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextZM,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Gaming'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.View_8t}>
                <>
                  {Travel ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setTravel(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewmJ,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_60,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Travel'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!Travel ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setTravel(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewQg,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textzi,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Travel'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewgH}>
                <>
                  {learning ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setLearning(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewP2,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextaV,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Learning'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!learning ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setLearning(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewQn,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_7S,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Learning'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewmC}>
                <>
                  {sex ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSex(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewnx,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextX9,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Sex'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!sex ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSex(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.View_7X,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextmI,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Sex'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewzS}>
                <>
                  {music ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setMusic(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewTI,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextYj,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Music'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!music ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setMusic(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.View_3N,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_1k,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Music'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewHg}>
                <>
                  {reading ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setReading(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewxi,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextpH,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Reading'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!reading ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setReading(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewY4,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextrQ,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Reading'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewVT}>
                <>
                  {writing ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setWriting(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewR9,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textib,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Writing'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!writing ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setWriting(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewqc,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_3m,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Writing'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.ViewDJ}>
                <>
                  {up_early ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setUp_early(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.View_6S,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_6T,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Up early'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!up_early ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setUp_early(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewuH,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextTI,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Up early'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>

              <View style={styles.Viewrv}>
                <>
                  {up_late ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setUp_late(true);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.View_0g,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textbk,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Up late'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                <>
                  {!up_late ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setUp_late(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewDT,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_4V,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Up late'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
            </View>
          </View>

          <View style={styles.ViewPa}>
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
                styles.ButtonSolidVX,
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
  ImagehA: {
    width: 30,
    height: 30,
  },
  View_1M: {
    minHeight: 60,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 20,
  },
  ViewLb: {
    height: 30,
  },
  ViewJJ: {
    minHeight: 30,
  },
  TextUE: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  ViewPv: {
    width: '100%',
  },
  ImagelN: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imageah: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableLJ: {
    height: 40,
    width: 40,
  },
  ViewAc: {
    height: 40,
    width: 40,
  },
  ImageEd: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageO5: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchabled5: {
    width: 40,
    height: 40,
  },
  ViewZD: {
    height: 40,
    width: 40,
  },
  ImageSA: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageEV: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchableu6: {
    width: 40,
    height: 40,
  },
  Viewzu: {
    height: 40,
    width: 40,
  },
  ImageDZ: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageS0: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableeZ: {
    width: 40,
    height: 40,
  },
  Viewit: {
    height: 40,
    width: 40,
  },
  Image_1c: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageRc: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchablea3: {
    width: 40,
    height: 40,
  },
  Viewjs: {
    height: 40,
    width: 40,
  },
  Viewvv: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  ViewBK: {
    width: '95%',
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  Text_4p: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  ViewG5: {
    width: '100%',
  },
  ImagemU: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageBI: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableJ6: {
    width: 40,
    height: 40,
  },
  View_83: {
    height: 40,
    width: 40,
  },
  Imageze: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImagerV: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableaT: {
    width: 40,
    height: 40,
  },
  ViewHn: {
    height: 40,
    width: 40,
  },
  Imageim: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageVY: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableM9: {
    width: 40,
    height: 40,
  },
  ViewSX: {
    height: 40,
    width: 40,
  },
  ImageKB: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Image_5A: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchable_6T: {
    width: 40,
    height: 40,
  },
  ViewnR: {
    height: 40,
    width: 40,
  },
  ImageFY: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageiZ: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  Touchable_7g: {
    width: 40,
    height: 40,
  },
  ViewaG: {
    height: 40,
    width: 40,
  },
  View_96: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  ViewXr: {
    width: '95%',
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  TextZh: {
    textAlign: 'left',
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputaO: {
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
  ViewVK: {
    paddingBottom: 0,
  },
  Fetchvb: {
    minHeight: 40,
  },
  TextNa: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewmH: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextxG: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewSz: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewXK: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextmX: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewl3: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textk7: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewV9: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_1c: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_9d: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewhO: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextwM: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewH4: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewyX: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextKW: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewVD: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextNJ: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewnz: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewYH: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextMK: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewRK: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textak: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewBt: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_4s: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextuX: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewLc: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextJg: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewi7: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewgt: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextUx: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewDB: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Texta2: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_65: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewjn: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextSR: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewYx: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_33: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewva: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewux: {
    marginRight: 4,
    marginBottom: 4,
  },
  Textfh: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewxz: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_2Q: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewj7: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewi4: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextCj: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewci: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextEe: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewLL: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewuo: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextL7: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewDP: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textpg: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewam: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewnJ: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextNB: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_5D: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_0Y: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewNL: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewoK: {
    marginRight: 4,
    marginBottom: 4,
  },
  Textqm: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewjq: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextEu: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewFa: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_0s: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextcN: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewAa: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextQs: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewZZ: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewlR: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextbC: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewju: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textby: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewt1: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewRE: {
    marginRight: 4,
    marginBottom: 4,
  },
  Textrd: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewIz: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextO1: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewXE: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_41: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextO4: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewfe: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textw0: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewIZ: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewAv: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextMV: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewra: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextZM: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_0t: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_0o: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_60: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewmJ: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textzi: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewQg: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_8t: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextaV: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewP2: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_7S: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewQn: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewgH: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextX9: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewnx: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextmI: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_7X: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewmC: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextYj: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewTI: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_1k: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_3N: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewzS: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextpH: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewxi: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextrQ: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewY4: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewHg: {
    marginRight: 4,
    marginBottom: 4,
  },
  Textib: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewR9: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_3m: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewqc: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewVT: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_6T: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_6S: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextTI: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewuH: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewDJ: {
    marginRight: 4,
    marginBottom: 4,
  },
  Textbk: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_0g: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_4V: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewDT: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewrv: {
    marginRight: 4,
    marginBottom: 4,
  },
  View_7b: {
    width: '100%',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  ViewFD: {
    width: '95%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  ButtonSolidVX: {
    borderRadius: 10,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  ViewPa: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 20,
  },
  KeyboardAvoidingViewSd: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
    alignItems: 'center',
  },
});

export default withTheme(LogMoodScreen);
