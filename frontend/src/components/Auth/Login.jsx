import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData ] = useState({
    email : "",
    password : ""
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData,[name]:value})
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/login",{
        method :"POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
      });
      if(response.ok){
        const result = await response.json();
        localStorage.setItem("user",JSON.stringify(result));
        if(result.role === "admin"){
          window.location.href = "/admin";
        }else{
          navigate("/");
        }
      }else{
        console.log("Giriş başarısız...")
      }
    } catch (error) {
      console.log("Sunucu hatası...")
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          <span>
            Username or email address <span className="required">*</span>
          </span>
          <input type="text" name="email" onChange={handleInputChange}/>
        </label>
      </div>
      <div>
        <label>
          <span>
            Password <span className="required">*</span>
          </span>
          <input type="password" name="password" onChange={handleInputChange}/>
        </label>
      </div>
      <p className="remember">
        <label>
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
        <button className="btn btn-sm">Login</button>
      </p>
      <a href="#" className="form-link">
        Lost your password?
      </a>
    </form>
  );
};

export default Login;
