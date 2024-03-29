/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
  'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
  'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Italic': require('../../assets/fonts/Montserrat-Italic.ttf'),
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'Montserrat-Italic': require('../../assets/fonts/Montserrat-Italic.ttf'),
  'GreatVibes-Regular': require('../../assets/fonts/GreatVibes-Regular.ttf'),
};
const type = {
  primary: 'Montserrat-Regular',
  secondary: 'OpenSans-Regular',
  black: 'Montserrat-Black',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-Bold',
  semi: 'Montserrat-SemiBold',
  extra: 'Montserrat-ExtraBold',
  stylish: 'GreatVibes-Regular',
  italic: 'Montserrat-Italic',
};

const Fonts = { customFonts, type };

export default Fonts;
