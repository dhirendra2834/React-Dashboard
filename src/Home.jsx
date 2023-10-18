import React from 'react'

import { StyledEngineProvider } from '@mui/material/styles';
import Linebar from './Linebar';
import {PiNotepadBold, PiMoneyBold } from "react-icons/pi";
import { FaSellcast } from "react-icons/fa";
//  icons 
import { MdAccountBalance, MdNorth,MdSouth } from "react-icons/md";


   
import Btm from './Btm';
import PieGraph from './PieGraph';

function Home() {
    return (
        <main className='main-container' style={{display:'flex', flexDirection:'column', gap:'10px'}}>
           

            <div className='main-cards'>

                {/* 1st card   */}
                <div className='card'>
                    <div className='card-inner'>
                        <div className='iconOut1' ><PiMoneyBold className='card_icon' /></div>

                        <div>
                            <h3>Earning</h3>
                            <h4>$198K</h4>
                            <span style={{ color: 'green', fontWeight: 'bold' }}>  <MdNorth className='card_icon' /> 37.8% </span> this month
                        </div>
                    </div>

                </div>



                {/* 2nd card */}
                <div className='card'>
                    <div className='card-inner'>
                        <div className='iconOut2' ><PiNotepadBold className='card_icon' /></div>

                        <div>
                            <h3>Orders</h3>
                            <h4>$2.4k</h4>
                            <span style={{ color:'pink', fontWeight:'900' }}>  <MdSouth className='card_icon' /> 2% </span> this month
                        </div>
                    </div>

                </div>
                {/* 3rd card */}
                <div className='card'>
                    <div className='card-inner'>
                        <div className='iconOut3' ><MdAccountBalance className='card_icon' /></div>

                        <div>
                            <h3>Balance</h3>
                            <h4>$2.4K</h4>
                            <span style={{ color: 'pink', fontWeight: '900' }}>  <MdSouth className='card_icon' /> 2% </span> this month
                        </div>
                    </div>

                </div>

                {/* 4th card */}
                <div className='card'>
                    <div className='card-inner'>
                        <div className='iconOut4' ><FaSellcast className='card_icon' /></div>

                        <div>
                            <h3>Total Sales</h3>
                            <h4>$89K</h4>
                            <span style={{ color: 'green', fontWeight: 'bold' }}>  <MdNorth className='card_icon' /> 11%  </span>this week
                        </div>
                    </div>

                </div>
            </div>
         {/* chart of react  */}
<div style={{display:'flex', justifyContent:'space-around', backgroundColor:'white',flexWrap:'wrap'}} >
    {/* 1st charts  */}

    <div style={{margin:'6px'}}>
    <div style={{display:'flex', justifyContent:'space-around' ,  }}>
        <div>
        <strong>Overview</strong><br/>
        <span style={{color:'gray'}}>Monthly Earning</span>
        </div>
        <select name="Days" id="days" style={{height:'30px', fontSize:'20px', borderRadius:'20px', border:'0px', outline:'0px'}} >
                    <option value="30 day">Quarterly</option>
                    <option value="15 day">Half yearly</option>
                    <option value="1 week">One Year</option>
                    <option value="1 Day">5 year</option>
                </select>
    </div>
    <StyledEngineProvider  injectFirst  >
      <Linebar />
    </StyledEngineProvider>
    </div>
  
    {/* 2nd part */}
    <div style={{margin:'5px'}}>
    
        <strong>Overview</strong><br/>
        <span style={{color:'gray'}}>Monthly Earning</span>
     
    <StyledEngineProvider injectFirst>
    <PieGraph />
    </StyledEngineProvider>
    </div>
</div>          
            <Btm/>
        </main>
    )
}

export default Home;