import React from 'react'
import {Row, Col, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { useState, useEffect } from 'react';
import { useGetCryptoStatsQuery } from '../services/CryptoApi';
import Loader from './Loader';


const CurrenciesContent = ( {simplified} ) => {
    const count = simplified ? 10 : 100;
    const { data, isFetching } = useGetCryptoStatsQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [filterCrypto, setfilterCrypto] = useState('')
    useEffect(() => {

        const filtredData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(filterCrypto.toLowerCase()));
        setCryptos(filtredData)

    }, [data, filterCrypto]);

    if(isFetching) return <Loader />
    console.log('sim', simplified)

    return (
        <>
            {!simplified &&
                <div className="search" >
                    <Input placeholder="search for cyrpto" onChange={(e) => setfilterCrypto(e.target.value)}/>
                </div>
            }
            
            <Row gutter={[32, 32]}>
                {cryptos?.map( (crypto) => (
                    <Col xs={24}  sm={12} lg={6} key={crypto.id}>
                        <Link to={`/crypto/${crypto.id}`} >
                            <Card
                                title={`${crypto.rank}. ${crypto.name}`}
                                extra={<img src={`${crypto.iconUrl}`} style={{width : 30}} />}
                                hoverable
                            >
                                <p>Price: {millify(crypto.price)}</p>
                                <p>Market Cap: {millify(crypto.marketCap)}</p>  
                                <p>Daily Change: {millify(crypto.change)}%</p>  
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CurrenciesContent
