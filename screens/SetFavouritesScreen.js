import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { Checkbox, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SetFavouritesScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={true}
      scrollable={true}
    >
      <View style={styles.Viewba}>
        <View>
          <View
            style={[styles.Viewcj, { backgroundColor: theme.colors.primary }]}
          >
            <ImageBackground
              style={styles.ImageBackgroundA6}
              source={Images.Feather}
              resizeMode={'cover'}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableBU}
              >
                <Image
                  style={styles.ImageC0}
                  source={Images.Arrow}
                  resizeMode={'cover'}
                />
              </Touchable>

              <Text style={[styles.TextkR, { color: theme.colors.strong }]}>
                {'Set your daily exercises'}
              </Text>

              <Text style={[styles.TextlB, { color: theme.colors.strong }]}>
                {'Toggle which exercises appear on your today screen.'}
              </Text>
            </ImageBackground>
          </View>

          <View style={{ backgroundColor: theme.colors.primary }}>
            <View
              style={[
                styles.ViewwG,
                {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextVd, { color: theme.colors.strong }]}>
                {'Morning'}
              </Text>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.ScrollViewAFContent}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <Touchable style={[styles.TouchableS1, { borderRadius: 10 }]}>
              <View
                style={[
                  styles.Viewmj,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.Viewy8}>
                  <View>
                    <Text
                      style={[styles.Text_8v, { color: theme.colors.strong }]}
                    >
                      {'Morning pages'}
                    </Text>

                    <Text
                      style={[styles.Text_0k, { color: theme.colors.strong }]}
                    >
                      {'Clear your mind'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newMorningCheckinSwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'morning_check_in',
                        value: newMorningCheckinSwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['morning_check_in']}
                />
              </View>
            </Touchable>

            <Touchable style={[styles.TouchableZw, { borderRadius: 10 }]}>
              <View
                style={[
                  styles.ViewhA,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.Viewza}>
                  <View>
                    <Text
                      style={[styles.TextEH, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Daily intention'}
                    </Text>

                    <Text
                      style={[styles.TextaF, { color: theme.colors.strong }]}
                    >
                      {'Set a daily mindful focus'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newDailyIntentionSwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'daily_intention',
                        value: newDailyIntentionSwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['daily_intention']}
                />
              </View>
            </Touchable>

            <Touchable style={[styles.TouchablegX, { borderRadius: 10 }]}>
              <View
                style={[
                  styles.ViewMg,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.ViewD3}>
                  <View>
                    <Text
                      style={[styles.Text_6P, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Plan your day'}
                    </Text>

                    <Text
                      style={[styles.Text_7O, { color: theme.colors.strong }]}
                    >
                      {'Organise and prioritise'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newPlanYourDaySwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'plan_today',
                        value: newPlanYourDaySwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['plan_today']}
                />
              </View>
            </Touchable>

            <Touchable style={[styles.TouchableSZ, { borderRadius: 10 }]}>
              <View
                style={[
                  styles.ViewoM,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.Viewxv}>
                  <View>
                    <Text
                      style={[styles.Texte6, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Morning gratitude'}
                    </Text>

                    <Text
                      style={[styles.TextJV, { color: theme.colors.strong }]}
                    >
                      {'Reflect and appreciate'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newGratMorningSwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'morning_gratitude',
                        value: newGratMorningSwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['morning_gratitude']}
                />
              </View>
            </Touchable>

            <View style={styles.View_66}>
              <Text style={[styles.Text_5s, { color: theme.colors.strong }]}>
                {'Afternoon'}
              </Text>
            </View>

            <Touchable style={[styles.Touchableck, { borderRadius: 5 }]}>
              <View
                style={[
                  styles.ViewRR,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.ViewCC}>
                  <View>
                    <Text
                      style={[styles.TextOf, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Daily prompt'}
                    </Text>

                    <Text
                      style={[styles.Textvg, { color: theme.colors.strong }]}
                    >
                      {'Daily random prompts'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newDailPromptSwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'daily_prompt',
                        value: newDailPromptSwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['daily_prompt']}
                />
              </View>
            </Touchable>

            <Touchable style={[styles.Touchable_43, { borderRadius: 5 }]}>
              <View
                style={[
                  styles.ViewL2,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.ViewjO}>
                  <View>
                    <Text
                      style={[styles.TextVB, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Afternoon check-in'}
                    </Text>

                    <Text
                      style={[styles.TextMz, { color: theme.colors.strong }]}
                    >
                      {'Check in with yourself'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newAfternoonCheckboxSwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'afternoon_check_in',
                        value: newAfternoonCheckboxSwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['afternoon_check_in']}
                />
              </View>
            </Touchable>

            <Touchable style={[styles.TouchableEq, { borderRadius: 5 }]}>
              <View
                style={[
                  styles.ViewZ5,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.View_0w}>
                  <View>
                    <Text
                      style={[styles.Text_3L, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Midday gratitude'}
                    </Text>

                    <Text
                      style={[styles.TextMb, { color: theme.colors.strong }]}
                    >
                      {'Reflect and give thanks'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newMiddayGratitudeSwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'midday_gratitude',
                        value: newMiddayGratitudeSwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['midday_gratitude']}
                />
              </View>
            </Touchable>

            <View style={styles.ViewCW}>
              <Text style={[styles.Text_5b, { color: theme.colors.strong }]}>
                {'Evening'}
              </Text>
            </View>

            <Touchable style={[styles.TouchableHF, { borderRadius: 5 }]}>
              <View
                style={[
                  styles.ViewWW,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.ViewSi}>
                  <View>
                    <Text
                      style={[styles.TextTz, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Reflect on the day'}
                    </Text>

                    <Text
                      style={[styles.Textla, { color: theme.colors.strong }]}
                    >
                      {'Review and unwind'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newReflectOnTheDaySwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'reflect_on_the_day',
                        value: newReflectOnTheDaySwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['reflect_on_the_day']}
                />
              </View>
            </Touchable>

            <Touchable style={[styles.TouchableKK, { borderRadius: 5 }]}>
              <View
                style={[
                  styles.View_0m,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.ViewMw}>
                  <View>
                    <Text
                      style={[styles.Texthj, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Evening gratitude'}
                    </Text>

                    <Text
                      style={[styles.Textq3, { color: theme.colors.strong }]}
                    >
                      {'Appreciate and reflect'}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newEveningGratitudeSwitchValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'evening_gratitude',
                        value: newEveningGratitudeSwitchValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['evening_gratitude']}
                />
              </View>
            </Touchable>

            <Touchable style={[styles.TouchableZb, { borderRadius: 5 }]}>
              <View
                style={[
                  styles.ViewYU,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={styles.Viewbp}>
                  <View>
                    <Text
                      style={[styles.TextRT, { color: theme.colors.strong }]}
                      allowFontScaling={true}
                      textBreakStrategy={'highQuality'}
                      ellipsizeMode={'tail'}
                    >
                      {'Plan for tomorrow'}
                    </Text>

                    <Text
                      style={[styles.TextRU, { color: theme.colors.strong }]}
                    >
                      {"Setup tomorrow's success"}
                    </Text>
                  </View>
                </View>
                <Checkbox
                  onPress={newPlanForTomorrowValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'plan_for_tomorrow',
                        value: newPlanForTomorrowValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  defaultValue={Constants['plan_for_tomorrow']}
                />
              </View>
            </Touchable>
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageC0: {
    width: 30,
    height: 30,
  },
  TouchableBU: {
    width: 30,
    height: 30,
  },
  TextkR: {
    textAlign: 'left',
    marginBottom: 6,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    marginTop: 20,
  },
  TextlB: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  ImageBackgroundA6: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 35,
    paddingBottom: 24,
    maxHeight: 200,
  },
  Viewcj: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'flex-start',
    maxHeight: 200,
  },
  TextVd: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewwG: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 20,
    paddingLeft: 20,
    alignContent: 'center',
  },
  Text_8v: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  Text_0k: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  Viewy8: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewmj: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableS1: {
    marginBottom: 20,
  },
  TextEH: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  TextaF: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  Viewza: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewhA: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableZw: {
    marginBottom: 20,
  },
  Text_6P: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  Text_7O: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  ViewD3: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewMg: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchablegX: {
    marginBottom: 20,
  },
  Texte6: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  TextJV: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  Viewxv: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewoM: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableSZ: {
    marginBottom: 20,
  },
  Text_5s: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
  },
  View_66: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 0,
    paddingLeft: 20,
    alignContent: 'center',
  },
  TextOf: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  Textvg: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  ViewCC: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewRR: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  Touchableck: {
    marginBottom: 20,
  },
  TextVB: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  TextMz: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  ViewjO: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewL2: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  Touchable_43: {
    marginBottom: 20,
  },
  Text_3L: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  TextMb: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  View_0w: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewZ5: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableEq: {
    marginBottom: 20,
  },
  Text_5b: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewCW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 0,
    paddingLeft: 20,
    alignContent: 'center',
  },
  TextTz: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  Textla: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  ViewSi: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewWW: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableHF: {
    marginBottom: 20,
  },
  Texthj: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  Textq3: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  ViewMw: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  View_0m: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableKK: {
    marginBottom: 20,
  },
  TextRT: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  TextRU: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
  },
  Viewbp: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewYU: {
    width: '100%',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  TouchableZb: {
    marginBottom: 20,
  },
  ScrollViewAFContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
  Viewba: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default withTheme(SetFavouritesScreen);
