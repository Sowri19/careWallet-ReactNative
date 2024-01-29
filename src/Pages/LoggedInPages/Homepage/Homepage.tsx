import React, { useEffect, useState } from 'react';
import { PagesProps } from '../../../utilities/CommonTypes';
import {
  ButtonH,
  ButtonText,
  Container,
  FormContainerStyleThree,
  GenericIcon,
  GenericShadowIcon,
  ImageIcon,
  ImageProfile,
  LogoImageHolderBottomThree,
  LogoImageTwo,
  ProfileImageHolder,
  SettingsIcon,
} from '../../../Shared/Styles/Styles';
import {
  ActiveDate,
  ActiveDateHolder,
  BoldNameHeader,
  ButtonHolder,
  ImageHealth,
  ImageHolder,
  ImageID,
  ImageInsurance,
  LowerBarContainer,
  LowerBarHolder,
} from './Style';
import { Text } from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../ReduxStore/Setup/hooks';
import {
  selectActive,
  selectFirstName,
  selectHealthCard1Url,
  selectHealthCard2Url,
  selectInsuranceUrl,
  selectLastName,
  selectLicenseUrl,
  selectProfilePictureUrl,
  selectValidityDate,
} from '../../../ReduxStore/Slices/HomePage/homePage';

import Loader from '../../../Components/Loader/index';

const Homepage: React.FC<PagesProps> = ({ navigation }) => {
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const activeDate = useAppSelector(selectValidityDate);
  const [screen, setScreenLocal] = useState<'insurance' | 'license' | 'health'>(
    'insurance'
  );
  const profileImageUrl = useAppSelector(selectProfilePictureUrl);
  const [profileImage, setProfileImageLocal] = useState<{ uri: string }>({
    uri: profileImageUrl,
  });

  const [isInsuranceImageLoading, setIsInsuranceImageLoading] = useState(true);
  const [isLicenseImageLoading, setIsLicenseImageLoading] = useState(true);
  const [isHealthImageLoading, setIsHealthImageLoading] = useState(true);

  // Function to reset image loading states
  const resetImageLoadingStates = () => {
    setIsInsuranceImageLoading(true);
    setIsLicenseImageLoading(true);
    setIsHealthImageLoading(true);
  };

  const setScreen = (screen: 'insurance' | 'license' | 'health') => {
    resetImageLoadingStates();
    setScreenLocal(screen);
  };
  const licenseUrl = useAppSelector(selectLicenseUrl);
  const health1Url = useAppSelector(selectHealthCard1Url);
  const health2Url = useAppSelector(selectHealthCard2Url);
  const insuranceUrl = useAppSelector(selectInsuranceUrl);

  let imageUrl = '',
    imageUrl2 = '';
  if (screen === 'license') {
    imageUrl = licenseUrl;
    imageUrl2 = '';
  } else if (screen === 'health') {
    imageUrl = health1Url;
    imageUrl2 = health2Url;
  } else {
    imageUrl = insuranceUrl;
    imageUrl2 = '';
  }
  const isActive = useAppSelector(selectActive);
  console.log(profileImage);
  const getAllBlobs = async () => {
    setProfileImageLocal({
      uri: profileImageUrl,
    });
  };
  useEffect(() => {
    getAllBlobs();
  }, []);

  return (
    <>
      <Container>
        <FormContainerStyleThree>
          <BoldNameHeader>{`${firstName} ${lastName}`}</BoldNameHeader>
          {screen === 'insurance' && (
            <>
              <ActiveDateHolder>
                {isActive ? (
                  <>
                    <GenericIcon name="checkmark-circle" style={ImageIcon} />
                    <Text
                      style={ActiveDate}
                    >{`Active: ${new Date().getFullYear()}-${(
                      '0' +
                      (new Date().getMonth() + 1)
                    ).slice(-2)}-${('0' + new Date().getDate()).slice(
                      -2
                    )}`}</Text>
                  </>
                ) : (
                  <>
                    <GenericIcon name="checkmark-circle" style={ImageIcon} />
                    <Text style={ActiveDate}>{`Active: ${activeDate}`}</Text>
                  </>
                )}
              </ActiveDateHolder>
              <ImageHolder>
                {isInsuranceImageLoading && <Loader />}
                <ImageInsurance
                  source={{ uri: imageUrl }}
                  onLoad={() => setIsInsuranceImageLoading(false)}
                />
              </ImageHolder>
              <ButtonHolder>
                <ButtonH
                  onPress={() => {
                    setScreen('license');
                  }}
                >
                  <ButtonText>View ID</ButtonText>
                </ButtonH>
                <ButtonH
                  onPress={() => {
                    setScreen('health');
                  }}
                >
                  <ButtonText>View Plan</ButtonText>
                </ButtonH>
              </ButtonHolder>
            </>
          )}
          {screen === 'license' && (
            <>
              <ImageHolder>
                {isLicenseImageLoading && <Loader />}
                <ImageID
                  source={{ uri: imageUrl }}
                  onLoad={() => setIsLicenseImageLoading(false)}
                />
              </ImageHolder>
              <ButtonHolder>
                <ButtonH
                  onPress={() => {
                    setScreen('insurance');
                  }}
                >
                  <ButtonText>{'< Back'}</ButtonText>
                </ButtonH>
                <ButtonH
                  onPress={() => {
                    setScreen('health');
                  }}
                >
                  <ButtonText>View Plan</ButtonText>
                </ButtonH>
              </ButtonHolder>
            </>
          )}
          {screen === 'health' && (
            <>
              {isHealthImageLoading && <Loader />}
              <ImageHolder>
                <ImageHealth
                  source={{ uri: imageUrl }}
                  onLoad={() => setIsHealthImageLoading(false)}
                />
              </ImageHolder>
              <ImageHolder>
                <ImageHealth
                  source={{ uri: imageUrl2 }}
                  onLoad={() => setIsHealthImageLoading(false)}
                />
              </ImageHolder>
              <ButtonHolder>
                <ButtonH
                  onPress={() => {
                    setScreen('license');
                  }}
                >
                  <ButtonText>View ID</ButtonText>
                </ButtonH>
                <ButtonH
                  onPress={() => {
                    setScreen('insurance');
                  }}
                >
                  <ButtonText>{'< Back'}</ButtonText>
                </ButtonH>
              </ButtonHolder>
            </>
          )}
          <LowerBarHolder>
            <LowerBarContainer>
              <GenericShadowIcon
                onPress={() => {
                  navigation.navigate('settings');
                }}
                name="settings"
                style={SettingsIcon}
              />
            </LowerBarContainer>
            <LowerBarContainer>
              <ProfileImageHolder>
                <ImageProfile source={profileImage} />
              </ProfileImageHolder>
            </LowerBarContainer>
            <LowerBarContainer></LowerBarContainer>
          </LowerBarHolder>
        </FormContainerStyleThree>
        <LogoImageHolderBottomThree>
          <LogoImageTwo
            source={require('../../../Shared/Media/Images/CareWallet.Logo.Patient.png')}
          />
        </LogoImageHolderBottomThree>
      </Container>
    </>
  );
};

export default Homepage;
