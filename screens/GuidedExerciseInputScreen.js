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

const GuidedExerciseInputScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [Minimise_positive, setMinimise_positive] = React.useState(false);
  const [allornothing, setAllornothing] = React.useState(false);
  const [catastrophizing, setCatastrophizing] = React.useState(false);
  const [distortion_id, setDistortion_id] = React.useState(15);
  const [emotional_reasoning, setEmotional_reasoning] = React.useState(false);
  const [filtering_positives, setFiltering_positives] = React.useState(false);
  const [fortune_telling, setFortune_telling] = React.useState(false);
  const [input1Value, setInput1Value] = React.useState('');
  const [input2Value, setInput2Value] = React.useState('');
  const [input3Value, setInput3Value] = React.useState('');
  const [input4Value, setInput4Value] = React.useState('');
  const [input5Value, setInput5Value] = React.useState('');
  const [input6Value, setInput6Value] = React.useState('');
  const [input7Value, setInput7Value] = React.useState('');
  const [jump_conclusion, setJump_conclusion] = React.useState(false);
  const [labeling, setLabeling] = React.useState(false);
  const [magnify_negative, setMagnify_negative] = React.useState(false);
  const [mind_reading, setMind_reading] = React.useState(false);
  const [other_blaming, setOther_blaming] = React.useState(false);
  const [over_generalizing, setOver_generalizing] = React.useState(false);
  const [self_blaming, setSelf_blaming] = React.useState(false);
  const [should_must, setShould_must] = React.useState(false);
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
        <View>
          <View
            style={[styles.Viewg8, { backgroundColor: theme.colors.primary }]}
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
                style={styles.ImageM3}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>

          <View
            style={[styles.View_6J, { backgroundColor: theme.colors.primary }]}
          >
            <View
              style={[
                styles.Viewua,
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
          style={styles.KeyboardAvoidingViewNf}
          enabled={true}
          behavior={'padding'}
        >
          <View style={styles.View_44}>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 64}>
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
                          styles.Viewft,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.Viewgb}>
                          <View style={styles.ViewpQ}>
                            <Text
                              style={[
                                styles.TexthA,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt1SectionData?.prompt_1}
                            </Text>
                          </View>

                          <View style={styles.View_9A}>
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
                                  icon={'MaterialIcons/lightbulb'}
                                  size={26}
                                  color={theme.colors.primary}
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
                                  color={theme.colors.primary}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show1 ? null : (
                            <Text
                              style={[
                                styles.Textnn,
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
                                styles.TextInputZn,
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
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 64}>
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
                          styles.ViewfV,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.ViewhC}>
                          <View style={styles.Viewlu}>
                            <Text
                              style={[
                                styles.TextSA,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt2SectionData?.prompt_2}
                            </Text>
                          </View>

                          <View style={styles.Viewno}>
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
                                  icon={'MaterialIcons/lightbulb'}
                                  size={26}
                                  color={theme.colors.primary}
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
                                  color={theme.colors.primary}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show2 ? null : (
                            <Text
                              style={[
                                styles.TextKT,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt2SectionData?.info_2}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt2SectionData?.distortion ? null : (
                            <View style={styles.ViewBX}>
                              <View style={styles.ViewwQ}>
                                <>
                                  {catastrophizing ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setCatastrophizing(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableJT}
                                    >
                                      <View
                                        style={[
                                          styles.View_5s,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Textbl,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextIG,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageDo}
                                          resizeMode={'cover'}
                                          source={Images.Cata}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!catastrophizing ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setCatastrophizing(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableDJ}
                                    >
                                      <View
                                        style={[
                                          styles.Viewso,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextAP,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextnS,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageH6}
                                          resizeMode={'cover'}
                                          source={Images.Cata}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.View_9B}>
                                <>
                                  {allornothing ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setAllornothing(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableP7}
                                    >
                                      <View
                                        style={[
                                          styles.View_8f,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextlV,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextXi,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagemQ}
                                          resizeMode={'cover'}
                                          source={Images.AllOr}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!allornothing ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setAllornothing(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableTX}
                                    >
                                      <View
                                        style={[
                                          styles.ViewN9,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextYB,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextLQ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageKA}
                                          resizeMode={'cover'}
                                          source={Images.AllOr}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewM7}>
                                <>
                                  {emotional_reasoning ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setEmotional_reasoning(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableLC}
                                    >
                                      <View
                                        style={[
                                          styles.ViewO4,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Text_13,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextlB,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_5J}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!emotional_reasoning ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setEmotional_reasoning(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchableyb}
                                    >
                                      <View
                                        style={[
                                          styles.ViewdC,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextU1,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextBQ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagei7}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewtl}>
                                <>
                                  {magnify_negative ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setMagnify_negative(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchable_18}
                                    >
                                      <View
                                        style={[
                                          styles.Views3,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Textwl,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextD3,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_65}
                                          resizeMode={'cover'}
                                          source={Images.Negat}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!magnify_negative ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setMagnify_negative(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableHj}
                                    >
                                      <View
                                        style={[
                                          styles.ViewBu,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextaG,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_8T,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_13}
                                          resizeMode={'cover'}
                                          source={Images.Negat}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.View_7H}>
                                <>
                                  {Minimise_positive ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setMinimise_positive(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchablebH}
                                    >
                                      <View
                                        style={[
                                          styles.ViewRQ,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextZe,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textav,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageBY}
                                          resizeMode={'cover'}
                                          source={Images.Frame191}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!Minimise_positive ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setMinimise_positive(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableMb}
                                    >
                                      <View
                                        style={[
                                          styles.Viewwd,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextFl,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextMx,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageoj}
                                          resizeMode={'cover'}
                                          source={Images.Frame191}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.View_0S}>
                                <>
                                  {jump_conclusion ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setJump_conclusion(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchable_3d}
                                    >
                                      <View
                                        style={[
                                          styles.ViewEF,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewTA}>
                                          <Text
                                            style={[
                                              styles.TextfW,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_8x,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagenw}
                                          resizeMode={'cover'}
                                          source={Images.Frame192}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!jump_conclusion ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setJump_conclusion(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableZd}
                                    >
                                      <View
                                        style={[
                                          styles.ViewPk,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewGJ}>
                                          <Text
                                            style={[
                                              styles.Textjr,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextXW,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageTG}
                                          resizeMode={'cover'}
                                          source={Images.Frame192}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewbZ}>
                                <>
                                  {fortune_telling ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setFortune_telling(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableLp}
                                    >
                                      <View
                                        style={[
                                          styles.Viewbe,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextbI,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Fortune telling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextLx,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I will fail the interview"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageBu}
                                          resizeMode={'cover'}
                                          source={Images.Frame193}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!fortune_telling ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setFortune_telling(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableH6}
                                    >
                                      <View
                                        style={[
                                          styles.Viewqi,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Text_1g,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Fortune telling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextHA,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I will fail the interview"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageAX}
                                          resizeMode={'cover'}
                                          source={Images.Frame193}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewQK}>
                                <>
                                  {mind_reading ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setMind_reading(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableBq}
                                    >
                                      <View
                                        style={[
                                          styles.Viewaa,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Text_1A,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Mind reading'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextxV,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They think I am stupid"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagejV}
                                          resizeMode={'cover'}
                                          source={Images.Frame194}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!mind_reading ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setMind_reading(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchablemL}
                                    >
                                      <View
                                        style={[
                                          styles.Viewta,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextDa,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Mind reading'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextHR,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They think I am stupid"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagegO}
                                          resizeMode={'cover'}
                                          source={Images.Frame194}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewul}>
                                <>
                                  {self_blaming ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setSelf_blaming(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchable_2n}
                                    >
                                      <View
                                        style={[
                                          styles.ViewJd,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Textab,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Self blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextbX,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all my fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageMM}
                                          resizeMode={'cover'}
                                          source={Images.Me}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!self_blaming ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setSelf_blaming(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableBz}
                                    >
                                      <View
                                        style={[
                                          styles.ViewtR,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Texttw,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Self blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_7N,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all my fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageOa}
                                          resizeMode={'cover'}
                                          source={Images.Me}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewjN}>
                                <>
                                  {other_blaming ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setOther_blaming(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableCM}
                                    >
                                      <View
                                        style={[
                                          styles.ViewPI,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Textos,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Other blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextC1,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all their fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagemy}
                                          resizeMode={'cover'}
                                          source={Images.Their}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!other_blaming ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setOther_blaming(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchablene}
                                    >
                                      <View
                                        style={[
                                          styles.Viewhg,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextCc,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Other blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextNG,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all their fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageLt}
                                          resizeMode={'cover'}
                                          source={Images.Their}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewps}>
                                <>
                                  {filtering_positives ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setFiltering_positives(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableQP}
                                    >
                                      <View
                                        style={[
                                          styles.ViewmX,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.Viewhe}>
                                          <Text
                                            style={[
                                              styles.TextGV,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Filtering positives'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textn2,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"There is nothing good about today"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagePX}
                                          resizeMode={'cover'}
                                          source={Images.Frame196}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!filtering_positives ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setFiltering_positives(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchablejW}
                                    >
                                      <View
                                        style={[
                                          styles.ViewuR,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewnP}>
                                          <Text
                                            style={[
                                              styles.Textos,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Filtering positives'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextcQ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"There is nothing good about today"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageJc}
                                          resizeMode={'cover'}
                                          source={Images.Frame196}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewXM}>
                                <>
                                  {over_generalizing ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setOver_generalizing(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchablezh}
                                    >
                                      <View
                                        style={[
                                          styles.ViewLM,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Textpv,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Overgeneralising'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textju,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"Everything I do fails"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageNF}
                                          resizeMode={'cover'}
                                          source={Images.Frame197}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!over_generalizing ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setOver_generalizing(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableaD}
                                    >
                                      <View
                                        style={[
                                          styles.ViewNR,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextVG,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Overgeneralising'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textxt,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"Everything I do fails"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageoo}
                                          resizeMode={'cover'}
                                          source={Images.Frame197}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewsF}>
                                <>
                                  {labeling ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setLabeling(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchablesn}
                                    >
                                      <View
                                        style={[
                                          styles.ViewGL,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextNJ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Labeling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textz7,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am a lazy person"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagehk}
                                          resizeMode={'cover'}
                                          source={Images.Frame198}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!labeling ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setLabeling(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableYp}
                                    >
                                      <View
                                        style={[
                                          styles.ViewME,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.TextyG,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Labeling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_4q,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am a lazy person"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_8O}
                                          resizeMode={'cover'}
                                          source={Images.Frame198}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewmN}>
                                <>
                                  {should_must ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setShould_must(true);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.Touchable_3G}
                                    >
                                      <View
                                        style={[
                                          styles.View_5q,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Textaw,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Should / must'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextGl,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I should have done X"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageCP}
                                          resizeMode={'cover'}
                                          source={Images.Frame199}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                                <>
                                  {!should_must ? null : (
                                    <Touchable
                                      onPress={() => {
                                        try {
                                          setShould_must(false);
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      style={styles.TouchableFJ}
                                    >
                                      <View
                                        style={[
                                          styles.ViewOW,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View>
                                          <Text
                                            style={[
                                              styles.Textuf,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Should / must'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextC7,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I should have done X"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageVo}
                                          resizeMode={'cover'}
                                          source={Images.Frame199}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>
                            </View>
                          )}
                        </>
                        <>
                          {prompt2SectionData?.distortion ? null : (
                            <View>
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
                                      styles.TextInputoB,
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
                      </View>
                    )}
                  </>
                );
              }}
            </XanoApi.FetchFetchExerciseGET>
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 64}>
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
                          styles.Viewa5,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.Viewpm}>
                          <View style={styles.Viewpp}>
                            <>
                              {!prompt3SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextvR,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt3SectionData?.prompt_3}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewlO}>
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
                                  icon={'MaterialIcons/lightbulb'}
                                  size={26}
                                  color={theme.colors.primary}
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
                                  color={theme.colors.primary}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show3 ? null : (
                            <Text
                              style={[
                                styles.Text_3a,
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
                                styles.TextInputfa,
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
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 64}>
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
                          styles.ViewAu,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewOd}>
                          <View style={styles.ViewCX}>
                            <>
                              {!prompt4SectionData?.Prompt_4 ? null : (
                                <Text
                                  style={[
                                    styles.TextES,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt4SectionData?.Prompt_4}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.Viewsr}>
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
                                  icon={'MaterialIcons/lightbulb'}
                                  size={26}
                                  color={theme.colors.primary}
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
                                  color={theme.colors.primary}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show4 ? null : (
                            <Text
                              style={[
                                styles.TextTm,
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
                                styles.TextInputv4,
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
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 64}>
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
                          styles.Viewui,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.Viewo2}>
                          <View style={styles.Viewxx}>
                            <>
                              {!prompt5SectionData?.Prompt_5 ? null : (
                                <Text
                                  style={[
                                    styles.TextbW,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt5SectionData?.Prompt_5}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewSj}>
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
                                  icon={'MaterialIcons/lightbulb'}
                                  size={26}
                                  color={theme.colors.primary}
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
                                  color={theme.colors.primary}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show5 ? null : (
                            <Text
                              style={[
                                styles.TextNb,
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
                                styles.TextInputxo,
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
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 64}>
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
                          styles.View_5A,
                          {
                            borderRadius: 5,
                            backgroundColor: theme.colors.strongInverse,
                          },
                        ]}
                      >
                        <View style={styles.ViewX0}>
                          <View style={styles.Viewby}>
                            <>
                              {!prompt6SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextHx,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt6SectionData?.Prompt_6}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.Viewq8}>
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
                                  icon={'MaterialIcons/lightbulb'}
                                  size={26}
                                  color={theme.colors.primary}
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
                                  color={theme.colors.primary}
                                />
                              )}
                            </>
                          </View>
                        </View>
                        <>
                          {!show6 ? null : (
                            <Text
                              style={[
                                styles.TextMf,
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
                                styles.TextInputxB,
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
            <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 64}>
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
                          styles.ViewaF,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.Viewna}>
                          <View style={styles.ViewOC}>
                            <Text
                              style={[
                                styles.TextYg,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt7SectionData?.Prompt_7}
                            </Text>
                          </View>

                          <View style={styles.ViewoT}>
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
                                  icon={'MaterialIcons/lightbulb'}
                                  size={26}
                                  color={theme.colors.primary}
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
                                styles.Textny,
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
                                styles.TextInputwh,
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

          <View style={styles.View_9v}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await XanoApi.postToEntries2022POST(Constants, {
                    dist_id: distortion_id,
                    exercise_number: props.route?.params?.id ?? 64,
                    input_1: input1Value,
                    input_2: input2Value,
                    input_3: input3Value,
                    input_4: input4Value,
                    input_5: input5Value,
                    input_6: input6Value,
                    input_7: input7Value,
                    mood: 0,
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
                styles.ButtonSoliddN,
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
  ImageM3: {
    width: 30,
    height: 30,
  },
  Viewg8: {
    minHeight: 60,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 20,
  },
  Viewua: {
    height: 30,
  },
  View_6J: {
    minHeight: 30,
  },
  TexthA: {
    textAlign: 'left',
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  ViewpQ: {
    width: '85%',
  },
  View_9A: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewgb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  Textnn: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputZn: {
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
  Viewft: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
  },
  Fetchi8: {
    minHeight: 40,
  },
  TextSA: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewlu: {
    width: '85%',
  },
  Viewno: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewhC: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
  },
  TextKT: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  Textbl: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextIG: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageDo: {
    width: 50,
    height: 50,
  },
  View_5s: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchableJT: {
    width: '100%',
    minHeight: 80,
  },
  TextAP: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextnS: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageH6: {
    width: 50,
    height: 50,
  },
  Viewso: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableDJ: {
    width: '100%',
    minHeight: 80,
  },
  ViewwQ: {
    width: '100%',
    minHeight: 80,
  },
  TextlV: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextXi: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagemQ: {
    width: 50,
    height: 50,
  },
  View_8f: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchableP7: {
    width: '100%',
    minHeight: 80,
  },
  TextYB: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextLQ: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageKA: {
    width: 50,
    height: 50,
  },
  ViewN9: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableTX: {
    width: '100%',
    minHeight: 80,
  },
  View_9B: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_13: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextlB: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_5J: {
    width: 50,
    height: 50,
  },
  ViewO4: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchableLC: {
    width: '100%',
    minHeight: 80,
  },
  TextU1: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextBQ: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagei7: {
    width: 50,
    height: 50,
  },
  ViewdC: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  Touchableyb: {
    width: '100%',
    minHeight: 80,
  },
  ViewM7: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textwl: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextD3: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_65: {
    width: 50,
    height: 50,
  },
  Views3: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  Touchable_18: {
    width: '100%',
    minHeight: 80,
  },
  TextaG: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_8T: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_13: {
    width: 50,
    height: 50,
  },
  ViewBu: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableHj: {
    width: '100%',
    minHeight: 80,
  },
  Viewtl: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextZe: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textav: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBY: {
    width: 50,
    height: 50,
  },
  ViewRQ: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchablebH: {
    width: '100%',
    minHeight: 80,
  },
  TextFl: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextMx: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageoj: {
    width: 50,
    height: 50,
  },
  Viewwd: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableMb: {
    width: '100%',
    minHeight: 80,
  },
  View_7H: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextfW: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_8x: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewTA: {
    maxWidth: '80%',
  },
  Imagenw: {
    width: 50,
    height: 50,
  },
  ViewEF: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  Touchable_3d: {
    width: '100%',
    minHeight: 80,
  },
  Textjr: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextXW: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewGJ: {
    maxWidth: '80%',
  },
  ImageTG: {
    width: 50,
    height: 50,
  },
  ViewPk: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableZd: {
    width: '100%',
    minHeight: 80,
  },
  View_0S: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextbI: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextLx: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBu: {
    width: 50,
    height: 50,
  },
  Viewbe: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchableLp: {
    width: '100%',
    minHeight: 80,
  },
  Text_1g: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextHA: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageAX: {
    width: 50,
    height: 50,
  },
  Viewqi: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableH6: {
    width: '100%',
    minHeight: 80,
  },
  ViewbZ: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_1A: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextxV: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagejV: {
    width: 50,
    height: 50,
  },
  Viewaa: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchableBq: {
    width: '100%',
    minHeight: 80,
  },
  TextDa: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextHR: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagegO: {
    width: 50,
    height: 50,
  },
  Viewta: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchablemL: {
    width: '100%',
    minHeight: 80,
  },
  ViewQK: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textab: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextbX: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageMM: {
    width: 50,
    height: 50,
  },
  ViewJd: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  Touchable_2n: {
    width: '100%',
    minHeight: 80,
  },
  Texttw: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_7N: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageOa: {
    width: 50,
    height: 50,
  },
  ViewtR: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableBz: {
    width: '100%',
    minHeight: 80,
  },
  Viewul: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textos: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextC1: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagemy: {
    width: 50,
    height: 50,
  },
  ViewPI: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchableCM: {
    width: '100%',
    minHeight: 80,
  },
  TextCc: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextNG: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageLt: {
    width: 50,
    height: 50,
  },
  Viewhg: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  Touchablene: {
    width: '100%',
    minHeight: 80,
  },
  ViewjN: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextGV: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textn2: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewhe: {
    maxWidth: '80%',
  },
  ImagePX: {
    width: 50,
    height: 50,
  },
  ViewmX: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  TouchableQP: {
    width: '100%',
    minHeight: 80,
  },
  Textos: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextcQ: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewnP: {
    maxWidth: '80%',
  },
  ImageJc: {
    width: 50,
    height: 50,
  },
  ViewuR: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchablejW: {
    width: '100%',
    minHeight: 80,
  },
  Viewps: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textpv: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textju: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageNF: {
    width: 50,
    height: 50,
  },
  ViewLM: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  Touchablezh: {
    width: '100%',
    minHeight: 80,
  },
  TextVG: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textxt: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageoo: {
    width: 50,
    height: 50,
  },
  ViewNR: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableaD: {
    width: '100%',
    minHeight: 80,
  },
  ViewXM: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextNJ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textz7: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagehk: {
    width: 50,
    height: 50,
  },
  ViewGL: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  Touchablesn: {
    width: '100%',
    minHeight: 80,
  },
  TextyG: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_4q: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_8O: {
    width: 50,
    height: 50,
  },
  ViewME: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableYp: {
    width: '100%',
    minHeight: 80,
  },
  ViewsF: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textaw: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextGl: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageCP: {
    width: 50,
    height: 50,
  },
  View_5q: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  Touchable_3G: {
    width: '100%',
    minHeight: 80,
  },
  Textuf: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextC7: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageVo: {
    width: 50,
    height: 50,
  },
  ViewOW: {
    width: '100%',
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  TouchableFJ: {
    width: '100%',
    minHeight: 80,
  },
  ViewmN: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  ViewBX: {
    minHeight: 100,
    alignItems: 'center',
  },
  TextInputoB: {
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
  ViewfV: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: '95%',
  },
  FetchbW: {
    minHeight: 40,
  },
  TextvR: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewpp: {
    width: '85%',
  },
  ViewlO: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewpm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  Text_3a: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputfa: {
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
  Viewa5: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  Fetchpl: {
    minHeight: 40,
  },
  TextES: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewCX: {
    width: '85%',
  },
  Viewsr: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewOd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextTm: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputv4: {
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
  ViewAu: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  Fetchxb: {
    minHeight: 40,
  },
  TextbW: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewxx: {
    width: '85%',
  },
  ViewSj: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewo2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextNb: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputxo: {
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
  Viewui: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
    marginTop: 20,
  },
  FetchA0: {
    minHeight: 40,
  },
  TextHx: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewby: {
    width: '85%',
  },
  Viewq8: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewX0: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextMf: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputxB: {
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
  View_5A: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchtZ: {
    minHeight: 40,
  },
  TextYg: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewOC: {
    width: '85%',
  },
  ViewoT: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewna: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  Textny: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputwh: {
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
  ViewaF: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
    width: '95%',
    marginBottom: 0,
  },
  FetchrM: {
    minHeight: 40,
  },
  View_44: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonSoliddN: {
    borderRadius: 10,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  View_9v: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  KeyboardAvoidingViewNf: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
});

export default withTheme(GuidedExerciseInputScreen);
