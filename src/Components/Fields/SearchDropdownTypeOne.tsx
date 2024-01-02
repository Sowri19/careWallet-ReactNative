import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {
  DropdownSection,
  DropdownPlaceHolder,
  LabelText,
  DropdownSectionError,
  ErrorText,
  SearchBox,
} from '../../Styles/Fields/SearchDropdownStyles';
import { Text } from 'react-native';
import axios from 'axios';

type Item = {
  label: string;
  value: string;
};

type SearchDropdownProps = {
  inputValue: string;
  inputErr: string;
  setInputValue: (item: Item) => void;
  inputPlaceHolder: string;
  inputName: string;
  searchPlaceHolder: string;
  initialList?: Item[];
  searchApiProps?: {
    searchApi: string;
    searchApiCallback: (data: any) => Item[];
  };
  debounceTime?: number;
};

let debounceVar: any;
const searchApiHit = (
  searchApi: string,
  cb: (data: any) => void,
  debounceTime: number
) => {
  debounceVar && clearTimeout(debounceVar);
  debounceVar = setTimeout(async () => {
    const result = await axios.get(searchApi);
    cb(result);
  }, debounceTime);
};

const SearchDropdownTypeOne: React.FC<SearchDropdownProps> = ({
  inputValue,
  inputErr,
  setInputValue,
  inputPlaceHolder,
  inputName,
  searchPlaceHolder,
  initialList,
  searchApiProps,
  debounceTime,
}) => {
  const [searchList, setSearchlist] = useState<Item[]>(initialList || []);
  const debounceTimeLocal = debounceTime ? debounceTime : 500;
  const inputSearch = (text: string) => {
    if (searchApiProps && text.length > 2) {
      const completeApi = `${searchApiProps.searchApi}${text}`;
      searchApiHit(
        completeApi,
        (data) => {
          const searchListTemp = searchApiProps.searchApiCallback(data);
          setSearchlist(searchListTemp);
        },
        debounceTimeLocal
      );
    }
  };
  return (
    <>
      {inputName !== '' && <Text style={LabelText}>{inputName}</Text>}
      <Dropdown
        data={searchList}
        style={inputErr ? DropdownSectionError : DropdownSection}
        labelField="label"
        onChange={(item) => {
          setInputValue(item);
        }}
        valueField="value"
        value={inputValue}
        placeholder={inputPlaceHolder}
        searchPlaceholder={searchPlaceHolder}
        search
        placeholderStyle={DropdownPlaceHolder}
        activeColor={'#2c075a'}
        onChangeText={inputSearch}
        containerStyle={SearchBox}
        renderRightIcon={() => {
          return <></>;
        }}
      />
      {inputErr && inputErr !== '' && <Text style={ErrorText}>{inputErr}</Text>}
    </>
  );
};

export default SearchDropdownTypeOne;
