import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const updatedList = [
  ... new Set(
    Menu.map((curElement) => {
      return curElement.category;
    }),
  ),"All"
];

const Resturant = () => {
  const [menuData, setMenu] = useState(Menu);
  const [menuList, setmenuList] = useState(updatedList);

  const filterItem = (category) => {
    if (category == "All") {
      setMenu(Menu);
      return;
    }
    const updatedList = Menu.filter((curElement) => {
      return curElement.category === category;
    });

    setMenu(updatedList);
  };

  return (
    <>
      <NavBar menuList={menuList} filterItem={filterItem} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
