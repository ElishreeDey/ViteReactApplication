/*
****************************************************************************************************************************
* Filename    : Form
* Description : This file holds Registration form design in React
* Author      : Elishree Dey Chand
* Created     : 2026-05-13
****************************************************************************************************************************
*/


import React, { useState, ChangeEvent, SubmitEvent, handleBlur } from "react";

import faceIcon from '../assets/faceicon.jpg'
import { checkNotIsEmpty,validateEmail,validateFlexiblePhone } from "../utils/validation";
import { saveData } from "../services/saveData";
import { saveEditedData } from "../services/editDeleteData";



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

    // This is for Html Input element if pesent in form design. Handle input changes    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        })); 
        
       /* alert(e.target.name); alert(e.target.value);
        if(e.target.name == "userName"){
            checkNotIsEmpty(e.target.value);
        }

        if(e.target.name == "email"){
            validateEmail(e.target.value);
        }

        if(e.target.name == "phone"){
            validateFlexiblePhone(e.target.value);
        }*/

    };

    // This is for Input element validation when user has stopped writing in that field. 
    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Name validation
        if (name === "userName") {
            checkNotIsEmpty(value);
        }

        // Email validation
        if (name === "email") {
            validateEmail(value);
        }

        // Phone validation
        if (name === "phone") {
            validateFlexiblePhone(value);
        }
    };

    // This is for HtmlSelect dropdown element if pesent in form design 
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //console.log(e.target.value);
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        })); 

    };

    // Handle Form Submission
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Hello, ${formData.userName}!`);
        saveData();
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
            onChange={handleChange}
            onBlur={handleBlur}/><br/>

          <label htmlFor="email">
              Email:
              <span id="mandatoryEmail" className="mandatory">*</span>
          </label><br/>
          <input type="email" id="email" name="email" required 
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}/><br/>
            
          <label htmlFor="phone">
              Phone:
              <span id="mandatoryPhone" className="mandatory">*</span>
          </label><br/>
          <input type="text" id="phone" name="phone" required 
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}/><br/>


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