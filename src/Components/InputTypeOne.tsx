import React from "react";
import {KeyboardTypeOptions} from "react-native";
import InputField from "./InputField";
import {UsernameSection, UsernameTextInput} from "../Modules/Login-Register/Login/Styles";

type InputOneFieldProps = {
    inputName: string;
    onChangeEvent: (text: string) => void;
    inputValue: string;
    placeHolderValue: string;
    keyboardType: KeyboardTypeOptions | undefined;
};
const InputTypeOne: React.FC<InputOneFieldProps> = ({
    inputName,
    onChangeEvent,
    inputValue,
    placeHolderValue,
    keyboardType
    }) => {

    return <>
        <InputField
            inputName={inputName}
            onChangeEvent={onChangeEvent}
            inputValue={inputValue}
            placeholderValue={placeHolderValue}
            keyboardType={keyboardType}
            placeholderColor={"darkblue"}
            inputStyle={UsernameSection}
            inputTextStyle={UsernameTextInput}
        />
    </>;
};

export default InputTypeOne;