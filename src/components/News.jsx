import React from 'react'
import {Layout, Typography} from 'antd';
import NewsContent from './NewsContent';
import Nav from './nav';
const News = () => {
    const { Header, Content } = Layout;
    const {Title } = Typography;
    return (
        <Layout>
            <Nav className='mobile-nav'/>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white', backgroundColor: '#001529' }}>
                <Title className='header-title' level={3} style={{color: 'white' }}>News</Title>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <NewsContent />
            </Content>
        </Layout>
    )
}

export default News
