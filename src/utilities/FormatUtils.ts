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
    fieldText = `(${text.slice(0, 3)}) ${text.slice(3, 6)} - ${text.slice(
      6,
      10
    )}`;
  }
  return fieldText;
};
