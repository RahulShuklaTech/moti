import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const CarddesignScreen = props => {
  const { theme } = props;

  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [searchBarValue2, setSearchBarValue2] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.strongInverse }}
      scrollable={true}
      hasSafeArea={true}
    >
      <View
        style={[styles.ViewDi, { backgroundColor: theme.colors.strongInverse }]}
      >
        <View style={styles.ViewP9}>
          <Text style={[styles.TextIu, { color: theme.colors.strong }]}>
            {'Your feel good toolkit'}
          </Text>
        </View>
      </View>

      <View style={styles.View_0h}>
        <Text style={[styles.Text_6J, { color: theme.colors.strong }]}>
          {'Record & reflect'}
        </Text>
      </View>

      <View style={styles.ViewTI}>
        <Touchable style={styles.Touchable_0o}>
          <View
            style={[
              styles.Viewib,
              { backgroundColor: theme.colors.card_green, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.Image_8Y}
              source={Images.Heart}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.Textc4, { color: theme.colors.strong }]}>
            {'Log your mood'}
          </Text>
        </Touchable>
        <View style={styles.ViewoP} />
        <Touchable style={styles.Touchablear}>
          <View
            style={[
              styles.Viewqx,
              { backgroundColor: theme.colors.card_green, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.Image_3S}
              source={Images.Doc}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.Textyg, { color: theme.colors.strong }]}>
            {'Happiness\njournal'}
          </Text>
        </Touchable>
        <View style={styles.ViewP1} />
        <Touchable style={styles.TouchableAR}>
          <View
            style={[
              styles.Viewix,
              { backgroundColor: theme.colors.card_green, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.Imagelv}
              source={Images.Cookie}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.TextB3, { color: theme.colors.strong }]}>
            {'Log habits / activites'}
          </Text>
        </Touchable>
        <View style={styles.ViewaL} />
        <Touchable style={styles.TouchablekK}>
          <View
            style={[
              styles.ViewbL,
              { backgroundColor: theme.colors.card_green, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.ImageJa}
              source={Images.Pen}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.Textic, { color: theme.colors.strong }]}>
            {'Reflective prompts'}
          </Text>
        </Touchable>
      </View>

      <View style={styles.Viewmz}>
        <Text style={[styles.TextY9, { color: theme.colors.strong }]}>
          {'Anxiety & stress'}
        </Text>
      </View>

      <View style={styles.ViewUV}>
        <Touchable style={styles.TouchablezC}>
          <View
            style={[
              styles.ViewLr,
              { backgroundColor: theme.colors.red_card, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.Imagex5}
              source={Images.ConfusedEmoji}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.TextGF, { color: theme.colors.strong }]}>
            {'Log your mood'}
          </Text>
        </Touchable>
        <View style={styles.ViewY0} />
        <Touchable style={styles.TouchableSp}>
          <View
            style={[
              styles.Viewxz,
              { backgroundColor: theme.colors.red_card, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.ImagenR}
              source={Images.Group2434}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.TextRA, { color: theme.colors.strong }]}>
            {'Happiness\njournal'}
          </Text>
        </Touchable>
        <View style={styles.Viewuv} />
        <Touchable style={styles.TouchablepD}>
          <View
            style={[
              styles.Viewew,
              { backgroundColor: theme.colors.red_card, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.Imagekw}
              source={Images.Group2435}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.TextJ3, { color: theme.colors.strong }]}>
            {'Log habits / activites'}
          </Text>
        </Touchable>
        <View style={styles.View_3c} />
        <Touchable style={styles.TouchableWc}>
          <View
            style={[
              styles.Viewb2,
              { backgroundColor: theme.colors.red_card, borderRadius: 3 },
            ]}
          >
            <Image
              style={styles.ImageUj}
              source={Images.Zap}
              resizeMode={'contain'}
            />
          </View>

          <Text style={[styles.Textyt, { color: theme.colors.strong }]}>
            {'Reflective prompts'}
          </Text>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextIu: {
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 6,
  },
  ViewP9: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Textoz: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewDa: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableEx: {
    width: 100,
  },
  TextKq: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  ViewWn: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_7g: {
    width: 100,
  },
  ViewpZ: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    minHeight: 30,
    width: 210,
    justifyContent: 'space-around',
  },
  ViewDi: {
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingRight: 30,
    paddingTop: 40,
    minWidth: '100%',
    paddingBottom: 20,
    maxHeight: 150,
  },
  TextEA: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  ViewRb: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_6r: {
    marginRight: 10,
  },
  TextZP: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  Viewgt: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_3c: {
    marginRight: 10,
  },
  Viewyv: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  Text_6J: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  View_0h: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 20,
  },
  Image_8Y: {
    width: 40,
    height: 40,
  },
  Viewib: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textc4: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  Touchable_0o: {
    maxWidth: 80,
  },
  ViewoP: {
    width: 10,
  },
  Image_3S: {
    width: 40,
    height: 40,
  },
  Viewqx: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textyg: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  Touchablear: {
    maxWidth: 80,
  },
  ViewP1: {
    width: 10,
  },
  Imagelv: {
    width: 40,
    height: 40,
  },
  Viewix: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextB3: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  TouchableAR: {
    maxWidth: 80,
  },
  ViewaL: {
    width: 10,
  },
  ImageJa: {
    width: 40,
    height: 40,
  },
  ViewbL: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textic: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  TouchablekK: {
    maxWidth: 80,
  },
  ViewTI: {
    minHeight: 100,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TextY9: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  Viewmz: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 40,
  },
  Imagex5: {
    width: 40,
    height: 40,
  },
  ViewLr: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextGF: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  TouchablezC: {
    maxWidth: 80,
  },
  ViewY0: {
    width: 10,
  },
  ImagenR: {
    width: 45,
    height: 45,
  },
  Viewxz: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextRA: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  TouchableSp: {
    maxWidth: 80,
  },
  Viewuv: {
    width: 10,
  },
  Imagekw: {
    width: 40,
    height: 40,
  },
  Viewew: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextJ3: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  TouchablepD: {
    maxWidth: 80,
  },
  View_3c: {
    width: 10,
  },
  ImageUj: {
    width: 40,
    height: 40,
  },
  Viewb2: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textyt: {
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  },
  TouchableWc: {
    maxWidth: 80,
  },
  ViewUV: {
    minHeight: 100,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default withTheme(CarddesignScreen);
