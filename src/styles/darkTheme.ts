import {
  configureFonts,
  DarkTheme,
  // Provider as PaperProvider,
} from 'react-native-paper';
// import {Theme} from 'react-native-paper/src/types';

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

const darkTheme = {
  ...DarkTheme,
  // Specify custom property
  // myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DarkTheme.colors,

    primary: '#353847',
    secondaryColor: '#095899',
    primaryLight: '#0D7AB9',
    primaryDark: '#353847',
    accent: '#0D7AB9',
    accentTransparent: '#0D7AB988',
    statusbar: {
      color: '#353847',
    },

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
    greyDark: '#cccccc',
    red: '#fc0303',
    black: '#000',
  },
  // fonts: fonts,
  fonts: configureFonts(fontConfig),
};

export {darkTheme};
