import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AddpostScreen from './screens/AddpostScreen';
import AddsaleScreen from './screens/AddsaleScreen';
import DashboardScreen from './screens/DashboardScreen';
import EmailinputpaswordlessScreen from './screens/EmailinputpaswordlessScreen';
import GameScreen from './screens/GameScreen';
import LoggedinsuccessfullyScreen from './screens/LoggedinsuccessfullyScreen';
import OTPfromemailScreen from './screens/OTPfromemailScreen';
import OverviewScreen from './screens/OverviewScreen';
import ProfileScreen from './screens/ProfileScreen';
import SalesScreen from './screens/SalesScreen';

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
function OverviewStack() {
  return (
    <Stack.Navigator
      mode="card"
      headerMode="none"
      screenOptions={{
        headerTransparent: false,
      }}
    >
      <Stack.Screen
        name="OverviewScreen"
        component={OverviewScreen}
        options={{
          headerTransparent: false,
          gestureEnabled: true,
          animationEnabled: true,
          title: 'Overview',
        }}
      />
    </Stack.Navigator>
  );
}

function SalesStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="SalesScreen"
        component={SalesScreen}
        options={{ title: 'Sales' }}
      />
    </Stack.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
    </Stack.Navigator>
  );
}

function GameStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerTitle: 'Battles', title: 'Game' }}
      />
    </Stack.Navigator>
  );
}

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="OverviewStack"
      tabBarOptions={{
        showLabel: false,
        labelPosition: 'below-icon',
        inactiveTintColor: theme.colors.strong,
        labelStyle: theme.typography.custom14,
        style: {
          backgroundColor: theme.colors.background,
          borderTopColor: null,
        },
      }}
      lazy={false}
      backBehavior="none"
    >
      <Tab.Screen
        name="OverviewStack"
        component={OverviewStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          title: 'Overview Stack',
        }}
      />
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/dashboard"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          title: 'Dashboard Stack',
        }}
      />
      <Tab.Screen
        name="AddsaleScreen"
        component={AddsaleScreen}
        options={{
          title: 'Add sale',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/pluscircleo"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SalesStack"
        component={SalesStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/attach-money"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          title: 'Sales Stack',
        }}
      />
      <Tab.Screen
        name="GameStack"
        component={GameStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/sword-cross"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          title: 'Game Stack',
        }}
      />
    </Tab.Navigator>
  );
}

function Auth() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="EmailinputpaswordlessScreen"
    >
      <Stack.Screen
        name="LoggedinsuccessfullyScreen"
        component={LoggedinsuccessfullyScreen}
        options={{ title: 'logged in successfully' }}
      />
      <Stack.Screen
        name="EmailinputpaswordlessScreen"
        component={EmailinputpaswordlessScreen}
        options={{ title: 'Email input paswordless' }}
      />
      <Stack.Screen
        name="OTPfromemailScreen"
        component={OTPfromemailScreen}
        options={{ title: 'OTP from email' }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        mode="card"
        headerMode="none"
        initialRouteName="Auth"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.strong,
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true,
          animationEnabled: true,
          headerTitleStyle: theme.typography.custom17,
        }}
      >
        <Stack.Screen
          name="AddpostScreen"
          component={AddpostScreen}
          options={{ title: 'Add post' }}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Auth" component={Auth} />
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
