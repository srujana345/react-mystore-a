import React from "react";
import { useState,useRef,useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./Register.css";
import { appContext } from "../App";
export default function Register() {
  const{users,setUsers,user,setUser}=useContext(appContext)
  const [msg, setMsg] = useState("");
  const txtRef=useRef();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const found=users.find(value=>value.email===user.email)
    
    if(found){
      setMsg("User already exists")
      txtRef.current.style.color="red";
    }
    else{
      setMsg("Welcome!")
      txtRef.current.style.color="green";
    setUsers([...users,user])
    // setUser({name:"",email:"",password:""})
    
    }
    navigate('/'); 
  };
  const handleDelete = (email) => {
    setUsers(users.filter((value) => value.email !== email))
  }
  return (
    <div className="App-Register">
      <div className="App-Register-Box">
        <h3>Registration Form</h3>
        <h3 ref={txtRef}>{msg}</h3>
        <p>
          <input
            type="text"
            placeholder="Enter Name"
            value={user.name}
            onChange={(e) => setUser({...user,name: e.target.value})}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            value={user.email}
            onChange={(e) => setUser({...user,email: e.target.value})}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="New password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </p>
        <p>
         <button onClick={handleSubmit}>Submit</button>
          
        </p>
        <p>
          <Link to="../login">Already a member? Login here!</Link>
        </p>
      </div>
  
        <div className="App-Register-Box">
          <h3>Entered Information</h3>
          <table className="App-Register-Table">
            <tr ><th >Name</th><th>Email</th><th>Password</th></tr>
          {users.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td><button onClick={() => handleDelete(value.email)}>
                  Delete
                </button></td>
            </tr>
           ))}
          </table>
        </div>

    </div>
  );
}
