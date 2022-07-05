import React from 'react';
import * as MotileoAPIApi from '../apis/MotileoAPIApi.js';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
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

const OverviewScreen = props => {
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

  const [add_post_action, setAdd_post_action] = React.useState(false);
  const [company_posts, setCompany_posts] = React.useState([]);
  const [expoPush, setExpoPush] = React.useState('');
  const [feed_post_type, setFeed_post_type] = React.useState('');

  return (
    <ScreenContainer
      hasTopSafeArea={true}
      hasBottomSafeArea={false}
      hasSafeArea={false}
    >
      <View style={styles.Viewyi}>
        <Image
          style={styles.Imagebt}
          resizeMode={'cover'}
          source={{
            uri: 'https://motileo.ams3.digitaloceanspaces.com/logos/motileo_full.png',
          }}
        />
        <View style={styles.View_6G}>
          <IconButton
            onPress={() => {
              try {
                setAdd_post_action(true);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.IconButtonda}
            icon={'Feather/plus-square'}
            size={25}
            color={theme.colors.strong}
          />
          <IconButton
            icon={'Feather/inbox'}
            size={25}
            color={theme.colors.strong}
          />
        </View>
      </View>

      <View style={styles.View_2r}>
        <View style={styles.View_3W}>
          <Touchable
            onPress={() => {
              try {
                setFeed_post_type('all');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableJG}
          >
            <Text style={[styles.Textg6, { color: theme.colors.strong }]}>
              {'All'}
            </Text>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                setFeed_post_type('by_user');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchablew6}
          >
            <View style={styles.Viewjm}>
              <Icon
                style={styles.Iconi2}
                name={'MaterialCommunityIcons/comment'}
                size={15}
                color={theme.colors.light}
              />
              <Text style={[styles.Textyg, { color: theme.colors.strong }]}>
                {'Posts'}
              </Text>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                setFeed_post_type('battles');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles.Viewxb}>
              <Icon
                style={styles.IconwM}
                name={'MaterialCommunityIcons/sword-cross'}
                size={15}
                color={theme.colors.light}
              />
              <Text style={[styles.Textea, { color: theme.colors.strong }]}>
                {'Battles'}
              </Text>
            </View>
          </Touchable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <MotileoAPIApi.FetchCompanyPostsGET
            list_offset={0}
            post_type={feed_post_type}
            posts_limit={20}
          >
            {({ loading, error, data, refetchCompanyPosts }) => {
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
                  data={fetchData?.get_each_posts}
                  listKey={'5xf7ghbc'}
                  keyExtractor={({ item }) => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View
                        style={[
                          styles.Viewtb,
                          {
                            backgroundColor: theme.colors.surface,
                            borderRadius: 10,
                          },
                        ]}
                      >
                        <View style={styles.ViewtG}>
                          <>
                            {!listData?.query_user_details?.FirstName ? null : (
                              <View style={styles.VieweZ}>
                                <View
                                  style={[styles.Viewcw, { borderRadius: 10 }]}
                                >
                                  <Image
                                    style={styles.ImageHg}
                                    source={{
                                      uri: `${listData?.signDownloadProfilePic}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                </View>

                                <Text
                                  style={[
                                    styles.TextFa,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {listData?.query_user_details?.FirstName}{' '}
                                  {listData?.query_user_details?.LastName}
                                </Text>
                              </View>
                            )}
                          </>
                          <>
                            {listData?.query_user_details?.FirstName ? null : (
                              <View style={styles.Viewhg}>
                                <Icon
                                  style={styles.IconPZ}
                                  name={'MaterialCommunityIcons/sword'}
                                  size={30}
                                  color={theme.colors.primary}
                                />
                                <Text
                                  style={[
                                    styles.TextoC,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {listData?.Title}
                                </Text>
                              </View>
                            )}
                          </>
                          <IconButton
                            icon={'Entypo/dots-three-horizontal'}
                            size={22}
                            color={theme.colors.light}
                          />
                        </View>
                        <>
                          {!listData?.opponent_profilepic ? null : (
                            <View style={styles.ViewJv}>
                              <View
                                style={[styles.ViewWc, { borderRadius: 10 }]}
                              >
                                <View
                                  style={[
                                    styles.Viewy1,
                                    {
                                      borderBottomRightRadius: 10,
                                      backgroundColor: theme.colors.secondary,
                                      borderTopRightRadius: 10,
                                    },
                                  ]}
                                >
                                  <Image
                                    style={styles.Imagehy}
                                    source={{
                                      uri: `${listData?.challenger_profilepic}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                  <Text
                                    style={[
                                      styles.Text_6M,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {listData?.query_challenger?.FirstName}
                                  </Text>
                                  <>
                                    {listData?.challenger_battle_status ? null : (
                                      <Text
                                        style={[
                                          styles.TextPI,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {
                                          listData?.query_battle_details
                                            ?.challenger_taunt
                                        }
                                      </Text>
                                    )}
                                  </>
                                  <>
                                    {!listData?.challenger_battle_status ? null : (
                                      <Text
                                        style={[
                                          styles.TextaJ,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {listData?.challenger_battle_status}
                                      </Text>
                                    )}
                                  </>
                                </View>
                              </View>

                              <View style={styles.ViewJ9}>
                                <Icon
                                  name={'MaterialCommunityIcons/sword-cross'}
                                  size={35}
                                  color={theme.colors.strong}
                                />
                              </View>

                              <View
                                style={[styles.View_5h, { borderRadius: 10 }]}
                              >
                                <View
                                  style={[
                                    styles.Viewzy,
                                    {
                                      backgroundColor: theme.colors.secondary,
                                      borderTopLeftRadius: 10,
                                      borderBottomLeftRadius: 10,
                                    },
                                  ]}
                                >
                                  <Image
                                    style={styles.Image_4O}
                                    source={{
                                      uri: `${listData?.opponent_profilepic}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                  <Text
                                    style={[
                                      styles.TextOa,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {listData?.query_opponent?.FirstName}
                                  </Text>
                                  <>
                                    {listData?.challenger_battle_status ? null : (
                                      <Text
                                        style={[
                                          styles.Text_6V,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {
                                          listData?.query_battle_details
                                            ?.opponent_taunt
                                        }
                                      </Text>
                                    )}
                                  </>
                                  <>
                                    {!listData?.challenger_battle_status ? null : (
                                      <Text
                                        style={[
                                          styles.Textuf,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {listData?.opponent_battle_status}
                                      </Text>
                                    )}
                                  </>
                                </View>
                              </View>
                            </View>
                          )}
                        </>
                        <>
                          {!listData?.Text ? null : (
                            <View style={styles.ViewyF}>
                              <>
                                {!listData?.Text ? null : (
                                  <Text
                                    style={[
                                      styles.TextAb,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {listData?.Text}
                                  </Text>
                                )}
                              </>
                              <>
                                {!listData?.post_picture_large ? null : (
                                  <Image
                                    style={styles.Image_4q}
                                    source={{
                                      uri: `${listData?.post_picture_large}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                )}
                              </>
                            </View>
                          )}
                        </>
                        <View style={styles.View_2E}>
                          <View style={styles.ViewSy}>
                            <>
                              {listData?.check_likes?.length ? null : (
                                <IconButton
                                  style={styles.IconButtonVC}
                                  size={23}
                                  icon={'FontAwesome/heart-o'}
                                  color={theme.colors.strong}
                                />
                              )}
                            </>
                            <>
                              {!listData?.check_likes?.length ? null : (
                                <IconButton
                                  style={styles.IconButtonbY}
                                  size={23}
                                  icon={'FontAwesome/heart'}
                                  color={theme.colors.custom_rgb217_63_63}
                                />
                              )}
                            </>
                            <Text
                              style={[
                                styles.Text_9o,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.total_likes_of_post}
                            </Text>
                            <>
                              {listData?.get_comment?.length ? null : (
                                <IconButton
                                  style={styles.IconButtonby}
                                  size={23}
                                  icon={
                                    'MaterialCommunityIcons/comment-multiple-outline'
                                  }
                                  color={theme.colors.strong}
                                />
                              )}
                            </>
                            <>
                              {!listData?.get_comment?.length ? null : (
                                <IconButton
                                  style={styles.IconButtonkE}
                                  size={23}
                                  icon={
                                    'MaterialCommunityIcons/comment-multiple'
                                  }
                                  color={theme.colors.strong}
                                />
                              )}
                            </>
                            <Text
                              style={[
                                styles.TextpC,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.comments_count}
                            </Text>
                          </View>

                          <View style={styles.ViewbP}>
                            <Text style={{ color: theme.colors.strong }}>
                              {listData?.created_time_text}
                            </Text>
                          </View>
                        </View>
                        <>
                          {!listData?.get_comment?.length ? null : (
                            <View style={styles.ViewBj}>
                              <Text style={{ color: theme.colors.strong }}>
                                {'View '}
                                {listData?.comments_count}
                                {' comments...'}
                              </Text>
                            </View>
                          )}
                        </>
                      </View>
                    );
                  }}
                  contentContainerStyle={styles.FlatList_5xContent}
                  numColumns={1}
                  horizontal={false}
                />
              );
            }}
          </MotileoAPIApi.FetchCompanyPostsGET>
        </ScrollView>
      </View>

      <ActionSheet visible={add_post_action}>
        <ActionSheetItem
          onPress={() => {
            try {
              setAdd_post_action(false);
              navigation.navigate('AddpostScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ActionSheetItemZu,
            { backgroundColor: theme.colors.strong },
          ]}
          label={'Create feed post'}
          color={theme.colors.background}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setAdd_post_action(false);
            } catch (err) {
              console.error(err);
            }
          }}
          style={{ backgroundColor: theme.colors.strong }}
          label={'Cancel'}
          color={theme.colors.error}
        />
      </ActionSheet>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagebt: {
    width: '35%',
    height: 25,
  },
  IconButtonda: {
    marginRight: 20,
  },
  View_6G: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewyi: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    justifyContent: 'space-between',
    paddingTop: 10,
    flexDirection: 'row',
  },
  Textg6: {
    paddingTop: 16,
  },
  TouchableJG: {
    marginRight: 25,
  },
  Iconi2: {
    right: 5,
  },
  Textyg: {
    paddingTop: 16,
  },
  Viewjm: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  Touchablew6: {
    marginRight: 25,
  },
  IconwM: {
    right: 5,
  },
  Textea: {
    paddingTop: 16,
  },
  Viewxb: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  View_3W: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ImageHg: {
    width: 35,
    height: 35,
  },
  Viewcw: {
    overflow: 'hidden',
    marginRight: 10,
  },
  TextFa: {
    fontSize: 16,
  },
  VieweZ: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconPZ: {
    marginRight: 10,
  },
  TextoC: {
    fontSize: 16,
  },
  Viewhg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewtG: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  Imagehy: {
    width: '100%',
    height: 100,
    overflow: 'hidden',
  },
  Text_6M: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: 'right',
  },
  TextPI: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
    textAlign: 'right',
  },
  TextaJ: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 18,
    textAlign: 'right',
  },
  Viewy1: {
    overflow: 'hidden',
  },
  ViewWc: {
    width: '40%',
  },
  ViewJ9: {
    width: '10%',
    alignItems: 'center',
  },
  Image_4O: {
    width: '100%',
    height: 100,
    overflow: 'hidden',
  },
  TextOa: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  Text_6V: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  Textuf: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 18,
  },
  Viewzy: {
    overflow: 'hidden',
  },
  View_5h: {
    width: '40%',
  },
  ViewJv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  TextAb: {
    paddingLeft: 16,
    paddingRight: 16,
    lineHeight: 26,
    fontSize: 16,
  },
  Image_4q: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
    marginTop: 20,
  },
  ViewyF: {
    marginTop: 10,
  },
  IconButtonVC: {
    marginRight: 16,
  },
  IconButtonbY: {
    marginRight: 16,
  },
  Text_9o: {
    marginRight: 20,
  },
  IconButtonby: {
    marginRight: 16,
  },
  IconButtonkE: {
    marginRight: 16,
  },
  TextpC: {
    marginRight: 16,
  },
  ViewSy: {
    paddingRight: 16,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ViewbP: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  View_2E: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
  },
  ViewBj: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewtb: {
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  FlatList_5xContent: {
    flex: 1,
    marginBottom: 20,
  },
  FetchIb: {
    minHeight: 40,
  },
  View_2r: {
    height: '100%',
  },
  ActionSheetItemZu: {
    textAlign: 'center',
  },
});

export default withTheme(OverviewScreen);
