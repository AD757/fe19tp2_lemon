import React from "react";

const Coop = ({ signout }) => {
  return (
    <div className="nav-bar">
      <div className="menu-items">
        <div className="nav-logo">
          <img
            className="nav-logo-img"
            src="https://pressrum.coop.se/wp-content/uploads/2016/10/coop.png"
          />
        </div>
        <a className="menu-item" href="">
          Home
        </a>
        <a className="menu-item" href="">
          Recipies
        </a>
        <a className="menu-item" href="">
          About
        </a>
      </div>

      <div>
        {/* <button className="btn-switch" onClick={() => signout()}>Log out</button> */}
        <a className=" logout-btn" onClick={() => signout()}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Coop;
