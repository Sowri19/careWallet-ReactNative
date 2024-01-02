import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import InputTypeOne from './InputTypeOne';
import { formatDate as formatDefaultDate } from '../../utilities/FormatUtils';

type DateOneFieldProps = {
  inputName?: string;
  inputValue?: Date;
  placeHolderValue: string;
  errorString?: string;
  onPressIn?: () => void;
  onDateConfirm: (date: Date) => void;
  onCancel: () => void;
  formatDate?: (date: Date) => string;
};
const DatePickerTypeOne: React.FC<DateOneFieldProps> = ({
  inputName,
  inputValue,
  placeHolderValue,
  errorString,
  onDateConfirm,
  onPressIn,
  onCancel,
  formatDate,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [dummyDate, setDummyDate] = useState<Date>(new Date());
  let dateShown = '';
  if (inputValue) {
    dateShown = formatDate
      ? formatDate(inputValue || dummyDate)
      : formatDefaultDate(inputValue || dummyDate);
  }
  return (
    <>
      <InputTypeOne
        inputName={inputName || ''}
        inputValue={dateShown}
        onChangeEvent={() => {}}
        placeHolderValue={placeHolderValue}
        errorString={errorString}
        onPressIn={() => {
          setModalOpen(true);
          onPressIn && onPressIn();
        }}
        editable={false}
      />
      <DatePicker
        modal
        open={modalOpen}
        mode={'date'}
        date={inputValue || dummyDate}
        onConfirm={(date: Date) => {
          setModalOpen(false);
          onDateConfirm && onDateConfirm(date);
        }}
        onCancel={() => {
          setModalOpen(false);
          onCancel && onCancel();
        }}
      />
    </>
  );
};

export default DatePickerTypeOne;
