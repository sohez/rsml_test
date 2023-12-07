"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const item = [
  {
    name: "home",
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
      {
      item.map((i) => {

        if (Array.isArray(i.link)) {
           //if link is an Array 
           //code to display menu
         // return <NavItem NavObj={i}/>
        }
        //if it is menu
        return <NavItem NavObj={i}/>
        //  return column(i.link as Array<any>)
      })
      }
    </>
  );
};

const column = (args:Array<any>) => {
    return <div>
        {
            args.map((i)=>{
                if(i.sub === false){
                    return <NavItem NavObj={i}/>
                }
                return column(i.link)
            })
        }
    </div>
}

export default NavBar;
