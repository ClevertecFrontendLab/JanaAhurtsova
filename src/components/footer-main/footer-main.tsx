import { Button, Col, Row } from "antd";
import { DownloadCard } from "@components/download-card";
import styles from "./style.module.css";

export const FooterMain = () => {
    return (
        <footer className={styles.footer}>
            <Row>
                <Col span={12} className={styles.link}>
                    <Button type='link' size="large" className={styles.feedback}>
                        Смотреть отзывы
                    </Button>
                </Col>
                <Col span={12} className={styles.cardWrapper}>
                    <DownloadCard />
                </Col>
            </Row>
        </footer>
    );
}
