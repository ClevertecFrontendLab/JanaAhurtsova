import { FC } from 'react';
import { Button, Col, Row, Grid } from 'antd';
import { DownloadCard } from '@components/download-card';
import styles from './style.module.css';
import { FooterMainProps } from './type';

const { useBreakpoint } = Grid;

export const FooterMain: FC<FooterMainProps> = ({collapsed}) => {
    const { xs, md, lg } = useBreakpoint();
    console.log("md", md, "lg", lg)
    return (
        <Row
            gutter={[0, 24]}
            className={styles.footer}
            style={{
                padding: xs
                    ? !collapsed
                        ? '0 2.4rem 4.2rem'
                        : '0 1.6rem 4.2rem'
                    : '0 2.4rem 4.2rem',
                marginTop: md && !lg ? collapsed ? '20.6rem': '8.1rem' : '0'
            }}
        >
            <Col md={12} sm={24} xs={24} className={styles.link}>
                <Button type='link' size='large' className={styles.feedback}>
                    Смотреть отзывы
                </Button>
            </Col>
            <Col md={12} sm={24} xs={24} className={styles.cardWrapper}>
                <DownloadCard />
            </Col>
        </Row>
    );
};
