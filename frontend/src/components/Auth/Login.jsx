import React from "react";

const Login = () => {
  return (
    <form>
      <div>
        <label>
          <span>
            Username or email address <span className="required">*</span>
          </span>
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          <span>
            Password <span className="required">*</span>
          </span>
          <input type="password" />
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
