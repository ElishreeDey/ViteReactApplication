/*
****************************************************************************************************************************
* Filename    : Form
* Description : This file holds Registration form design in React
* Author      : Elishree Dey Chand
* Created     : 2026-05-13
****************************************************************************************************************************
*/


//import React, { useState } from "react";
import React, { useState, ChangeEvent, SubmitEvent } from "react";

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
        mandatoryName:"*",
        mandatoryEmail:"*",
        mandatoryPhone:"*",
    });

    // This is for Html Input element if pesent in form design. Handle input changes    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        })); 
        
        //alert(e.target.name); alert(e.target.value);
        /* if(e.target.name == "userName"){
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

        //alert(e.target.name); alert(e.target.value);

        // -------- START of Name validation no NULL value --------
        if (name === "userName" && value != "") {
            const result = checkNotIsEmpty(value); //alert(result.isValid);
            // If valid Name and result is true
            if (result.isValid) { 
                setFormData((prev) => ({
                    ...prev,
                    mandatoryName: "",
                }));
            }

            // If invalid Name result is false show error msg
            else { 
                setFormData((prev) => ({
                    ...prev,
                    mandatoryName: result.errorMessage,
                }));
            }
        }// If name input is empty show * mark
        else if(name === "userName" && value == ""){ 
            setFormData((prev) => ({
                ...prev,
                mandatoryName: "*",
            }));
        }
        // -------- END of Name validation no NULL value --------


        // -------- START of Email validation -------- 
        if (name === "email" && value != "") {
            const result = validateEmail(value); 

            // If valid email and result is true
            if (result.isValid) { 
                setFormData((prev) => ({
                    ...prev,
                    mandatoryEmail: "",
                }));
            }

            // If invalid email result is false show error msg
            else { 
                setFormData((prev) => ({
                    ...prev,
                    mandatoryEmail: result.errorMessage,
                }));
            }
        }
        // If email input is empty show * mark
        else if(name === "email" && value == ""){ 
            setFormData((prev) => ({
                ...prev,
                mandatoryEmail: "*",
            }));
        }
        // -------- END of Email validation -------- 


        // -------- Start of Phone validation -------- 
        if (name === "phone" && value != "") {
            const result = validateFlexiblePhone(value); //alert(result.errorMessage);

            // If valid phone and result is true
            if (result.isValid) { 
                setFormData((prev) => ({
                    ...prev,
                    phone: result.formattedPhone,
                    mandatoryPhone: "",
                }));
            }

            // If invalid phone result is false
            else { 
                setFormData((prev) => ({
                    ...prev,
                    mandatoryPhone: result.errorMessage,
                }));
            }
        }
        // If phone input is empty show * mark
        else if(name === "phone" && value == ""){ 
            setFormData((prev) => ({
                ...prev,
                mandatoryPhone: "*",
            }));
        }
        // -------- Start of Phone validation -------- 
        
    };
    
    

    // Handle Form Submission
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        //alert(`Hello, ${formData.userName}!`);
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
              <span id="mandatoryName" className="mandatory">
                {formData.mandatoryName}
              </span>
          </label><br/>
          <input type="text" id="userName" name="userName" required           
            value={formData.userName}
            onChange={handleChange}
            onBlur={handleBlur}/><br/>

          <label htmlFor="email">
              Email:
              <span id="mandatoryEmail" className="mandatory">
                {formData.mandatoryEmail}
              </span>
          </label><br/>
          <input type="email" id="email" name="email" required 
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}/><br/>
            
          <label htmlFor="phone">
                Phone:
                <span id="mandatoryPhone" className="mandatory">
                    {formData.mandatoryPhone}
                </span>
          </label><br/>
          <input type="text" id="phone" name="phone" required 
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}/><br/>


          <label htmlFor="gender">Gender:</label><br/>
          <select id="gender" name="gender" 
          value={formData.gender}
          onChange={handleChange}
           >
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