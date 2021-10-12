import React from 'react'
import {Layout, Row, Table, Typography} from 'antd';
import { useGetExchangesQuery } from '../services/CryptoApi';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import Loader from './Loader';
import Nav from './nav';

const Exchange = () => {
    const {data, isLoading} = useGetExchangesQuery();
    const { Header, Content } = Layout;
    const { Title } = Typography;
    if(isLoading) return <Loader />
    
    const dataSource = [
                        data?.data?.exchanges.map((exchange, index) => (
                            {
                                key: index,
                                name: [exchange.name, exchange.iconUrl, index],
                                volume: millify(exchange.volume),
                                markets: millify(exchange.numberOfMarkets),
                                change: millify(exchange.marketShare)+'%',
                                description: exchange.description
                               
                            }
                        ))
                        ];
                        
      const columns = [
                            {
                            key: 'name',
                            title: 'Exchanges',
                            dataIndex: 'name',
                            render: (text) => (
                                <div>
                                    <Row className='exchange-info'>
                                        <p  className='info-key'>{text[2]+1}. </p>
                                        <img src={text[1]} style={{width: 25, marginRight: 15, verticalAlign: 'top'}} />
                                        <Title style={{margin: 0}} level={5}>{text[0]}</Title>
                                    </Row>  
                                </div>
                            
                            )
                            
                           
                            },
                            {
                            key: 'volume',
                            title: '24h Trade Volume',
                            dataIndex: 'volume',
                        
                            },
                            {
                            key: 'markets',
                            title: 'Markets',
                            dataIndex: 'markets',
        
                            },
                            {
                            key: 'change',
                            title: 'Changes',
                            dataIndex: 'change',
           
                            },
                    ];

    
    return (
        
        <Layout>
            <Nav className='mobile-nav'/>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white', backgroundColor: '#001529' }}>
                <Title className='header-title' level={3} style={{color: 'white' }}>Exchanges</Title>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background">
                <Table
                className='tableee'
                dataSource={dataSource[0]}
                columns={columns}
                expandable={{
                    expandedRowRender: record => <p>{record.description && HTMLReactParser(record.description)}</p>,
                    rowExpandable: record => record.description,
                }}
                />
                </div>
            </Content>
        </Layout>
    )
}

export default Exchange
