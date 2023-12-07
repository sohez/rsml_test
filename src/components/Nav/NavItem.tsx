import Link from "next/link"
import { useState } from "react"
import NavItemList from "./NavItemList";


const NavItem = ({data})=>{
  const [comp,setComp] = useState(null);
    //  alert(data)
    const HandleClick = ()=>{
      {
        // console.log("Navitem clicked")
        Array.isArray(data.link) === true ? (
        //link direct link or navigation   
        // console.log("show the NavList")
        setComp( <NavItemList list={data.link}/> )
        
        ):(
        console.log("Go to Link")
       //  <Link href={data.link.toString()}><p>avc{data.name}</p></Link> 
        )
       }
    }
    return(
        <li>
        <button className="NavItem" onClick={HandleClick}>{data.name}</button>
        {comp}   
        </li>
    )
}

export default NavItem