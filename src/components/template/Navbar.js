import SideDrawer from './SideDrawer'
import {useRef} from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css"
import myLogo from '../../assets/logo.png'
import navLogo from '../../assets/Asset 9@4x.png'
function NavBar() {
    const menuContent = {
        menuHeader:{img:myLogo,text:"John Albert"},
        menuBody:[
        {type:"title",label:"menu",link:"#"},
        {type:"item",icon:<AiOutlineHome/>,label:"Home",link:"/"},
        {type:"item",icon:<AiOutlinePhone />,label:"About",link:"/About"},
        {type:"item",icon:<AiOutlineInfoCircle />,label:"Menu",link:"#"},
        {type:"item",icon:<AiOutlineHome/>,label:"Reservation",link:"/Reservation"},
        {type:"item",icon:<AiOutlinePhone />,label:"Order",link:"#"},
        {type:"item",icon:<AiOutlineInfoCircle />,label:"Login",link:"#"}
    ]}
    function menuList(menuContent){
        const menuItem = menuContent.menuBody.map(item => {
            switch (item.type) {
                case "item":
                    return <a className="nav-selection" key={item.label} href={item.link} style={{textDecoration: "none"}}>{item.label}</a>;
                default:
                    return null
            }
        });
            return <>{menuItem}</>
        }   
    const childRef = useRef(null);
    const handleClick = () => {
      // Call the child's function
      childRef.current.childFunction();
    };
    return (
        <>
            <SideDrawer menuContent={menuContent} ref={childRef}></SideDrawer>
            <div className="container-nav">
                <div className="nav-item container-left">
                    <img className='nav-logo' src={navLogo} alt='Nav Logo'></img>
                    <h1 className='nav-title'><span>Little</span><br/>Lemon</h1>
                </div>
                <div className="nav-item container-right">
                    <>{menuList(menuContent)}</>
                    <button className="button-ham" type="button" onClick={handleClick}><AiOutlineMenu /></button>
                </div>
            </div>
        </>
    );
}
export default NavBar;