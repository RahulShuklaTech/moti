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

const PromptInputTodayScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [PromptAnswer, setPromptAnswer] = React.useState('');
  const [blank, setBlank] = React.useState('');
  const [input1Value, setInput1Value] = React.useState('');
  const [prompt, setPrompt] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.View_1k}>
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
          style={styles.KeyboardAvoidingViewoo}
          enabled={true}
          behavior={'padding'}
        >
          <View style={styles.ViewkK}>
            <XanoApi.FetchFetchRandomPromptGET>
              {({ loading, error, data, refetchFetchRandomPrompt }) => {
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
                  <View
                    style={[
                      styles.ViewOW,
                      {
                        backgroundColor: theme.colors.strongInverse,
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <View style={styles.ViewME}>
                      <View style={styles.Viewyx}>
                        <Text
                          style={[
                            styles.TextRa,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {prompt1SectionData?.Prompt}
                        </Text>
                      </View>
                    </View>
                    <>
                      {!null ? null : (
                        <Text
                          style={[styles.Texts6, { color: theme.colors.light }]}
                        >
                          {prompt1SectionData?.info_1}
                        </Text>
                      )}
                    </>
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
                        styles.TextInputoe,
                        { borderColor: theme.colors.background },
                      ]}
                      value={input1Value}
                      placeholder={'Tap to type...'}
                      multiline={true}
                    />
                  </View>
                );
              }}
            </XanoApi.FetchFetchRandomPromptGET>
          </View>

          <View style={styles.Viewu7}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await XanoApi.postToEntries2022POST(Constants, {
                    dist_id: 15,
                    exercise_number: props.route?.params?.category_id ?? 61,
                    input_1: input1Value,
                    input_2: blank,
                    input_3: blank,
                    input_4: blank,
                    input_5: blank,
                    input_6: blank,
                    input_7: blank,
                    mood: blank,
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
                styles.ButtonSolidow,
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
  View_1k: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  IconButton_0I: {
    marginLeft: 20,
  },
  IconButtonwS: {
    marginLeft: 20,
  },
  TextRa: {
    textAlign: 'left',
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  Viewyx: {
    width: '90%',
  },
  ViewaV: {
    width: '10%',
    alignItems: 'flex-end',
  },
  ViewME: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Texts6: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputoe: {
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
  ViewOW: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
  },
  Fetchan: {
    minHeight: 40,
  },
  ViewkK: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonSolidow: {
    borderRadius: 10,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  Viewu7: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  KeyboardAvoidingViewoo: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
});

export default withTheme(PromptInputTodayScreen);
