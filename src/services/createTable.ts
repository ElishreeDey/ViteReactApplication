/*
****************************************************************************************************************************
* Filename    : createtable
* Description : This file holds all functions to create and save data in browser localstorage
* Functions   : "createTableFromData"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
****************************************************************************************************************************
*/
import type { EntryDataBase } from "../type";
//This function will create a tablular format to display already entered data from browser's localstorage.
export function createTableFromData(data: EntryDataBase){
  
  //alert("create table from data");
  //save to local storage
  localStorage.setItem("userName", data.username);
  localStorage.setItem("email", data.email);
  localStorage.setItem("phone", data.phone);
  localStorage.setItem("gender", data.gender);  

  const table = document.getElementById("viewData") as HTMLTableElement | null;
  
  // Insert a new row at the end (-1 adds to the last position)
  //let newRow = table.insertRow(-1);
  if (!table) return; 
  const newRow = table.insertRow(1); // Insert new row at position 1 to add new data at top of the table. 
  const setRowNumber = table.rows.length - 1;

  // Set the dynamic ID to created table row.
  newRow.id = "row_" + setRowNumber; 

  // Insert new cells into that created row and set dynamic IDs to each cell.
  const cellOne = newRow.insertCell(0); cellOne.id = "cellOne_" + setRowNumber; 
  const cellTwo = newRow.insertCell(1); cellTwo.id = "cellTwo_" + setRowNumber; 
  const cellThree = newRow.insertCell(2); cellThree.id = "cellThree_" + setRowNumber; 
  const cellFour = newRow.insertCell(3); cellFour.id = "cellFour_" + setRowNumber; 
  const cellFive = newRow.insertCell(4); cellFive.id = "cellFive_" + setRowNumber; 
  const cellSix = newRow.insertCell(5); cellSix.id = "cellSix_" + setRowNumber; 

  // Add content to the new cells
  cellOne.innerHTML = data.username;
  cellTwo.innerHTML = data.email;
  cellThree.innerHTML = data.phone;
  cellFour.innerHTML = data.gender;
  cellFive.innerHTML = "<span class='editBtn' value='Edit'>Edit</span>";
  cellSix.innerHTML = "<span class='deleteBtn' value='X'>X</span>";

  // Setting colors to edit and delete(X) buttons
  cellFive.style.color = "blue";
  cellSix.style.color = "red";
}