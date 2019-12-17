import React from "react";

function Logger({
  handleSubmit,
  handleChangePassword,
  handleChangeEmail,
  email,
  password,
  store
}) {
  return store.id ? null : (
    <div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              name="email" // propiedad del req.body //
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              onChange={handleChangeEmail}
              value={email}
            ></input>
          </div>
          <div className="form-group">
            <input
              name="password" //propiedad del req.body //
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              value={password}
              onChange={handleChangePassword}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </div>
          {/* <div className="clearfix">
            <label className="pull-left checkbox-inline">
              <input type="checkbox" /> Remember me{" "}
            </label>
            <a href="#" className="pull-right">
              Forgot Password?
            </a>
          </div> */}
        </form>
        <p className="text-center">
          <a href="/register">Create an Account</a>
        </p>
      </div>
    </div>
  );
}

export default Logger;
