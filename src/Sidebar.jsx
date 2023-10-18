import React from 'react'
// for  many icon 
import 
{ BsGrid1X2Fill, BsFillArchiveFill,  BsPeopleFill ,BsFillWalletFill}
 from 'react-icons/bs'

//  help icon etc. 
import { TbHelpSquareRounded,TbDashboard} from "react-icons/tb";

// for promote icon 
import { CiDiscount1} from "react-icons/ci";

// arrow of next
import {MdOutlineArrowForwardIos,MdOutlineExpandMore } from "react-icons/md";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <TbDashboard  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=""  style={{display:'flex',justifyContent:'space-between'}}>
                <div>  <BsGrid1X2Fill className='icon'/> Dashboard</div>
                   
                    <MdOutlineArrowForwardIos className='icon'/> 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""  style={{display:'flex',justifyContent:'space-between'}}>
                <div>  <BsFillArchiveFill className='icon'/> Products</div>
                  
                    <MdOutlineArrowForwardIos className='icon'/> 
                </a>
            </li>
       
            <li className='sidebar-list-item'>
                <a href=""  style={{display:'flex',justifyContent:'space-between'}}>
                  <div>  <BsPeopleFill className='icon'/> Customers</div>
                    <MdOutlineArrowForwardIos className='icon'/> 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""  style={{display:'flex',justifyContent:'space-between'}}>
                <div>  <BsFillWalletFill className='icon'/> Income</div>
                  
                    <MdOutlineArrowForwardIos className='icon'/> 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" style={{display:'flex',justifyContent:'space-between'}}>
                <div>  <CiDiscount1 className='icon' style={{fontSize: '24px' }} /> Promote</div>
                   
                    <MdOutlineArrowForwardIos className='icon'/> 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" style={{display:'flex',justifyContent:'space-between'}}>
                <div> <TbHelpSquareRounded className='icon' style={{fontSize: '24px'}} /> Help</div>
                   
                    <MdOutlineArrowForwardIos className='icon '/> 
                </a>
            </li>

            {/* below part of sidebar  */}
            <li className='sidebar-list-item'  style={{backgroundColor:'rgb(231, 243, 246 )', position:'absolute',bottom:'10px'}}>
                <a href="" style={{display:'flex',justifyContent:'space-between'}}>

                <div style={{display:'flex'}}>
              <img src="https://wallpapers.com/images/featured-full/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="profile_pic" style={{width:'50px',height:'50px',marginRight:'3px',borderRadius:'50%'}}/>
                  <span>
                    <span>Evano</span><br/>
                    <span>Project Manager</span>
                  </span>
                </div>
                   
                    <MdOutlineExpandMore className='icon ' style={{fontSize:'24px' ,marginTop:'8px'}}/> 
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;