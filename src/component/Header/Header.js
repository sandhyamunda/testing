import {Link} from "react-router-dom";
import { useState } from "react";
import imge from '../../assets/images.png';
import san from '../../assets/as.jpg';
import as from '../../assets/san.jpg'
import { Avatar, Button } from "@mui/material";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "./searchBox/SearchBox";
import { MdLightMode } from "react-icons/md";
import { MdNotificationsOff } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Notification, setNotification] = useState(null)

  const open = Boolean(anchorEl);
  const openNtification = (Notification);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handOpenNotification = (n) => {
    setNotification(n.currentTarget);
  };
  const handCloseNotification = () => {
    setNotification(null);
  };
    return(
      <header className="d-flex align-item-center">
        <div className="container-fluid ">
            <div className="row part-1">
              <Link to='/' className=" d-flex align-item-center logo">
              <img className="logo" src={imge}/>
              </Link> 
            </div>
            <div className="mt-2"><span className="ml-2">HOTASH</span></div> 
  
            <div className="d-flex align-item-center part2">
                <Button className="round-circle"><MdMenuOpen/></Button>
                <SearchBox/>
            </div>
            <div className="part3">
            <Button className="round-circle right-button"><MdLightMode/></Button>
            <Button className="round-circle right-button"><FaCartShopping/></Button>
            <Button className="round-circle right-button"><MdOutlineEmail/></Button>
            <div className="notificatin">
            <Button className="round-circle right-button"  onClick={ handOpenNotification}><MdNotificationsOff/></Button>
            <Menu
        Notification={Notification}
        id="notufication"
        open={openNtification}
        onClose={handCloseNotification}
        onClick={handCloseNotification}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 10,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handCloseNotification}>
         <h3>Orders (12)</h3>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handCloseNotification}>
          <Avatar src={as}  />
          <p><b>Mahmudul</b>  added to his favorit<p> list
            <b> leather belt steve madden</b></p> 
          <p className="few-seconds" >Few seconds ago</p></p>
        </MenuItem>
        <MenuItem onClick={handCloseNotification}>
        <Avatar src={san}  />
        <p><b>Mahmudul</b>  added to his favorit<p> list
            <b> leather belt steve madden</b></p> 
          <p className="few-seconds" >Few seconds ago</p></p>
        </MenuItem>
        <MenuItem onClick={handCloseNotification}>
        <Avatar src={san}  />
        <p><b>Mahmudul</b>  added to his favorit<p> list
            <b> leather belt steve madden</b></p> 
          <p className="few-seconds" >Few seconds ago</p></p>
        </MenuItem>
        <MenuItem onClick={handCloseNotification}>
        <Avatar src={san}  />
        <p><b>Mahmudul</b>  added to his favorit<p> list
            <b> leather belt steve madden</b></p> 
          <p className="few-seconds" >Few seconds ago</p></p>
        </MenuItem>
        <MenuItem onClick={handCloseNotification}>
        <Avatar src={san}  />
        <p><b>Mahmudul</b>  added to his favorit<p> list
            <b> leather belt steve madden</b></p> 
          <p className="few-seconds" >Few seconds ago</p></p>
        </MenuItem>
      </Menu>
      </div>
     

            </div>
            <div className="myac">
              <div className="userImge">
                  <Avatar src={san}  onClick={handleClick}/>
                  <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
              </div>
              <div className="userInfo">
              <h4>Sandhya Munda</h4>
              <p>@Sandhya123</p>
              </div>
              
            </div>
            
        </div>
      </header>
    )
}
export default Header;
