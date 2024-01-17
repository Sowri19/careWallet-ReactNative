import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import withBoxShadow from '../HOCs/shadowTypeOne';
import { EyeIcon, LeftIcon } from '../../Styles/Fields/inputTypeOneStyles';
import { IconStyle } from '../../Shared/Styles/Styles';
import { InputTypeOneProps } from '../../utilities/CommonTypes';

const TextInputOne: React.FC<InputTypeOneProps> = ({
  placeholderValue,
  placeholderColor,
  onChangeEvent,
  inputValue,
  inputStyle,
  isPassword,
  keyboardType,
  onBlurEvent,
  onEndEditing,
  onFocus,
  editable,
  onPressIn,
  inputPStyle,
  leftIconClass,
  leftIconHTML,
  iconStyle,
}) => {
  const [passwordVisible, setPasswordVisibility] = useState<boolean>(false);
  return (
    <View style={inputPStyle}>
      {leftIconClass && <LeftIcon name={leftIconClass} style={IconStyle} />}
      {leftIconHTML && <>{leftIconHTML}</>}
      <TextInput
        placeholder={placeholderValue}
        placeholderTextColor={placeholderColor}
        onChangeText={onChangeEvent}
        value={inputValue}
        style={inputStyle}
        secureTextEntry={isPassword && !passwordVisible}
        keyboardType={keyboardType}
        onBlur={onBlurEvent}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        editable={editable}
        onPressIn={onPressIn}
      />
      {isPassword && (
        <EyeIcon
          name={passwordVisible ? 'eye-off' : 'eye'}
          style={iconStyle}
          onPress={() => setPasswordVisibility(!passwordVisible)}
        />
      )}
    </View>
  );
};

export default withBoxShadow(TextInputOne);
