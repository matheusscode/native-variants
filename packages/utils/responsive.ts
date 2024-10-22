import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const responsiveHeight = (percentage: string | number): number =>
  hp(percentage);
export const responsiveWidth = (percentage: string | number): number =>
  wp(percentage);
