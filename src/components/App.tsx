import React, { useState, useEffect } from 'react';



import RenderForm from './Form';
import RenderTable from './Table';
import RenderSnackbar from './Snackbar';

import type { EntryDataBase } from './type';



export default function App() {

  const [tableData, setTableData] =
    useState<EntryDataBase[]>([]);

  const [editIndex, setEditIndex] =
    useState<number | null>(null);

  const [editUser, setEditUser] =
    useState<EntryDataBase | null>(null);

  useEffect(() => {

    const storedData = localStorage.getItem(
      'setLocalStorageJSON'
    );

    if (storedData) {
      setTableData(JSON.parse(storedData));
    }

  }, []);

  const handleDelete = (index: number) => {

    const updatedData = tableData.filter(
      (_, i) => i !== index
    );

    setTableData(updatedData);

    localStorage.setItem(
      'setLocalStorageJSON',
      JSON.stringify(updatedData)
    );
  };

  const handleEdit = (index: number) => {

    const selectedUser = tableData[index];

    setEditIndex(index);

    setEditUser(selectedUser);
  };

  return (

    <div className="pageContainer">

      <RenderForm
        tableData={tableData}
        setTableData={setTableData}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        editUser={editUser}
      />

      <RenderTable
        tableData={tableData}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <RenderSnackbar />
      
    </div>
  );
}