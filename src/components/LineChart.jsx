import React from 'react'
import { Line } from 'react-chartjs-2';
import {Row, Col, Typography } from 'antd';
const { Title, Text } = Typography;
const LineChart = ({ coinName, currentPrice, coinHistory}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    coinHistory?.data?.history.forEach(coin => {
        coinPrice.push(coin.price);
        coinTimestamp.push(new Date(coin.timestamp).toLocaleDateString())
    });

    const data = {
        labels: coinTimestamp,
        datasets: [{
            label: 'Price in USD',
            data: coinPrice,
            fill: false,
            borderColor: '#4169e1',
            tension: 0.1
        }]
    }
    return (
        
        <div>
            <Row justify='space-between' style={{marginTop: 30}}>
                <Col>
                    <Title level={3} style={{color: '#4169e1'}}>{coinName} Price Chart</Title>
                </Col>
                <Col>
                    <Title level={5}>Current {coinName} Price: {currentPrice}$</Title>
                    <Title level={5}>Change: {coinHistory?.data?.change}%</Title>
                </Col>
            </Row>
            
            
            <Line data={data}/>
        </div>
    )
}

export default LineChart
