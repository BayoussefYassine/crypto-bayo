import React from 'react'
import {Layout} from 'antd';
import gitlogo from "../images/gitlogo.png"
const Footer = () => {
    const { Footer } = Layout;
    return (
        <Footer style={{ textAlign: 'center' }}>
            <p>©2021 Created by BAYOUSSEF Yassine</p>
            <a href="https://github.com/BayoussefYassine/crypto-bayo"><p>GitHub Repo <img src={gitlogo} style={{width: 30}}/></p></a>
        </Footer>
    )
}

export default Footer
