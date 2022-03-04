import {StyleSheet, Platform, Dimensions} from 'react-native';
import DimensHelper from '../helpers/DimensHelper';
// import { theme } from "./theme";
// const height = Dimensions.get("window").height;
export default StyleSheet.create({
  textNormal: {
    fontFamily: 'Cairo-Bold',
    fontWeight: '700',
    color: '#fff',
    fontSize: 12,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E183C',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
    paddingTop: '5%',
    paddingBottom: 30,
    fontFamily: 'Cairo-SemiBold',
    fontWeight: '600',
  },
  loginContainer: {
    height: 'auto',
    width: '90%',
    // backgroundColor: "rgba(112,112,112,0.4)",
    backgroundColor: 'rgba(0,0,0,0.55)',
    flexDirection: 'column',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcomeText: {
    width: '100%',
    // textAlign: "right",
    fontSize: DimensHelper.fontTitle,
    color: '#fff',
    paddingVertical: DimensHelper.paddingSm,
    fontFamily: 'Cairo-Regular',
    fontWeight: '400',
    marginBottom: DimensHelper.marginLg,
  },
  enterText: {
    width: '100%',
    // textAlign: "right",
    fontSize: DimensHelper.fontNormal,
    color: '#fff',
    paddingBottom: DimensHelper.paddingLg,
    fontFamily: 'Cairo-SemiBold',
    fontWeight: '600',
  },
  textInput: {
    width: '100%',
    height: DimensHelper.textInputHeightMd,
    backgroundColor: 'rgba(255,255,255,0.3)',
    // padding: 10,
    color: 'white', //theme.colors.primary,
    // textAlign: "right",
    // marginVertical: 10,
    // borderRadius: 10,
    // paddingHorizontal: 40,
    // fontSize: 13,
    fontFamily: 'Ubuntu-Regular',
  },
  textIcon: {
    position: 'absolute',
    right: 10,
    width: 18,
    height: 18,
  },
  forgotText: {
    fontSize: 14,
    color: '#15cce1',
    paddingTop: 10,
    paddingBottom: 20,
    fontFamily: 'Cairo-SemiBold',
    textAlign: 'left',
    fontWeight: '600',
  },
  buttonStyle: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#527b9e',
    marginTop: 20,
    color: '#fff',
    paddingVertical: 13,
    shadowColor: '#6497BC',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 6,
    elevation: 9,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: DimensHelper.fontMedium,
    // fontFamily: "Cairo-600SemiBold",
  },
  uaePass: {
    height: 60,
    width: '100%',
    marginTop: 15,
  },
  errorMsg: {
    color: '#cb3837',
    fontSize: 15,
    fontFamily: 'Cairo-Regular',
    fontWeight: '400',
    textAlign: 'right',
    width: '100%',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 30,
    fontFamily: 'Cairo-Regular',
    fontWeight: '400',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 0,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(69, 71, 104, 0.8)',
    marginHorizontal: Platform.OS === 'ios' ? '3%' : '2%',
    marginVertical: Platform.OS === 'ios' ? '3%' : '2%',
    marginBottom: 6,
    minWidth: '44%',
    textAlign: 'right',
    borderBottomColor: '#ffc107',
    borderBottomWidth: 0.5,
  },
  buttonLabel: {
    fontSize: 13,
    fontFamily: 'Cairo-Regular',
    fontWeight: '400',
    textAlign: 'right',
    color: '#fff',
    marginBottom: 10,
  },
  boxImage: {
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxHeight: 70,
    minHeight: 70,
  },
  mapContainer: {
    flex: 2,
    backgroundColor: '#0E183C',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  mapView: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  cirlce: {
    width: 26,
    height: 26,
    borderRadius: 50,
    shadowColor: '#555',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,
  },
  stroke: {
    width: 26,
    height: 26,
    borderRadius: 50,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  core: {
    width: 24,
    height: 24,
    borderRadius: 50,
    position: 'absolute',
    left: 1,
    right: 1,
    top: 1,
    bottom: 1,
    backgroundColor: 'red',
    zIndex: -1,
  },
  slideUp: {
    height: Platform.OS === 'ios' ? 600 : 550,
    backgroundColor: '#172346',
    alignItems: 'flex-start',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'relative',
  },
  upperSlide: {
    paddingHorizontal: 5,
    textAlign: 'right',
    width: '100%',
  },
  insNameWrapper: {
    width: '100%',
    borderBottomColor: '#ffc107',
    borderBottomWidth: 0.3,
    paddingBottom: 15,
    flexDirection: 'row-reverse',
  },
  insName: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Cairo-Bold',
    fontWeight: '700',
    textAlign: 'right',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  insInfo: {
    flexDirection: 'row',
    textAlign: 'right',
    color: '#fff',
    width: '100%',
  },
  leftInfo: {
    flexDirection: 'row-reverse',
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  rightInfo: {
    flexDirection: 'row-reverse',
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  insImageIcon: {
    paddingLeft: 10,
    color: '#00BAE0',
    fontWeight: 'bold',
    paddingTop: 3,
  },
  middleInfo: {
    borderBottomColor: '#ffc107',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
  },
  countInsInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
  },
  countBox: {
    width: '48%',
    marginHorizontal: '1%',
    padding: 20,
    backgroundColor: '#0E183C',
    borderRadius: 20,
  },
  countNumber: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Cairo-Bold',
    fontWeight: '700',
    fontSize: 18,
  },
  countText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Cairo-SemiBold',
    fontWeight: '600',
    fontSize: 12,
  },
  insImageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  insImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  SolidButton: {
    height: 60,
    width: '60%',
    borderRadius: 10,
    backgroundColor: '#527b9e',
    marginTop: 20,
    color: '#fff',
    paddingVertical: 13,
  },
  outlineButton: {
    height: 60,
    width: '38%',
    borderRadius: 10,
    marginTop: 20,
    color: '#64bc67',
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#64bc67',
    marginRight: 10,
  },
  outlineText: {
    color: '#64bc67',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Cairo-SemiBold',
    fontWeight: '600',
  },
  outlineIcon: {
    paddingTop: 8,
    paddingHorizontal: 5,
  },
  visitmarker: {
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  visitCount: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Cairo-600SemiBold',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
  v100: {
    borderColor: 'rgba(85, 51, 152, 1)',
  },
  v50: {
    borderColor: 'rgba(100, 151, 188, 1)',
  },
  v25: {
    borderColor: 'rgba(126, 8, 136, 1)',
  },
  v1: {
    borderColor: 'rgba(175, 155, 6, 1)',
  },
  vDefault: {
    borderColor: 'rgba(14, 24, 60, 1)',
  },
  marker: {
    width: 60,
    height: 60,
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  insMarker: {
    width: 35,
    height: 35,
    borderRadius: 50,
    alignSelf: 'center',
  },
  esTablishmentMarker: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 2,
  },
  selectedMarker: {
    width: 60,
    height: 60,
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  logoutIcon: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  chartsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 10,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panehHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginBottom: 10,
  },
  FilterArea: {
    backgroundColor: '#0E183C',
    height: 'auto',
    padding: 10,
    width: '100%',
    minHeight: 70,
  },
  filterText: {
    textAlign: 'right',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Cairo-700Bold',
    width: '100%',
  },
  insCounter: {
    paddingHorizontal: 5,
  },
  insCounterText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Cairo-700Bold',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  inspectorFilterUnit: {
    paddingHorizontal: 5,
  },
  filterBtn: {
    position: 'absolute',
    left: 10,
    top: 8,
    backgroundColor: '#553398',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  filterBtnIcon: {
    color: '#fff',
    alignSelf: 'center',
  },
  filterbuttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  filterOption: {
    width: 150,
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  filterOptionText: {
    backgroundColor: '#C1C3D5',
    fontSize: 15,
    fontFamily: 'Cairo-600SemiBold',
    width: 200,
    borderRadius: 20,
    paddingVertical: 10,
    textAlign: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  filterHeaderText: {
    width: '100%',
    textAlign: 'right',
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Cairo-600SemiBold',
  },
  filterButtonWrapper: {
    flexDirection: 'row-reverse',
  },
  filterScrollButtonWrapper: {
    flexDirection: 'row',
  },
  filterButton: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: '#C1C3D5',
    color: '#fff',
    paddingVertical: 7,
    marginLeft: 5,
    marginVertical: 5,
  },
  filterButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Cairo-400Regular',
  },
  clicked: {
    backgroundColor: '#725BD9',
  },
  resetBtn: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#EE0000',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 99,
    padding: 5,
    borderRadius: 50,
  },
});