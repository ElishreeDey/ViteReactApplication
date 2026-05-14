/*
****************************************************************************************************************************
* Filename    : editDeleteData
* Description : This file holds all functions to edit or delete a registered data in browser localstorage
* Functions   : "deleteRow", "editRow", "saveEditedData"
* Imported Functions: "clearEntryFields"
* Author      : Elishree Dey Chand
* Created     : 2026-05-24
****************************************************************************************************************************
*/

//First import the required functions
import { clearEntryFields } from '../utils/clearEntries';
import { showSnackbar } from '../utils/showSnackbar';


import { MsgBgCol,addEditDeleteMsgText } from '../utils/constants';

//specify the entry data types
type entryData = {
  name: string;
  email: string;
  phone: string;
  gender: string;
};

//This function will delete the corresponding row of the table when user clicks on delete(X) button.
export function deleteRow(r: HTMLElement) {//alert(r.getHTML);
  if (confirm("Are you sure you want to delete this rec?")) {
    const row = r.parentElement?.parentElement as HTMLTableRowElement | null;
    if (!row) return;

    const index: number = row.rowIndex;

    const table = document.getElementById("viewData") as HTMLTableElement | null;
    if (table) table.deleteRow(index);

    //It will remove the data from localstorage JSON array as well. So on page it will not visible as data is deleted from table.  
    const raw = localStorage.getItem("setLocalStorageJSON");
    const data: entryData[] = raw ? JSON.parse(raw) : [];
    const arrayIndex = index - 1;

    if (arrayIndex > -1 && arrayIndex < data.length) {
      data.splice(arrayIndex, 1);// remove 1 item at index
    }
    
    localStorage.setItem("setLocalStorageJSON", JSON.stringify(data));
    // End of code for deleting data from local storage JSON array as well. 

  } else {
    //alert("Deletion action is cancelled.");
    //showSnackbar("Deletion action is cancelled.", MsgBgCol.alertMsgCol);

    showSnackbar({
      //message: "Deletion action is cancelled.",
      message: addEditDeleteMsgText.deleteCancelTxt,
      color: MsgBgCol.alertMsgCol
    });

  }
}

//This function is called when user has clicked edit button in a table row.
export function editRow(r: HTMLElement) {//alert("edit");
  const row = r.parentElement?.parentElement as HTMLTableRowElement | null;
  if (!row) return;

  const i: number = row.rowIndex;
  const rowId: string = row.id;//alert(rowId);

  const editTableRowNo = document.getElementById("editTableRowNo") as HTMLElement | null;
  if (editTableRowNo) editTableRowNo.innerHTML = rowId;
  //alert(i);

  const table = document.getElementById("viewData") as HTMLTableElement | null;
  if (!table) return;   

  const nameForEdit: string = table.rows[i]?.cells[0]?.innerHTML?? "";
  const emailForEdit: string = table.rows[i]?.cells[1]?.innerHTML?? "";
  const phoneForEdit: string = table.rows[i]?.cells[2]?.innerHTML?? "";
  const genderForEdit: string = table.rows[i]?.cells[3]?.innerHTML?? ""; 

  //alert(nameForEdit + " " + emailForEdit + " " + phoneForEdit + " " + genderForEdit);
  (document.getElementById("userName")as HTMLInputElement).value = nameForEdit;
  (document.getElementById("email")as HTMLInputElement).value = emailForEdit;
  (document.getElementById("phone")as HTMLInputElement).value = phoneForEdit;
  (document.getElementById("gender")as HTMLInputElement).value = genderForEdit;
   
  const btnAdd = document.getElementById("btnAddData") as HTMLElement ;
  const btnEdit = document.getElementById("btnEditData") as HTMLElement ;

  if (btnAdd) btnAdd.style.display = 'none';
  if (btnEdit) btnEdit.style.display = 'block';

  //document.getElementById("btnAddData").style.display= 'none';
  //document.getElementById("btnEditData").style.display= 'block';
}

//This function is called when user has clicked Save Changes to save, modified info and store it back and save in same table row.
export function saveEditedData(){//alert("save edit");
  const editTableRowNo = document.getElementById("editTableRowNo") as HTMLElement | null;
  if (!editTableRowNo) return;

  const rowId: string = editTableRowNo.innerHTML; //alert(rowId);  
  const i: number = Number(rowId.split("_")[1]); //alert(i);

  const userName = document.getElementById("userName") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const phone = document.getElementById("phone") as HTMLInputElement;
  const gender = document.getElementById("gender") as HTMLInputElement;

  // Update table cells
  const cellOne = document.getElementById(`cellOne_${i}`);
  const cellTwo = document.getElementById(`cellTwo_${i}`);
  const cellThree = document.getElementById(`cellThree_${i}`);
  const cellFour = document.getElementById(`cellFour_${i}`);

  if (cellOne) cellOne.innerHTML = userName.value;
  if (cellTwo) cellTwo.innerHTML = email.value;
  if (cellThree) cellThree.innerHTML = phone.value;
  if (cellFour) cellFour.innerHTML = gender.value;

  //document.getElementById("cellOne_" + i).innerHTML= document.getElementById("userName").value;
  //document.getElementById("cellTwo_" + i).innerHTML= document.getElementById("email").value;
  //document.getElementById("cellThree_" + i).innerHTML= document.getElementById("phone").value;
  //document.getElementById("cellFour_" + i).innerHTML= document.getElementById("gender").value;   

  const btnAdd = document.getElementById("btnAddData") as HTMLElement | null;
  const btnEdit = document.getElementById("btnEditData") as HTMLElement | null;

  if (btnAdd) btnAdd.style.display = 'block';    
  if (btnEdit) btnEdit.style.display = 'none';  

  //const key = "setLocalStorageJSON";
  const index = i-1; // position to update
  //alert(index);

  // 1. Get and parse
  const raw = localStorage.getItem("setLocalStorageJSON");
  const data: entryData[] = raw ? JSON.parse(raw) : [];


  // 2. New updated object
  const updatedNode: entryData = {
    name: userName.value,
    email: email.value,
    phone: phone.value,
    gender: gender.value
  };//alert(updatedNode);

  // 3. Replace using splice
  if (index > -1 && index < data.length) {//alert("here");
    data.splice(index, 1, updatedNode); // remove 1, insert updatedNode
  }
  localStorage.setItem("setLocalStorageJSON", JSON.stringify(data));

  // clear entry fields after submission
  clearEntryFields();
}