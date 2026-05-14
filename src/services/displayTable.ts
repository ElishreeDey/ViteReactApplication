/*
****************************************************************************************************************************
* Filename    : displaytable
* Description : This file hold functions to display already saved info from browser localstorage even on page refresh data stays.
* Functions   : "displayData"
* Imported Functions: "createTableFromData"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
****************************************************************************************************************************
*/

//First import the required functions
import { createTableFromData } from './createTable';
import type { EntryDataBase } from "../type";

//specify the entry data types
// type entryData = {
//   name: string;
//   email: string;
//   phone: string;
//   gender: string;
// };

//This function will display already entered data from browser's localstorage.
export function displayData(){
  
  const storageKey = 'setLocalStorageJSON';
  const raw = localStorage.getItem(storageKey);
    
    // Use your defined type for the array
  const allEnteredvalues: EntryDataBase[] = raw ? JSON.parse(raw) : [];
    
    allEnteredvalues.forEach((obj) => {
        // Pass the actual object 'obj' to the function
        createTableFromData(obj); 
    });
}