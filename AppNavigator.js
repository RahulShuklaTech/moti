import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AboutthisAppScreen from './screens/AboutthisAppScreen';
import AfternoonFocusScreen from './screens/AfternoonFocusScreen';
import AppSettingsScreen from './screens/AppSettingsScreen';
import CarddesignScreen from './screens/CarddesignScreen';
import DifficultThoughtsScreen from './screens/DifficultThoughtsScreen';
import EveningScreen from './screens/EveningScreen';
import ExerciseFinishGuidedScreen from './screens/ExerciseFinishGuidedScreen';
import ExerciseFinishRescueScreen from './screens/ExerciseFinishRescueScreen';
import ExerciseFinishScreen from './screens/ExerciseFinishScreen';
import GuidedExerciseInputScreen from './screens/GuidedExerciseInputScreen';
import GuidedExerciseInputTodayScreen from './screens/GuidedExerciseInputTodayScreen';
import GuidedExerciseIntroScreen from './screens/GuidedExerciseIntroScreen';
import GuidedHabitsScreen from './screens/GuidedHabitsScreen';
import GuidedIdeasScreen from './screens/GuidedIdeasScreen';
import GuidedJourneyScreen from './screens/GuidedJourneyScreen';
import GuidedPromptsScreen from './screens/GuidedPromptsScreen';
import GuidedReflectandExploreScreen from './screens/GuidedReflectandExploreScreen';
import GuidedRescueSessionsScreen from './screens/GuidedRescueSessionsScreen';
import GuidedScreen_JnaPRJD2 from './screens/GuidedScreen_JnaPRJD2';
import GuidedThemePromptsScreen from './screens/GuidedThemePromptsScreen';
import JourneyScreen from './screens/JourneyScreen';
import LogActivityScreen from './screens/LogActivityScreen';
import LogMoodGuidedScreen_PyPrkSTM from './screens/LogMoodGuidedScreen_PyPrkSTM';
import LogMoodGuidedoldScreen from './screens/LogMoodGuidedoldScreen';
import LogMoodScreen from './screens/LogMoodScreen';
import LoginScreen from './screens/LoginScreen';
import MorningPractiseScreen from './screens/MorningPractiseScreen';
import Onboard1Screen from './screens/Onboard1Screen';
import Onboard2Screen from './screens/Onboard2Screen';
import Onboard3Screen from './screens/Onboard3Screen';
import Onboard4Screen from './screens/Onboard4Screen';
import Onboard5Screen from './screens/Onboard5Screen';
import Onboard6Screen from './screens/Onboard6Screen';
import Onboard7Screen from './screens/Onboard7Screen';
import Onboard8Screen from './screens/Onboard8Screen';
import PasswordresetScreen from './screens/PasswordresetScreen';
import ProfileScreen from './screens/ProfileScreen';
import PromptInputGuidedScreen from './screens/PromptInputGuidedScreen';
import PromptInputTodayScreen from './screens/PromptInputTodayScreen';
import RescueExerciseInputScreen from './screens/RescueExerciseInputScreen';
import SOSinputScreen from './screens/SOSinputScreen';
import SetFavouritesScreen from './screens/SetFavouritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignupScreen from './screens/SignupScreen';
import TodayScreen from './screens/TodayScreen';
import YourdatastudioScreen from './screens/YourdatastudioScreen';
import Yourjournalingall2Screen from './screens/Yourjournalingall2Screen';
import YourjournalingtodayScreen from './screens/YourjournalingtodayScreen';
import Yourjournalingweek2Screen from './screens/Yourjournalingweek2Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
function TodayNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="TodayScreen">
      <Stack.Screen
        name="MorningPractiseScreen"
        component={MorningPractiseScreen}
        options={{ title: 'Morning Practise' }}
      />
      <Stack.Screen
        name="LogMoodScreen"
        component={LogMoodScreen}
        options={{ title: 'Log Mood' }}
      />
      <Stack.Screen
        name="LogActivityScreen"
        component={LogActivityScreen}
        options={{ title: 'Log Activity' }}
      />
      <Stack.Screen
        name="AfternoonFocusScreen"
        component={AfternoonFocusScreen}
        options={{ title: 'Afternoon Focus' }}
      />
      <Stack.Screen
        name="EveningScreen"
        component={EveningScreen}
        options={{ title: 'Evening ' }}
      />
      <Stack.Screen
        name="TodayScreen"
        component={TodayScreen}
        options={{ title: 'Today' }}
      />
      <Stack.Screen
        name="GuidedExerciseInputTodayScreen"
        component={GuidedExerciseInputTodayScreen}
        options={{ title: 'Guided Exercise Input Today' }}
      />
      <Stack.Screen
        name="ExerciseFinishScreen"
        component={ExerciseFinishScreen}
        options={{ title: 'Exercise Finish' }}
      />
      <Stack.Screen
        name="PromptInputTodayScreen"
        component={PromptInputTodayScreen}
        options={{ title: 'Prompt Input Today' }}
      />
    </Stack.Navigator>
  );
}

function GuidedNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="GuidedScreen_JnaPRJD2">
      <Stack.Screen
        name="ExerciseFinishGuidedScreen"
        component={ExerciseFinishGuidedScreen}
        options={{ title: 'Exercise Finish Guided' }}
      />
      <Stack.Screen
        name="GuidedExerciseIntroScreen"
        component={GuidedExerciseIntroScreen}
        options={{ title: 'Guided Exercise Intro' }}
      />
      <Stack.Screen
        name="GuidedExerciseInputScreen"
        component={GuidedExerciseInputScreen}
        options={{ title: 'Guided Exercise Input' }}
      />
      <Stack.Screen
        name="GuidedScreen_JnaPRJD2"
        component={GuidedScreen_JnaPRJD2}
        options={{ title: 'Guided' }}
      />
      <Stack.Screen
        name="GuidedReflectandExploreScreen"
        component={GuidedReflectandExploreScreen}
        options={{ title: 'Guided Reflect and Explore' }}
      />
      <Stack.Screen
        name="GuidedHabitsScreen"
        component={GuidedHabitsScreen}
        options={{ title: 'Guided Habits' }}
      />
      <Stack.Screen
        name="GuidedJourneyScreen"
        component={GuidedJourneyScreen}
        options={{ title: 'Guided Journey' }}
      />
      <Stack.Screen
        name="GuidedIdeasScreen"
        component={GuidedIdeasScreen}
        options={{ title: 'Guided Ideas' }}
      />
      <Stack.Screen
        name="GuidedThemePromptsScreen"
        component={GuidedThemePromptsScreen}
        options={{ title: 'Guided Theme Prompts' }}
      />
      <Stack.Screen
        name="PromptInputGuidedScreen"
        component={PromptInputGuidedScreen}
        options={{ title: 'Prompt Input Guided' }}
      />
      <Stack.Screen
        name="LogMoodGuidedScreen_PyPrkSTM"
        component={LogMoodGuidedScreen_PyPrkSTM}
        options={{ title: 'Log Mood Guided' }}
      />
      <Stack.Screen
        name="GuidedPromptsScreen"
        component={GuidedPromptsScreen}
        options={{ title: 'Guided Prompts' }}
      />
      <Stack.Screen
        name="DifficultThoughtsScreen"
        component={DifficultThoughtsScreen}
        options={{ title: 'Difficult Thoughts' }}
      />
      <Stack.Screen
        name="LogMoodGuidedoldScreen"
        component={LogMoodGuidedoldScreen}
        options={{ title: 'Log Mood Guided old' }}
      />
      <Stack.Screen
        name="CarddesignScreen"
        component={CarddesignScreen}
        options={{ title: '4 card design' }}
      />
    </Stack.Navigator>
  );
}

function YourJournaling() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="YourjournalingtodayScreen"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="Yourjournalingweek2Screen"
        component={Yourjournalingweek2Screen}
        options={{ title: 'Your journaling week 2' }}
      />
      <Stack.Screen
        name="Yourjournalingall2Screen"
        component={Yourjournalingall2Screen}
        options={{ title: 'Your journaling all 2' }}
      />
      <Stack.Screen
        name="YourjournalingtodayScreen"
        component={YourjournalingtodayScreen}
        options={{ title: 'Your journaling today' }}
      />
    </Stack.Navigator>
  );
}

function Rescue() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="RescueExerciseInputScreen"
        component={RescueExerciseInputScreen}
        options={{ title: 'Rescue Exercise Input' }}
      />
      <Stack.Screen
        name="ExerciseFinishRescueScreen"
        component={ExerciseFinishRescueScreen}
        options={{ title: 'Exercise Finish Rescue' }}
      />
      <Stack.Screen
        name="GuidedRescueSessionsScreen"
        component={GuidedRescueSessionsScreen}
        options={{ title: 'Guided Rescue Sessions' }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="TodayNavigator"
      tabBarOptions={{
        showLabel: true,
        showIcon: true,
        allowFontScaling: true,
        keyboardHidesTabBar: true,
        labelPosition: 'below-icon',
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.light,
        labelStyle: theme.typography.custom113,
        style: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.divider,
        },
      }}
    >
      <Tab.Screen
        name="TodayNavigator"
        component={TodayNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/white-balance-sunny"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.light}
            />
          ),
          tabBarLabel: 'Today',
          title: 'TodayNavigator',
        }}
      />
      <Tab.Screen
        name="Rescue"
        component={Rescue}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Foundation/heart"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.light}
            />
          ),
          tabBarLabel: 'Rescue',
          title: 'Rescue',
        }}
      />
      <Tab.Screen
        name="GuidedNavigator"
        component={GuidedNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-compass-sharp"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.light}
            />
          ),
          tabBarLabel: 'Guided',
          title: 'Guided Navigator',
        }}
      />
      <Tab.Screen
        name="YourJournaling"
        component={YourJournaling}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-book"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.light}
            />
          ),
          tabBarLabel: 'Journal',
          title: 'Your Journaling',
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="LoginScreen"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="PasswordresetScreen"
        component={PasswordresetScreen}
        options={{ title: 'Password reset' }}
      />
      <Stack.Screen
        name="Onboard2Screen"
        component={Onboard2Screen}
        options={{ title: 'Onboard 2' }}
      />
      <Stack.Screen
        name="Onboard1Screen"
        component={Onboard1Screen}
        options={{ title: 'Onboard 1' }}
      />
      <Stack.Screen
        name="Onboard3Screen"
        component={Onboard3Screen}
        options={{ title: 'Onboard 3' }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Login ' }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ title: 'Signup' }}
      />
      <Stack.Screen
        name="Onboard8Screen"
        component={Onboard8Screen}
        options={{ title: 'Onboard 8' }}
      />
      <Stack.Screen
        name="Onboard7Screen"
        component={Onboard7Screen}
        options={{ title: 'Onboard 7' }}
      />
      <Stack.Screen
        name="Onboard6Screen"
        component={Onboard6Screen}
        options={{ title: 'Onboard 6' }}
      />
      <Stack.Screen
        name="Onboard5Screen"
        component={Onboard5Screen}
        options={{ title: 'Onboard 5' }}
      />
      <Stack.Screen
        name="Onboard4Screen"
        component={Onboard4Screen}
        options={{ title: 'Onboard 4' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="YourdatastudioScreen"
        component={YourdatastudioScreen}
        options={{ title: 'Your data studio' }}
      />
      <Stack.Screen
        name="AboutthisAppScreen"
        component={AboutthisAppScreen}
        options={{ title: 'About this App' }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="SetFavouritesScreen"
        component={SetFavouritesScreen}
        options={{ title: 'Set Favourites' }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="StackNavigator"
        screenOptions={{
          headerTransparent: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{ title: 'App Settings' }}
        />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
        <Stack.Screen name="ProfileStack" component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
