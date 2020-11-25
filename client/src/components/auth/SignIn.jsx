import React, { useState } from "react";

const SignIn = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <>
      <form
        className="container"
        autoComplete="off"
        style={{ marginTop: "30px" }}
        onSubmit={handleSubmit}
      >
        <legend>
          <h4>Sign In</h4>
        </legend>
        <div className="form-group">
          <label htmlFor="email">Enter email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={details.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={details.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
      </form>
    </>
  );
};

export default SignIn;
