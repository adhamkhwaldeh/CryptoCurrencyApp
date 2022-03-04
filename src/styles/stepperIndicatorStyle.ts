import { theme } from "./theme";
const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  // separatorFinishedColor: '#4aae4f',
  // separatorUnFinishedColor: '#a4d4a5',
  // stepIndicatorFinishedColor: '#4aae4f',
  // stepIndicatorUnFinishedColor: '#a4d4a5',
  // stepIndicatorCurrentColor: '#ffffff',

  separatorFinishedColor: theme.colors.primary,
  stepIndicatorFinishedColor: theme.colors.primary,

  stepIndicatorUnFinishedColor: theme.colors.accent,
  separatorUnFinishedColor: theme.colors.accent,

  stepIndicatorLabelCurrentColor: "#FFFFFF", //'#000000',
  stepIndicatorCurrentColor: theme.colors.primary,
  currentStepLabelColor: theme.colors.primary, //'#4aae4f',
  // stepIndicatorLabelCurrentColor:
  stepStrokeCurrentColor: theme.colors.primary,
  // currentStepLabelColor:theme.colors.primary,
  currentStepIndicatorSize: 40,
  currentStepStrokeWidth: 0,
  // currentStepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 17,

  stepIndicatorLabelFontSize: 15,

  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#666666",
  labelSize: 12,

  // stepIndicatorSize: 30,
  // currentStepIndicatorSize: 40,
  // separatorStrokeWidth: 2,
  // currentStepStrokeWidth: 3,
  // stepStrokeCurrentColor: '#fe7013',
  // stepStrokeWidth: 3,
  // separatorStrokeFinishedWidth: 4,
  // stepStrokeFinishedColor: '#fe7013',
  // stepStrokeUnFinishedColor: '#aaaaaa',
  // separatorFinishedColor: '#fe7013',
  // separatorUnFinishedColor: '#aaaaaa',
  // stepIndicatorFinishedColor: '#fe7013',
  // stepIndicatorUnFinishedColor: '#ffffff',
  // stepIndicatorCurrentColor: '#ffffff',
  // stepIndicatorLabelFontSize: 13,
  // currentStepIndicatorLabelFontSize: 13,
  // stepIndicatorLabelCurrentColor: '#fe7013',
  // stepIndicatorLabelFinishedColor: '#ffffff',
  // stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  // labelColor: '#999999',
  // labelSize: 13,
  // currentStepLabelColor: '#fe7013',
};

export const secondIndicatorStyles = {
  //#region general properties
  stepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  stepIndicatorLabelFontSize: 15,
  labelColor: "#666666",
  labelSize: 12,
  stepStrokeWidth: 3,
  //#endregion

  //#region unfinished
  stepIndicatorUnFinishedColor: theme.colors.accent,

  separatorUnFinishedColor: theme.colors.accent,

  stepStrokeUnFinishedColor: theme.colors.accent,

  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",

  unFinishedStepStrokeWidth: 0,
  //#endregion

  //#region current
  currentStepStrokeWidth: 5,
  currentStepLabelColor: theme.colors.accent, //'#4aae4f',
  stepIndicatorCurrentColor: "#FFFFFF", //theme.colors.primary,
  stepIndicatorLabelCurrentColor: "#FFFFFF", //'#000000',
  stepStrokeCurrentColor: theme.colors.accent,
  // currentStepLabelColor:theme.colors.primary,
  currentStepIndicatorSize: 40,
  currentStepIndicatorLabelFontSize: 17,
  //#endregion

  //#region finished
  stepIndicatorLabelFinishedColor: "#ffffff",
  separatorFinishedColor: theme.colors.green, //'#ffffff',//theme.colors.secondaryColor,
  stepStrokeFinishedColor: theme.colors.green, //'#ffffff', //theme.colors.secondaryColor,
  finishedStepStrokeWidth: 5,
  stepIndicatorFinishedColor: theme.colors.primary,
  //#endregion

  // stepIndicatorSize: 30,
  // currentStepIndicatorSize: 40,
  // separatorStrokeWidth: 2,
  // currentStepStrokeWidth: 3,
  // stepStrokeCurrentColor: '#fe7013',
  // stepStrokeWidth: 3,
  // separatorStrokeFinishedWidth: 4,
  // stepStrokeFinishedColor: '#fe7013',
  // stepStrokeUnFinishedColor: '#aaaaaa',
  // separatorFinishedColor: '#fe7013',
  // separatorUnFinishedColor: '#aaaaaa',
  // stepIndicatorFinishedColor: '#fe7013',
  // stepIndicatorUnFinishedColor: '#ffffff',
  // stepIndicatorCurrentColor: '#ffffff',
  // stepIndicatorLabelFontSize: 13,
  // currentStepIndicatorLabelFontSize: 13,
  // stepIndicatorLabelCurrentColor: '#fe7013',
  // stepIndicatorLabelFinishedColor: '#ffffff',
  // stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  // labelColor: '#999999',
  // labelSize: 13,
  // currentStepLabelColor: '#fe7013',
};

export default firstIndicatorStyles;
