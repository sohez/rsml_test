import Link from "next/link";
import React, { useState } from "react";
import NavItemList from "./NavItemList";


const NavItem = ({ data }) => {
  const [comp, setComp] = useState(null);
  //  alert(data)
  const HandleClick = (e: Event) => {
    console.log(e);
    {
      if (Array.isArray(data.link) === true) {
        //if link is List of Array
        //Submenu
        //  e.target.style ="display"
       // e.target.button.style.display = "none";
        // let item : NavData ={
        //   isEnable : true,
        //   component: <NavItemList list={data.link}/>
        // }
        setComp(<NavItemList list={data.link} />);
      } else {
        //direct link
        //redirect
        console.log("Go to Link");
      }

      //   Array.isArray(data.link) === true ? (
      //   //link direct link or navigation
      //   // console.log("show the NavList")
      //   setComp( <NavItemList list={data.link}/> )
      //   ):(
      //   console.log("Go to Link")
      //  //  <Link href={data.link.toString()}><p>avc{data.name}</p></Link>
      //   )
    }
  };
  return (
    <li>
      <button className="NavItem" onClick={HandleClick}>
        {data.name}
      </button>
      {comp}
    </li>
  );
};

export default NavItem;
