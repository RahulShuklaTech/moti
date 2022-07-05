import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const AppSettingsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.View_2E}>
        <Text style={[styles.TextYX, { color: theme.colors.strong }]}>
          {'Settings'}
        </Text>
      </View>

      <View style={styles.ViewkL}>
        <Touchable>
          <View style={styles.Viewv2}>
            <View style={styles.ViewKa}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/user-circle'}
              />
              <Text
                style={[styles.TexthT, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Account Settings'}
              </Text>
            </View>

            <View style={styles.Viewtn}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerXe}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.Viewns}>
            <View style={styles.Viewbn}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/bell'}
              />
              <Text
                style={[styles.TexttN, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Notifications'}
              </Text>
            </View>

            <View style={styles.ViewDd}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerIV}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewWF}>
            <View style={styles.ViewBr}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialIcons/chat-bubble'}
              />
              <Text
                style={[styles.TextaI, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Support'}
              </Text>
            </View>

            <View style={styles.View_7r}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DivideriX}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.View_0e}>
            <View style={styles.ViewcV}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/questioncircle'}
              />
              <Text
                style={[styles.Text_3E, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'FAQ'}
              </Text>
            </View>

            <View style={styles.Viewxa}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerCM}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.Viewti}>
            <View style={styles.ViewnY}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[styles.Text_2G, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>

            <View style={styles.ViewpU}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividere3}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>

      <View style={styles.ViewK6}></View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextYX: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_2E: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TexthT: {
    marginLeft: 12,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewKa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewv2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerXe: {
    height: 1,
  },
  TexttN: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewbn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewDd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerIV: {
    height: 1,
  },
  TextaI: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewBr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_7r: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewWF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DivideriX: {
    height: 1,
  },
  Text_3E: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewcV: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewxa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_0e: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerCM: {
    height: 1,
  },
  Text_2G: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewnY: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewpU: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewti: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividere3: {
    height: 1,
  },
  ViewkL: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 24,
    marginRight: 24,
  },
  Text_98: {
    textAlign: 'center',
  },
  Viewcs: {
    flexGrow: 1,
    flexShrink: 0,
    minHeight: 54,
    justifyContent: 'center',
  },
  ViewK6: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(AppSettingsScreen);
