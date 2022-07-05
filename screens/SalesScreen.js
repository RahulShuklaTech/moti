import React from 'react';
import * as MotileoAPIApi from '../apis/MotileoAPIApi.js';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const SalesScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasTopSafeArea={true}>
      <View style={styles.Viewqn}>
        <Image
          style={styles.ImageBF}
          resizeMode={'cover'}
          source={{
            uri: 'https://motileo.ams3.digitaloceanspaces.com/logos/motileo_full.png',
          }}
        />
        <View style={styles.ViewkB}>
          <IconButton
            icon={'Feather/filter'}
            size={25}
            color={theme.colors.strong}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <MotileoAPIApi.Fetch$sales$getCompanySalesGET>
          {({ loading, error, data, refetch$sales$getCompanySales }) => {
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
                data={fetchData?.repeat}
                listKey={'YWvqmKso'}
                keyExtractor={({ item }) => item?.id || item?.uuid || item}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles.ViewMI}>
                      <ScrollView
                        style={styles.ScrollViewoA}
                        contentContainerStyle={styles.ScrollViewoAContent}
                        showsVerticalScrollIndicator={false}
                        bounces={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <View style={styles.ViewLL}>
                          <View style={styles.Vieway}>
                            <View style={[styles.ViewV8, { borderRadius: 5 }]}>
                              <Image
                                style={styles.ImagejX}
                                source={{
                                  uri: `${listData?.signDownloadProfilePic}`,
                                }}
                                resizeMode={'cover'}
                              />
                            </View>

                            <Text
                              style={[
                                styles.TextyD,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.FirstName}
                            </Text>
                          </View>

                          <View style={styles.Viewgg}>
                            <View style={[styles.Viewmh, { borderRadius: 5 }]}>
                              <Image
                                style={styles.ImagePl}
                                source={{
                                  uri: `${listData?.productSignedPic}`,
                                }}
                                resizeMode={'cover'}
                              />
                            </View>

                            <Text
                              style={[
                                styles.TextMM,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.productTitle}{' '}
                            </Text>

                            <Text style={{ color: theme.colors.strong }}>
                              {'€'}
                              {listData?.Amount}
                            </Text>
                          </View>

                          <View style={styles.ViewbU}>
                            <Text style={{ color: theme.colors.strong }}>
                              {listData?.dateTimeUTC}
                            </Text>
                          </View>
                        </View>
                      </ScrollView>
                    </View>
                  );
                }}
                contentContainerStyle={styles.FlatListYWContent}
                numColumns={1}
              />
            );
          }}
        </MotileoAPIApi.Fetch$sales$getCompanySalesGET>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBF: {
    width: '35%',
    height: 25,
  },
  ViewkB: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewqn: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    justifyContent: 'space-between',
    paddingTop: 10,
    flexDirection: 'row',
  },
  ImagejX: {
    width: 60,
    height: 60,
  },
  ViewV8: {
    overflow: 'hidden',
    marginRight: 10,
  },
  TextyD: {
    marginRight: 10,
    fontSize: 16,
  },
  Vieway: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    width: 130,
  },
  ImagePl: {
    width: 40,
    height: 40,
    overflow: 'hidden',
  },
  Viewmh: {
    overflow: 'hidden',
    justifyContent: 'center',
    marginRight: 10,
  },
  TextMM: {
    marginRight: 10,
  },
  Viewgg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  ViewbU: {
    justifyContent: 'center',
  },
  ViewLL: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  ScrollViewoA: {
    width: '200%',
  },
  ScrollViewoAContent: {
    paddingRight: 16,
  },
  ViewMI: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  FlatListYWContent: {
    flex: 1,
  },
  FetchNG: {
    minHeight: 40,
  },
});

export default withTheme(SalesScreen);
