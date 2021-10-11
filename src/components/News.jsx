import React from 'react'
import {Layout, Typography} from 'antd';
import NewsContent from './NewsContent';
const News = () => {
    const { Header, Content } = Layout;
    const {Title } = Typography;
    return (
        <Layout>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white' }}>
                <Title className='header-title' level={3} style={{color: 'white' }}>News</Title>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <NewsContent />
            </Content>
        </Layout>
    )
}

export default News
