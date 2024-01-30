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
  selectHealthCard1Blob,
  selectHealthCard1Url,
  selectHealthCard2Blob,
  selectHealthCard2Url,
  selectInsuranceBlob,
  selectInsuranceUrl,
  selectLastName,
  selectLicenseBlob,
  selectLicenseUrl,
  selectProfilePictureBlob,
  selectProfilePictureUrl,
  selectValidityDate,
  setAllBlobs as setImageBlobs,
} from '../../../ReduxStore/Slices/HomePage/homePage';
import { useFocusEffect } from '@react-navigation/native';

import Loader from '../../../Components/Loader/index';
import { loadAllImages } from '../../../utilities/commonUtilFunctions';

const Homepage: React.FC<PagesProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
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

  const [isLoadingImages, setLoadingImages] = useState<boolean>(true);
  const licenseImg = useAppSelector(selectLicenseBlob);
  const insuranceImg = useAppSelector(selectInsuranceBlob);
  const profilePictureImg = useAppSelector(selectProfilePictureBlob);
  const healthCardFrontImg = useAppSelector(selectHealthCard1Blob);
  const healthCardBackImg = useAppSelector(selectHealthCard2Blob);

  const setScreen = (screen: 'insurance' | 'license' | 'health') => {
    resetImageLoadingStates();
    setScreenLocal(screen);
  };
  const licenseUrl = useAppSelector(selectLicenseUrl);
  const health1Url = useAppSelector(selectHealthCard1Url);
  const health2Url = useAppSelector(selectHealthCard2Url);
  const insuranceUrl = useAppSelector(selectInsuranceUrl);

  useFocusEffect(
    React.useCallback(() => {
      const params: { [key: string]: string } = {};
      if (!licenseImg) {
        params['licenseBlob'] = licenseUrl;
      }
      if (!insuranceImg) {
        params['insuranceBlob'] = insuranceUrl;
      }
      if (!profilePictureImg) {
        params['profilePictureBlob'] = profileImageUrl;
      }
      if (!healthCardFrontImg) {
        params['healthCard1Blob'] = health1Url;
      }
      if (!healthCardBackImg) {
        params['healthCard2Blob'] = health2Url;
      }
      if (Object.keys(params).length > 0) {
        setTimeout(async () => {
          const allBlobs = await loadAllImages({
            licenseBlob: licenseUrl,
            insuranceBlob: insuranceUrl,
            profilePictureBlob: profileImageUrl,
            healthCard1Blob: health1Url,
            healthCard2Blob: health2Url,
          });
          setLoadingImages(false);
          dispatch(
            setImageBlobs({
              licenseBlob: allBlobs.licenseBlob,
              insuranceBlob: allBlobs.insuranceBlob,
              healthCard1Blob: allBlobs.healthCard1Blob,
              healthCard2Blob: allBlobs.healthCard2Blob,
              profilePictureBlob: allBlobs.profilePictureBlob,
            })
          );
        });
      }
      return () => {};
    }, [])
  );

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
  console.log(imageUrl, imageUrl2);
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
                {isLoadingImages && <Loader />}
                <ImageInsurance source={{ uri: insuranceImg }} onLoad={() => console.log('loaded')} onError={(err) => {console.log(err);}} />
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
                {isLoadingImages && <Loader />}
                <ImageID source={{ uri: licenseImg }} />
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
              {isLoadingImages && <Loader />}
              <ImageHolder>
                <ImageHealth source={{ uri: healthCardFrontImg }} />
              </ImageHolder>
              <ImageHolder>
                <ImageHealth source={{ uri: healthCardBackImg }} />
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
