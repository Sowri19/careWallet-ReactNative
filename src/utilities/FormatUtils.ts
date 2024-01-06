import { Address, SearchDropdownItem } from './CommonTypes';

export const formatDate = (date: Date) => {
  let month = `${date.getMonth() + 1}`;
  if (month.length == 1) {
    month = `0${month}`;
  }
  let day = `${date.getDate()}`;
  if (month.length == 1) {
    day = `0${day}`;
  }
  return `${month}/${day}/${date.getFullYear()}`;
};

export const constructDate = (text: string) => {
  const date = new Date();
  const temp = text.split('/');
  date.setMonth(parseInt(temp[0]) - 1);
  date.setDate(parseInt(temp[1]));
  date.setFullYear(parseInt(temp[2]));
  return date;
};

export const extractNumbersFromString = (text: string) => {
  const numbersArray = text.match(/\d+(\.\d+)?/g) || [];
  const stringArray = numbersArray.map((number, index) => {
    return number;
  });
  return stringArray.join('');
};

export const formatPhoneNumberString = (text: string) => {
  let fieldText: string;
  const lengthTxt = text.length;
  if (lengthTxt == 0) {
    fieldText = `(`;
  } else if (lengthTxt > 0 && lengthTxt < 4) {
    fieldText = `(${text}`;
  } else if (lengthTxt > 3 && lengthTxt < 7) {
    fieldText = `(${text.slice(0, 3)}) ${text.slice(3)}`;
  } else if (lengthTxt > 6 && lengthTxt < 11) {
    fieldText = `(${text.slice(0, 3)}) ${text.slice(3, 6)} - ${text.slice(6)}`;
  } else {
    fieldText = `(${text.slice(0, 3)}) ${text.slice(3, 6)} - ${text.slice(6)}`;
  }
  return fieldText;
};

export const formatSearchAddressToString = (data: Address) => {
  return {
    label: `${data.street_address}`,
    value: `${data.street_address}$=$${data.locality}$=$${data.state}$=$${data.country}$=$${data.postal_code}`,
    fullLabel: `${data.street_address}, ${data.locality}, ${data.state}, ${data.country}, ${data.postal_code}`,
  };
};

export const constructSearchAddressFromString = (text: string) => {
  const temp = text.split(`$=$`);
  return {
    street_address: temp[0],
    locality: temp[1],
    state: temp[2],
    country: temp[3],
    postal_code: temp[4],
  };
};
