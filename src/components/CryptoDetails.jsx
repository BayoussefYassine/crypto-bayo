import React from 'react'
import {Layout} from 'antd';
const CryptoDetails = () => {
    const { Header, Content } = Layout;
    return (
        <Layout>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white' }}>
                CryptoDetails
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                content
                </div>
            </Content>
        </Layout>
    )
}

export default CryptoDetails
