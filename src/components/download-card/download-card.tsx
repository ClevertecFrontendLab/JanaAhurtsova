import { Button, Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import styles from './style.module.css';

export const DownloadCard = () => (
    <Card className={styles.card}>
        <Meta
            title={<a href='#'>Скачать на телефон</a>}
            description='Доступно в PRO-тарифе'
            className={styles.meta}
        />
        <Row className={styles.os}>
            <Col span={12}>
                <Button type='text'>
                    <AndroidFilled />
                    Android OS
                </Button>
            </Col>
            <Col span={12}>
                <Button type='text'>
                    <AppleFilled />
                    Apple iOS
                </Button>
            </Col>
        </Row>
    </Card>
);
