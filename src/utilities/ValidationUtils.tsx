import { formatDate } from "./FormatUtils";

export const chkPassValid = (text: string) => {
  if (text == '') {
    return 'Password cannot be empty';
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
  if (!passwordRegex.test(text)) {
    return 'Atleast 12 chars, 1 numeric, special, upper and lower case';
  }
  return '';
};

export const chkIDValid = (text: string) => {
  if (text == '') {
    return 'ID cannot be empty';
  }
  return '';
};

export const chkDateValid = (text: string) => {
  if (text == '') {
    return 'Date cannot be empty';
  }
  return '';
};

export const chk18DateValid = (date: Date | undefined) => {
  if (!date) {
    return chkDateValid('');
  }
  const error = chkDateValid(formatDate(date));
  if (error) {
    return error;
  }
  // at least 18 years older
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  if (date > eighteenYearsAgo) {
    return `You must be at least 18 years old.`;
  }
  return ``;
};

export const chkPhoneValid = (text: string) => {
  if (text == '') {
    return 'Phone Number cannot be empty';
  }
  const intValue = parseInt(text);
  if (isNaN(intValue)) {
    return 'Invalid Phone Number';
  }
  if (text.length != 10) {
    return '10 digits required';
  }
  return '';
};

export const chkEmailValid = (text: string) => {
  if (text == '') {
    return 'Email cannot be empty';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(text)) {
    return 'Invalid Email';
  }
  return '';
};

export const chkConfirmPassValid = (text: string, password: string) => {
  if (text == '') {
    return 'Password cannot be empty';
  }
  if (password != '' && text != '') {
    if (text !== password) {
      return 'Passwords are not equal';
    }
  }
  return '';
};

export const chkNameValid = (text: string) => {
  if (text == '') {
    return 'Name cannot be empty';
  }
  const alphabeticRegex = /^[a-zA-Z\s]+$/;
  if (!alphabeticRegex.test(text)) {
    return 'Invalid Name';
  }
  return '';
};

export const chkInsTypeValid = (text: string) => {
  if (text == '') {
    return 'Insurance Type cannot be empty';
  }
  const alphabeticRegex = /^[a-zA-Z]+$/;
  if (!alphabeticRegex.test(text)) {
    return 'Invalid Name';
  }
  return '';
};

export const chkGroupValid = (text: string) => {
  if (text.length > 0) {
    const intValue = parseInt(text);
    if (isNaN(intValue)) {
      return 'Invalid Group Number';
    }
  }
  return '';
};

export const chkEffDateValid = (text: string) => {
  return '';
};

export const chkRelPolicyValid = (text: string) => {
  return '';
};

export const chkAddressValid = (text: string) => {
  if (text === '') {
    return `Address cannot be empty`;
  }
  return '';
};

export const chkCityValid = (text: string) => {
  if (text === '') {
    return `City cannot be empty`;
  }
  return '';
};

export const chkStateValid = (text: string) => {
  if (text === '') {
    return `State cannot be empty`;
  }
  return '';
};

export const chkZipcodeValid = (text: string) => {
  if (text === '') {
    return `Zipcode cannot be empty`;
  }
  return '';
};
