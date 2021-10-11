import React from 'react'
import {Layout, Typography} from 'antd';
import CurrenciesContent from './CurrenciesContent';

const Currencies = () => {
    const { Header, Content } = Layout;
    const { Title } = Typography;
    return (
        <Layout>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white' }}>
                <Title className='header-title' level={3} style={{color: 'white' }}>Currencies</Title>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <CurrenciesContent />
            </Content>
        </Layout>
    )
}

export default Currencies
