/*
****************************************************************************************************************************
* Filename    : showSnackbar
* Description : This file holds utility function to display error msg
* Functions   : "showSnackbar"
* Author      : Elishree Dey Chand
* Created     : 2026-05-29
****************************************************************************************************************************
*/
import type { MsgDataType } from '../type.ts';

export function showSnackbar(data: MsgDataType): void {
  const snackbar = document.getElementById("snackbar") as HTMLElement | null;

  if (!snackbar) return;

  // Set dynamic message
  snackbar.textContent = data.message;

  snackbar.className = "show";
  snackbar.style.backgroundColor = data.color; 

  //snackbar.style.backgroundColor = "#503c97";

  setTimeout((): void => {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}