import React, { useState } from 'react';
import { Layout } from 'antd';
import { Sidebar } from '@components/sidebar';
import { Header } from '@components/header';
import { MainContent } from '@components/main-content';
import { FooterMain } from '@components/footer-main';
import light from '../../assets/main-page/Main page_light.png';

export const MainPage: React.FC = () => {
    const [collapsedSider, setCollapsedSider] = useState(true);

    return (
        <Layout
            style={{
                flexDirection: 'row',
                background: `url("${light}") center/cover fixed no-repeat`,
            }}
        >
            <Sidebar setCollapsedSider={setCollapsedSider} />
            <Layout>
                <Header />
                <MainContent collapsed={collapsedSider} />
                <FooterMain collapsed={collapsedSider} />
            </Layout>
        </Layout>
    );
};
