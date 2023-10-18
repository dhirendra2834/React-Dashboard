import React from 'react'
import { CiSearch } from "react-icons/ci";



const PDetail=(props)=>{
    return(
        <div style={{display:'flex',margin:'10px'}}>
        {/* 1st  */}
        <div style={{ display:'flex', width:'60%'}}>
        <img src={props.pic}  alt="product1"  width={'60px'}  style={{marginRight:'8px',borderRadius:'30%'}}/>
        <div >
            <div style={{fontWeight:'bold'}} >{props.pname}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
        </div>
       
       
       
        {/* 2nd part  */}
        <div style={{width:'33%', display:'flex',justifyContent:'space-between', margin:'5px', padding:'5px',marginTop:'10px' }}>
                    <div style={{width:'1/3'}}>32 in Stock</div>
                    <div style={{width:'1/3',fontWeight:'bold'}}>$45.99</div>
                    <div style={{width:'1/3'}}>20</div>
                </div>
        </div>
    )
}
export default function Btm() {
    return (
        <div className='Btm' >
            {/* 1st line  */}
            <div style={{ display: 'flex', gap: '5px', margin:'5px ' }}>
                {/* 1st part  */}
                <div style={{ width: '60%' }}>Product Sell</div>
                {/*2nd part   for input box  */}
                <div style={{ display: 'flex', fontSize: '28px', width: '15%', backgroundColor: 'white', border: '1px', borderRadius: '20px' }}>
                    <CiSearch />
                    <input
                        type="search"

                        placeholder="Search"
                        style={{ outline: '0px', border: '0px' }}
                    />
                </div>

                {/* 3rd part   */}
                <select name="Days" id="days" style={{ width: '15%' }}>
                    <option value="30 day">Last 30 days</option>
                    <option value="15 day">Last 15 days</option>
                    <option value="1 week">Last 1 week</option>
                    <option value="1 Day">Last 1 day</option>
                </select>
            </div>
            {/* 2nd line  */}
            <div style={{ display: 'flex', gap: '5px', margin:'5px' }}>
                {/* 1sr */}
                <div style={{width:'60%'}}>Product Name </div>

                {/* 2nd part  */}
                <div style={{width:'36%', display:'flex',justifyContent:'space-between', margin:'5px', padding:'5px',marginTop:'10px'}}>
                    <div style={{width:'1/3'}}>Stock</div>
                    <div style={{width:'1/3'}}>Price</div>
                    <div style={{width:'1/3'}}>Total Sales</div>
                </div>
        </div>
        {/* 3rd  */}
        <PDetail pname="Abstract 3D" pic="https://strategypeak.com/wp-content/uploads/2010/03/Everest.jpg"/>
        <PDetail pname="Sarphens illustration" pic="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg"/>

        </div>
    )
}
