import { useState,forwardRef, useImperativeHandle } from 'react';
import './SideDrawer.css';

const SideDrawer = forwardRef((prop, ref) => {
    const [toggleView,setToggleView] = useState();
    const childFunction = () => {
  
        !toggleView ? setToggleView(true) : setToggleView(false)
    };
    
    useImperativeHandle(ref, () => ({
        childFunction,
    }));

    var style = !toggleView? {display: "none"}: {display: "flex"}
    function menuList(prop){
        const menuItem = prop.menuContent.menuBody.map(item => {
            switch (item.type) {
                case "title":
                    return <h1 className="menu-title menu-flex" key={item.label} style={{textDecoration: "none"}}>{item.label}</h1>;
                case "item":
                    return <a className="menu-item menu-flex" key={item.label} href={item.link} style={{textDecoration: "none"}}><span></span>{item.icon}{item.label}</a>;
                default:
                    return null
            }
    });
        return <>{menuItem}</>
    }   
    return(
        <div className="container-overlay" style={style} onClick={childFunction}>
            <div className="container-menu">
                <div className="container-header">
                    <img className="container-header-img" src={prop.menuContent.menuHeader.img} alt="logo"></img>
                    <h1 className="container-header-text">
                        {prop.menuContent.menuHeader.text}
                    </h1>
                </div>
                    {menuList(prop)}
                </div>
        </div>
    )})
export default SideDrawer;