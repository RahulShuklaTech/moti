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

const RescueExerciseInputScreen = props => {
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
            style={[styles.ViewL8, { backgroundColor: theme.colors.primary }]}
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
                style={styles.Imagev8}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>

          <View
            style={[styles.Viewbc, { backgroundColor: theme.colors.primary }]}
          >
            <View
              style={[
                styles.ViewJm,
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
          style={styles.KeyboardAvoidingViewxm}
          enabled={true}
          behavior={'padding'}
        >
          <View style={styles.Viewlf}>
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
                          styles.ViewLr,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.Viewoy}>
                          <View style={styles.View_6v}>
                            <Text
                              style={[
                                styles.TextUe,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt1SectionData?.prompt_1}
                            </Text>
                          </View>

                          <View style={styles.View_6E}>
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
                                styles.TextFN,
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
                                styles.TextInput_5n,
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
                          styles.ViewX6,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewAa}>
                          <View style={styles.Viewlo}>
                            <Text
                              style={[
                                styles.Textca,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt2SectionData?.prompt_2}
                            </Text>
                          </View>

                          <View style={styles.ViewYB}>
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
                                styles.TextH3,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt2SectionData?.info_2}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt2SectionData?.distortion ? null : (
                            <View style={styles.ViewgT}>
                              <View style={styles.ViewC4}>
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
                                      style={styles.Touchable_3b}
                                    >
                                      <View
                                        style={[
                                          styles.Viewi2,
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
                                              styles.Text_3v,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textm9,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageoa}
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
                                      style={styles.Touchable_29}
                                    >
                                      <View
                                        style={[
                                          styles.ViewaB,
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
                                              styles.TextsB,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_4m,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagesr}
                                          resizeMode={'cover'}
                                          source={Images.Cata}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewxL}>
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
                                      style={styles.Touchablego}
                                    >
                                      <View
                                        style={[
                                          styles.ViewPi,
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
                                              styles.Text_7M,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_7X,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageH0}
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
                                      style={styles.TouchableNd}
                                    >
                                      <View
                                        style={[
                                          styles.ViewRK,
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
                                              styles.Text_7K,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextmK,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagewN}
                                          resizeMode={'cover'}
                                          source={Images.AllOr}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewf7}>
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
                                      style={styles.TouchableCI}
                                    >
                                      <View
                                        style={[
                                          styles.ViewPG,
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
                                              styles.TextWw,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textjy,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_7b}
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
                                      style={styles.TouchablezD}
                                    >
                                      <View
                                        style={[
                                          styles.View_33,
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
                                              styles.TextSK,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_8e,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageUO}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.View_1p}>
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
                                      style={styles.Touchableuo}
                                    >
                                      <View
                                        style={[
                                          styles.Viewfh,
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
                                              styles.Textbp,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextvK,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagedv}
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
                                      style={styles.TouchableIX}
                                    >
                                      <View
                                        style={[
                                          styles.ViewCa,
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
                                              styles.TextFW,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextLZ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_4J}
                                          resizeMode={'cover'}
                                          source={Images.Negat}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewxh}>
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
                                      style={styles.TouchableaW}
                                    >
                                      <View
                                        style={[
                                          styles.ViewwR,
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
                                              styles.TextuZ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textc7,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageQ4}
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
                                          styles.ViewEc,
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
                                              styles.Text_0R,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TexthH,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagew1}
                                          resizeMode={'cover'}
                                          source={Images.Frame191}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewSV}>
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
                                      style={styles.TouchablesM}
                                    >
                                      <View
                                        style={[
                                          styles.Viewil,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewE8}>
                                          <Text
                                            style={[
                                              styles.Textxa,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextQa,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imager4}
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
                                      style={styles.TouchablezW}
                                    >
                                      <View
                                        style={[
                                          styles.Viewh0,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.View_26}>
                                          <Text
                                            style={[
                                              styles.TexteU,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextJ6,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagewl}
                                          resizeMode={'cover'}
                                          source={Images.Frame192}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewnG}>
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
                                      style={styles.TouchabletE}
                                    >
                                      <View
                                        style={[
                                          styles.Viewco,
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
                                              styles.Texto1,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Fortune telling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextTS,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I will fail the interview"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageqq}
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
                                      style={styles.TouchableFp}
                                    >
                                      <View
                                        style={[
                                          styles.ViewTP,
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
                                              styles.Text_4k,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Fortune telling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextIu,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I will fail the interview"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_0I}
                                          resizeMode={'cover'}
                                          source={Images.Frame193}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewl3}>
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
                                      style={styles.Touchablegl}
                                    >
                                      <View
                                        style={[
                                          styles.Viewxz,
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
                                              styles.Textnq,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Mind reading'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextBW,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They think I am stupid"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageMx}
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
                                      style={styles.TouchableeX}
                                    >
                                      <View
                                        style={[
                                          styles.Viewon,
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
                                              styles.TextN7,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Mind reading'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_3p,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They think I am stupid"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagefG}
                                          resizeMode={'cover'}
                                          source={Images.Frame194}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewIu}>
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
                                      style={styles.TouchableA8}
                                    >
                                      <View
                                        style={[
                                          styles.ViewaL,
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
                                              styles.Text_0S,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Self blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_0b,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all my fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagecN}
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
                                      style={styles.TouchableEo}
                                    >
                                      <View
                                        style={[
                                          styles.ViewaN,
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
                                              styles.Text_8j,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Self blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextvS,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all my fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_10}
                                          resizeMode={'cover'}
                                          source={Images.Me}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewMq}>
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
                                      style={styles.TouchableEe}
                                    >
                                      <View
                                        style={[
                                          styles.ViewJ9,
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
                                              styles.Text_32,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Other blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextbO,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all their fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_3f}
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
                                      style={styles.TouchableR7}
                                    >
                                      <View
                                        style={[
                                          styles.View_3n,
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
                                              styles.TextLe,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Other blaming'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextZH,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"This is all their fault"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagegN}
                                          resizeMode={'cover'}
                                          source={Images.Their}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewPb}>
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
                                      style={styles.TouchablevA}
                                    >
                                      <View
                                        style={[
                                          styles.View_2d,
                                          {
                                            backgroundColor:
                                              theme.colors.background,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewHG}>
                                          <Text
                                            style={[
                                              styles.TextaB,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Filtering positives'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textdp,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"There is nothing good about today"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageb9}
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
                                      style={styles.TouchableFg}
                                    >
                                      <View
                                        style={[
                                          styles.View_61,
                                          {
                                            backgroundColor:
                                              theme.colors.green_card_colour,
                                            borderRadius: 5,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewhM}>
                                          <Text
                                            style={[
                                              styles.TextqW,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Filtering positives'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextdE,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"There is nothing good about today"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagezx}
                                          resizeMode={'cover'}
                                          source={Images.Frame196}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewqu}>
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
                                      style={styles.Touchable_9B}
                                    >
                                      <View
                                        style={[
                                          styles.View_6m,
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
                                              styles.Text_2j,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Overgeneralising'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextDT,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"Everything I do fails"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageKG}
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
                                      style={styles.Touchable_1X}
                                    >
                                      <View
                                        style={[
                                          styles.Viewpn,
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
                                              styles.TextZP,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Overgeneralizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textgc,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"Everything I do fails"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageua}
                                          resizeMode={'cover'}
                                          source={Images.Frame197}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewuN}>
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
                                      style={styles.TouchablesW}
                                    >
                                      <View
                                        style={[
                                          styles.ViewiL,
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
                                              styles.TextgU,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Labeling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextWa,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am a lazy person"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageik}
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
                                      style={styles.TouchableZa}
                                    >
                                      <View
                                        style={[
                                          styles.Viewep,
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
                                              styles.TextqG,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Labeling'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextZC,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am a lazy person"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagebd}
                                          resizeMode={'cover'}
                                          source={Images.Frame198}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewCv}>
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
                                      style={styles.TouchableHS}
                                    >
                                      <View
                                        style={[
                                          styles.ViewVa,
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
                                              styles.Textd8,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Should / must'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextA5,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I should have done X"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_3n}
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
                                      style={styles.TouchablelD}
                                    >
                                      <View
                                        style={[
                                          styles.ViewHa,
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
                                              styles.Text_2m,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Should / must'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_8M,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I should have done X"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_8X}
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
                                      styles.TextInputVO,
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
                          styles.Viewif,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.Viewz9}>
                          <View style={styles.ViewPb}>
                            <>
                              {!prompt3SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextTA,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt3SectionData?.prompt_3}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewWa}>
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
                                styles.Text_7G,
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
                                styles.TextInputHZ,
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
                          styles.Viewvl,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.View_1i}>
                          <View style={styles.ViewDZ}>
                            <>
                              {!prompt4SectionData?.Prompt_4 ? null : (
                                <Text
                                  style={[
                                    styles.TextfK,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt4SectionData?.Prompt_4}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewqF}>
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
                                styles.TextYw,
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
                                styles.TextInputkd,
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
                          styles.ViewsH,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.ViewIn}>
                          <View style={styles.View_8b}>
                            <>
                              {!prompt5SectionData?.Prompt_5 ? null : (
                                <Text
                                  style={[
                                    styles.TextS9,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt5SectionData?.Prompt_5}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewEB}>
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
                                styles.TextaT,
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
                                styles.TextInputvc,
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
                          styles.ViewuU,
                          {
                            borderRadius: 10,
                            backgroundColor: theme.colors.strongInverse,
                          },
                        ]}
                      >
                        <View style={styles.ViewZv}>
                          <View style={styles.ViewMq}>
                            <>
                              {!prompt6SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextAr,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt6SectionData?.Prompt_6}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewqF}>
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
                                styles.Text_9a,
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
                                styles.TextInputnt,
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
                          styles.ViewWa,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.View_8K}>
                          <View style={styles.ViewkB}>
                            <Text
                              style={[
                                styles.Textpf,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt7SectionData?.Prompt_7}
                            </Text>
                          </View>

                          <View style={styles.ViewXd}>
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
                                styles.TextPX,
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
                                styles.TextInputn2,
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

          <View style={styles.ViewyA}>
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
                    screen: 'Rescue',
                    params: { screen: 'ExerciseFinishRescueScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidFj,
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
  Imagev8: {
    width: 30,
    height: 30,
  },
  ViewL8: {
    minHeight: 60,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 20,
  },
  ViewJm: {
    height: 30,
  },
  Viewbc: {
    minHeight: 30,
  },
  TextUe: {
    textAlign: 'left',
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  View_6v: {
    width: '85%',
  },
  View_6E: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewoy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextFN: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInput_5n: {
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
  ViewLr: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
  },
  Fetchc8: {
    minHeight: 40,
  },
  Textca: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewlo: {
    width: '85%',
  },
  ViewYB: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewAa: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
  },
  TextH3: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  Text_3v: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textm9: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageoa: {
    width: 50,
    height: 50,
  },
  Viewi2: {
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
  Touchable_3b: {
    width: '100%',
    minHeight: 80,
  },
  TextsB: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_4m: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagesr: {
    width: 50,
    height: 50,
  },
  ViewaB: {
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
  Touchable_29: {
    width: '100%',
    minHeight: 80,
  },
  ViewC4: {
    width: '100%',
    minHeight: 80,
  },
  Text_7M: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_7X: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageH0: {
    width: 50,
    height: 50,
  },
  ViewPi: {
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
  Touchablego: {
    width: '100%',
    minHeight: 80,
  },
  Text_7K: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextmK: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagewN: {
    width: 50,
    height: 50,
  },
  ViewRK: {
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
  TouchableNd: {
    width: '100%',
    minHeight: 80,
  },
  ViewxL: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextWw: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textjy: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_7b: {
    width: 50,
    height: 50,
  },
  ViewPG: {
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
  TouchableCI: {
    width: '100%',
    minHeight: 80,
  },
  TextSK: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_8e: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageUO: {
    width: 50,
    height: 50,
  },
  View_33: {
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
  TouchablezD: {
    width: '100%',
    minHeight: 80,
  },
  Viewf7: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textbp: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextvK: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagedv: {
    width: 50,
    height: 50,
  },
  Viewfh: {
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
  Touchableuo: {
    width: '100%',
    minHeight: 80,
  },
  TextFW: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextLZ: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_4J: {
    width: 50,
    height: 50,
  },
  ViewCa: {
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
  TouchableIX: {
    width: '100%',
    minHeight: 80,
  },
  View_1p: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextuZ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textc7: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageQ4: {
    width: 50,
    height: 50,
  },
  ViewwR: {
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
  TouchableaW: {
    width: '100%',
    minHeight: 80,
  },
  Text_0R: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TexthH: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagew1: {
    width: 50,
    height: 50,
  },
  ViewEc: {
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
  Viewxh: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textxa: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextQa: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewE8: {
    maxWidth: '80%',
  },
  Imager4: {
    width: 50,
    height: 50,
  },
  Viewil: {
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
  TouchablesM: {
    width: '100%',
    minHeight: 80,
  },
  TexteU: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextJ6: {
    fontFamily: 'Montserrat_400Regular',
  },
  View_26: {
    maxWidth: '80%',
  },
  Imagewl: {
    width: 50,
    height: 50,
  },
  Viewh0: {
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
  TouchablezW: {
    width: '100%',
    minHeight: 80,
  },
  ViewSV: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Texto1: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextTS: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageqq: {
    width: 50,
    height: 50,
  },
  Viewco: {
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
  TouchabletE: {
    width: '100%',
    minHeight: 80,
  },
  Text_4k: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextIu: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_0I: {
    width: 50,
    height: 50,
  },
  ViewTP: {
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
  TouchableFp: {
    width: '100%',
    minHeight: 80,
  },
  ViewnG: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textnq: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextBW: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageMx: {
    width: 50,
    height: 50,
  },
  Viewxz: {
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
  Touchablegl: {
    width: '100%',
    minHeight: 80,
  },
  TextN7: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_3p: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagefG: {
    width: 50,
    height: 50,
  },
  Viewon: {
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
  TouchableeX: {
    width: '100%',
    minHeight: 80,
  },
  Viewl3: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_0S: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_0b: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagecN: {
    width: 50,
    height: 50,
  },
  ViewaL: {
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
  TouchableA8: {
    width: '100%',
    minHeight: 80,
  },
  Text_8j: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextvS: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_10: {
    width: 50,
    height: 50,
  },
  ViewaN: {
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
  TouchableEo: {
    width: '100%',
    minHeight: 80,
  },
  ViewIu: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_32: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextbO: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_3f: {
    width: 50,
    height: 50,
  },
  ViewJ9: {
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
  TouchableEe: {
    width: '100%',
    minHeight: 80,
  },
  TextLe: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextZH: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagegN: {
    width: 50,
    height: 50,
  },
  View_3n: {
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
  TouchableR7: {
    width: '100%',
    minHeight: 80,
  },
  ViewMq: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextaB: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textdp: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewHG: {
    maxWidth: '80%',
  },
  Imageb9: {
    width: 50,
    height: 50,
  },
  View_2d: {
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
  TouchablevA: {
    width: '100%',
    minHeight: 80,
  },
  TextqW: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextdE: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewhM: {
    maxWidth: '80%',
  },
  Imagezx: {
    width: 50,
    height: 50,
  },
  View_61: {
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
  TouchableFg: {
    width: '100%',
    minHeight: 80,
  },
  ViewPb: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_2j: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextDT: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageKG: {
    width: 50,
    height: 50,
  },
  View_6m: {
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
  Touchable_9B: {
    width: '100%',
    minHeight: 80,
  },
  TextZP: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textgc: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageua: {
    width: 50,
    height: 50,
  },
  Viewpn: {
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
  Touchable_1X: {
    width: '100%',
    minHeight: 80,
  },
  Viewqu: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextgU: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextWa: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageik: {
    width: 50,
    height: 50,
  },
  ViewiL: {
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
  TouchablesW: {
    width: '100%',
    minHeight: 80,
  },
  TextqG: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextZC: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagebd: {
    width: 50,
    height: 50,
  },
  Viewep: {
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
  TouchableZa: {
    width: '100%',
    minHeight: 80,
  },
  ViewuN: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textd8: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextA5: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_3n: {
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
    position: 'absolute',
    zIndex: 5,
  },
  TouchableHS: {
    width: '100%',
    minHeight: 80,
  },
  Text_2m: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_8M: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_8X: {
    width: 50,
    height: 50,
  },
  ViewHa: {
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
  TouchablelD: {
    width: '100%',
    minHeight: 80,
  },
  ViewCv: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  ViewgT: {
    minHeight: 100,
    alignItems: 'center',
  },
  TextInputVO: {
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
  ViewX6: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: '95%',
  },
  FetchRE: {
    minHeight: 40,
  },
  TextTA: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewPb: {
    width: '85%',
  },
  ViewWa: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewz9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  Text_7G: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputHZ: {
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
  Viewif: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  Fetchle: {
    minHeight: 40,
  },
  TextfK: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewDZ: {
    width: '85%',
  },
  ViewqF: {
    alignItems: 'flex-end',
    width: '10%',
  },
  View_1i: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextYw: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputkd: {
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
  Viewvl: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchsC: {
    minHeight: 40,
  },
  TextS9: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  View_8b: {
    width: '85%',
  },
  ViewEB: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextaT: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputvc: {
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
  ViewsH: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
    marginTop: 20,
  },
  Fetchb3: {
    minHeight: 40,
  },
  TextAr: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewMq: {
    width: '85%',
  },
  ViewqF: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewZv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  Text_9a: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputnt: {
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
  ViewuU: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchTw: {
    minHeight: 40,
  },
  Textpf: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  ViewkB: {
    width: '85%',
  },
  ViewXd: {
    width: '10%',
    alignItems: 'flex-end',
  },
  View_8K: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextPX: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputn2: {
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
  ViewWa: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
    width: '95%',
    marginBottom: 0,
  },
  Fetchbn: {
    minHeight: 40,
  },
  Viewlf: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonSolidFj: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  ViewyA: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  KeyboardAvoidingViewxm: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
});

export default withTheme(RescueExerciseInputScreen);
