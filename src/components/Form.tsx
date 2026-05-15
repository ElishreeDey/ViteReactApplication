import React, {
  useState,
  ChangeEvent,
  SubmitEvent,
  useEffect
} from 'react';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import faceIcon from '../assets/faceIcon.jpg';

import {checkNotIsEmpty, validateEmail, validateFlexiblePhone} from '../utils/validation';

import {addEditDeleteMsgText} from '../utils/constants';

import type { EntryDataBase } from '../type';

type FormProps = {

  tableData: EntryDataBase[];

  setTableData: React.Dispatch<
    React.SetStateAction<EntryDataBase[]>
  >;

  editIndex: number | null;

  setEditIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;

  editUser: EntryDataBase | null;
};

export default function RenderForm({

  tableData,

  setTableData,

  editIndex,

  setEditIndex,

  editUser

}: FormProps) {

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    gender: '',
    mandatoryName: '*',
    mandatoryEmail: '*',
    mandatoryPhone: '*',
  });

  useEffect(() => {

    if (editUser) {

      setFormData({
        userName: editUser.username,
        email: editUser.email,
        phone: editUser.phone,
        gender: editUser.gender,
        mandatoryName: '*',
        mandatoryEmail: '*',
        mandatoryPhone: '*',
      });
    }

  }, [editUser]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value } = e.target;

    if (name === 'userName') {

      const result = checkNotIsEmpty(value);

      setFormData((prev) => ({
        ...prev,
        mandatoryName:
          value === ''
            ? '*'
            : result.isValid
            ? ''
            : result.errorMessage
      }));
    }

    if (name === 'email') {
      const result = validateEmail(value);
      setFormData((prev) => ({
        ...prev,
        mandatoryEmail:
          value === ''
            ? '*'
            : result.isValid
            ? ''
            : result.errorMessage
      }));
    }

    if (name === 'phone') {
      const result = validateFlexiblePhone(value);
      setFormData((prev) => ({
        ...prev,
        phone: result.isValid
          ? result.formattedPhone
          : prev.phone,

        mandatoryPhone:
          value === ''
            ? '*'
            : result.isValid
            ? ''
            : result.errorMessage
      }));
    }
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    //alert(editIndex); // alert actual table row index for edit.
   
    
    const userData = {
      username: formData.userName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
    };

    // EDIT
    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = userData;
      setTableData(updatedData);
      localStorage.setItem(
        'setLocalStorageJSON',
        JSON.stringify(updatedData)
      );
      setEditIndex(null);

      // Toast Popup creation
      toast.success(`${addEditDeleteMsgText.dataEditMsg}`,{position: "top-right",});
    }

    // ADD
    else {
      const updatedData = [
        userData,
        ...tableData
      ];

      setTableData(updatedData);

      localStorage.setItem(
        'setLocalStorageJSON',
        JSON.stringify(updatedData)
      );

      // Toast Popup creation
      toast.success(`${addEditDeleteMsgText.dataSaveMsg}`,{position: "top-right",});
    }

    // CLEAR FORM
    setFormData({
      userName: '',
      email: '',
      phone: '',
      gender: '',
      mandatoryName: '*',
      mandatoryEmail: '*',
      mandatoryPhone: '*',
    });
  };

  return (

    <div
      id="divFormComponent"
      className="formCard"
    >

      <h1>

        <img
          src={faceIcon}
          className="icon"
          alt="Face Icon"
        />

        <span>Registration</span>

      </h1>

      <form
        id="registrationForm"
        onSubmit={handleSubmit}
      >

        <label htmlFor="userName">
          First name:

          <span
            id="mandatoryName"
            className="mandatory"
          >
            {formData.mandatoryName}
          </span>

        </label>

        <br />

        <input
          type="text"
          id="userName"
          name="userName"
          required
          value={formData.userName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <br />

        <label htmlFor="email">
          Email:

          <span
            id="mandatoryEmail"
            className="mandatory"
          >
            {formData.mandatoryEmail}
          </span>

        </label>

        <br />

        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <br />

        <label htmlFor="phone">
          Phone:

          <span
            id="mandatoryPhone"
            className="mandatory"
          >
            {formData.mandatoryPhone}
          </span>

        </label>

        <br />

        <input
          type="text"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <br />

        <label htmlFor="gender">
          Gender:
        </label>

        <br />

        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >

          <option value="">
            Select Gender
          </option>

          <option value="male">
            Male
          </option>

          <option value="female">
            Female
          </option>

        </select>

        <br />
        <br />

        <button
          id="btnAddData"
          type="submit"
        >

          {editIndex !== null
            ? 'Save Changes'
            : 'Submit'}

        </button>

      </form>
      <ToastContainer /> {/*actually renders toastify popup UI on screen. */}
    </div>
  );
}