import React, { useEffect, useState } from 'react';
import { PagesProps } from '../../../utilities/CommonTypes';
import {
  Button,
  ButtonText,
  Container,
  FormContainerStyleTwo,
  GenericIcon,
  GenericShadowIcon,
  ImageIcon,
  ImageProfile,
  ProfileImageHolder,
  SettingsIcon,
} from '../../../Shared/Styles/Styles';
import {
  UpperBarContainer,
  UpperBarHolder,
  ActiveDate,
  AccountDetails,
} from './Styles';
import { Text } from 'react-native';
import { styleDefaultProfileImage } from '../../../Styles/AppWideConstants/Styles';
import { useAppSelector } from '../../../ReduxStore/Setup/hooks';
import {
  selectAddressLocality,
  selectAddressPostCode,
  selectAddressState,
  selectAddressStreet,
  selectDateOfBirth,
  selectFirstName,
  selectInsuranceID,
  selectInsuranceName,
  selectLastName,
  selectProfilePictureUrl,
  selectValidityDate,
  selectEmail,
  selectPhoneNumber,
} from '../../../ReduxStore/Slices/HomePage/homePage';
import { formatPhoneNumberString } from '../../../utilities/FormatUtils';

const SettingsPage: React.FC<PagesProps> = ({ navigation }) => {
  const [activeDate, setActiveDateLocal] = useState<string>(
    useAppSelector(selectValidityDate)
  );
  const profileImageUrl = useAppSelector(selectProfilePictureUrl);
  const [profileImage, setProfileImageLocal] = useState<{ uri: string }>({
    uri: styleDefaultProfileImage,
  });
  const [dob, setDOBLocal] = useState<string>(
    useAppSelector(selectDateOfBirth)
  );
  const [username, setUsernameLocal] = useState<string>(
    `${useAppSelector(selectFirstName)} ${useAppSelector(selectLastName)}`
  );
  const [insuranceName, setInsuranceNameLocal] = useState<string>(
    useAppSelector(selectInsuranceName)
  );
  const [insuranceID, setInsuranceIDLocal] = useState<string>(
    `ID: ${useAppSelector(selectInsuranceID)}`
  );
  const [address, setAddressLocal] = useState<string>(
    `${useAppSelector(selectAddressStreet)}, ${useAppSelector(
      selectAddressLocality
    )}, ${useAppSelector(selectAddressState)}, ${useAppSelector(
      selectAddressPostCode
    )}`
  );
  const [email, setEmailLocal] = useState<string>(useAppSelector(selectEmail));
  const [phoneNumber, setPhoneNumberLocal] = useState<string>(
    formatPhoneNumberString(useAppSelector(selectPhoneNumber))
  );
  useEffect(() => {
    setProfileImageLocal({
      uri: profileImageUrl,
    });
  }, []);
  return (
    <Container>
      <FormContainerStyleTwo>
        <UpperBarHolder>
          <UpperBarContainer>
            <GenericShadowIcon
              onPress={() => {
                navigation.navigate(`settings`);
              }}
              name={`settings`}
              style={SettingsIcon}
            />
          </UpperBarContainer>
          <UpperBarContainer>
            <Text style={ActiveDate}>{`Active: ${activeDate}`}</Text>
          </UpperBarContainer>
          <UpperBarContainer>
            <GenericIcon name={`checkmark-circle`} style={ImageIcon} />
          </UpperBarContainer>
        </UpperBarHolder>
        <UpperBarHolder>
          <UpperBarContainer>
            <ProfileImageHolder>
              <ImageProfile source={profileImage} />
            </ProfileImageHolder>
            <UpperBarContainer>
              <Text style={ActiveDate}>{`Active: ${activeDate}`}</Text>
            </UpperBarContainer>
          </UpperBarContainer>
        </UpperBarHolder>
        <AccountDetails>
          <Text>{`Name: ${username}`}</Text>
          <Text>{`Insurance Name: ${insuranceName}`}</Text>
          <Text>{`Insurance ID: ${insuranceID}`}</Text>
          <Text>{`Address: ${address}`}</Text>
          <Text>{`Email: ${email}`}</Text>
          <Text>{`Phone: ${phoneNumber}`}</Text>
        </AccountDetails>
        <Button
          onPress={() => {
            navigation.navigate(`Homepage`);
          }}
        >
          <ButtonText>{`< Back`}</ButtonText>
        </Button>
      </FormContainerStyleTwo>
    </Container>
  );
};

export default SettingsPage;
