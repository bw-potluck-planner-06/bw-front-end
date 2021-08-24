import React, { useState } from "react";

const initialFormValues = {
  username: "",
  password: "",
  email: "",
};
const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChanges = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    props.history.push("/home");
  };

  return (
    <div>
      <label>
        {" "}
        Login:
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            value={formValues.username}
            onChange={handleChanges}
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChanges}
            placeholder="Password"
          />
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChanges}
            placeholder="E-Mail"
          />
          <button type="submit">Submit</button>
        </form>
      </label>
    </div>
  );
};

export default Login;
