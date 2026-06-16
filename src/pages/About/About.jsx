import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';

const { Content } = Layout;

export default function About() {
    return (
        <Layout style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Content style={{ padding: '40px 50px', margin: 'auto' }}>
                <div style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '500', color: '#111', margin: '0 0 16px 0' }}>
                        About
                    </h2>
                    <p style={{ color: '#333', lineHeight: '1.6', fontSize: '14px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </Content>
        </Layout>
    );
}