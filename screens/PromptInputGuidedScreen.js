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

const PromptInputGuidedScreen = props => {
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
        <View>
          <View
            style={[styles.Viewa5, { backgroundColor: theme.colors.primary }]}
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
                style={styles.Imageqt}
                source={Images.Arrow}
                resizeMode={'cover'}
              />
            </Touchable>
          </View>

          <View
            style={[styles.Viewok, { backgroundColor: theme.colors.primary }]}
          >
            <View
              style={[
                styles.Viewwt,
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
          style={styles.KeyboardAvoidingViewuU}
          enabled={true}
          behavior={'padding'}
        >
          <View style={styles.ViewHR}>
            <XanoApi.FetchFetchPromptByIDGET
              id={props.route?.params?.prompt_id ?? 17}
            >
              {({ loading, error, data, refetchFetchPromptByID }) => {
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
                      styles.Viewnp,
                      {
                        backgroundColor: theme.colors.strongInverse,
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <View style={styles.Viewri}>
                      <View style={styles.ViewE5}>
                        <Text
                          style={[
                            styles.TextaC,
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
                          style={[styles.Textf0, { color: theme.colors.light }]}
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
                        styles.TextInputTB,
                        { borderColor: theme.colors.background },
                      ]}
                      value={input1Value}
                      placeholder={'Tap to type...'}
                      multiline={true}
                    />
                  </View>
                );
              }}
            </XanoApi.FetchFetchPromptByIDGET>
          </View>

          <View style={styles.Viewgs}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await XanoApi.postToEntries2022POST(Constants, {
                    dist_id: 15,
                    exercise_number: null,
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
                    screen: 'GuidedNavigator',
                    params: { screen: 'ExerciseFinishGuidedScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidvk,
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
  Imageqt: {
    width: 30,
    height: 30,
  },
  Viewa5: {
    minHeight: 60,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 20,
  },
  Viewwt: {
    height: 30,
  },
  Viewok: {
    minHeight: 30,
  },
  Viewda: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  IconButton_3b: {
    marginLeft: 20,
  },
  IconButtonOg: {
    marginLeft: 20,
  },
  TextaC: {
    textAlign: 'left',
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
    marginLeft: 0,
    marginRight: 0,
  },
  ViewE5: {
    width: '90%',
  },
  Viewcw: {
    width: '10%',
    alignItems: 'flex-end',
  },
  Viewri: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Textf0: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 0,
    marginRight: 0,
  },
  TextInputTB: {
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
  Viewnp: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
  },
  Fetch_3m: {
    minHeight: 40,
  },
  ViewHR: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonSolidvk: {
    borderRadius: 10,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
  },
  Viewgs: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  KeyboardAvoidingViewuU: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
});

export default withTheme(PromptInputGuidedScreen);
