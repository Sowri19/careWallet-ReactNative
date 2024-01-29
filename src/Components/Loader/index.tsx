import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { stylePrimaryColor } from '../../Styles/AppWideConstants/Styles';
import {
  Indicator,
  SubHeaderBoldLoading,
  LoadingContainer,
  ActivityIndicatorStyle,
} from './styles';

const Loader: React.FC = () => (
  <Indicator>
    <View style={LoadingContainer}>
      <SubHeaderBoldLoading>Processing</SubHeaderBoldLoading>
      <ActivityIndicator
        style={ActivityIndicatorStyle}
        color={stylePrimaryColor}
      />
    </View>
  </Indicator>
);

export default Loader;
