import React, { useState } from "react";

function LoginForm({Login, error}) {
    const [details, setDetails] = useState( {name: "" , email: "", password: ""});
    const sumbitHandler = e =>  {
        e.preventDefault();
    }
    return (
            <form onSubmit={sumbitHandler}> 
                    <div className="form-inner"> 
                    <h3> Login </h3>
                        {(error != "") ? (
                        <div className="error">{error}</div>) : ""  }

                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name = "name" id = "name"  onChange={ e => setDetails({...details, name: e.target.value})} value= {details.name}/>  </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email: </label>
                        <input type="email" name = "email" id = "email" onChange={ e => setDetails({...details, email: e.target.value})} value= {details.email} /> </div>

                    <div className="form-group">
                        <label htmlFor="password"> Password: </label>
                        <input type="password" name = "password" id = "password" onChange={ e => setDetails({...details, password: e.password.value})} value= {details.password} /> </div>
                        <input type="sumbit" value = "LOGIN" />
                    </div>   
            </form>
    )
}
export default LoginForm;