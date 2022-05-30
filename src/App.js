import React, {useState} from "react";
import LoginForm  from "./componens/LoginForm";


function App() {
 const adminUser = {
   email : "admin@hmail.com",
   password : "1234"
 }

 const [user, setUser] = useState({name: "", email: ""});
 const [error, setError] = useState("");

 const Login = details => {
   console.log(details);

   if (details.email == adminUser.email && details.password == adminUser.password) {
     console.log("Logged in");
     setUser( {
       name: details.name,
       email: details.email
     });
   } else { 
     console.log("Wrong details");
     setError("Wrong Details");
    };
 }

 const Logout = () => {
   console.log("logout");
   setUser( {
    name: "",
    email: "",
  })
 } 

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h3> Welcome <span> {user.name} </span></h3>

          <button onClick={Logout}>Logout</button>
          </div>
      ): 
      (<LoginForm Login={Login} error = {error} />)
      }

    </div>
  );
}

export default App;
