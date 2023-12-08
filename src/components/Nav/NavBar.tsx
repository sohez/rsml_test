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
            name: "Computer Tech",
            link: "/ct",
          },
          {
            name: "Food Proces",
            link: "/ct",
          },
        ],
      },
      {
        name: "BCA",
        link: [
          {
            name: "BCA Tech",
            link: "/ct",
          },
          {
            name: "BCA Food",
            link: "/ct",
          },
          {
            name: "BCA ACCOUNT",
            link: "/ct",
          }
        ],
      }
    ],
  },
];

const NavBar = () => {
  return (
    <nav>
    <NavItemList list={item}/>
    </nav>
  );
};

export default NavBar;
