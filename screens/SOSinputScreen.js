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

const SOSinputScreen = props => {
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
        <View style={styles.Viewnq}>
          <IconButton
            icon={'AntDesign/arrowleft'}
            size={32}
            color={theme.colors.light}
          />
        </View>

        <KeyboardAvoidingView
          style={styles.KeyboardAvoidingViewi8}
          enabled={true}
          behavior={'padding'}
        >
          <View style={styles.Viewe6}>
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
                          styles.Viewko,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewBY}>
                          <View style={styles.ViewOT}>
                            <Text
                              style={[
                                styles.Textwv,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt1SectionData?.prompt_1}
                            </Text>
                          </View>

                          <View style={styles.Viewic}>
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
                                styles.TextgN,
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
                                styles.TextInputC3,
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
                          styles.ViewoS,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.Viewbv}>
                          <View style={styles.Viewad}>
                            <Text
                              style={[
                                styles.TextZi,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {prompt2SectionData?.prompt_2}
                            </Text>
                          </View>

                          <View style={styles.Viewi6}>
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
                                styles.TextzG,
                                { color: theme.colors.light },
                              ]}
                            >
                              {prompt2SectionData?.info_2}
                            </Text>
                          )}
                        </>
                        <>
                          {!prompt2SectionData?.distortion ? null : (
                            <View style={styles.Viewns}>
                              <View style={styles.ViewOI}>
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
                                      style={styles.TouchableQW}
                                    >
                                      <View
                                        style={[
                                          styles.ViewxP,
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
                                              styles.TextcU,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextLa,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageFa}
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
                                      style={styles.Touchablecb}
                                    >
                                      <View
                                        style={[
                                          styles.ViewQC,
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
                                              styles.TextqO,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Catastrophizing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextFi,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"What if the worst happens?"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageWa}
                                          resizeMode={'cover'}
                                          source={Images.Cata}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.View_0H}>
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
                                      style={styles.TouchableOf}
                                    >
                                      <View
                                        style={[
                                          styles.ViewsO,
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
                                              styles.Text_2Q,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextS2,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagefK}
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
                                      style={styles.Touchablehb}
                                    >
                                      <View
                                        style={[
                                          styles.ViewUn,
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
                                              styles.Textmd,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'All or nothing'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextaM,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I am completely useless"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagenK}
                                          resizeMode={'cover'}
                                          source={Images.AllOr}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewUq}>
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
                                      style={styles.TouchablemL}
                                    >
                                      <View
                                        style={[
                                          styles.View_2K,
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
                                              styles.TextJh,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextFc,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageZz}
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
                                      style={styles.TouchableOx}
                                    >
                                      <View
                                        style={[
                                          styles.Viewic,
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
                                              styles.TextF9,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextMN,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageBx}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.ViewQ1}>
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
                                      style={styles.Touchablemf}
                                    >
                                      <View
                                        style={[
                                          styles.ViewkZ,
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
                                              styles.TextEY,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextGK,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageim}
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
                                      style={styles.Touchable_3y}
                                    >
                                      <View
                                        style={[
                                          styles.ViewQm,
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
                                              styles.TextXe,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Magnifying the negative'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextaV,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I completely ruined everything"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagewL}
                                          resizeMode={'cover'}
                                          source={Images.Doc}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <View style={styles.Viewyu}>
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
                                      style={styles.TouchableU8}
                                    >
                                      <View
                                        style={[
                                          styles.ViewlZ,
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
                                              styles.TextM0,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textmy,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageKF}
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
                                      style={styles.Touchable_6p}
                                    >
                                      <View
                                        style={[
                                          styles.ViewYy,
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
                                              styles.TextbL,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Minimising the positive'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextK0,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"They didn\'t really mean that"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_7j}
                                          resizeMode={'cover'}
                                          source={Images.Frame191}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(true);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(false);
                                    setDistortion_id(5);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.Touchable_71}
                              >
                                <>
                                  {Minimise_positive ? null : (
                                    <View
                                      style={[
                                        styles.ViewcG,
                                        {
                                          backgroundColor:
                                            theme.colors.background,
                                          borderRadius: 5,
                                        },
                                      ]}
                                    >
                                      <View style={styles.ViewLi}>
                                        <Text
                                          style={[
                                            styles.Text_9n,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Minimising the positive'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextId,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"They didn\'t really mean that"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImageKU}
                                        resizeMode={'cover'}
                                        source={Images.Frame191}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.Viewu5,
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
                                        styles.TextdC,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Minimising the positive'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextXG,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"They didn\'t really mean that"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImageVA}
                                    resizeMode={'cover'}
                                    source={Images.Frame191}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.Viewcf}>
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
                                      style={styles.Touchable_7J}
                                    >
                                      <View
                                        style={[
                                          styles.ViewNC,
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
                                              styles.Textws,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextZf,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageSK}
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
                                      style={styles.TouchableSj}
                                    >
                                      <View
                                        style={[
                                          styles.ViewCY,
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
                                              styles.TextkD,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Jumping to conclusions'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textba,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {
                                              '"They didn\'t text back so they must hate me"'
                                            }
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageC6}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(true);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(false);
                                    setDistortion_id(6);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.Touchable_9J}
                              >
                                <>
                                  {jump_conclusion ? null : (
                                    <View
                                      style={[
                                        styles.ViewEY,
                                        {
                                          backgroundColor:
                                            theme.colors.background,
                                          borderRadius: 5,
                                        },
                                      ]}
                                    >
                                      <View style={styles.ViewWU}>
                                        <Text
                                          style={[
                                            styles.Textqo,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Jumping to conclusions'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextaV,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {
                                            '"They didn\'t text back so they hate me"'
                                          }
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImageZG}
                                        resizeMode={'cover'}
                                        source={Images.Frame192}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.ViewGq,
                                    {
                                      backgroundColor:
                                        theme.colors.green_card_colour,
                                      borderRadius: 5,
                                    },
                                  ]}
                                >
                                  <View style={styles.ViewKt}>
                                    <Text
                                      style={[
                                        styles.Textas,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Jumping to conclusions'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextbF,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {
                                        '"They didn\'t text back so they hate me"'
                                      }
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.Image_6L}
                                    resizeMode={'cover'}
                                    source={Images.Frame192}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.ViewhI}>
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
                                      style={styles.Touchable_0p}
                                    >
                                      <View
                                        style={[
                                          styles.ViewYH,
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
                                              styles.TextPT,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_6w,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagejm}
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
                                      style={styles.TouchableYA}
                                    >
                                      <View
                                        style={[
                                          styles.ViewDg,
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
                                              styles.Textfv,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Text_4l,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_0q}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(true);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(false);
                                    setDistortion_id(7);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.TouchableQg}
                              >
                                <>
                                  {fortune_telling ? null : (
                                    <View
                                      style={[
                                        styles.ViewKN,
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
                                            styles.TextbD,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Fortune telling'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextOx,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"I will fail the job interview"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.Imagek7}
                                        resizeMode={'cover'}
                                        source={Images.Frame193}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.ViewCt,
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
                                        styles.TextJQ,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Fortune telling'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.Textvp,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"I will fail the job interview"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImageNn}
                                    resizeMode={'cover'}
                                    source={Images.Frame193}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.ViewtF}>
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
                                      style={styles.TouchablePW}
                                    >
                                      <View
                                        style={[
                                          styles.ViewjI,
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
                                              styles.TextOZ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textg7,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageF7}
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
                                      style={styles.Touchablej5}
                                    >
                                      <View
                                        style={[
                                          styles.View_86,
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
                                              styles.TexteU,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TexthI,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagely}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(true);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(false);
                                    setDistortion_id(8);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.TouchableFD}
                              >
                                <>
                                  {mind_reading ? null : (
                                    <View
                                      style={[
                                        styles.View_7O,
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
                                            styles.TextTs,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Mind reading'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextoQ,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"They think I am stupid"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImagehP}
                                        resizeMode={'cover'}
                                        source={Images.Frame194}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.ViewZw,
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
                                        styles.TextvD,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Mind reading'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.Texttz,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"They think I am stupid"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImageD0}
                                    resizeMode={'cover'}
                                    source={Images.Frame194}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.Viewno}>
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
                                      style={styles.TouchablePE}
                                    >
                                      <View
                                        style={[
                                          styles.ViewTk,
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
                                              styles.TextKT,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textjn,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageaV}
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
                                      style={styles.TouchableDX}
                                    >
                                      <View
                                        style={[
                                          styles.View_3p,
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
                                              styles.TextrZ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextrN,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageL6}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(true);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(false);
                                    setDistortion_id(9);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.Touchablett}
                              >
                                <>
                                  {self_blaming ? null : (
                                    <View
                                      style={[
                                        styles.ViewAb,
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
                                            styles.TextA3,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Self blaming'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextNK,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"This is all my fault"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.Imageot}
                                        resizeMode={'cover'}
                                        source={Images.Me}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.ViewDH,
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
                                        styles.Texthx,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Self blaming'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextBQ,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"This is all my fault"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImageNY}
                                    resizeMode={'cover'}
                                    source={Images.Me}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.Viewxv}>
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
                                      style={styles.Touchableae}
                                    >
                                      <View
                                        style={[
                                          styles.Viewn5,
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
                                              styles.TextwC,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Texto9,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageWX}
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
                                      style={styles.TouchableKZ}
                                    >
                                      <View
                                        style={[
                                          styles.ViewDz,
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
                                              styles.Textbr,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textzr,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagee4}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(true);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(false);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.Touchablee0}
                              >
                                <>
                                  {other_blaming ? null : (
                                    <View
                                      style={[
                                        styles.ViewJh,
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
                                            styles.Textsd,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Other blaming'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextyC,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"This is all their fault"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImageGo}
                                        resizeMode={'cover'}
                                        source={Images.Their}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.View_1j,
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
                                        styles.Textwh,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Other blaming'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextKp,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"This is all their fault"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImageeP}
                                    resizeMode={'cover'}
                                    source={Images.Their}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.ViewVR}>
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
                                      style={styles.TouchableI1}
                                    >
                                      <View
                                        style={[
                                          styles.ViewRN,
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
                                              styles.Text_8b,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextFZ,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Image_7e}
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
                                      style={styles.Touchablebj}
                                    >
                                      <View
                                        style={[
                                          styles.ViewxW,
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
                                              styles.TextAz,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textbx,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagekD}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(true);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(false);
                                    setDistortion_id(11);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.TouchableAe}
                              >
                                <>
                                  {filtering_positives ? null : (
                                    <View
                                      style={[
                                        styles.ViewfV,
                                        {
                                          backgroundColor:
                                            theme.colors.background,
                                          borderRadius: 5,
                                        },
                                      ]}
                                    >
                                      <View style={styles.ViewSB}>
                                        <Text
                                          style={[
                                            styles.TextFy,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Filtering positives'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.Text_0v,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {
                                            '"There is nothing good about today"'
                                          }
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImagepH}
                                        resizeMode={'cover'}
                                        source={Images.Frame196}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.ViewEP,
                                    {
                                      backgroundColor:
                                        theme.colors.green_card_colour,
                                      borderRadius: 5,
                                    },
                                  ]}
                                >
                                  <View style={styles.ViewY5}>
                                    <Text
                                      style={[
                                        styles.Textk2,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Filtering positives'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextUK,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"There is nothing good about today"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.Imagez6}
                                    resizeMode={'cover'}
                                    source={Images.Frame196}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.ViewR5}>
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
                                      style={styles.Touchablehb}
                                    >
                                      <View
                                        style={[
                                          styles.View_7K,
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
                                              styles.Textgs,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextKP,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageFd}
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
                                      style={styles.TouchableFa}
                                    >
                                      <View
                                        style={[
                                          styles.ViewvK,
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
                                              styles.TextUK,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextUg,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imagetp}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(true);
                                    setLabeling(false);
                                    setShould_must(false);
                                    setDistortion_id(12);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.Touchablel7}
                              >
                                <>
                                  {over_generalizing ? null : (
                                    <View
                                      style={[
                                        styles.ViewLP,
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
                                            styles.TextGc,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Overgeneralising'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.Textc6,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"Everything I do fails"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.Imageyb}
                                        resizeMode={'cover'}
                                        source={Images.Frame197}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.Viewmd,
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
                                        styles.TextSL,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Overgeneralising'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextEd,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"Everything I do fails"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImagecI}
                                    resizeMode={'cover'}
                                    source={Images.Frame197}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.ViewEn}>
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
                                      style={styles.TouchableO3}
                                    >
                                      <View
                                        style={[
                                          styles.ViewKv,
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
                                              styles.TextDa,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextjA,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImagenZ}
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
                                      style={styles.Touchableyi}
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
                                              styles.TextoG,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextHB,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageUT}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(true);
                                    setShould_must(false);
                                    setDistortion_id(13);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.Touchablemz}
                              >
                                <>
                                  {labeling ? null : (
                                    <View
                                      style={[
                                        styles.ViewxM,
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
                                            styles.TexteF,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Labeling'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.Textji,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"I am a lazy person"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImageHC}
                                        resizeMode={'cover'}
                                        source={Images.Frame198}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.ViewQl,
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
                                        styles.TextAR,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Labeling'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.Text_8m,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"I am a lazy person"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImageSC}
                                    resizeMode={'cover'}
                                    source={Images.Frame198}
                                  />
                                </View>
                              </Touchable>

                              <View style={styles.Viewpw}>
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
                                      style={styles.Touchable_3N}
                                    >
                                      <View
                                        style={[
                                          styles.View_4q,
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
                                              styles.TextV5,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.TextEA,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.Imageb6}
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
                                      style={styles.TouchableCa}
                                    >
                                      <View
                                        style={[
                                          styles.ViewoY,
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
                                              styles.TextSU,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'Emotional reasoning'}
                                          </Text>

                                          <Text
                                            style={[
                                              styles.Textdp,
                                              { color: theme.colors.strong },
                                            ]}
                                          >
                                            {'"I feel X, so X must be true"'}
                                          </Text>
                                        </View>
                                        <Image
                                          style={styles.ImageCv}
                                          resizeMode={'cover'}
                                          source={Images.Emotion}
                                        />
                                      </View>
                                    </Touchable>
                                  )}
                                </>
                              </View>

                              <Touchable
                                onPress={() => {
                                  try {
                                    setCatastrophizing(false);
                                    setAllornothing(false);
                                    setEmotional_reasoning(false);
                                    setMagnify_negative(false);
                                    setMinimise_positive(false);
                                    setJump_conclusion(false);
                                    setFortune_telling(false);
                                    setMind_reading(false);
                                    setSelf_blaming(false);
                                    setOther_blaming(false);
                                    setFiltering_positives(false);
                                    setOver_generalizing(false);
                                    setLabeling(false);
                                    setShould_must(true);
                                    setDistortion_id(14);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={styles.Touchable_4F}
                              >
                                <>
                                  {should_must ? null : (
                                    <View
                                      style={[
                                        styles.View_9v,
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
                                            styles.Textqu,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'Should / must statements'}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.TextWD,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {'"I should have done X"'}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImageIW}
                                        resizeMode={'cover'}
                                        source={Images.Frame199}
                                      />
                                    </View>
                                  )}
                                </>
                                <View
                                  style={[
                                    styles.ViewTb,
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
                                        styles.TextOs,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'Should / must statements'}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextrA,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {'"I should have done X"'}
                                    </Text>
                                  </View>
                                  <Image
                                    style={styles.ImagehD}
                                    resizeMode={'cover'}
                                    source={Images.Frame199}
                                  />
                                </View>
                              </Touchable>
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
                                      styles.TextInputBw,
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
                          styles.Viewpn,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewTF}>
                          <View style={styles.Viewq8}>
                            <>
                              {!prompt3SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.Text_0v,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt3SectionData?.prompt_3}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewGN}>
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
                                styles.TextHc,
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
                                styles.TextInput_9J,
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
                          styles.ViewTK,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewT8}>
                          <View style={styles.Viewrh}>
                            <>
                              {!prompt4SectionData?.Prompt_4 ? null : (
                                <Text
                                  style={[
                                    styles.TextJT,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt4SectionData?.Prompt_4}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.ViewXb}>
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
                                styles.TextXF,
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
                                styles.TextInputN5,
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
                          styles.ViewEl,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewLA}>
                          <View style={styles.Viewl0}>
                            <>
                              {!prompt5SectionData?.Prompt_5 ? null : (
                                <Text
                                  style={[
                                    styles.TextxH,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt5SectionData?.Prompt_5}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.Views8}>
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
                                styles.TextoR,
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
                                styles.TextInput_1j,
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
                          styles.ViewdP,
                          {
                            borderRadius: 5,
                            backgroundColor: theme.colors.strongInverse,
                          },
                        ]}
                      >
                        <View style={styles.Viewq9}>
                          <View style={styles.View_92}>
                            <>
                              {!prompt6SectionData?.prompt_3 ? null : (
                                <Text
                                  style={[
                                    styles.TextYa,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {prompt6SectionData?.Prompt_6}
                                </Text>
                              )}
                            </>
                          </View>

                          <View style={styles.Vieww1}>
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
                                styles.TextbR,
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
                                styles.TextInput_2x,
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
                          styles.ViewKq,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={styles.ViewCO}>
                          <View style={styles.View_4n}>
                            <Text
                              style={[
                                styles.TextbH,
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
                                styles.TexteS,
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
                                styles.TextInputwm,
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

          <View style={styles.View_7E}>
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
                styles.ButtonSolidSV,
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
  Viewnq: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  Textwv: {
    textAlign: 'left',
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  ViewOT: {
    width: '85%',
  },
  Viewic: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewBY: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextgN: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputC3: {
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
  Viewko: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
  },
  FetchK9: {
    minHeight: 40,
  },
  TextZi: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewad: {
    width: '85%',
  },
  Viewi6: {
    alignItems: 'flex-end',
    width: '10%',
  },
  Viewbv: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
  },
  TextzG: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextcU: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextLa: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageFa: {
    width: 50,
    height: 50,
  },
  ViewxP: {
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
  TouchableQW: {
    width: '100%',
    minHeight: 80,
  },
  TextqO: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextFi: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageWa: {
    width: 50,
    height: 50,
  },
  ViewQC: {
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
  Touchablecb: {
    width: '100%',
    minHeight: 80,
  },
  ViewOI: {
    width: '100%',
    minHeight: 80,
  },
  Text_2Q: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextS2: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagefK: {
    width: 50,
    height: 50,
  },
  ViewsO: {
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
  TouchableOf: {
    width: '100%',
    minHeight: 80,
  },
  Textmd: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextaM: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagenK: {
    width: 50,
    height: 50,
  },
  ViewUn: {
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
  Touchablehb: {
    width: '100%',
    minHeight: 80,
  },
  View_0H: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextJh: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextFc: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageZz: {
    width: 50,
    height: 50,
  },
  View_2K: {
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
  TouchablemL: {
    width: '100%',
    minHeight: 80,
  },
  TextF9: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextMN: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageBx: {
    width: 50,
    height: 50,
  },
  Viewic: {
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
  TouchableOx: {
    width: '100%',
    minHeight: 80,
  },
  ViewUq: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextEY: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextGK: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageim: {
    width: 50,
    height: 50,
  },
  ViewkZ: {
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
  Touchablemf: {
    width: '100%',
    minHeight: 80,
  },
  TextXe: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextaV: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagewL: {
    width: 50,
    height: 50,
  },
  ViewQm: {
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
  Touchable_3y: {
    width: '100%',
    minHeight: 80,
  },
  ViewQ1: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextM0: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textmy: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageKF: {
    width: 50,
    height: 50,
  },
  ViewlZ: {
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
  TouchableU8: {
    width: '100%',
    minHeight: 80,
  },
  TextbL: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextK0: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_7j: {
    width: 50,
    height: 50,
  },
  ViewYy: {
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
  Touchable_6p: {
    width: '100%',
    minHeight: 80,
  },
  Viewyu: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Text_9n: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextId: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewLi: {
    maxWidth: '80%',
  },
  ImageKU: {
    width: 50,
    height: 50,
  },
  ViewcG: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
  },
  TextdC: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextXG: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageVA: {
    width: 50,
    height: 50,
  },
  Viewu5: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  Touchable_71: {
    width: '100%',
  },
  Textws: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextZf: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageSK: {
    width: 50,
    height: 50,
  },
  ViewNC: {
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
  Touchable_7J: {
    width: '100%',
    minHeight: 80,
  },
  TextkD: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textba: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageC6: {
    width: 50,
    height: 50,
  },
  ViewCY: {
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
  TouchableSj: {
    width: '100%',
    minHeight: 80,
  },
  Viewcf: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textqo: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextaV: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewWU: {
    maxWidth: '80%',
  },
  ImageZG: {
    width: 50,
    height: 50,
  },
  ViewEY: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
    maxWidth: '100%',
  },
  Textas: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextbF: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewKt: {
    maxWidth: '80%',
  },
  Image_6L: {
    width: 50,
    height: 50,
  },
  ViewGq: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    maxWidth: '100%',
  },
  Touchable_9J: {
    width: '100%',
    maxWidth: '100%',
  },
  TextPT: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_6w: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagejm: {
    width: 50,
    height: 50,
  },
  ViewYH: {
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
  Touchable_0p: {
    width: '100%',
    minHeight: 80,
  },
  Textfv: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_4l: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_0q: {
    width: 50,
    height: 50,
  },
  ViewDg: {
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
  TouchableYA: {
    width: '100%',
    minHeight: 80,
  },
  ViewhI: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextbD: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextOx: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagek7: {
    width: 50,
    height: 50,
  },
  ViewKN: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
  },
  TextJQ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textvp: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageNn: {
    width: 50,
    height: 50,
  },
  ViewCt: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  TouchableQg: {
    width: '100%',
  },
  TextOZ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textg7: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageF7: {
    width: 50,
    height: 50,
  },
  ViewjI: {
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
  TouchablePW: {
    width: '100%',
    minHeight: 80,
  },
  TexteU: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TexthI: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagely: {
    width: 50,
    height: 50,
  },
  View_86: {
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
  Touchablej5: {
    width: '100%',
    minHeight: 80,
  },
  ViewtF: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextTs: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextoQ: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagehP: {
    width: 50,
    height: 50,
  },
  View_7O: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
  },
  TextvD: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Texttz: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageD0: {
    width: 50,
    height: 50,
  },
  ViewZw: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  TouchableFD: {
    width: '100%',
  },
  TextKT: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textjn: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageaV: {
    width: 50,
    height: 50,
  },
  ViewTk: {
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
  TouchablePE: {
    width: '100%',
    minHeight: 80,
  },
  TextrZ: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextrN: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageL6: {
    width: 50,
    height: 50,
  },
  View_3p: {
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
  TouchableDX: {
    width: '100%',
    minHeight: 80,
  },
  Viewno: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextA3: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextNK: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageot: {
    width: 50,
    height: 50,
  },
  ViewAb: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
  },
  Texthx: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextBQ: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageNY: {
    width: 50,
    height: 50,
  },
  ViewDH: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  Touchablett: {
    width: '100%',
  },
  TextwC: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Texto9: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageWX: {
    width: 50,
    height: 50,
  },
  Viewn5: {
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
  Touchableae: {
    width: '100%',
    minHeight: 80,
  },
  Textbr: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textzr: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagee4: {
    width: 50,
    height: 50,
  },
  ViewDz: {
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
  TouchableKZ: {
    width: '100%',
    minHeight: 80,
  },
  Viewxv: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textsd: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextyC: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageGo: {
    width: 50,
    height: 50,
  },
  ViewJh: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
  },
  Textwh: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextKp: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageeP: {
    width: 50,
    height: 50,
  },
  View_1j: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  Touchablee0: {
    width: '100%',
  },
  Text_8b: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextFZ: {
    fontFamily: 'Montserrat_400Regular',
  },
  Image_7e: {
    width: 50,
    height: 50,
  },
  ViewRN: {
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
  TouchableI1: {
    width: '100%',
    minHeight: 80,
  },
  TextAz: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textbx: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagekD: {
    width: 50,
    height: 50,
  },
  ViewxW: {
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
  Touchablebj: {
    width: '100%',
    minHeight: 80,
  },
  ViewVR: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextFy: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_0v: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewSB: {
    maxWidth: '80%',
  },
  ImagepH: {
    width: 50,
    height: 50,
  },
  ViewfV: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
    minWidth: '100%',
  },
  Textk2: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextUK: {
    fontFamily: 'Montserrat_400Regular',
  },
  ViewY5: {
    maxWidth: '80%',
  },
  Imagez6: {
    width: 50,
    height: 50,
  },
  ViewEP: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    minWidth: '100%',
  },
  TouchableAe: {
    width: '100%',
  },
  Textgs: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextKP: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageFd: {
    width: 50,
    height: 50,
  },
  View_7K: {
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
  Touchablehb: {
    width: '100%',
    minHeight: 80,
  },
  TextUK: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextUg: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imagetp: {
    width: 50,
    height: 50,
  },
  ViewvK: {
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
  TouchableFa: {
    width: '100%',
    minHeight: 80,
  },
  ViewR5: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TextGc: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textc6: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageyb: {
    width: 50,
    height: 50,
  },
  ViewLP: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    zIndex: 5,
    minWidth: '100%',
    position: 'absolute',
  },
  TextSL: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextEd: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagecI: {
    width: 50,
    height: 50,
  },
  Viewmd: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    minWidth: '100%',
  },
  Touchablel7: {
    width: '100%',
  },
  TextDa: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextjA: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagenZ: {
    width: 50,
    height: 50,
  },
  ViewKv: {
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
  TouchableO3: {
    width: '100%',
    minHeight: 80,
  },
  TextoG: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextHB: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageUT: {
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
  Touchableyi: {
    width: '100%',
    minHeight: 80,
  },
  ViewEn: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  TexteF: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textji: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageHC: {
    width: 50,
    height: 50,
  },
  ViewxM: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
  },
  TextAR: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Text_8m: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageSC: {
    width: 50,
    height: 50,
  },
  ViewQl: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  Touchablemz: {
    width: '100%',
  },
  TextV5: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextEA: {
    fontFamily: 'Montserrat_400Regular',
  },
  Imageb6: {
    width: 50,
    height: 50,
  },
  View_4q: {
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
  Touchable_3N: {
    width: '100%',
    minHeight: 80,
  },
  TextSU: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  Textdp: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageCv: {
    width: 50,
    height: 50,
  },
  ViewoY: {
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
  TouchableCa: {
    width: '100%',
    minHeight: 80,
  },
  Viewpw: {
    width: '100%',
    minHeight: 80,
    marginTop: 10,
  },
  Textqu: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextWD: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImageIW: {
    width: 50,
    height: 50,
  },
  View_9v: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
  },
  TextOs: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },
  TextrA: {
    fontFamily: 'Montserrat_400Regular',
  },
  ImagehD: {
    width: 50,
    height: 50,
  },
  ViewTb: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  Touchable_4F: {
    width: '100%',
  },
  Viewns: {
    minHeight: 100,
    alignItems: 'center',
  },
  TextInputBw: {
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
  ViewoS: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: '95%',
  },
  Fetch_0H: {
    minHeight: 40,
  },
  Text_0v: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewq8: {
    width: '85%',
  },
  ViewGN: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewTF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextHc: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInput_9J: {
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
  Viewpn: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchQ8: {
    minHeight: 40,
  },
  TextJT: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewrh: {
    width: '85%',
  },
  ViewXb: {
    alignItems: 'flex-end',
    width: '10%',
  },
  ViewT8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextXF: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputN5: {
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
  ViewTK: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchUG: {
    minHeight: 40,
  },
  TextxH: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  Viewl0: {
    width: '85%',
  },
  Views8: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewLA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextoR: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInput_1j: {
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
  ViewEl: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
    marginTop: 20,
  },
  Fetch_2B: {
    minHeight: 40,
  },
  TextYa: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  View_92: {
    width: '85%',
  },
  Vieww1: {
    alignItems: 'flex-end',
    width: '10%',
  },
  Viewq9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TextbR: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInput_2x: {
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
  ViewdP: {
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  FetchHI: {
    minHeight: 40,
  },
  TextbH: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
  View_4n: {
    width: '85%',
  },
  ViewoT: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewCO: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
  },
  TexteS: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputwm: {
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
  ViewKq: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
    width: '95%',
    marginBottom: 0,
  },
  Fetchhs: {
    minHeight: 40,
  },
  Viewe6: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonSolidSV: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  View_7E: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  KeyboardAvoidingViewi8: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
});

export default withTheme(SOSinputScreen);
