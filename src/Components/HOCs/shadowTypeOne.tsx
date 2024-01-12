import { Platform, View } from 'react-native';
import React, { ComponentType } from 'react';
import { ShadowAndroid, ShadowIOS } from '../../Shared/Styles/ShadowStyles';

const withBoxShadow = <P,>(WrappedComponent: ComponentType<any>) => {
  return (props: P) => {
    return (
      <View style={Platform.OS === 'ios' ? ShadowIOS : ShadowAndroid}>
        <WrappedComponent {...props} />
      </View>
    );
  };
};

export default withBoxShadow;
