import React, {useState} from 'react'
import {Layout, Row, Col, Typography, Select, Divider, Card } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router';
import millify from 'millify';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/CryptoApi';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import LineChart from './LineChart.jsx';
import Loader from './Loader';
import Nav from './nav';

const { Header, Content } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;
const { Meta } = Card;


const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, settimePeriod] = useState('7d')
    const { data, isLoading } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timePeriod});
    const gridStyle = {
        width: '100%',
      };
    
    if(isLoading) return <Loader />;

    const time = [ '24h', '7d', '30d', '1y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${data?.data?.coin?.price && millify(data?.data?.coin?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: data?.data?.coin?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${data?.data?.coin?.volume && millify(data?.data?.coin?.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${data?.data?.coin?.marketCap && millify(data?.data?.coin?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(data?.data?.coin?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: data?.data?.coin?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: data?.data?.coin?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: data?.data?.coin?.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${millify(data?.data?.coin?.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${millify(data?.data?.coin?.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    ];
    
    
    return (
        
        <Layout>
            <Nav className='mobile-nav'/>
            <Header className="site-layout-sub-header-background" style={{ paddingLeft: 30, color: 'white', backgroundColor: '#001529' }}>
                <Title className='header-title' level={4} style={{color: 'white' }}>Crypto Details</Title>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24 }}>
                    <div className='details-name'>
                        <Title level={2}>{data?.data?.coin?.name} ({data?.data?.coin?.slug}) Price</Title>
                        <p>{data?.data?.coin?.name} live price in us dollar. View value statistics, market cap and ...</p>
                    </div>
                    <Divider />

                    <div>
                        <Select
                        defaultValue='7d'
                        style={{ width: 150 }}
                        placeholder="Select Time Period"
                        optionFilterProp="children"
                        onChange={(value) => {settimePeriod(value)}}
                        >
                        {time.map(value =>
                            <Option value={value}>{value}</Option>
                        )}
                        </Select>
                    </div>
                    
                    <LineChart coinHistory={coinHistory} currentPrice={millify(data?.data?.coin?.price, {precision: 2})} coinName={data?.data?.coin?.name} />
                    <div className='chart'>

                        <Row justify='space-between' style={{marginTop: 50}}>
                            <Col xs={24} sm={24} md={11}>
                                <Card className='crad-details'>
                                    <div className='card-details-title'>
                                        <Meta
                                        title={`${data?.data?.coin?.name} Value Statistics`}
                                        description={`An overview showing the stats of ${data?.data?.coin?.name}`}
                                        />
                                    </div>
                                    {stats.map(({title, value, icon }) => (
                                    <Row>
                                        <Card.Grid style={gridStyle}>

                                                <Row>
                                                    <Col>
                                                        <Text style={{marginRight: 10}}>{icon}</Text>
                                                        <Text>{title}</Text>                                                   
                                                    </Col>
                                                    <Col style={{marginLeft: 'auto'}}>
                                                        <Text strong>{value}</Text>                                              
                                                    </Col>
                                                </Row>
                                        </Card.Grid>
                                    </Row>
                                    ))}
                                </Card>
                            </Col>

                            <Col xs={24} sm={24} md={11}>
                                <Card className='crad-details'>
                                    <div className='card-details-title'>
                                        <Meta
                                        title={`Other Statistics`}
                                        description={`An overview showing the stats of all cryptocurrencies`}
                                        />
                                    </div>
                                    {genericStats.map(({title, value, icon }) => (
                                    <Row>
                                        <Card.Grid style={gridStyle}>

                                                <Row>
                                                    <Col>
                                                        <Text style={{marginRight: 10}}>{icon}</Text>
                                                        <Text>{title}</Text>                                                   
                                                    </Col>
                                                    <Col style={{marginLeft: 'auto'}}>
                                                        <Text strong>{value}</Text>                                              
                                                    </Col>
                                                </Row>
                                        </Card.Grid>
                                    </Row>
                                    ))}
                                </Card>
                            </Col>

                         
                        </Row>

                        <Row className='crypto-info' justify='space-between'>
                        <Col xs={24} sm={24} md={12}>
                            <Title level={2}>
                                What is {data?.data?.coin?.name}                                
                            </Title>
                            {HTMLReactParser(data?.data?.coin?.description)}
                        </Col>

                        <Col xs={24} sm={24} md={12}>
                                <Title level={2}>
                                    {data?.data?.coin?.name} Links                              
                                 </Title>
                                <Card className='crad-details'>
                                    {data?.data?.coin?.links.map(link => (
                                    <Row>
                                        <Card.Grid style={gridStyle}>

                                                <Row>
                                                    <Col>
                                                        <Text  style={{textTransform: 'capitalize'}}>{link.type}</Text>                                                   
                                                    </Col>
                                                    <Col style={{marginLeft: 'auto'}} className='crypto-links'>
                                                        <a href={link.url} target='_blank'>
                                                            {link.name}    
                                                        </a>                                         
                                                    </Col>
                                                </Row>
                                        </Card.Grid>
                                    </Row>
                                    ))}
                                </Card>
                            </Col>

                            </Row>
                    </div>







                </div>
                
            </Content>
        </Layout>
    )
}

export default CryptoDetails
