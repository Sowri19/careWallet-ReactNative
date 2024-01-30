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
  HomePageState,
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
  setState as setHomepageState,
} from '../../../ReduxStore/Slices/HomePage/homePage';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import Loader from '../../../Components/Loader/index';
import {
  loadAccountData,
  loadAllImagesSync,
} from '../../../utilities/commonUtilFunctions';

const Homepage: React.FC<PagesProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const [screen, setScreenLocal] = useState<'insurance' | 'license' | 'health'>(
    'insurance'
  );
  const [isLoadingImages, setLoadingImages] = useState<boolean>(true);
  const profileImageUrl = useAppSelector(selectProfilePictureUrl);
  const licenseImg = useAppSelector(selectLicenseBlob);
  const insuranceImg = useAppSelector(selectInsuranceBlob);
  const profilePictureImg = useAppSelector(selectProfilePictureBlob);
  const healthCardFrontImg = useAppSelector(selectHealthCard1Blob);
  const healthCardBackImg = useAppSelector(selectHealthCard2Blob);
  const validityDate = useAppSelector(selectValidityDate);
  const licenseUrl = useAppSelector(selectLicenseUrl);
  const health1Url = useAppSelector(selectHealthCard1Url);
  const health2Url = useAppSelector(selectHealthCard2Url);
  const insuranceUrl = useAppSelector(selectInsuranceUrl);
  const [accountDataLoaded, setAccountDataLoaded] = useState<boolean>(false);
  const [profileImageLoaded, setProfileImageLoaded] = useState<boolean>(false);
  const [idFrontImageLoaded, setIdFrontImageLoaded] = useState<boolean>(false);
  const [idBackImageLoaded, setIdBackImageLoaded] = useState<boolean>(false);
  const [healthFrontImageLoaded, setHealthFrontImageLoaded] =
    useState<boolean>(false);
  const [healthBackImageLoaded, setHealthBackImageLoaded] =
    useState<boolean>(false);
  const [activeDate, setActiveDate] = useState<Date | null>(null);

  useEffect(() => {
    if (validityDate) {
      setActiveDate(new Date(validityDate));
    }
  }, [validityDate]);

  const [profileImage, setProfileImageLocal] = useState<{ uri: string }>({
    uri: profilePictureImg,
  });
  const [source1, setSource1] = useState<{ uri: string }>({
    uri: insuranceImg,
  });
  const [source2, setSource2] = useState<{ uri: string }>({
    uri: healthCardBackImg,
  });
  const updateHomePageState = (update: HomePageState) => {
    dispatch(setHomepageState(update));
  };

  const setScreen = (screen: 'insurance' | 'license' | 'health') => {
    setScreenLocal(screen);
  };

  useEffect(() => {
    if (!isLoadingImages) {
      setProfileImageLocal({
        uri: profilePictureImg,
      });
      if (screen === 'insurance') {
        setSource1({
          uri: insuranceImg,
        });
      } else if (screen === 'license') {
        setSource1({
          uri: licenseImg,
        });
      } else if (screen === 'health') {
        setSource1({
          uri: healthCardFrontImg,
        });
        setSource2({
          uri: healthCardBackImg,
        });
      }
    }
  }, [isLoadingImages, screen]);

  const setImages = (params: { [key: string]: string } = {}) => {
    setProfileImageLocal({
      uri: params['profilePictureBlob'],
    });
    if (screen === 'insurance') {
      setSource1({
        uri: params['insuranceBlob'],
      });
    } else if (screen === 'license') {
      setSource1({
        uri: params['licenseBlob'],
      });
    } else if (screen === 'health') {
      setSource1({
        uri: params['healthCard1Blob'],
      });
      setSource2({
        uri: params['healthCard2Blob'],
      });
    }
    setProfileImageLoaded(true);
    setIdBackImageLoaded(true);
    setIdFrontImageLoaded(true);
    setHealthFrontImageLoaded(true);
    setHealthBackImageLoaded(true);
  };

  useEffect(() => {
    if (isFocused) {
      if (isLoadingImages) {
        setTimeout(async () => {
          const params: { [key: string]: string } = {};
          const accountData = await loadAccountData();
          updateHomePageState(accountData);
          setAccountDataLoaded(true);
          if (!licenseImg) {
            params['licenseBlob'] = accountData.licenseUrl;
          }
          if (!insuranceImg) {
            params['insuranceBlob'] = accountData.insuranceUrl;
          }
          if (!profilePictureImg) {
            params['profilePictureBlob'] = accountData.profilePictureUrl;
          }
          if (!healthCardFrontImg) {
            params['healthCard1Blob'] = accountData.healthCard1Url;
          }
          if (!healthCardBackImg) {
            params['healthCard2Blob'] = accountData.healthCard2Url;
          }
          if (Object.keys(params).length > 0) {
            const allBlobs = await loadAllImagesSync({
              licenseBlob: licenseUrl,
              insuranceBlob: insuranceUrl,
              profilePictureBlob: profileImageUrl,
              healthCard1Blob: health1Url,
              healthCard2Blob: health2Url,
            });
            setLoadingImages(false);
            const newState = {
              licenseBlob: allBlobs.licenseBlob,
              insuranceBlob: allBlobs.insuranceBlob,
              healthCard1Blob: allBlobs.healthCard1Blob,
              healthCard2Blob: allBlobs.healthCard2Blob,
              profilePictureBlob: allBlobs.profilePictureBlob,
            };
            setImages(newState);
            dispatch(setImageBlobs(newState));
          }
          setScreen('insurance');
        });
      }
    } else {

    }
  }, [isFocused]);

  const isActive = useAppSelector(selectActive);
  return (
    <>
      <Container>
        <FormContainerStyleThree>
          {accountDataLoaded ? (
            <>
              <BoldNameHeader>{`${firstName} ${lastName}`}</BoldNameHeader>
              {screen === 'insurance' && (
                <>
                  <ActiveDateHolder>
                    {isActive && activeDate ? (
                      <>
                        <GenericIcon
                          name="checkmark-circle"
                          style={ImageIcon}
                        />
                        <Text
                          style={ActiveDate}
                        >{`Active: ${activeDate.getFullYear()}-${(
                            '0' +
                          (activeDate.getMonth() + 1)
                          ).slice(-2)}-${('0' + activeDate.getDate()).slice(
                            -2
                          )}`}</Text>
                      </>
                    ) : (
                      <>
                        <GenericIcon
                          name="checkmark-circle"
                          style={ImageIcon}
                        />
                        <Text
                          style={ActiveDate}
                        >{`Active: ${activeDate}`}</Text>
                      </>
                    )}
                  </ActiveDateHolder>
                  <ImageHolder>
                    {healthFrontImageLoaded ? (
                      <>
                        <ImageInsurance source={source1} />
                      </>
                    ) : (
                      <>
                        <Loader />
                      </>
                    )}
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
                    {idFrontImageLoaded ? (
                      <>
                        <ImageID source={source1} />
                      </>
                    ) : (
                      <>
                        <Loader />
                      </>
                    )}
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
                  <ImageHolder>
                    {healthFrontImageLoaded ? (
                      <>
                        <ImageHealth source={source1} />
                      </>
                    ) : (
                      <>
                        <Loader />
                      </>
                    )}
                  </ImageHolder>
                  <ImageHolder>
                    {healthBackImageLoaded ? (
                      <>
                        <ImageHealth source={source2} />
                      </>
                    ) : (
                      <>
                        <Loader />
                      </>
                    )}
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
                    {profileImageLoaded ? (
                      <>
                        <ImageProfile source={profileImage} />
                      </>
                    ) : (
                      <>
                        <Loader />
                      </>
                    )}
                  </ProfileImageHolder>
                </LowerBarContainer>
                <LowerBarContainer></LowerBarContainer>
              </LowerBarHolder>
            </>
          ) : (
            <>
              <Loader />
            </>
          )}
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
