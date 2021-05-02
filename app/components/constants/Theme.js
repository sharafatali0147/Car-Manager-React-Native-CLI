import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default {
  mainColor: '#bcf3ff',
  primaryColor: '#fa637f',
  btnColor: '#508abb',
  orangeColor: '#FFA500',
  textGreyColor: '#d4d4d4',
  secondaryColor: '#A29F9F',
  disabledColor: '#C0C0C0',
  whiteColor: '#FFFFFF',
  blackColor: '#000000',
  lightGrey: '#F5F5F5',
  lessGrey: '#e6e6e6',
  grey: 'grey',
  fbColor: '#3b5998',
  secondColor: '#C5C5C5',
  backgroundColor: 'white',
  lightBlack: '#171717',
  thirdColor: '#DFDFDF',
  fontFamily: 'GothamRounded',
  fontFamilyBold: 'GothamRounded-Medium',
  fontclwh: '#FFFFFF',
  fontclbl: '#8A8A8A',

  placeholderTextColor: 'grey',

  textInputWidth: wp('80%'),
  textInputHeight: height * 0.065,
  textInputFontSize: height * 0.017,
  height: height,
  width: width,

  widthPercentage: width / 100,
  heightPercentage: height / 100,
  bottomText: hp('1.65%'),
  borderBottomRightRadius: 12,

  buttonBorderRadius: 5,
};
