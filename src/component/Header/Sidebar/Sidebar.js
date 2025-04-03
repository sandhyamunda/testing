import { Button } from "@mui/material";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { LuMessageSquareText } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";


const Sidebar = () => {
    const [activeTab, setactiveTab] = useState(null);
    const [isToggleSubmenu, setisToggleSubmenu] = useState(0);
    const openSubmenu = (i) => {
        setactiveTab (!i);
        setisToggleSubmenu(!isToggleSubmenu)
    }
    return(
        <>
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                    <Button style={{width:'100%' }} className={`${activeTab===0 ? 'active' : ''}`}>
                        <span className="icon"><LuLayoutDashboard /></span>
                        Dashboared
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                    </Link>
                </li>
                <li>
               
                    <Button style={{width:'100%'}} className={`${activeTab===1 && isToggleSubmenu ===true ? 'active' : ''}`} 
                    onClick={() => openSubmenu(1)}>
                        <span className="icon"><FaProductHunt/></span>
                        Products
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===1 ? 'colapse' : 'colapsed'}`}>
                   
                        <ul className="submenu">
                            <li><Link to='/'>Product List</Link></li>
                            <li><Link to='/'>Product View</Link></li>
                            <li><Link to='/'>Product Upload</Link></li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                <Link to="/">
                    <Button style={{width:'100%'}}>
                        <span className="icon"><FaCartPlus /></span>
                        Orders
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Button style={{width:'100%'}}>
                        <span className="icon"><LuMessageSquareText /></span>
                        Messages
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button style={{width:'100%'}}>
                        <span className="icon"><IoIosNotifications /></span>
                        Notifications
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button style={{width:'100%'}}>
                        <span className="icon"><FaUser /></span>
                        Login
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                    
                </li>
                <li>
                    <Button style={{width:'100%'}}>
                        <span className="icon"><FaUser /></span>
                        Sign Up
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button style={{width:'100%'}}>
                        <span className="icon"><IoIosSettings/></span>
                      Settings
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                </li>
               
            </ul>

        </div>
        </>
    )

}
export default Sidebar;