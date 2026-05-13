/*
****************************************************************************************************************************
* Filename    : Form
* Description : This file holds Registration form design in React
* Author      : Elishree Dey Chand
* Created     : 2026-05-13
****************************************************************************************************************************
*/

import faceIcon from '../assets/faceicon.jpg'
import React, { useState, ChangeEvent, SubmitEvent } from "react";



/* In react component name as function should start with Capital e.g:RenderForm no error but e.g:renderForm
will give error while calling from App.tsx */
export default function RenderForm() {

    // Set Form Data
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        phone: "",
        gender: "",
    });

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    };

    // 3. Handle submission
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Hello, ${formData.userName}!`);
    };

  
  return (
    <>

      <div id="divFormComponent" className="formCard">    
        <h1>  
            <img src={faceIcon} className="icon" alt="Face Icon" />      
            <span>Registration</span>
        </h1>
        <form id="registrationForm" onSubmit={handleSubmit}>

          <label htmlFor="userName">
              First name:
              <span id="mandatoryName" className="mandatory">*</span>
          </label><br/>
          <input type="text" id="userName" name="userName" required           
            value={formData.userName}
            onChange={handleChange}/><br/>

          <label htmlFor="email">
              Email:
              <span id="mandatoryEmail" className="mandatory">*</span>
          </label><br/>
          <input type="email" id="email" name="email" required 
            value={formData.email}
            onChange={handleChange}/><br/>
            
          <label htmlFor="phone">
              Phone:
              <span id="mandatoryPhone" className="mandatory">*</span>
          </label><br/>
          <input type="text" id="phone" name="phone" required 
            value={formData.phone}
            onChange={handleChange}/><br/>


          <label htmlFor="gender">Gender:</label><br/>
          <select id="gender" name="gender" 
          value={formData.gender}
          onChange={handleChangeSelect} >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          <br/><br/>
          <button id="btnAddData" type="submit" >Submit</button>
          <button id="btnEditData" type="button"  className="invisible">
              Save Changes
          </button>
        </form>
      </div>


    </>
  )
}