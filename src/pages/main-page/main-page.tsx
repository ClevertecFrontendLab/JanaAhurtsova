import React, { useState } from 'react';
import { Layout, Row, Grid, Col } from 'antd';
import { Sidebar } from '@components/sidebar';
import { Header } from '@components/header';
import { MainContent } from '@components/main-content';
import { FooterMain } from '@components/footer-main';
import light from '../../assets/main-page/Main page_light.png';

const {useBreakpoint} = Grid;
export const MainPage: React.FC = () => {
    const [collapsedSider, setCollapsedSider] = useState(true);
    const {md} = useBreakpoint();

    return (
        <Layout
            style={{
                flexDirection: 'row',
                background: `url("${light}") center/cover no-repeat`,
            }}
        >
            <Sidebar setCollapsedSider={setCollapsedSider} />
            <Layout>
                <Header />
                <Row gutter={!md ? [0, 0] : [0, 156]} >
                    <MainContent collapsed={collapsedSider} />
                    <Col span={24}>
                        <FooterMain collapsed={collapsedSider} />
                    </Col>
                </Row>
            </Layout>
        </Layout>
    );
};
