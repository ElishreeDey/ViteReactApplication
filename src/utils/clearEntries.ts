/*
****************************************************************************************************************************
* Filename    : clearEntries
* Description : This file holds function to clear all entry fields after entry.
* Functions   : "clearEntryFields"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
****************************************************************************************************************************
*/

//This function will clear all entry fields after entry.
export function clearEntryFields(){
  const userNameEntry = document.getElementById("userName") as HTMLInputElement | null;
  const emailEntry = document.getElementById("email") as HTMLInputElement | null;
  const phoneEntry = document.getElementById("phone") as HTMLInputElement | null;
  const genderEntry = document.getElementById("gender") as HTMLInputElement | null;    

  const mandatoryName = document.getElementById("mandatoryName") as HTMLElement  | null;
  const mandatoryEmail = document.getElementById("mandatoryEmail") as HTMLElement  | null;
  const mandatoryPhone = document.getElementById("mandatoryPhone") as HTMLElement  | null;

  if (userNameEntry) userNameEntry.value  = "";
  if (emailEntry) emailEntry.value  = ""; 
  if (phoneEntry) phoneEntry.value  = ""; 
  if (genderEntry) genderEntry.value  = "";   
    
  if (mandatoryName) {
    mandatoryName.style.display  = "";          
    mandatoryName.innerHTML = "*";
  }  

  if (mandatoryEmail) {
    mandatoryEmail.style.display  = "";          
    mandatoryEmail.innerHTML = "*";
  }

  if (mandatoryPhone) {
    mandatoryPhone.style.display  = "";          
    mandatoryPhone.innerHTML = "*";
  }  
}