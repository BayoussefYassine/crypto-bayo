import React from 'react'
import {Layout} from 'antd';
const Exchange = () => {
    const { Header, Content } = Layout;
    return (
        <Layout>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white' }}>
                Exchange
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                content exhnacdezde
                </div>
            </Content>
        </Layout>
    )
}

export default Exchange
