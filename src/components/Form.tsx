/* In react component name as function should start with Capital e.g:RenderForm no error but e.g:renderForm
will give error while calling from App.tsx */

export default function RenderForm() {
  return (
    <>
      <div id="divFormComponent">    
        <h1>        
            <span>Registration</span>
        </h1>
        <form id="registrationForm">
          <label htmlFor="userName">
              First name:
              <span id="mandatoryName" class="mandatory">*</span>
          </label><br/>
          <input type="text" id="userName" required /><br/>
          <label htmlFor="email">
              Email:
              <span id="mandatoryEmail" class="mandatory">*</span>
          </label><br/>
          <input type="email" id="email" required /><br/>
          <label htmlFor="phone">
              Phone:
              <span id="mandatoryPhone" class="mandatory">*</span>
          </label><br/>
          <input type="text" id="phone" required /><br/>
          <label htmlFor="gender">Gender:</label><br/>
          <select id="gender">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          <br/><br/>
          <button id="btnAddData" type="button" >Submit</button>
          <button id="btnEditData" type="button"  class="invisible">
              Save Changes
          </button>
        </form>
      </div>


    </>
  )
}