import React from 'react'

import {CiSearch} from "react-icons/ci";
 import { BsJustify} from "react-icons/bs";

//  hii hand icon 
import { FaHandsClapping  } from "react-icons/fa6";
function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' style={{color:'black'}} onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <span style={{marginRight:'5px',color:'black', fontSize:'20px'}}>Hello Shahrukh </span> 
            <FaHandsClapping className='icon' style={{color:'yellowgreen'}}/> ,
        </div>
        <div className='header-right'>
       
{/* for input box  */}
            <div style={{display:'flex', fontSize:'28px' , backgroundColor:'white', border:'1px' , borderRadius:'20px'}}>
      <CiSearch  />
      <input
        type="search"
      
        placeholder="Search"
        style={{outline:'0px',border:'0px'}}
      />
    </div>

        
        </div>
    </header>
  )
}

export default Header