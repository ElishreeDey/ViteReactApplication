/*
***********************************************************************************************
* Filename    : validation
* Description : This file holds all functions for validating the input fields during entry
* Functions   : "checkNotIsEmpty", "validateEmail", "validateFlexiblePhone"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
***********************************************************************************************
*/

//This function will check if the name is empty or not. Can be used for other fields as well if needed to check NotIsEmpty.
export function checkNotIsEmpty(name: string) {
  const mandatoryName = document.getElementById("mandatoryName") as HTMLElement  | null;
  if (name.trim() === "" || name == null) { 
    if (mandatoryName) {           
      mandatoryName.style.display  = "";
      mandatoryName.innerHTML = "*";
      return false;
    }
  }
  else {
    if (mandatoryName) {        
      mandatoryName.style.display  = "none";
      mandatoryName.innerHTML = "*";
      return false;
    }
  }
}

//This function will check if the email is valid or not.
export function validateEmail(email: string) {
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  var isValid:boolean = pattern.test(email); //alert(isValid);
  const mandatoryEmail = document.getElementById("mandatoryEmail") as HTMLElement  | null;
        
  if (!isValid) {
    if (mandatoryEmail) {          
      mandatoryEmail.style.display  = "";
      mandatoryEmail.innerHTML = "invalid email address";
      return false;
    }
  }
  else {
    if (mandatoryEmail) {
      mandatoryEmail.style.display  = "none";          
      mandatoryEmail.innerHTML = "";
    }    
  }
}


//This function will check if the phone number is valid or not.
export function validateFlexiblePhone(phone: string) {
  var regex: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var isValid:boolean = regex.test(phone);
  var message: string;
  const mandatoryPhone = document.getElementById("mandatoryPhone") as HTMLElement  | null;
  const phoneEntry = document.getElementById("phone") as HTMLInputElement | null;
    
  if (!isValid) { //alert("here" + isValid);
    if (mandatoryPhone) {
      mandatoryPhone.innerHTML = "invalid phone number";
      mandatoryPhone.style.display  = "";
    }
    message =  "error in phone number";
    return message;
  }
  else { //alert(isValid);        
    const formatted = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // basic phone format as xxx-xxx-xxxx
    if (mandatoryPhone) {
      mandatoryPhone.innerHTML = "";
      mandatoryPhone.style.display  = "none";
    }

    if (phoneEntry) {
      phoneEntry.value = formatted;
    }

  }
}