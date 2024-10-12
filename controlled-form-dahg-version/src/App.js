import './App.css'; 
import {useState} from "react"; 
import {validateEmail} from "../src/utils"; 
import InputField from './components/input-field';
import SelectField from './components/select-field';
import SubmitButton from './components/submit-button';
 
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

 const selectValues = ["Role", "Individual", "Business"];

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

 const printData = () => {
  console.log(`First name: ${firstName}
    Last name: ${lastName}
    Email: ${email}
    Role: ${role}
    Password: ${password.value}`);
}

 {/*handleSubmit will perform three tasks:
  * It will prevent default behavior from submit event
  * It will display an alert when an account is created
  * It wil clear the form values*/}
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
   printData();
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <InputField 
            label="First Name"
            value={firstName}
            onChange={setFirstName}
            placeholder="First Name"
            sup="*"
          />
          <InputField
            label="Last Name"
            value={lastName}
            onChange={setLastName}
            placeholder="Last Name"
          />
          <InputField
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="Email Address"
            sup="*"
          />
          <InputField
              label="Password"
              value={password.value}
              onChange={(value) => setPassword({ ...password, value })}
              onBlur={() => { setPassword({ ...password, isTouched: true })}} 
              placeholder="Password"
              type="password"
              sup="*"
              isTouched={password.isTouched}
              inputLength={password.value.length}
            />
{/*If password length is less than 8 letters, and if isTouched flag equals False, then an error message will display.
           Otherwise, nothing will be rendered.*/}
         <SelectField 
            label="Role"
            value={role}
            onChange={setRole}
            sup="*"
            options={selectValues}
        />
{/*Submit button will be disabled always that get IsFormValid equals False, as that means not all controls have been passed yet*/}
         <SubmitButton 
         type="submit"
         text="Create account"
         disabled={!getIsFormValid()} />
       </fieldset> 
     </form> 

   </div> 
 ); 
} 

export default App; 