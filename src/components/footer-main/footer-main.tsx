import { Button, Col, Row } from 'antd';
import { DownloadCard } from '@components/download-card';
import styles from './style.module.css';

export const FooterMain = () => (
    <Row gutter={[0, 24]} className={styles.footer}>
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
