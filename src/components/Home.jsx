import React from 'react'
import {Layout, Typography, Row, Col, Statistic, Menu} from 'antd';
import millify from 'millify';
import { useGetCryptoStatsQuery } from '../services/CryptoApi';
import { Link } from 'react-router-dom';
import CurrenciesContent from './CurrenciesContent';
import NewsContent from './NewsContent';
import Loader from './Loader';
import Nav from './nav';




const { Title } = Typography;



const Home = () => {
    const { Header, Content } = Layout;
    const { data, error, isLoading } = useGetCryptoStatsQuery(1);
    const globalStats = data?.data?.stats;
    if(isLoading) return <Loader />
    
    return (
        <Layout>
            {console.log(globalStats)}
            <Nav className='mobile-nav'/>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white', backgroundColor: '#001529' }}>
                <Title className='header-title' level={3} style={{color: 'white' }}>Home</Title>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                    <Title level={2}>Global Crypto Stats</Title>
                    <Row>
                        <Col span={14}><Statistic title='Totale Cryptocurrencies' value={globalStats.total} /></Col>
                        <Col span={10}><Statistic title='Totale Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
                        <Col span={14}><Statistic title='Totale Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
                        <Col span={10}><Statistic title='Totale 24h Volume' value={millify(globalStats.total24hVolume)} /></Col>
                        <Col span={12}><Statistic title='Totale Markets' value={millify(globalStats.totalMarkets)} /></Col>
                    </Row>

                    <Row justify='space-between' style={{margin: 20}}>
                        <Col xs={24} sm={24} md={16}><Title level={2}>Top 10 Cryptocurrencies in the world</Title></Col>
                        <Col><Title level={3}><Link to='/currencies'>Show More</Link></Title></Col>
                    </Row>
                    <CurrenciesContent simplified/>
                    <Row justify='space-between' style={{margin: 20}}>
                        <Col xs={24} sm={24} md={16}><Title level={2}>Latest Cryptocurrency news</Title></Col>
                        <Col><Title level={3}><Link to='/news'>Show More</Link></Title></Col>
                    </Row>
                    <NewsContent simplified/>
                </div>
            </Content>
        </Layout>
    )
}

export default Home
