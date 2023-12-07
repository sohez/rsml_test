import NavItem from "./NavItem"

const NavItemList = ({list})=>{
    // console.log(list)
    return list.map((item)=>{
        return <ul><NavItem data={item}/></ul>
    })
}
export default NavItemList