/*
****************************************************************************************************************************
* Filename    : saveData
* Description : Save form data and store in localStorage (React Version)
****************************************************************************************************************************
*/

//import { clearEntryFields } from '../utils/clearEntries';
import { checkNotIsEmpty, validateEmail, validateFlexiblePhone } from '../utils/validation';
import { createTableFromData } from './createTable';

import type { EntryDataBase } from '../type';

import { MsgBgCol, ValidationMsg, addEditDeleteMsgText } from '../utils/constants';

import { showSnackbar } from '../utils/showSnackbar';


// Save Data Function
export function saveData(user: EntryDataBase): boolean {

  let err = "";

  // ---------------- Required Validation ----------------

  if (
    user.username.trim() === "" &&
    user.email.trim() === "" &&
    user.phone.trim() === ""
  ) {
    err = ValidationMsg.allMandatoryFieldsRequiredTxt;
  }
  else if (user.username.trim() === "") {
    err = ValidationMsg.nameRequiredTxt;
  }
  else if (user.email.trim() === "") {
    err = ValidationMsg.emailRequiredTxt;
  }
  else if (user.phone.trim() === "") {
    err = ValidationMsg.phoneRequiredTxt;
  }

  // ---------------- Name Validation ----------------

  const nameValidation = checkNotIsEmpty(user.username);

  if (!nameValidation.isValid) {
    err = nameValidation.errorMessage;
  }

  // ---------------- Email Validation ----------------

  const emailValidation = validateEmail(user.email);

  if (!emailValidation.isValid) {
    err = emailValidation.errorMessage;
  }

  // ---------------- Phone Validation ----------------

  const phoneValidation = validateFlexiblePhone(user.phone);

  if (!phoneValidation.isValid) {
    err = phoneValidation.errorMessage;
  }

  // ---------------- Show Error ----------------

  if (err !== "") {

    showSnackbar({
      message: err,
      color: MsgBgCol.errMsgCol
    });

    return false;
  }

  // ---------------- Success ----------------

  showSnackbar({
    message: addEditDeleteMsgText.dataSaveMsg,
    color: MsgBgCol.successMsgCol
  });

  // Add to table
  createTableFromData(user);

  // Store in localStorage
  const storageKey = "setLocalStorageJSON";

  const existingData: EntryDataBase[] = JSON.parse(
    localStorage.getItem(storageKey) || "[]"
  );

  existingData.push(user);

  localStorage.setItem(storageKey, JSON.stringify(existingData));

  return true;
}