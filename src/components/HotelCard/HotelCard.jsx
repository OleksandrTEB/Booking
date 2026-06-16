import React from 'react';
import { Card, Rate } from 'antd';

export default function  HotelCard({ hotel }) {
    return (
        <Card
            hoverable
            bordered={true}
            bodyStyle={{ padding: '16px' }}
            style={{ borderRadius: '4px', overflow: 'hidden', height: '100%', width: '200px' }}
            cover={
                <div style={{
                    height: '140px',
                    backgroundColor: '#cccccc',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#888888',
                    fontSize: '20px'
                }}>
                    140 x 140
                </div>
            }
        >
            <h3 style={{ fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0', minHeight: '44px', lineHeight: '1.4' }}>
                {hotel.name}
            </h3>

            {hotel.hotel_rating && (
                <div style={{ marginBottom: '8px' }}>
                    <Rate disabled defaultValue={hotel.hotel_rating} style={{ fontSize: '14px', color: '#f59e0b' }} />
                </div>
            )}

            <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.5' }}>
                <p style={{ margin: 0 }}><strong>address:</strong> {hotel.address}</p>
                <p style={{ margin: 0 }}>
                    <strong>city:</strong> {hotel.city}
                    {hotel.state ? `, state: ${hotel.state}` : ''}
                    {hotel.country_code ? `, country code: ${hotel.country_code}` : ''}
                </p>

                {hotel.phone_number && (
                    <p style={{ margin: '4px 0 0 0', color: '#555' }}>
                        <strong>phone:</strong> {hotel.phone_number}
                    </p>
                )}
            </div>
        </Card>
    );
};