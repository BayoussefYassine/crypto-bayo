import React from 'react'
import {Layout} from 'antd';
const Home = () => {
    const { Header, Content } = Layout;
    return (
        <Layout>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white' }}>
                Home
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                content
                </div>
            </Content>
        </Layout>
    )
}

export default Home
