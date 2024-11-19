import React from "react";

const Register = () => {
  return (
    <form>
      <div>
        <label>
          <span>
            Username <span className="required">*</span>
          </span>
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          <span>
            Email address <span className="required">*</span>
          </span>
          <input type="email" />
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
      <div className="privacy-policy-text remember">
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <a href="#">privacy policy.</a>
        </p>
        <button className="btn btn-sm">Register</button>
      </div>
    </form>
  );
};

export default Register;
