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
  return '';
};

export const chkGroupValid = (text: string) => {
  return '';
};

export const chkEffDateValid = (text: string) => {
  return '';
};

export const chkRelPolicyValid = (text: string) => {
  return '';
};
