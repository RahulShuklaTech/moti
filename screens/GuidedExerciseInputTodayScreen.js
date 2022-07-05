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

const GuidedExerciseInputTodayScreen = props => {
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
            style={[styles.Viewdk, { backgroundColor: theme.colors.primary }]}
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
                style={styles.Imagea3}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>

          <View
            style={[styles.ViewnR, { backgroundColor: theme.colors.primary }]}
          >
            <View
              style={[
                styles.ViewHX,
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
          style={styles.KeyboardAvoidingViewQS}
          enabled={true}
          behavior={'padding'}
        >
          <View style={styles.View_7i}>
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
                          styles.Viewdq,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.ViewVo}>
                          <View style={styles.ViewbC}>
                            <Text
                              style={[
                                styles.Text_10,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt1SectionData?.prompt_1}
                            </Text>
                          </View>

                          <View style={styles.Viewzd}>
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
                                styles.TextY6,
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
                                styles.TextInputaq,
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
                          styles.ViewUd,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.View_9F}>
                          <View style={styles.ViewDA}>
                            <Text
                              style={[
                                styles.Textp3,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt2SectionData?.prompt_2}
                            </Text>
                          </View>

                          <View style={styles.ViewFJ}>
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
                                styles.Textcq,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt2SectionData?.info_2}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt2SectionData?.distortion ? null : (
                            <View style={styles.Viewcn}>
                              <View style={styles.ViewK4}>
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
                                      style={styles.Touchablevk}
                                    >
                                      <View
                                        style={[
                                          styles.ViewOY,
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
                                              styles.Text_71,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextgU,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_1q}
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
                                      style={styles.Touchable_2r}
                                    >
                                      <View
                                        style={[
                                          styles.View_5H,
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
                                              styles.TextOz,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_3n,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagev7}
                                          resizeMode={'cover'}
                                          source={Images.Cata}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewrR}>
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
                                      style={styles.TouchablexW}
                                    >
                                      <View
                                        style={[
                                          styles.ViewIX,
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
                                              styles.Text_4f,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextVK,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagelh}
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
                                      style={styles.TouchableSr}
                                    >
                                      <View
                                        style={[
                                          styles.ViewRr,
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
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textf6,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_0m}
                                          resizeMode={'cover'}
                                          source={Images.AllOr}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewxa}>
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
                                      style={styles.TouchableYR}
                                    >
                                      <View
                                        style={[
                                          styles.VieweI,
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
                                              styles.Textcv,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextGn,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagewv}
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
                                      style={styles.Touchablera}
                                    >
                                      <View
                                        style={[
                                          styles.ViewvM,
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
                                              styles.Text_2V,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextUr,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagenU}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewV4}>
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
                                      style={styles.TouchableUB}
                                    >
                                      <View
                                        style={[
                                          styles.ViewA6,
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
                                              styles.Text_8r,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_8b,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagedp}
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
                                      style={styles.TouchablebA}
                                    >
                                      <View
                                        style={[
                                          styles.ViewlX,
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
                                              styles.TextTb,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextiH,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagesM}
                                          resizeMode={'cover'}
                                          source={Images.Negat}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewKa}>
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
                                      style={styles.TouchableCL}
                                    >
                                      <View
                                        style={[
                                          styles.ViewZa,
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
                                              styles.Text_9B,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_4o,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagevZ}
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
                                      style={styles.TouchableOo}
                                    >
                                      <View
                                        style={[
                                          styles.ViewTN,
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
                                              styles.TextyJ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textwo,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageCl}
                                          resizeMode={'cover'}
                                          source={Images.Frame191}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewDE}>
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
                                      style={styles.Touchablehr}
                                    >
                                      <View
                                        style={[
                                          styles.ViewsK,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.Viewdw}>
                                          <Text
                                            style={[
                                              styles.Text_3m,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextLO,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageC7}
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
                                      style={styles.TouchableIq}
                                    >
                                      <View
                                        style={[
                                          styles.Viewi0,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewvN}>
                                          <Text
                                            style={[
                                              styles.TexttB,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextOc,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagedW}
                                          resizeMode={'cover'}
                                          source={Images.Frame192}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.View_0V}>
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
                                      style={styles.TouchablefG}
                                    >
                                      <View
                                        style={[
                                          styles.ViewGH,
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
                                              styles.Textb7,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Fortune telling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_82,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I will fail the interview"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagenb}
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
                                      style={styles.Touchable_9I}
                                    >
                                      <View
                                        style={[
                                          styles.ViewRP,
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
                                              styles.TextwE,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Fortune telling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_5M,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I will fail the interview"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagej0}
                                          resizeMode={'cover'}
                                          source={Images.Frame193}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewv3}>
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
                                      style={styles.TouchableP8}
                                    >
                                      <View
                                        style={[
                                          styles.ViewVP,
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
                                              styles.Textte,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Mind reading'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_7P,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They think I am stupid"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageu4}
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
                                      style={styles.TouchableJx}
                                    >
                                      <View
                                        style={[
                                          styles.ViewVa,
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
                                              styles.TextCV,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Mind reading'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextIg,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They think I am stupid"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageLt}
                                          resizeMode={'cover'}
                                          source={Images.Frame194}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewsh}>
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
                                      style={styles.TouchableLX}
                                    >
                                      <View
                                        style={[
                                          styles.View_2Q,
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
                                              styles.TextC0,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Self blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextN1,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all my fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagepU}
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
                                      style={styles.TouchablewF}
                                    >
                                      <View
                                        style={[
                                          styles.ViewBe,
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
                                              styles.TextAE,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Self blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextLL,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all my fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageV8}
                                          resizeMode={'cover'}
                                          source={Images.Me}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewxB}>
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
                                      style={styles.Touchablei5}
                                    >
                                      <View
                                        style={[
                                          styles.Viewu4,
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
                                              styles.TextYA,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Other blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextNP,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all their fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageBB}
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
                                      style={styles.TouchableWA}
                                    >
                                      <View
                                        style={[
                                          styles.ViewGM,
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
                                              styles.TextE3,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Other blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextQM,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all their fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageop}
                                          resizeMode={'cover'}
                                          source={Images.Their}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewac}>
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
                                      style={styles.Touchableu5}
                                    >
                                      <View
                                        style={[
                                          styles.ViewHs,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.View_75}>
                                          <Text
                                            style={[
                                              styles.Text_6G,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Filtering positives'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextxE,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"There is nothing good about today"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagezr}
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
                                      style={styles.TouchableIf}
                                    >
                                      <View
                                        style={[
                                          styles.ViewRi,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.Viewjx}>
                                          <Text
                                            style={[
                                              styles.Textiy,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Filtering positives'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextBa,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"There is nothing good about today"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageyv}
                                          resizeMode={'cover'}
                                          source={Images.Frame196}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewne}>
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
                                      style={styles.Touchablezu}
                                    >
                                      <View
                                        style={[
                                          styles.Viewc3,
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
                                              styles.TextA4,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Overgeneralising'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextUL,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"Everything I do fails"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagefk}
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
                                      style={styles.Touchablewk}
                                    >
                                      <View
                                        style={[
                                          styles.ViewWE,
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
                                              styles.Texth6,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Overgeneralizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextIq,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"Everything I do fails"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagexx}
                                          resizeMode={'cover'}
                                          source={Images.Frame197}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.View_9l}>
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
                                      style={styles.TouchablebY}
                                    >
                                      <View
                                        style={[
                                          styles.ViewS1,
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
                                              styles.Textif,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Labeling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextLU,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am a lazy person"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageTg}
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
                                      style={styles.TouchableMS}
                                    >
                                      <View
                                        style={[
                                          styles.Viewsi,
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
                                              styles.Textzk,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Labeling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textn8,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am a lazy person"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_1N}
                                          resizeMode={'cover'}
                                          source={Images.Frame198}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewEC}>
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
                                      style={styles.TouchableAK}
                                    >
                                      <View
                                        style={[
                                          styles.ViewZF,
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
                                              styles.TextbS,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Should / must'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textib,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I should have done X"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagegz}
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
                                      style={styles.TouchableHs}
                                    >
                                      <View
                                        style={[
                                          styles.View_25,
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
                                              styles.Textij,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Should / must'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextPm,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I should have done X"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageFv}
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
                                      styles.TextInputy2,
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
                          styles.ViewDr,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.Viewe7}>
                          <View style={styles.ViewZa}>
                            <>
                              {!prompt3SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextLC,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt3SectionData?.prompt_3}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewqF}>
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
                                styles.TextZh,
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
                                styles.TextInputka,
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
          </View>

          <View style={styles.ViewGr}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await XanoApi.postToEntries2022POST(Constants, {
                    dist_id: distortion_id,
                    exercise_number: props.route?.params?.id ?? 7,
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
                    screen: 'TodayNavigator',
                    params: { screen: 'ExerciseFinishScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidTr,
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
  Imagea3: {
    width: 30,
    height: 30,
  },
  Viewdk: {
    minHeight: 60,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 20,
  },
  ViewHX: {
    height: 30,
  },
  ViewnR: {
    minHeight: 30,
  },
  Text_10: {
    textAlign: 'left',
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  ViewbC: {
    width: '85%',
  },
  Viewzd: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewVo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextY6: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputaq: {
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
  Viewdq: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
  },
  FetchvY: {
    minHeight: 40,
  },
  Textp3: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewDA: {
    width: '85%',
    maxWidth: '85%',
  },
  ViewFJ: {
    alignItems: 'flex-end',
    width: '10%',
  },
  View_9F: {
    flexDirection: 'row',
    width: '90%',
    maxWidth: '90%',
    justifyContent: 'space-between',
  },
  Textcq: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  Text_71: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextgU: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_1q: {
    width: 50,
    height: 50,
  },
  ViewOY: {
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
  Touchablevk: {
    width: '100%',
    minHeight: 80,
  },
  TextOz: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_3n: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagev7: {
    width: 50,
    height: 50,
  },
  View_5H: {
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
  Touchable_2r: {
    width: '100%',
    minHeight: 80,
  },
  ViewK4: {
    width: '100%',
    minHeight: 80,
  },
  Text_4f: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextVK: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagelh: {
    width: 50,
    height: 50,
  },
  ViewIX: {
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
  TouchablexW: {
    width: '100%',
    minHeight: 80,
  },
  Texttw: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textf6: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_0m: {
    width: 50,
    height: 50,
  },
  ViewRr: {
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
  TouchableSr: {
    width: '100%',
    minHeight: 80,
  },
  ViewrR: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textcv: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextGn: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagewv: {
    width: 50,
    height: 50,
  },
  VieweI: {
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
  TouchableYR: {
    width: '100%',
    minHeight: 80,
  },
  Text_2V: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextUr: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagenU: {
    width: 50,
    height: 50,
  },
  ViewvM: {
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
  Touchablera: {
    width: '100%',
    minHeight: 80,
  },
  Viewxa: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_8r: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_8b: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagedp: {
    width: 50,
    height: 50,
  },
  ViewA6: {
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
  TouchableUB: {
    width: '100%',
    minHeight: 80,
  },
  TextTb: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextiH: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagesM: {
    width: 50,
    height: 50,
  },
  ViewlX: {
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
  TouchablebA: {
    width: '100%',
    minHeight: 80,
  },
  ViewV4: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_9B: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_4o: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagevZ: {
    width: 50,
    height: 50,
  },
  ViewZa: {
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
  TouchableCL: {
    width: '100%',
    minHeight: 80,
  },
  TextyJ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textwo: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageCl: {
    width: 50,
    height: 50,
  },
  ViewTN: {
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
  TouchableOo: {
    width: '100%',
    minHeight: 80,
  },
  ViewKa: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_3m: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextLO: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewdw: {
    maxWidth: '80%',
  },
  ImageC7: {
    width: 50,
    height: 50,
  },
  ViewsK: {
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
  Touchablehr: {
    width: '100%',
    minHeight: 80,
  },
  TexttB: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextOc: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewvN: {
    maxWidth: '80%',
  },
  ImagedW: {
    width: 50,
    height: 50,
  },
  Viewi0: {
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
  TouchableIq: {
    width: '100%',
    minHeight: 80,
  },
  ViewDE: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textb7: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_82: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagenb: {
    width: 50,
    height: 50,
  },
  ViewGH: {
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
  TouchablefG: {
    width: '100%',
    minHeight: 80,
  },
  TextwE: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_5M: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagej0: {
    width: 50,
    height: 50,
  },
  ViewRP: {
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
  Touchable_9I: {
    width: '100%',
    minHeight: 80,
  },
  View_0V: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textte: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_7P: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageu4: {
    width: 50,
    height: 50,
  },
  ViewVP: {
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
  TouchableP8: {
    width: '100%',
    minHeight: 80,
  },
  TextCV: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextIg: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageLt: {
    width: 50,
    height: 50,
  },
  ViewVa: {
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
  TouchableJx: {
    width: '100%',
    minHeight: 80,
  },
  Viewv3: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextC0: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextN1: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagepU: {
    width: 50,
    height: 50,
  },
  View_2Q: {
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
  TouchableLX: {
    width: '100%',
    minHeight: 80,
  },
  TextAE: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextLL: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageV8: {
    width: 50,
    height: 50,
  },
  ViewBe: {
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
  TouchablewF: {
    width: '100%',
    minHeight: 80,
  },
  Viewsh: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextYA: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextNP: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBB: {
    width: 50,
    height: 50,
  },
  Viewu4: {
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
  Touchablei5: {
    width: '100%',
    minHeight: 80,
  },
  TextE3: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextQM: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageop: {
    width: 50,
    height: 50,
  },
  ViewGM: {
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
  TouchableWA: {
    width: '100%',
    minHeight: 80,
  },
  ViewxB: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_6G: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextxE: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_75: {
    maxWidth: '80%',
  },
  Imagezr: {
    width: 50,
    height: 50,
  },
  ViewHs: {
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
  Touchableu5: {
    width: '100%',
    minHeight: 80,
  },
  Textiy: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextBa: {
    fontFamily: 'Montserrat_400Regular',
  },
  Viewjx: {
    maxWidth: '80%',
  },
  Imageyv: {
    width: 50,
    height: 50,
  },
  ViewRi: {
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
  TouchableIf: {
    width: '100%',
    minHeight: 80,
  },
  Viewac: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextA4: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextUL: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagefk: {
    width: 50,
    height: 50,
  },
  Viewc3: {
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
  Touchablezu: {
    width: '100%',
    minHeight: 80,
  },
  Texth6: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextIq: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagexx: {
    width: 50,
    height: 50,
  },
  ViewWE: {
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
  Touchablewk: {
    width: '100%',
    minHeight: 80,
  },
  Viewne: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textif: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextLU: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageTg: {
    width: 50,
    height: 50,
  },
  ViewS1: {
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
  TouchablebY: {
    width: '100%',
    minHeight: 80,
  },
  Textzk: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textn8: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_1N: {
    width: 50,
    height: 50,
  },
  Viewsi: {
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
  TouchableMS: {
    width: '100%',
    minHeight: 80,
  },
  View_9l: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextbS: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textib: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagegz: {
    width: 50,
    height: 50,
  },
  ViewZF: {
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
  TouchableAK: {
    width: '100%',
    minHeight: 80,
  },
  Textij: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextPm: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageFv: {
    width: 50,
    height: 50,
  },
  View_25: {
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
  TouchableHs: {
    width: '100%',
    minHeight: 80,
  },
  ViewEC: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Viewcn: {
    minHeight: 100,
    alignItems: 'center',
  },
  TextInputy2: {
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
  ViewUd: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: '95%',
  },
  FetchG5: {
    minHeight: 40,
  },
  TextLC: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewZa: {
    width: '85%',
  },
  ViewqF: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewe7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextZh: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputka: {
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
  ViewDr: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchQr: {
    minHeight: 40,
  },
  TextOQ: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewaa: {
    width: '85%',
  },
  ViewEp: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewSd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextJP: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputKV: {
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
  ViewWR: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  Fetch_0D: {
    minHeight: 40,
  },
  Text_0l: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewxS: {
    width: '85%',
  },
  Viewvn: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewJx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextFx: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputMt: {
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
  ViewLM: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
    marginTop: 20,
  },
  Fetchq6: {
    minHeight: 40,
  },
  TextJv: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewRG: {
    width: '85%',
  },
  ViewMW: {
    alignItems: 'flex-end',
    width: '10%',
  },
  Viewhm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextAX: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputKe: {
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
  Viewwo: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchMI: {
    minHeight: 40,
  },
  TextaF: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewAL: {
    width: '85%',
  },
  ViewJL: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewGU: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextFx: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputrA: {
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
  Viewbv: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
    width: '95%',
    marginBottom: 0,
  },
  FetchrK: {
    minHeight: 40,
  },
  View_7i: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonSolidTr: {
    borderRadius: 10,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  ViewGr: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  KeyboardAvoidingViewQS: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
});

export default withTheme(GuidedExerciseInputTodayScreen);
