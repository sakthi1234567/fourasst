import React from 'react';

export default class controlledForm extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            gender:'',
            course:'React',
            error:{
                firstName:'',
                lastName:'',
                email:'',
                gender:''
            },
            submitError:''
        }
    }

    handleChange=async(e)=> {
        const error={...this.state.error};

        if(e.target.value === "")
            error[e.target.name]="This field is required"
        else
            error[e.target.name]="";

        await this.setState({error,[e.target.name]:e.target.value});

        console.log(this.state);
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        
        var errKey=Object.keys(this.state).filter((key)=>{
            if(this.state[key]==='' && key!='error' && key!='submitError')
            return key;
        })
        // console.log(errKey)
        if(errKey.length>=1){
            this.setState({submitError:"Please fill all fields"});
            console.error("Please fill all fields")
        }
            
        else{
            this.setState({submitError:''});
            console.log(this.state);
        }
            
    }

    handleReset=()=>{
        this.setState({firstName:'',
        lastName:'',
        email:'',
        gender:'',
        course:'React',
        error:{
            firstName:'',
            lastName:'',
            email:'',
            gender:''
        },
        submitError:''})
    }

    render(){

        return(
            <div style={{padding:'20px'}}>
                <h3>Controlled Forms</h3> <br/>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name: </label> &nbsp;
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>&nbsp;
                    <span style={{color:'red'}}>{this.state.error.firstName}</span>
                </div><br/>
                <div>
                    <label>Last Name:</label> &nbsp;
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>&nbsp;
                    <span style={{color:'red'}}>{this.state.error.lastName}</span>
                </div><br/>
                <div>
                    <label>Email:</label> &nbsp;
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>&nbsp;
                    <span style={{color:'red'}}>{this.state.error.email}</span>
                </div><br/>
                <div>
                    <label>Gender:</label> &nbsp;
                    <input type="radio" name="gender" value="Male" onChange={this.handleChange}/> &nbsp;
                    <label>Male</label> &nbsp;
                    <input type="radio" name="gender" value="Female" onChange={this.handleChange}/> &nbsp;
                    <label>Female</label>
                </div><br/>
                <div>
                    <label>Courses:</label> &nbsp;
                    <select name="course" value={this.state.course} onChange={this.handleChange}>
                        <option>React</option>
                        <option>Node</option>
                        <option>Mongo</option>
                    </select>
                </div><br/>
                <span style={{color:'red'}}>{this.state.submitError}</span> <br/>
                <button type="submit">Submit</button> &nbsp; &nbsp;
                <button onClick={this.handleReset}>Reset</button>
            </form>
            </div>
            
        )
    }
}