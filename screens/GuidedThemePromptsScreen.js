import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import Images from '../config/Images';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const GuidedThemePromptsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View>
        <View style={styles.Viewsq}>
          <ImageBackground
            style={styles.ImageBackgroundKh}
            resizeMode={'cover'}
            source={Images.Guidedheader}
          >
            <View style={styles.ViewMS}>
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
                  style={styles.Imagejs}
                  source={Images.Arrow}
                  resizeMode={'cover'}
                />
              </Touchable>
            </View>
          </ImageBackground>
        </View>

        <View style={{ backgroundColor: theme.colors.primary }}>
          <View
            style={[
              styles.Viewo2,
              {
                backgroundColor: theme.colors.divider,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            ]}
          >
            <XanoApi.FetchFetchPromptsByTheirCategoryGET categories_id={3}>
              {({
                loading,
                error,
                data,
                refetchFetchPromptsByTheirCategory,
              }) => {
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
                  <Text style={[styles.TextOX, { color: theme.colors.strong }]}>
                    {props.route?.params?.Cat_name ?? 'Gratitiude'}
                  </Text>
                );
              }}
            </XanoApi.FetchFetchPromptsByTheirCategoryGET>
          </View>
        </View>
      </View>

      <View style={[styles.ViewJA, { backgroundColor: theme.colors.divider }]}>
        <XanoApi.FetchFetchPromptsByTheirCategoryGET
          categories_id={props.route?.params?.id ?? 3}
        >
          {({ loading, error, data, refetchFetchPromptsByTheirCategory }) => {
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
              <FlatList
                data={fetchData}
                listKey={'d5X6bOla'}
                keyExtractor={({ item }) => item?.id || item?.uuid || item}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('PromptInputGuidedScreen', {
                            prompt_id: listData?.id,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewwY,
                          {
                            backgroundColor: theme.colors.strongInverse,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextKV,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {listData?.Prompt}
                        </Text>
                      </View>
                    </Touchable>
                  );
                }}
                contentContainerStyle={styles.FlatListd5Content}
                numColumns={1}
              />
            );
          }}
        </XanoApi.FetchFetchPromptsByTheirCategoryGET>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagejs: {
    width: 30,
    height: 30,
  },
  ViewMS: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  ImageBackgroundKh: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    minHeight: 100,
    maxHeight: 150,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  Viewsq: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    minWidth: '100%',
    maxHeight: 150,
  },
  TextOX: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  FetchWW: {
    minHeight: 40,
  },
  Viewo2: {
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Textyl: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    marginBottom: 10,
  },
  TextKV: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
  },
  ViewwY: {
    minHeight: 20,
    marginBottom: 15,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  FlatListd5Content: {
    flex: 1,
  },
  FetchnM: {
    minHeight: 40,
  },
  ViewJA: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default withTheme(GuidedThemePromptsScreen);
