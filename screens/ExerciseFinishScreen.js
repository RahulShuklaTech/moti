import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ExerciseFinishScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const resetNavigation = () => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'TodayNavigator' }],
    });
  };

  const myFunctionName = () => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'TodayNavigator' }],
    });
  };

  const lowerCase = input => {
    return input.toLowerCase();
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.Viewn3}>
        <XanoApi.FetchGetInspoGET>
          {({ loading, error, data, refetchGetInspo }) => {
            const fetchData = data;
            if (!fetchData || loading) {
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
              <Text style={[styles.Textk9, { color: theme.colors.strong }]}>
                {'Journal entry saved,\n'}
                {fetchData?.line}
              </Text>
            );
          }}
        </XanoApi.FetchGetInspoGET>
        <Image
          style={styles.ImageQO}
          source={Images.StrollingDoodle}
          resizeMode={'contain'}
        />
        <View
          style={[
            styles.Viewai,
            {
              backgroundColor: theme.colors.custom_rgb223_255_248,
              borderRadius: 10,
            },
          ]}
        >
          <XanoApi.FetchGetQuoteGET>
            {({ loading, error, data, refetchGetQuote }) => {
              const fetchData = data;
              if (!fetchData || loading) {
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
                  <Text style={[styles.TextR2, { color: theme.colors.strong }]}>
                    {fetchData?.Quote_Body}
                  </Text>

                  <Text style={[styles.TextoA, { color: theme.colors.strong }]}>
                    {fetchData?.Author}
                  </Text>
                </>
              );
            }}
          </XanoApi.FetchGetQuoteGET>
        </View>
        <IconButton
          onPress={() => {
            try {
              resetNavigation();
              myFunctionName();
              navigation.navigate('Tabs', {
                screen: 'TodayNavigator',
                params: { screen: 'TodayScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.IconButtonN5}
          icon={'AntDesign/arrowright'}
          size={32}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textk9: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 25,
    paddingTop: 40,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 35,
  },
  Fetch_9g: {
    minHeight: 40,
  },
  ImageQO: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  TextR2: {
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 10,
  },
  TextoA: {
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 24,
  },
  Fetch_18: {
    minHeight: 40,
  },
  Viewai: {
    width: '100%',
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  IconButtonN5: {
    marginTop: 40,
  },
  Viewn3: {
    alignItems: 'center',
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
});

export default withTheme(ExerciseFinishScreen);
