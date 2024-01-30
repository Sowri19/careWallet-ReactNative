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
  selectValidityDate,
  selectEmail,
  selectPhoneNumber,
  selectProfilePictureBlob,
} from '../../../ReduxStore/Slices/HomePage/homePage';
import { formatPhoneNumberString } from '../../../utilities/FormatUtils';
import { useFocusEffect } from '@react-navigation/native';
import { logout } from '../../../Shared/AppWideTasks/AppWideTask';

const SettingsPage: React.FC<PagesProps> = ({ navigation }) => {
  const [activeDate, setActiveDateLocal] = useState<string>(
    useAppSelector(selectValidityDate)
  );
  const profilePictureBlob = useAppSelector(selectProfilePictureBlob);
  const [profileImage, setProfileImageLocal] = useState<{ uri: string }>({
    uri: profilePictureBlob,
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

  useFocusEffect(
    React.useCallback(() => {
      setProfileImageLocal({
        uri: profilePictureBlob,
      });
    }, [profilePictureBlob])
  );
  return (
    <Container>
      <FormContainerStyleTwo>
        <UpperBarHolder>
          <UpperBarContainer>
            <GenericShadowIcon
              onPress={() => {
                navigation.navigate('settings');
              }}
              name={'settings'}
              style={SettingsIcon}
            />
          </UpperBarContainer>
          <UpperBarContainer>
            <Text style={ActiveDate}>{`Active: ${activeDate}`}</Text>
          </UpperBarContainer>
          <UpperBarContainer>
            <GenericIcon name={'checkmark-circle'} style={ImageIcon} />
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
          <Text>{`Name: ${username || ''}`}</Text>
          <Text>{`Insurance Name: ${insuranceName || ''}`}</Text>
          <Text>{`Insurance ID: ${insuranceID || ''}`}</Text>
          <Text>{`Address: ${address || ''}`}</Text>
          <Text>{`Email: ${email || ''}`}</Text>
          <Text>{`Phone: ${phoneNumber || ''}`}</Text>
        </AccountDetails>
        <Button
          onPress={() => {
            navigation.navigate('Homepage');
          }}
        >
          <ButtonText>{'< Back'}</ButtonText>
        </Button>
        <Button
          onPress={() => {
            logout({
              successCB: () => {
                navigation.navigate('Log in');
              }
            });
          }}
        >
          <ButtonText>{'Logout'}</ButtonText>
        </Button>
      </FormContainerStyleTwo>
    </Container>
  );
};

export default SettingsPage;
