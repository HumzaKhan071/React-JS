import React from "react";

const NavBar = ({ filterItem, menuList }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElement)}
              >
                {curElement}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
