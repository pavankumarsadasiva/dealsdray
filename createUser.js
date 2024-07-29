import React from "react";
import { useState, useEffect } from "react";
import '../css/CreateUser.css'

function CreateUser(){
    const initialValues = { username: "", email: "", number:"",Disignation:"",gender:"" ,image:"",course:[]};
    
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
        //const { name, value } = e.target;
        setFormValues({ ...formValues, [e.target.name]:e.target.value});

      };
    
      const  handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        
    
      };

            useEffect(() => {
            const {username,email, number,Disignation,gender,image,course}=formValues
            // console.log(formErrors);
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                const POST='POST'
                fetch('https://deals-data-default-rtdb.firebaseio.com/userdata.json', {
                    method: POST, // Using the POST constant here
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,email, number,Disignation,gender,image,course
                    }),
                 })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert("data uploded sucsesfuly")
                })
                .catch(error => {
                    alert(error,"please fill the form")
                });
                setFormValues({
                    username: "", email:"", number:"",Disignation:"",gender:" " ,image:" ",course:""
                })
            }

          
            }, [formErrors,isSubmit]);

            
    
        const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
        errors.username = "Username is required!";
        }
        if (!values.email) {
        errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
        }
    
        if(!values.number){
            errors.number="Number is required"
        }else if (values.number.length>10 && values.number.length<10){
            errors.number="please enter valid number"

        }
        if(!values.image){
            errors.image="please upload image"
        }
        if(!values.gender){
            errors.gender="please select Gender"
        
        }
        // if(!validate.course){
        //     errors.course="please select courses"
        // }
        // if(!validate.Disignation){
        //     errors.Disignation="please select Disignation"
        // }
        return errors;
  };
    return(
        <div>
            <div className="container">
                    <div className="header1">
                        <h2>Create Employee</h2>
                    </div>
                    
                         <form className="form1" method="POST" onSubmit={handleSubmit} id="form1">
                            <div class="field1">
                                <label>UserName:</label>
                                <input type="text"  name="username"  id="username" value={formValues.username}  onChange={handleChange}/>
                                

                             </div>
                             <p>{formErrors.username}</p>
                           
                            <div className="field1">
                                <label>Email: </label>
                                <input  type="text" name="email" placeholder="Email"
                                                    value={formValues.email}
                                                    onChange={handleChange}/>
                                                                        

                            </div>
                            <p>{formErrors.email}</p>
                            <div className="field1">
                                <label>Number:</label>
                                <input type="number"  name="number"  id="num" value={formValues.number}  onChange={handleChange}/>
                               
                            </div>
                            <p>{formErrors.number}</p>
                            <div className="field1">
                                <label>Designation : </label>
                               <select name="Disignation"  value={formValues.Disignation}  onChange={handleChange}>
                                <option>other</option>
                                <option>HR</option>
                                <option>Manager</option>
                                <option>Salse</option>
                                <option>Developer</option>
                               </select>                                
                            </div>
                            <p>{formErrors.Disignation}</p>
                            <div>
                                <label>Gender : </label>
                                <input type="radio"  name="gender" value="male" onChange={handleChange}/>
                                <label>Male    </label>
                                <input type="radio" name="gender"  value="female" onChange={handleChange} />
                                <label>female</label>
                            </div>
                            <p>{formErrors.gender}</p>
                            <div>
                                <label >Course :</label><br/>
                                <input type="checkbox" name="course"  value="MCA" onChange={handleChange}  checked={formValues.course.indexOf('MCA') !== -1}/>
                                <label for="vehicle1"  > MCA</label><br/>
                                <input type="checkbox"  name="course" value="MBA" onChange={handleChange} checked={formValues.course.indexOf('MBA') !== -1}/>
                                <label for="vehicle2"> MBA</label><br/>
                                <input type="checkbox"  name="course" value="Bsc" onChange={handleChange} checked={formValues.course.indexOf('Bsc') !== -1}/>
                                <label for="vehicle3">BSC</label><br/><br/>
                            </div>
                            <p>{formErrors.course}</p>
                            <div>
                                <lable >Upload Image:</lable>
                                <input type="file" name="image" onChange={handleChange}/>
                            </div>
                            <p>{formErrors.image}</p><br/>
                           
                             <input type="submit"  className="button"/>
                             <input type="submit"  className="button" name="Update" value="update"/>
                        </form>
                   

                   
            </div>
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
        </div>
    )
}

export default  CreateUser;