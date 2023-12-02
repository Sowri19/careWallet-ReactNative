import React from "react";
import {
  ScreenWrapper,
  VerificationFields,
  StyledImage,
  TickIcon,
  ButtonArea,
  StyledButton,
  ButtonText,
} from "./Styles";

const Verification: React.FC = () => {
  return (
    <ScreenWrapper>
      <VerificationFields>
        <StyledImage source={require("../../utilities/CareWalletLogo.png")} />
        <TickIcon name="checkcircleo" />
        <ButtonArea>
          <StyledButton>
            <ButtonText>View ID</ButtonText>
          </StyledButton>
          <StyledButton>
            <ButtonText>View Plan</ButtonText>
          </StyledButton>
        </ButtonArea>
        <StyledButton>
          <ButtonText>Add Card to Apple Wallet</ButtonText>
        </StyledButton>
      </VerificationFields>
    </ScreenWrapper>
  );
};

export default Verification;
