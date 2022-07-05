// Place any imports required by your custom components at the top of
// this file. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section. The first import from
// 'react' is required.
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
} from 'react-native';
import { SvgCssUri } from 'react-native-svg';
//import react-native-gesture-handler

export function motiLogo() {
  const [uri, setUri] = React.useState(
    'https://www.motileo.com/assets/app/motileo_logo_final.svg'
  );
  return (
    <SvgCssUri
      onError={() =>
        setUri('https://www.motileo.com/assets/app/motileo_logo_final.svg')
      }
      width="100%"
      height="100%"
      uri={uri}
    />
  );
}
