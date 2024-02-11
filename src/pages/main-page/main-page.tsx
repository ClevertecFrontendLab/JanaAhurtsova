import React from 'react';
import { Layout } from 'antd';
import { Sidebar } from '@components/sidebar';
import { Header } from '@components/header';
import { MainContent } from '@components/main-content';
import { FooterMain } from '@components/footer-main';
import light from '../../assets/main-page/Main page_light.png';

export const MainPage: React.FC = () => (
    <Layout
        style={{
            flexDirection: 'row',
            background: `url("${light}") center/cover fixed no-repeat`,
        }}
    >
        <Sidebar />
        <Layout>
            <Header />
            <MainContent />
            <FooterMain />
        </Layout>
    </Layout>
);
