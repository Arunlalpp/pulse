import { StyleSheet } from 'react-native';
import { AspectRatio, COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  image: {
    aspectRatio: AspectRatio.square,
    maxWidth: '100%',
  },
  carousalWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  carousalHeader: {
    fontFamily: FONTFAMILY.segoe,
    color: COLORS.primaryBlack,
    fontSize: FONTSIZE.size_24,
    fontWeight: '400',
    paddingBottom: 16,
  },
  carousalSliderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    width: '100%',
  },
  carousalDescription: {
    color: COLORS.secondaryText,
    textAlign: 'center',
    fontSize: FONTSIZE.size_16,
    fontWeight: '400',
  },
  sliderText: {
    fontFamily: FONTFAMILY.lexanda,
    color: COLORS.textTeritary,
    fontWeight: '300',
  },
  sliderGetStart:{
    borderRadius: 999,
                backgroundColor: '#8A6AE4',
                padding: 16,
  }
});

export const dotStyle = {
  width: 8,
  height: 8,
  borderRadius: 8,
  marginHorizontal: 0,
  backgroundColor: '#997EE7',
};
export const inActiveDotStyle = {
  borderColor: '#D5D4D6',
  borderWidth: 1,
  backgroundColor: '#D5D4D6',
};
