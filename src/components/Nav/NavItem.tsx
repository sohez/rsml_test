import Link from "next/link"
import NavBar from "./NavBar"
import { FC } from "react"
import { Props } from "next/script"

interface data{
  name:string,
  link: string | Array<object>
}

const NavItem : FC<data> = (props)=>{
     alert(props)
    return(
        <> 
          {
           Array.isArray(props.link) === true ? (
           //link direct link or navigation   
             <Link href={props.link.toString()}><p>avc{props.name}</p></Link> 
           ):(
            <NavBar/>
           )
          }
    </>
    )
}

// return (
// <>
// {
//     if(props.NavBar.sub === false){
//         //link direct or navigation
//         console.log('hi')
//      //<Link href={props.NavObj.link}><p>avc{props.NavObj.name}</p></Link>
//     }
// }
// </>
// )
//}
export default NavItem