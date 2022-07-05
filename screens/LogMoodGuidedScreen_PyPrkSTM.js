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

const LogMoodGuidedScreen_PyPrkSTM = props => {
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
        <View style={styles.ViewTC}>
          <IconButton
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'AntDesign/arrowleft'}
            size={32}
            color={theme.colors.light}
          />
        </View>

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingViewkt}
          enabled={true}
          behavior={'padding'}
        >
          <View
            style={[
              styles.View_15,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 3 },
            ]}
          >
            <View style={styles.ViewbP}>
              <Text style={[styles.Text_01, { color: theme.colors.strong }]}>
                {'How do you feel?'}
              </Text>
            </View>

            <View style={styles.Viewsn}>
              <View style={styles.ViewEV}>
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
                  style={styles.TouchableRo}
                >
                  <>
                    {Mood1 ? null : (
                      <Image
                        style={styles.ImageaC}
                        resizeMode={'contain'}
                        source={Images.Unhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.Image_3W}
                    source={Images.Unhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.Viewst}>
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
                  style={styles.TouchableFT}
                >
                  <>
                    {Mood2 ? null : (
                      <Image
                        style={styles.ImagenS}
                        resizeMode={'contain'}
                        source={Images.Mediumunhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageUd}
                    source={Images.Mediumunhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.View_7y}>
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
                  style={styles.TouchableaL}
                >
                  <>
                    {Mood3 ? null : (
                      <Image
                        style={styles.Image_9l}
                        resizeMode={'contain'}
                        source={Images.Middleblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.Image_1P}
                    source={Images.Middleblack1}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewtF}>
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
                  style={styles.TouchabletK}
                >
                  <>
                    {Mood4 ? null : (
                      <Image
                        style={styles.Imagecr}
                        resizeMode={'contain'}
                        source={Images.Mediumhappyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.ImageAS}
                    source={Images.Mediumhappygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewLR}>
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
                  style={styles.TouchableNI}
                >
                  <>
                    {Mood5 ? null : (
                      <Image
                        style={styles.Imageba}
                        resizeMode={'contain'}
                        source={Images.Happyblack}
                      />
                    )}
                  </>
                  <Image
                    style={styles.Imagebv}
                    source={Images.Happygreen}
                    resizeMode={'contain'}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.ViewpO,
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
                  <View style={styles.ViewiB}>
                    <Text
                      style={[styles.Textff, { color: theme.colors.strong }]}
                    >
                      {prompt1SectionData?.prompt_1}
                    </Text>
                  </View>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <View style={styles.ViewtS}>
              <View style={styles.View_7l}>
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
                          styles.Viewxh,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextSs,
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
                          styles.ViewcE,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextaW,
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

              <View style={styles.Viewly}>
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
                          styles.ViewBi,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextN4,
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
                          styles.View_7a,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextDh,
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

              <View style={styles.Viewsd}>
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
                          styles.Viewv7,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextNe,
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
                          styles.ViewMb,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextUw,
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

              <View style={styles.Viewbi}>
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
                          styles.ViewfF,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextkR,
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
                          styles.ViewD1,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextsX,
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

              <View style={styles.ViewS1}>
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
                          styles.ViewX6,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textkf,
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
                          styles.View_4z,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextVE,
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

              <View style={styles.ViewRb}>
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
                          styles.ViewVi,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_4k,
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
                          styles.Viewrr,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextW2,
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

              <View style={styles.View_4c}>
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
                          styles.View_47,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextqA,
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
                          styles.ViewwG,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextXU,
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

              <View style={styles.View_1E}>
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
                          styles.ViewfK,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textj9,
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
                          styles.ViewkD,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_3g,
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

              <View style={styles.View_9S}>
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
                          styles.ViewOL,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_5q,
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
                          styles.ViewmO,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextlL,
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

              <View style={styles.Viewke}>
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
                          styles.Viewgp,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextSz,
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
                          styles.ViewWS,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextBN,
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

              <View style={styles.View_11}>
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
                          styles.Viewqq,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextP4,
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
                          styles.View_7e,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_2b,
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

              <View style={styles.ViewSR}>
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
                          styles.ViewNb,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextYQ,
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
                          styles.ViewaM,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textid,
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

              <View style={styles.ViewRS}>
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
                          styles.ViewGP,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextWT,
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
                          styles.Viewq4,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextxW,
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

              <View style={styles.ViewMx}>
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
                          styles.View_8l,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextYn,
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
                          styles.ViewRT,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextCk,
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

              <View style={styles.ViewJN}>
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
                          styles.ViewKg,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextWS,
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
                          styles.Viewcr,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextIK,
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

              <View style={styles.ViewC4}>
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
                          styles.ViewaU,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextSK,
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
                          styles.ViewHY,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextWp,
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

              <View style={styles.ViewFT}>
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
                          styles.ViewrN,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_0B,
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
                          styles.ViewFQ,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextNe,
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

              <View style={styles.ViewAW}>
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
                          styles.ViewMk,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_99,
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
                          styles.Viewli,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_8V,
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

              <View style={styles.ViewvV}>
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
                          styles.View_6n,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextYv,
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
                          styles.View_2m,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextZz,
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

              <View style={styles.ViewX3}>
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
                          styles.ViewZ2,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextPv,
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
                          styles.ViewiL,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textpp,
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

              <View style={styles.ViewBY}>
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
                          styles.ViewZ9,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextCK,
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
                          styles.Viewag,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextBz,
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

              <View style={styles.ViewzV}>
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
                          styles.View_7o,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextDQ,
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
                          styles.Viewc8,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextL5,
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

              <View style={styles.ViewE8}>
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
                          styles.Viewac,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_9w,
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
                          styles.ViewZ0,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextJe,
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

              <View style={styles.Viewbm}>
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
                          styles.VieweD,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextXo,
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
                          styles.View_0F,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextMe,
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

              <View style={styles.ViewWl}>
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
                          styles.ViewDT,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextTQ,
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
                          styles.Viewr9,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextjZ,
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

              <View style={styles.View_3v}>
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
                          styles.Viewwj,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.fafafa,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_65,
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
                          styles.View_07,
                          {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text_7r,
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

          <View style={styles.View_8R}>
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
                    screen: 'GuidedNavigator',
                    params: { screen: 'LogMoodGuidedScreen_PyPrkSTM' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidnQ,
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
  ViewTC: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  Text_01: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  ViewbP: {
    width: '100%',
  },
  ImageaC: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Image_3W: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableRo: {
    height: 40,
    width: 40,
  },
  ViewEV: {
    height: 40,
    width: 40,
  },
  ImagenS: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageUd: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableFT: {
    width: 40,
    height: 40,
  },
  Viewst: {
    height: 40,
    width: 40,
  },
  Image_9l: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Image_1P: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableaL: {
    width: 40,
    height: 40,
  },
  View_7y: {
    height: 40,
    width: 40,
  },
  Imagecr: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageAS: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchabletK: {
    width: 40,
    height: 40,
  },
  ViewtF: {
    height: 40,
    width: 40,
  },
  Imageba: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imagebv: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableNI: {
    width: 40,
    height: 40,
  },
  ViewLR: {
    height: 40,
    width: 40,
  },
  Viewsn: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  View_15: {
    width: '95%',
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  TextRu: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  ViewGZ: {
    width: '100%',
  },
  ImagewP: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageeW: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableaU: {
    width: 40,
    height: 40,
  },
  Viewya: {
    height: 40,
    width: 40,
  },
  ImageVY: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imagetb: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableWM: {
    width: 40,
    height: 40,
  },
  ViewH8: {
    height: 40,
    width: 40,
  },
  ImageaX: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imagejq: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableDZ: {
    width: 40,
    height: 40,
  },
  ViewnJ: {
    height: 40,
    width: 40,
  },
  Imagepc: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  Imageas: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableXI: {
    width: 40,
    height: 40,
  },
  ViewG7: {
    height: 40,
    width: 40,
  },
  Imagerp: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 5,
  },
  ImageED: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  TouchableRq: {
    width: 40,
    height: 40,
  },
  ViewHo: {
    height: 40,
    width: 40,
  },
  View_12: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  ViewJ0: {
    width: '95%',
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  Textff: {
    textAlign: 'left',
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputUZ: {
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
  ViewiB: {
    paddingBottom: 0,
  },
  Fetchou: {
    minHeight: 40,
  },
  TextSs: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewxh: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextaW: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewcE: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_7l: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextN4: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewBi: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextDh: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_7a: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewly: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextNe: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewv7: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextUw: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewMb: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewsd: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextkR: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewfF: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextsX: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewD1: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewbi: {
    marginRight: 4,
    marginBottom: 4,
  },
  Textkf: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewX6: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextVE: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_4z: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewS1: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_4k: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewVi: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextW2: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewrr: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewRb: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextqA: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_47: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextXU: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewwG: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_4c: {
    marginRight: 4,
    marginBottom: 4,
  },
  Textj9: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewfK: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_3g: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewkD: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_1E: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_5q: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewOL: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextlL: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewmO: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_9S: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextSz: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewgp: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextBN: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewWS: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewke: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextP4: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewqq: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_2b: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_7e: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_11: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextYQ: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewNb: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textid: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewaM: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewSR: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextWT: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewGP: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextxW: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewq4: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewRS: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextYn: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_8l: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextCk: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewRT: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewMx: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextWS: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewKg: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextIK: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewcr: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewJN: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextSK: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewaU: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextWp: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewHY: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewC4: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_0B: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewrN: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextNe: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewFQ: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewFT: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_99: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewMk: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_8V: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewli: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewAW: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextYv: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_6n: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextZz: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_2m: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewvV: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextPv: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewZ2: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Textpp: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewiL: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewX3: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextCK: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewZ9: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextBz: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewag: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewBY: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextDQ: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_7o: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextL5: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewc8: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewzV: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_9w: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewac: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextJe: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewZ0: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewE8: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextXo: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  VieweD: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextMe: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_0F: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewbm: {
    marginRight: 4,
    marginBottom: 4,
  },
  TextTQ: {
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
  TextjZ: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewr9: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewWl: {
    marginRight: 4,
    marginBottom: 4,
  },
  Text_65: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewwj: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  Text_7r: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  View_07: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_3v: {
    marginRight: 4,
    marginBottom: 4,
  },
  ViewtS: {
    width: '100%',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  ViewpO: {
    width: '95%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  ButtonSolidnQ: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  View_8R: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    paddingTop: 20,
  },
  KeyboardAvoidingViewkt: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
    alignItems: 'center',
  },
});

export default withTheme(LogMoodGuidedScreen_PyPrkSTM);
