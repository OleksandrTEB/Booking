import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import { Select, DatePicker, Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import { getDestinations } from "../../store/thunk/hotelsThunk.js";
import { useSelector } from "react-redux";

const { Content} = Layout;

export default function Main() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const destinations = useSelector((state) => state.hotels.destinations)

    const initialValues = {
        destination: undefined,
        checkIn: null,
        checkOut: null,
    };

    useEffect(() => {
        dispatch(getDestinations())
    }, [dispatch]);

    const handleSubmit = (values) => {
        console.log('Form Submitted Data:', values);

        navigate('/hotels', { state: values });
    };

    return (
        <Layout>
            <Content style={{padding: '40px 50px', margin: 'auto'}}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({setFieldValue, handleSubmit: handleFormikSubmit}) => (
                        <form onSubmit={handleFormikSubmit}>

                            <div style={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                marginBottom: '30px'
                            }}>

                                <Select
                                    placeholder="Destination"
                                    style={{width: 220}}
                                    allowClear
                                    onChange={(value) => setFieldValue('destination', value)}
                                    options={destinations}
                                />

                                <DatePicker
                                    placeholder="Check in"
                                    style={{width: 180}}
                                    onChange={(date) => setFieldValue('checkIn', date)}
                                />

                                <DatePicker
                                    placeholder="Check out"
                                    style={{width: 180}}
                                    onChange={(date) => setFieldValue('checkOut', date)}
                                />

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{backgroundColor: '#f59e0b', borderColor: '#f59e0b', fontWeight: '500'}}
                                >
                                    SUBMIT
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>

                <div style={{marginTop: '20px', maxWidth: '800px'}}>
                    <h1 style={{fontSize: '32px', fontWeight: 'bold', margin: '0 0 16px 0'}}>
                        Travel With <span style={{color: '#f59e0b'}}>Booking</span>
                    </h1>
                    <p style={{color: '#666', lineHeight: '1.6', fontSize: '14px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </Content>
        </Layout>
    );
}