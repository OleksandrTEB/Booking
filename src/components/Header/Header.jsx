import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function HeaderHotel() {
    return (
        <Header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#fff',
            borderBottom: '1px solid #e8e8e8',
            padding: '20px 50px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>Booking</span>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>

                <Link to="/">
                    <Button style={{ backgroundColor: '#f59e0b', color: '#fff', border: 'none', cursor: 'pointer' }}>
                        HOME
                    </Button>
                </Link>

                <Link to="/hotels">
                    <Button style={{ backgroundColor: '#f59e0b', color: '#fff', border: 'none', cursor: 'pointer' }}>
                        HOTELS
                    </Button>
                </Link>

                <Link to="/about">
                    <Button style={{ backgroundColor: '#f59e0b', color: '#fff', border: 'none', cursor: 'pointer' }}>
                        ABOUT
                    </Button>
                </Link>

            </div>
        </Header>
    );
}