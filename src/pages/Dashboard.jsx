import React from 'react'
import { HiArrowUpRight, HiArrowDownRight } from "react-icons/hi2";

const Dashboard = () => {
    return (
        <div>
            <h3 className='mb-4'>Dashboard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3 ">
                <div className='d-flex flex-grow-1 justify-content-between align-items-end  bg-white p-3 rounded-3 '>
                    <div>
                        <p>Total sells</p>
                        <h4 className='mb-0'>₹4200</h4>
                    </div>
                    <div className='d-flex  flex-column align-items-end '>
                        <h6 className='green'><HiArrowUpRight />34.7%</h6>
                        <p className='mb-0'>Compared to April 2023</p>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-end  bg-white p-3 rounded-3 '>
                    <div>
                        <p>Average order value</p>
                        <h4 className='mb-0'>₹600</h4>
                    </div>
                    <div className='d-flex  flex-column align-items-end '>
                        <h6 className='red'><HiArrowDownRight />12.0%</h6>
                        <p className='mb-0'>Compared to April 2023</p>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-end  bg-white p-3 rounded-3 '>
                    <div>
                        <p>Total orders</p>
                        <h4 className='mb-0'>524</h4>
                    </div>
                    <div className='d-flex  flex-column align-items-end '>
                        <h6 className='green'><HiArrowUpRight />27.9%</h6>
                        <p className='mb-0'>Compared to April 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
