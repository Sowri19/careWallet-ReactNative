import { Platform, View } from 'react-native';
import React, { ComponentType } from 'react';
import { InputFieldProps } from '../../utilities/CommonTypes';
import { ShadowAndroid, ShadowIOS } from '../../Shared/Styles/ShadowStyles';

const withBoxShadow = <P extends InputFieldProps>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    return (
      <View style={Platform.OS === 'ios' ? ShadowIOS : ShadowAndroid}>
        <WrappedComponent {...props} />
      </View>
    );
  };
};

export default withBoxShadow;
