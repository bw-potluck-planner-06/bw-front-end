import React, { useState } from "react";

import ButtonLogin from "./Button";
import axios from "axios";

const initialFormValues = {
  username: "",
  password: "",
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
    axios
      .get("https://back-end-pp06.herokuapp.com/api/users")
      .then((res) => {
        // fake login
        const user = res.data.filter((user) => {
          return (
            user.username === formValues.username &&
            user.password === formValues.password
          );
        });
        localStorage.setItem("token", user[0].updated_at);
        props.history.push("/events");
      })
      .catch((err) => {
        console.log(err);
      });

    props.history.push("/events");
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
          <ButtonLogin submit={handleSubmit} />
        </form>
      </label>
    </div>
  );
};

export default Login;
