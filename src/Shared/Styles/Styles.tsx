import styled from 'styled-components/native';
import { TextStyle, ViewStyle } from 'react-native';
import {
  styleErrorColor,
  styleFontWeightBold400,
  styleFontWeightBold500,
  styleFontWeightBold600,
  stylePrimaryColor,
  styleStandardBackButtonHeight,
  styleStandardButtonFontSize,
  styleStandardButtonHeight,
  styleWhiteColor,
} from '../../Styles/AppWideConstants/Styles';
import React from 'react';
import withBoxShadow from '../../Components/HOCs/ButtonShadowTypeOne';

export const Container = styled.SafeAreaView`
  background-color: ${styleWhiteColor};
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const FormContainerStyleOne = styled.View`
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  width: 70%;
  height: 75%;
  position: relative;
  z-index: 1;
`;

export const FormContainerStyleTwo = styled.View`
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 70%;
  height: 75%;
  position: relative;
  padding-top: 10%;
  z-index: 1;
`;

const BackButtonNormal = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${stylePrimaryColor};
  height: ${styleStandardBackButtonHeight}px;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  margin-top: 10%;
  margin-bottom: 10%;
  border-width: 0.5px;
  border-radius: 10px;
  z-index: 1;
`;

export const BackButton = withBoxShadow(BackButtonNormal);

export const BackButtonDummy = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${styleStandardBackButtonHeight}px;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  margin-top: 10%;
  margin-bottom: 10%;
`;

const ButtonNormal = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${stylePrimaryColor};
  height: ${styleStandardButtonHeight}px;
  margin-top: 2%;
  margin-bottom: 12px;
  border-width: 0.5px;
  border-radius: 10px;
  z-index: 2;
`;

export const Button = withBoxShadow(ButtonNormal);

export const ButtonDummy = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${styleStandardButtonHeight}px;
  margin-top: 2%;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  font-size: ${styleStandardButtonFontSize}px;
  line-height: ${styleStandardButtonFontSize}px;
  color: ${styleWhiteColor};
  font-weight: ${styleFontWeightBold500};
`;

export const ButtonStyleTwo = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${stylePrimaryColor};
  height: ${styleStandardButtonHeight}px;
  margin-top: 10%;
  margin-bottom: 10%;
  border-width: 0.5px;
  border-radius: 10px;
  z-index: 2;
`;

export const FontBold = styled.Text`
  font-weight: ${styleFontWeightBold400};
`;

export const FontBoldSecond = styled.Text`
  font-weight: ${styleFontWeightBold500};
`;

export const FontBoldOne = styled.Text`
  font-weight: ${styleFontWeightBold600};
`;

export const LogoImageHolder = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20%;
  margin-top: 20%;
`;

export const LogoImage = styled.Image`
  position: relative;
  max-width: 74%;
  resize-mode: contain;
`;

export const LogoImageHolderBottomOne = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 25%;
  padding-bottom: 6%;
`;
export const LogoImageTwo = styled.Image`
  resize-mode: contain;
  width: 154px;
  height: 35px;
`;
export const LogoImageHolderBottomTwo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 25%;
`;
export const LogoImageThree = styled.Image`
  resize-mode: contain;
  width: 80px;
  height: 80px;
`;

export const CentralImage = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: contain;
`;

export const StandardColor: TextStyle = {
  color: stylePrimaryColor,
};

export const IconStyle: TextStyle = {
  ...StandardColor,
  fontSize: 24,
};

export const ForgotHeaderText = styled.Text`
  width: 100%;
  text-align: center;
  color: ${stylePrimaryColor};
  font-size: 24px;
  font-weight: ${styleFontWeightBold500};
  margin-bottom: 5%;
`;

export const OtpInputContainer = styled.View`
  width: 100%;
  position: relative;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
`;

export const OtpInputStyle: TextStyle = {
  width: '20%',
  height: '80%',
  borderColor: stylePrimaryColor,
  borderWidth: 0.5,
  borderRadius: 4,
  textAlign: 'center',
  fontSize: 20,
  fontWeight: styleFontWeightBold500,
  color: stylePrimaryColor,
};

export const OtpInputFilled: TextStyle = {
  ...OtpInputStyle,
  color: styleWhiteColor,
  backgroundColor: stylePrimaryColor,
};

export const OtpInputError: TextStyle = {
  ...OtpInputStyle,
  color: styleWhiteColor,
  backgroundColor: styleErrorColor,
  borderColor: styleErrorColor,
};

export const PageContentHolder: ViewStyle = {
  flex: 1,
};
export const PageContentHolderCenter: ViewStyle = {
  ...PageContentHolder,
  flexDirection: 'column',
  justifyContent: 'center',
};
