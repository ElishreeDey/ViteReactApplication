/*
****************************************************************************************************************************
* Filename    : Table
* Description : This file holds Table design for View Registered Data
* Author      : Elishree Dey Chand
* Created     : 2026-05-13
****************************************************************************************************************************
*/

import React from 'react';

import editIcon from '../assets/editIcon.jpg';
import deleteIcon from '../assets/deleteIcon.jpg';
import listIcon from '../assets/listIcon.jpg';

import type { EntryDataBase } from '../type';

type TableProps = {
  tableData: EntryDataBase[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
};

export default function RenderTable({
    tableData,
    onDelete,
    onEdit
  }: TableProps) {

  return (

    <div className="tableCard">
      <h1>
        <img src={listIcon} className="icon" alt="List Icon"/>
        Registered Data
      </h1>
      <div className="tableWrapper">
        <table id="viewData" className="displayRegisteredData">
          <thead>
            <tr>
              <th className="storedDataColHeader">Name</th>
              <th className="storedDataColHeader">Email</th>
              <th className="storedDataColHeader">Phone</th>
              <th className="storedDataColHeader">Gender</th>
              <th className="storedDataColHeader">Action</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((user, index) => (
              <tr key={index}>
                <td className="storedDataCol">{user.username}</td>
                <td className="storedDataCol">{user.email}</td>
                <td className="storedDataCol">{user.phone}</td>
                <td className="storedDataCol">{user.gender}</td>
                <td className="storedDataCol">
                  <img
                    src={editIcon}
                    className="editDeleteIcon"
                    alt="Edit"
                    onClick={() => onEdit(index)}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src={deleteIcon}
                    className="editDeleteIcon"
                    alt="Delete"
                      onClick={() => {

                        const confirmDelete =
                          window.confirm(
                            "Are you sure you want to delete this record?"
                          );

                        if (confirmDelete) {
                          onDelete(index);
                        }
                      }}

                    style={{ cursor: 'pointer' }}
                  />
                </td>                
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}