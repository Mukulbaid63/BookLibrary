import React from 'react';
import '../styles/Sidebar.css'
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
const Sidebar = ({button,setbutton}) => {
    let darkBack=button===false?'white':'black'
    return (
        <div className="sidebar  p-4" style={{borderRight:'2px solid #bfbaba',background:{darkBack}}}>
            <div className="text-secondary mb-4">Library</div>
            <div className="my-2 "><PlayCircleOutlineRoundedIcon/>&nbsp;&nbsp;&nbsp;&nbsp;My Books</div>
            <div className=" my-2 mb-4"><AddCircleOutlineIcon/>&nbsp;&nbsp;&nbsp;&nbsp;Add Books</div>
            <div className="text-secondary my-4">Settings</div>
            <div className="my-2 " style={{cursor:'pointer'}} onClick={()=>(setbutton(()=>true))}><InvertColorsIcon/>&nbsp;&nbsp;&nbsp;&nbsp;Dark Mode</div>

        </div>
    );
};

export default Sidebar;