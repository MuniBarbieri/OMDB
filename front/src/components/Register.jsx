import React from "react";

function Register({
  handleSubmit,
  handleChangePassword,
  handleChangeEmail,
  email,
  password
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">
          First step register! second Log in! Third enjoy!
        </h2>
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;

{
  /* <div>
<form onSubmit={handleSubmit}>
  <input placeholder="Email" value={email} onChange={handleChangeEmail} />
  <input
    placeholder="Password"
    value={password}
    onChange={handleChangePassword}
  />
  <button type="submit">SUBMIT</button>
</form>
</div> */
}

//  <form onSubmit={handleSubmit}>
//       <div class="form-group">
//         <label for="exampleInputEmail1">Email address</label>
//         <input
//           type="email"
//           class="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           placeholder="Enter email"
//           value={email}
//           onChange={handleChangeEmail}
//         />
//         <small id="emailHelp" class="form-text text-muted">
//           We'll never share your email with anyone else.
//         </small>
//       </div>
//       <div class="form-group">
//         <label for="exampleInputPassword1">Password</label>
//         <input
//           type="password"
//           class="form-control"
//           id="exampleInputPassword1"
//           placeholder="Password"
//           placeholder="Password"
//           value={password}
//           onChange={handleChangePassword}
//         />
//       </div>
//       <div class="form-group form-check">
//         <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//         <label class="form-check-label" for="exampleCheck1">
//           Check me out
//         </label>
//       </div>
//       <button type="submit" class="btn btn-primary">
//         Submit
//       </button>
//     </form>
