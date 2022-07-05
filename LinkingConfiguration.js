/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
import { Platform } from 'react-native';
function renderLinkingPrefix() {
  try {
    return Linking.createURL('/');
  } catch (e) {
    return 'draftbit://';
  }
}

const prefix = renderLinkingPrefix();
const linking = {
  enabled: Platform.OS === 'web' ? false : true,
  prefixes: [prefix],
  config: {
    screens: {
      Tabs: {
        screens: {
          TodayNavigator: {
            screens: {},
          },
          GuidedNavigator: {
            screens: {},
          },
          YourJournaling: {
            screens: {},
          },
          Rescue: {
            screens: {},
          },
        },
        TodayNavigator: {
          screens: {},
        },
        GuidedNavigator: {
          screens: {},
        },
        YourJournaling: {
          screens: {},
        },
        Rescue: {
          screens: {},
        },
      },
      StackNavigator: {
        screens: {},
      },
      ProfileStack: {
        screens: {},
      },
    },
  },
};

export default linking;
