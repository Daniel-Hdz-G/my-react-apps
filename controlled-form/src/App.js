import './App.css'; 
import {useState} from "react"; 
import {validateEmail} from "../src/utils"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 

function App() { 

  {/*Variables that will be used for keep track of the new values. 
    Passowrd is an objetc to be able to say it's value, and if this item has been touched at least once.*/}
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [role, setRole] = useState("role"); {/*role wil be used as the default value, insted and empty string.*/}
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 

 /*A variable that will help to validate that every field in the form is correctly filled */
 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 {/*clearForm function will set every variable to its original value*/}
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 

 {/*handleSubmit will perform three tasks:
  * It will prevent default behavior from submit event
  * It will display an alert when an account is created
  * It wil clear the form values*/}
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           {/*We add value and onChange properties to create a controlled component*/}
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
               {/*We use spred operator to keep all the values contained into password variable, and we aim the value property to update the new value*/}
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {/*If password length is less than 8 letters, and if isTouched flag equals False, then an error message will display.
           Otherwise, nothing will be rendered.*/}
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 

         </div> 
         <div className="Field"> 
           <label> 
             Role <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="role">Role</option> 
             <option value="individual">Individual</option> 
             <option value="business">Business</option> 
           </select> 
         </div> 
          {/*Submit button will be disabled always that get IsFormValid equals False, as that means not all controls have been passed yet*/}
         <button type="submit" disabled={!getIsFormValid()}> 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default App; 