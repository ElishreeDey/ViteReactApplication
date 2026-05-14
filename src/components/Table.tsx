/*
****************************************************************************************************************************
* Filename    : Form
* Description : This file holds Table design in React
* Author      : Elishree Dey Chand
* Created     : 2026-05-13
****************************************************************************************************************************
*/

//Import images needed in Registered Table data
import listIcon from '../assets/listicon.jpg'
import editIcon from '../assets/editIcon.jpg'
import deleteIcon from '../assets/deleteIcon.jpg'

//import data type
import type { EntryDataBase } from "../type";


/* In react component name as function should start with Capital e.g:RenderForm no error but e.g:renderForm
will give error while calling from App.tsx */

export default function RenderTable() {
  return (
    <>

      <div id="divTableComponent" className="tableCard">
        <h1>            
            <img src={listIcon} className="icon" alt="List Icon" />
            <span>View Registered Data</span>
        </h1>
        <div className="tableWrapper">
        <table id="viewData" className="displayRegisteredData">
            <thead>
                <tr>
                    <th className="storedDataColHeader">Name</th>
                    <th className="storedDataColHeader">Email</th>
                    <th className="storedDataColHeader">Phone</th>
                    <th className="storedDataColHeader">Gender</th>
                    <th colSpan={2} className="storedDataColHeader" >Action</th>
                </tr>
            </thead>
            
        </table>
    </div>
    <span id="editTableRowNo" className="invisible"></span>
    </div>



    </>
  )
}