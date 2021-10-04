import React from 'react';
import {Button, Menu, Typography, Avatar, Layout, Col, Row} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined , MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import icon from "../images/logo.png"


const NavBar = () => {

    const { Header, Content, Footer, Sider } = Layout;

    return (
       
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                <div className="logo" style={{textAlign: "center"}}>
                    <div style={{marginTop:12}}>
                    <Avatar src={icon} size="large" shape="square"/>
                    </div>
                    
                    <Typography.Title level={3}>
                        <Link to="/">CryptoBayo</Link>
                    </Typography.Title>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FundOutlined />}>
                        <Link to="/currencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
                        <Link to="/exchange">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
                </Sider>
              
    )
}

export default NavBar
