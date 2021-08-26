import "./Button.css";

import React, { Component } from "react";

class ButtonLogin extends Component {
  state = {
    loading: false,
  };

  fetchData = (e) => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    this.props.submit(e);
  };

  render() {
    const { loading } = this.state;
    console.log(this.props);
    return (
      <button className="button" onClick={this.fetchData} disabled={loading}>
        {loading && <i className="" />}
        {!loading && <span>Login</span>}
        {loading && <span>Logging In</span>}
      </button>
    );
  }
}

export default ButtonLogin;
