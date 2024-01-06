import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {
  DropdownSection,
  DropdownPlaceHolder,
  LabelText,
  DropdownSectionError,
  ErrorText,
  SearchBox,
  SearchInputError,
  SearchInput,
  DropdownPlaceHolderError,
} from '../../Styles/Fields/SearchDropdownStyles';
import { Text } from 'react-native';
import axios from 'axios';
import { stylePrimaryColor } from '../../Styles/AppWideConstants/Styles';
import { SearchDropdownItem } from '../../utilities/CommonTypes';

type SearchDropdownProps = {
  inputValue: string;
  inputErr: string;
  setInputValue: (item: SearchDropdownItem) => void;
  inputPlaceHolder: string;
  inputName: string;
  searchPlaceHolder: string;
  initialList?: SearchDropdownItem[];
  searchApiProps?: {
    searchApi: string;
    searchApiCallback: (data: any) => SearchDropdownItem[];
  };
  debounceTime?: number;
  renderInputSearch?: (onSearch: (text: string) => void) => JSX.Element;
};

let debounceVar: any;
const searchApiHit = (
  searchApi: string,
  cb: (data: any) => void,
  debounceTime: number
) => {
  debounceVar && clearTimeout(debounceVar);
  debounceVar = setTimeout(async () => {
    // const result = await axios.get(searchApi);
    // cb(result);
    cb({
      data: {
        addresses: [
          {
            country: 'United States',
            locality: 'Boston',
            postal_code: '02119',
            state: 'Massachusetts',
            street_address: '22 Highland Ave',
          },
          {
            country: 'United States',
            locality: 'Smiths Grove',
            postal_code: '42171',
            state: 'Kentucky',
            street_address: '22 Highland Ave',
          },
          {
            country: 'United States',
            locality: 'Blah',
            postal_code: '42300',
            state: 'California',
            street_address: '22 Highland Ave',
          },
        ],
      },
    });
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
  renderInputSearch,
}) => {
  const [searchList, setSearchlist] = useState<SearchDropdownItem[]>(
    initialList || []
  );
  const debounceTimeLocal = debounceTime ? debounceTime : 500;
  const inputSearch = (text: string) => {
    if (searchApiProps && text.length > 2) {
      const completeApi = `${searchApiProps.searchApi}${encodeURIComponent(
        text
      )}`;
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
        onChange={(item) => {
          setInputValue(item);
        }}
        value={inputValue}
        placeholder={inputPlaceHolder}
        searchPlaceholder={searchPlaceHolder}
        search
        placeholderStyle={
          inputErr ? DropdownPlaceHolderError : DropdownPlaceHolder
        }
        activeColor={stylePrimaryColor}
        onChangeText={inputSearch}
        containerStyle={SearchBox}
        searchField="fullLabel"
        valueField="value"
        labelField="label"
        inputSearchStyle={inputErr ? SearchInputError : SearchInput}
        renderRightIcon={() => {
          return <></>;
        }}
        renderInputSearch={renderInputSearch}
      />
      {inputErr && inputErr !== '' && <Text style={ErrorText}>{inputErr}</Text>}
    </>
  );
};

export default SearchDropdownTypeOne;
