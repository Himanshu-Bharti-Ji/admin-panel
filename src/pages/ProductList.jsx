import React from 'react'
import { Table } from 'antd';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";

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

const ProductList = () => {
    return (
        <div>
            <h3 className='mb-4 title'>Products</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ProductList
