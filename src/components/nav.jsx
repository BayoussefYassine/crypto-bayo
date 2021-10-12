import React from 'react'
import { Link } from 'react-router-dom';
import { CaretDownOutlined, HomeOutlined , MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CryptoBayo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{color: 'white'}}><CaretDownOutlined /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/">
                        <li className="nav-item" style={{marginTop: 15}}>
                        <HomeOutlined />
                           Home
                        </li>
                        </Link>
                        <Link to="/currencies">
                        <li className="nav-item">
                            <FundOutlined />
                            Cryptocurrencies
                        </li>
                        </Link>
                        <Link to="/exchange">
                        <li className="nav-item">
                            <MoneyCollectOutlined />
                            Exchanges
                        </li>
                        </Link>
                        <Link to="/news">
                        <li className="nav-item">
                            <BulbOutlined />
                            News
                        </li>
                        </Link>
                    
                    </ul>
                
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
