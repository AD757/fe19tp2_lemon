import React from "react";

const Willys = ({ signout }) => {
  return (
    <div className="nav-bar">
      <div className="menu-items">
        <div className="nav-logo">
          <img
            className="nav-logo-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB6hPR9SwpToxyvoAzH8Yf14XTSrF22kqWpDSvhCtyXEwnI7Vx"
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

export default Willys;
