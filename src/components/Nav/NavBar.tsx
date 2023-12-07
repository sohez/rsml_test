"use client";
import NavItemList from "./NavItemList";

const item = [
  {
    name: "Home",
    link: "https://google.com",
  },
  {
    name: "About",
    link: "https://google.com",
  },
  {
    name: "Deparment",
    link: [
      {
        name: "Bvoc",
        link: [
          {
            name: "CT",
            link: "/ct",
          },
          {
            name: "CT",
            link: "/ct",
          },
        ],
      },
    ],
  },
];

const NavBar = () => {
  return (
    <>
    <NavItemList list={item}/>
    </>
  );
};

export default NavBar;
