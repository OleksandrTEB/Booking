import { useState, useEffect} from "react";
import { getHotels } from "../../api/hotelsApi.js";
import React from 'react';
import { useLocation } from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import HotelCard from "../../components/HotelCard/HotelCard.jsx";

const { Content } = Layout;

export default function Hotels() {
    const [hotels, setHotels] = useState([]);
    const location = useLocation();
    const searchParams = location.state;

    useEffect(() => {
        if (searchParams) {
            console.log("Данные для поиска отелей:", searchParams);
        }

        const fetchValues = async () => {
            try {
                const data = await getHotels();
                setHotels(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchValues();
    }, [searchParams]);

    return (
        <Layout style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Content style={{ padding: '40px 50px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '500', color: '#111', marginBottom: '24px' }}>
                    Hotels
                </h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'flex-start'
                }}>
                    {
                        hotels.map(hotel => (
                            <HotelCard key={hotel.id} hotel={hotel} />
                        ))
                    }
                </div>

            </Content>
        </Layout>
    );
}