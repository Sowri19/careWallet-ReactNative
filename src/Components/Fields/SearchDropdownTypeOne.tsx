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
  SearchItemContainer,
  SearchItem,
  SearchItemContainerSelected,
  SearchItemSelected,
} from '../../Styles/Fields/SearchDropdownStyles';
import { Text, View } from 'react-native';
import axios from 'axios';
import { stylePrimaryColor } from '../../Styles/AppWideConstants/Styles';
import { SearchDropdownItem } from '../../utilities/CommonTypes';
import withBoxShadow from "../HOCs/shadowTypeOne";

type SearchDropdownProps = {
  searchInputValueCB: (text: string) => void;
  inputValue: SearchDropdownItem | undefined;
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
    const result = await axios.get(searchApi);
    cb(result);
  }, debounceTime);
};

const renderListItem = (
  item: SearchDropdownItem,
  selected: boolean | undefined
) => {
  return (
    <View style={selected ? SearchItemContainerSelected : SearchItemContainer}>
      <Text style={selected ? SearchItemSelected : SearchItem}>
        {item.fullLabel}
      </Text>
    </View>
  );
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
  searchInputValueCB,
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
    searchInputValueCB && searchInputValueCB(text);
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
        renderItem={renderListItem}
        activeColor={stylePrimaryColor}
        onChangeText={inputSearch}
        containerStyle={SearchBox}
        selectedTextStyle={
          inputErr ? DropdownPlaceHolderError : DropdownPlaceHolder
        }
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

// export default SearchDropdownTypeOne;

export default withBoxShadow(SearchDropdownTypeOne);
