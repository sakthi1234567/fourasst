import React,{useState} from 'react';
import {Button} from '@mui/material';

export default function Form(){
    const [inputField , setInputField] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender:'',
        course:'React',
        error:{
            firstName:'',
            lastName:'',
            email:'',
            gender:''
        }
    })

    const handleChange= async (e) => {

        const error={...inputField.error};

        if(e.target.value === "")
            error[e.target.name]="This field is required"
        else
            error[e.target.name]="";
        
        //console.log(inputField);
        await setInputField({...inputField,error,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log({inputField});
        var errKey=Object.keys(inputField).filter((key)=>{
            if(inputField[key]==='' && key!='error')
            return key;
        })
        // console.log(errKey)
        if(errKey.length>=1)
            console.error("Please fill all fields")
            
        else console.log({inputField});
            
    }

    const handleReset=(e)=>{
        console.log(e)
        setInputField({...inputField,firstName: '',
        lastName: '',
        email: '',
        gender:'',
        course:'React'});
    }
    return(
        <div >
                <h3>Controlled Forms</h3> <br/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label> &nbsp;
                    <input type="text" name="firstName" value={inputField.firstName} onChange={handleChange}/>&nbsp;
                    <span style={{color:'red'}}>{inputField.error.firstName}</span>
                </div><br/>
                <div>
                    <label>Last Name:</label> &nbsp;
                    <input type="text" name="lastName" value={inputField.lastName} onChange={handleChange}/>&nbsp;
                    <span style={{color:'red'}}>{inputField.error.lastName}</span>
                </div><br/>
                <div>
                    <label>Email:</label> &nbsp;
                    <input type="text" name="email" value={inputField.email} onChange={handleChange}/>&nbsp;
                    <span style={{color:'red'}}>{inputField.error.email}</span>
                </div><br/>
                <div>
                    <label>Gender:</label> &nbsp;
                    <input type="radio" name="gender" value="Male" onChange={handleChange}/> &nbsp;
                    <label>Male</label> &nbsp;
                    <input type="radio" name="gender" value="Female" onChange={handleChange}/> &nbsp;
                    <label>Female</label>
                </div><br/>
                <div>
                    <label>Courses:</label> &nbsp;
                    <select name="course" value={inputField.course} onChange={handleChange}>
                        <option>React</option>
                        <option>Node</option>
                        <option>Mongo</option>
                    </select>
                </div><br/>
                <span style={{color:'red'}}>{inputField.submitError}</span> <br/>
                <Button variant="contained" type="submit">Submit</Button> &nbsp; &nbsp;
                <Button variant="contained" onClick={handleReset}>Reset</Button>
            </form>
            </div>
    )
}