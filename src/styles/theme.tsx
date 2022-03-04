import {
  configureFonts,
  DefaultTheme,
  // Provider as PaperProvider,
} from 'react-native-paper';
// import { Theme } from 'react-native-paper/src/types';

// const fonts = {
//   regular: {
//     fontFamily: 'SFUIDisplay-Regular',
//     fontWeight: 'normal' as 'normal',
//   },
//   medium: {
//     fontFamily: 'SFUIDisplay-Medium',
//     fontWeight: 'normal' as 'normal',
//   },
//   light: {
//     fontFamily: 'SFUIDisplay-Light',
//     fontWeight: 'normal' as 'normal',
//   },
//   thin: {
//     fontFamily: 'SFUIDisplay-Bold',
//     fontWeight: 'normal' as 'normal',
//   },
// };

const fonts = {
  regular: {
    fontFamily: 'Ubuntu-Regular',
    // fontWeight: 'normal' as 'normal',
  },
  medium: {
    fontFamily: 'Ubuntu-Medium',
    // fontWeight: 'normal' as 'normal',
  },
  light: {
    fontFamily: 'Ubuntu-Light',
    // fontWeight: 'normal' as 'normal',
  },
  thin: {
    fontFamily: 'Ubuntu-Bold',
    // fontWeight: 'normal' as 'normal',
  },
};

// const fonts = {
//   regular: {
//     fontFamily: 'montserrat_regular',
//     fontWeight: 'normal' as 'normal',
//   },
//   medium: {
//     fontFamily: 'montserrat_regularitalic',
//     fontWeight: 'normal' as 'normal',
//   },
//   light: {
//     fontFamily: 'montserrat_semibold',
//     fontWeight: 'normal' as 'normal',
//   },
//   thin: {
//     fontFamily: 'montserrat_semibolditalic',
//     fontWeight: 'normal' as 'normal',
//   },
// };

const fontConfig = {
  web: fonts,
  ios: fonts,
  android: fonts,
};

const theme = {
  ...DefaultTheme,
  // Specify custom property
  // myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,

    primary: '#283766',
    secondaryColor: '#455faf',
    primaryLight: '#566194',
    primaryDark: '#00123b',
    accent: '#00123b',
    accentTransparent: '#9000123B',
    statusbar: {
      color: '#353847',
    },

    secondaryColorTrans: 'rgba(61, 70, 102,0.6)', //B3095899
    primaryLightTrans: 'rgba(30, 41, 76,0.4)', //800D7AB90, 0, 0
    accentTrans: 'rgba(13, 122, 185,0.3)', //4D0D7AB9

    primaryTrans: 'rgba(30, 41, 76,0.5)',
    whiteTrans: 'rgba(255, 255, 255,0.4)',

    // primary: '#095899',
    // primaryLight: '#2ba0ff',
    // primaryDark: '#095899',
    // accent: '#0e7ab9',
    // statusbar: {
    //   color: '#095899',
    // },

    // primary: '#1e284b',
    // primaryLight: '#2ba0ff',
    // primaryDark: '#1e284b',
    // accent: '#0e7ab9',
    // statusbar: {
    //   color: '#1e284b',
    // },
    white: '#fff',
    green: '#00b579', //'#28a745',

    grey: '#f5f5f5',
    midGrey: '#e3e3e3',
    greyDark: '#cccccc',
    red: '#fc0303',
    black: '#000',
  },
  // fonts: fonts,
  fonts: configureFonts(fontConfig),
};

export {theme};
