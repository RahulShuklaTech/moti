import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, StyleSheet, View } from 'react-native';

const AddpostScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      setGlobalVariableValue({
        key: 'imageUrl',
        value:
          'https://motileo.ams3.digitaloceanspaces.com/placeholders/imageplaceholder.jpg',
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer hasTopSafeArea={true} hasBottomSafeArea={true}>
      <View style={styles.Viewbb}>
        <View style={styles.View_3v}>
          <IconButton
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Ionicons/chevron-back-outline'}
            size={30}
            color={theme.colors.strong}
          />
        </View>
        <Image
          style={styles.ImageDl}
          resizeMode={'cover'}
          source={{
            uri: 'https://motileo.ams3.digitaloceanspaces.com/logos/motileo_full.png',
          }}
        />
      </View>

      <View>
        <View style={[styles.ViewRS, { borderRadius: 10 }]}>
          <Image
            style={styles.ImageIj}
            source={{ uri: `${Constants['imageUrl']}` }}
            resizeMode={'contain'}
          />
        </View>

        <View style={styles.Viewhz}>
          <ButtonSolid
            onPress={async () => {
              try {
                const image_url = await Utils.openImagePicker({
                  mediaTypes: null,
                  allowsEditing: true,
                  quality: null,
                });
                setGlobalVariableValue({
                  key: 'imageUrl',
                  value: image_url,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidQ5,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Upload Picture'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_3v: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageDl: {
    width: '35%',
    height: 25,
  },
  Viewbb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    justifyContent: 'space-between',
    paddingTop: 10,
    flexDirection: 'row',
  },
  ImageIj: {
    width: '100%',
    height: '100%',
  },
  ViewRS: {
    overflow: 'hidden',
  },
  ButtonSolidQ5: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
  },
  Viewhz: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    paddingBottom: 40,
    position: 'absolute',
    width: '100%',
    bottom: 20,
  },
});

export default withTheme(AddpostScreen);
