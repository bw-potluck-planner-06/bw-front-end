import React, { useState } from "react";
import Loading from "./Loading";

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
    // axios
    //   .post("https://back-end-pp06.herokuapp.com/api/users", formValues)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

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
          <button type="submit">Submit</button>
        </form>
      </label>
    </div>
  );
};

export default Login;
