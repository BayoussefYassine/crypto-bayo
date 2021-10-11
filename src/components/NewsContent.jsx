import React from 'react';
import { useGetCryptoNewsQuery } from '../services/NewsApi';
import { useGetCryptoStatsQuery } from '../services/CryptoApi';
import { Row, Col, Typography, Card, Avatar, Select } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import Loader from './Loader';

const { Text, Title } = Typography;

const NewsContent = ({simplified}) => {
    const [newsCategory, setnewsCategory] = useState('Cryptocurrency')
    const { data, isLoading } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12});
    const { Option } = Select;                                 
    const { data: coins } = useGetCryptoStatsQuery(100);

    if(isLoading) return <Loader />;
    
    return (
        <>
            <div>
                {!simplified && 
                    <div style={{marginBottom: 25}}> 
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Search by cryptocurency"
                            optionFilterProp="children"
                            onChange={value => setnewsCategory(value)}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Cryptocurrency">Cryptocurrency</Option>
                            {coins?.data?.coins.map((coin) => 
                                <Option value={coin.name}>{coin.name}</Option>
                            )}
                        </Select>
                    </div>
                }
                <Row gutter={[24, 24]}>
                    {data?.value.map((news, index) => (
                        <Col xs={24} sm={12} lg={8} key={news.index}>
                            <Card hoverable >
                                <a href={news.url} target='_blank' >
                                    <Row justify='space-between' align='middle'>
                                        <Col xs={12} sm={24} md={12} lg={16}>
                                            <Title level={4}>{news.name}</Title>
                                        </Col>
                                        <Col className='news-img' >
                                            <img src={news?.image?.thumbnail?.contentUrl} />
                                        </Col>
                                    </Row>
                                    <p className='news-description'>
                                        {news.description > 100 
                                            ? `${news.description.substring(0, 100)}...`
                                            : news.description
                                        }
                                    </p>
                                    <div>
                                        <Row align='middle'>
                                            <Col>
                                                <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl} alt='img' style={{marginRight: 10}} />
                                                <Text>{news.provider[0].name}</Text>
                                            </Col>
                                            <Col style={{marginLeft: 'auto'}}>
                                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                            </Col>
                                        </Row>
                                        
                                    </div>
                                </a>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </> 
    )
}

export default NewsContent
