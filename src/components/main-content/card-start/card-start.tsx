import { HeartFilled } from "@ant-design/icons";
import { CalendarIcon, ProfileIcon } from "@components/sidebar/icons";
import { Card, Col, Row, Typography } from 'antd';
import styles from "./style.module.css";

export const CardStart = () => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title='Расписать тренировки' bordered={false} className={styles.card}>
                    <Typography.Link href='/' className={styles.link}>
                        <HeartFilled /> Тренировка
                    </Typography.Link>
                </Card>
            </Col>
            <Col span={8}>
                <Card title='Назначить календарь' bordered={false} className={styles.card}>
                    <Typography.Link href='/' className={styles.link}>
                        <CalendarIcon /> Календарь
                    </Typography.Link>
                </Card>
            </Col>
            <Col span={8}>
                <Card title='Заполнить профиль' bordered={false} className={styles.card}>
                    <Typography.Link href='/' className={styles.link}>
                        <ProfileIcon /> Профиль
                    </Typography.Link>
                </Card>
            </Col>
        </Row>
    );
}
