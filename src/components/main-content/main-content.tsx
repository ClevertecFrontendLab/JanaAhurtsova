import { Card, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { CardStart } from "./card-start";
import { Benefits } from "./benefits";
import styles from './style.module.css';

export const MainContent = () => {
    return (
        <Content className={styles.content}>
            <Card bordered={false} className={styles.card}>
                <Benefits />
            </Card>
            <div className={styles.cardsWarapper}>
                <Card className={styles.card} bordered={false}>
                    <Typography.Title level={4} className={styles.app}>
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </Typography.Title>
                </Card>
                <CardStart />
            </div>
        </Content>
    );
}
