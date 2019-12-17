import React from "react";

function Footer() {
  return (
    <div className="card text-center">
      <div className="card-header">Featured movies</div>
      <div className="card-body">
        <h5 className="card-title">OMDB</h5>
        <p className="card-text">
          Happens in movies, happens in life, happens in omdb.
        </p>
        <a href="#" className="btn btn-primary">
          Go up!
        </a>
      </div>
      <div className="card-footer text-muted">CopyRights Reserved</div>
    </div>
  );
}

export default Footer;
