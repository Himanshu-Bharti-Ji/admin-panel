import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaUser } from "react-icons/lia";
import { BsCartPlus, BsDatabase, BsCartCheck } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt, BiColorFill, BiBookAdd } from "react-icons/bi";
import { MdLibraryBooks, MdOutlineContactPage } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";

import { useNavigate } from 'react-router-dom';


const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();


    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical d-flex align-items-center justify-content-center ">
                    <h2 className='text-center text-white fs5 fw-bold py-2 mb-0 '>
                        <span className='sm-logo fs-4 '>O4A</span>
                        <span className='lg-logo'>On4All</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key == "signout") {

                        } else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className='fs-5' />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <LiaUser className='fs-5' />,
                            label: 'Customers',
                        },
                        {
                            key: 'catalog',
                            icon: <BsDatabase className='fs-5' />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'product',
                                    icon: <BsCartPlus className='fs-5' />,
                                    label: 'Add Product',
                                },
                                {
                                    key: 'product-list',
                                    icon: <CiCircleList className='fs-5' />,
                                    label: 'Product List',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className='fs-5' />,
                                    label: 'Brand',
                                },
                                {
                                    key: 'brand-list',
                                    icon: <CiCircleList className='fs-5' />,
                                    label: 'Brand List',
                                },
                                {
                                    key: 'category',
                                    icon: <BiCategoryAlt className='fs-5' />,
                                    label: 'Category',
                                },
                                {
                                    key: 'category-list',
                                    icon: <CiCircleList className='fs-5' />,
                                    label: 'Category List',
                                },
                                {
                                    key: 'color',
                                    icon: <BiColorFill className='fs-5' />,
                                    label: 'Color',
                                },
                                {
                                    key: 'color-list',
                                    icon: <CiCircleList className='fs-5' />,
                                    label: 'Color List',
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <BsCartCheck className='fs-5' />,
                            label: 'Orders',
                        },
                        {
                            key: 'blogs',
                            icon: <MdLibraryBooks className='fs-5' />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blog-list',
                                    icon: <CiCircleList className='fs-5' />,
                                    label: 'Blog List',
                                },
                                {
                                    key: 'add-blog',
                                    icon: <BiBookAdd className='fs-5' />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'add-blog-category',
                                    icon: <TbCategoryPlus className='fs-5' />,
                                    label: 'Add Blog Category',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <CiCircleList className='fs-5' />,
                                    label: 'Blog Category List',
                                },
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <MdOutlineContactPage className='fs-5' />,
                            label: 'Enquiries',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;