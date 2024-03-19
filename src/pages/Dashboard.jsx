import React from 'react'
import { HiArrowUpRight, HiArrowDownRight } from "react-icons/hi2";
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

const columns = [
    {
        title: 'SNo.',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Product',
        dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: 32,
        status: `London, Park Lane no. ${i}`,
    });
}

const Dashboard = () => {

    const data = [
        { type: "Jan", sales: 38 },
        { type: "Feb", sales: 52 },
        { type: "Mar", sales: 61 },
        { type: "Apr", sales: 145 },
        { type: "May", sales: 48 },
        { type: "Jun", sales: 38 },
        { type: "Jul", sales: 38 },
        { type: "Aug", sales: 78 },
        { type: "Sep", sales: 16 },
        { type: "Oct", sales: 156 },
        { type: "Nov", sales: 58 },
        { type: "Dec", sales: 96 },
    ];

    const config = {
        data,
        xField: "type",
        yField: "sales",
        label: {
            position: "middle"
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        style: {
            fill: "#ffd333",
        },
        meta: {
            type: {
                alias: "Month"
            },
            sales: {
                alias: "Income"
            }
        }
    };

    return (
        <div>
            <h3 className='mb-4 title'>Dashboard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3 ">
                <div className='d-flex flex-grow-1 justify-content-between align-items-end  bg-white p-3 rounded-3 '>
                    <div>
                        <p className='desc'>Total sells</p>
                        <h4 className='mb-0 sub-title'>₹4200</h4>
                    </div>
                    <div className='d-flex  flex-column align-items-end '>
                        <h6 className='green'><HiArrowUpRight />34.7%</h6>
                        <p className='mb-0 desc'>Compared to April 2023</p>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-end  bg-white p-3 rounded-3 '>
                    <div>
                        <p className='desc'>Average order value</p>
                        <h4 className='mb-0 sub-title'>₹600</h4>
                    </div>
                    <div className='d-flex  flex-column align-items-end '>
                        <h6 className='red'><HiArrowDownRight />12.0%</h6>
                        <p className='mb-0 desc'>Compared to April 2023</p>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-end  bg-white p-3 rounded-3 '>
                    <div>
                        <p className='desc'>Total orders</p>
                        <h4 className='mb-0 sub-title'>524</h4>
                    </div>
                    <div className='d-flex  flex-column align-items-end '>
                        <h6 className='green'><HiArrowUpRight />27.9%</h6>
                        <p className='mb-0 desc'>Compared to April 2023</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="mb-5 title">Income Statistics</h3>
                <div><Column {...config} /></div>
            </div>
            <div className="mt-4">
                <h3 className="mb-5 title">Recent Orders</h3>
                <div><Table columns={columns} dataSource={data1} /></div>
            </div>
        </div>
    )
}

export default Dashboard
