/*
****************************************************************************************************************************
* Filename    : Form
* Description : This file holds Registration form design in React
* Author      : Elishree Dey Chand
* Created     : 2026-05-13
****************************************************************************************************************************
*/
import listIcon from '../assets/listIcon.jpg'


export function initTableEvents(): void { alert('here');

}






/* In react component name as function should start with Capital e.g:RenderForm no error but e.g:renderForm
will give error while calling from App.tsx */

export default function RenderTable() {
  return (
    <>

      <div id="divTableComponent" className="tableCard">
    <h1>
        <img src="{listIcon}" className="icon" />
        <span>View Registered Data</span>
    </h1><br/>
    <div className="tableWrapper">
        <table id="viewData" className="displayRegisteredData">
            <thead>
                <tr>
                    <th className="storedDataColHeader">Name</th>
                    <th className="storedDataColHeader">Email</th>
                    <th className="storedDataColHeader">Phone</th>
                    <th className="storedDataColHeader">Gender</th>
                    <th colSpan={2} className="storedDataColHeader">Action</th>
                </tr>
            </thead>
            <tbody id="tableBody"></tbody>
        </table>
    </div>
    <span id="editTableRowNo" className="invisible"></span>
</div>



    </>
  )
}