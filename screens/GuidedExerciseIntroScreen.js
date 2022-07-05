import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const GuidedExerciseIntroScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const {
    isLoading: screenLoading,
    data: screenData,
    error: screenError,
  } = XanoApi.useFetchExerciseGET({ id: 1 });

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');
  if (screenLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (screenError) {
    return null;
  }

  if (!screenData) {
    return null;
  }

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={false}
      hasSafeArea={true}
    >
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <View
          style={[
            styles.ViewI3,
            { backgroundColor: theme.colors.custom_rgb223_255_248 },
          ]}
        >
          <XanoApi.FetchFetchExerciseGET id={props.route?.params?.id ?? 81}>
            {({ loading, error, data, refetchFetchExercise }) => {
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
                  <View
                    style={[
                      styles.ViewBW,
                      { backgroundColor: theme.colors.primary },
                    ]}
                  >
                    <View style={styles.Viewef}>
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
                          style={styles.Imaged3}
                          source={Images.Arrow}
                          resizeMode={'cover'}
                        />
                      </Touchable>
                    </View>

                    <Text
                      style={[styles.TextDb, { color: theme.colors.strong }]}
                    >
                      {fetchData?.name}
                    </Text>
                  </View>

                  <View style={{ backgroundColor: theme.colors.primary }}>
                    <View
                      style={[
                        styles.ViewHq,
                        {
                          backgroundColor: theme.colors.custom_rgb223_255_248,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                      ]}
                    />
                  </View>

                  <View
                    style={[
                      styles.ViewNN,
                      { backgroundColor: theme.colors.custom_rgb223_255_248 },
                    ]}
                  >
                    <View style={styles.Viewaq}>
                      <Icon
                        style={styles.IconfC}
                        name={'FontAwesome/diamond'}
                        size={20}
                      />
                      <Text
                        style={[styles.TextAJ, { color: theme.colors.strong }]}
                      >
                        {'Overview'}
                      </Text>
                    </View>

                    <Text
                      style={[styles.Text_8o, { color: theme.colors.strong }]}
                    >
                      {fetchData?.Overview}
                    </Text>

                    <View style={styles.ViewO1}>
                      <Icon
                        style={styles.IconSX}
                        name={'MaterialCommunityIcons/lightbulb-outline'}
                        size={20}
                      />
                      <Text
                        style={[styles.Text_3O, { color: theme.colors.strong }]}
                      >
                        {'How it helps'}
                      </Text>
                    </View>

                    <Text
                      style={[styles.TextjW, { color: theme.colors.strong }]}
                    >
                      {fetchData?.How_it_helps}
                    </Text>
                  </View>
                </>
              );
            }}
          </XanoApi.FetchFetchExerciseGET>
        </View>
      </ScrollView>

      <View
        style={[
          styles.ViewaP,
          { borderRadius: 0, backgroundColor: theme.colors.strongInverse },
        ]}
      >
        <ButtonSolid
          style={[
            styles.ButtonSolidob,
            {
              backgroundColor: theme.colors.primary,
              color: theme.colors.strong,
            },
          ]}
          title={'Start exercise'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imaged3: {
    width: 30,
    height: 30,
  },
  Viewef: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  TextDb: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
  },
  ViewBW: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
    minWidth: '100%',
    paddingBottom: 20,
    maxHeight: 150,
    alignItems: 'flex-start',
  },
  ViewHq: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  IconfC: {
    marginRight: 10,
  },
  TextAJ: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  Viewaq: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text_8o: {
    fontFamily: 'Montserrat_500Medium',
    marginTop: 20,
  },
  IconSX: {
    marginRight: 10,
  },
  Text_3O: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  ViewO1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  TextjW: {
    fontFamily: 'Montserrat_500Medium',
    marginTop: 20,
  },
  ViewNN: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  FetchmU: {
    minHeight: 40,
  },
  ViewI3: {
    paddingBottom: 100,
  },
  ButtonSolidob: {
    borderRadius: 10,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
  },
  ViewaP: {
    height: 70,
    position: 'absolute',
    right: 0,
    bottom: 0,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    width: '100%',
  },
});

export default withTheme(GuidedExerciseIntroScreen);
