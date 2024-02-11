import { Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { CardStart } from './card-start';
import { Benefits } from './benefits';
import { CardLayout } from '@components/card-layout';
import styles from './style.module.css';

export const MainContent = () => (
    <Content className={styles.content}>
        <CardLayout>
            <Benefits />
        </CardLayout>
        <div className={styles.cardsWrapper}>
            <CardLayout>
                <Typography.Title level={4} className={styles.app}>
                    CleverFit — это не просто приложение, а твой личный помощник в&nbsp;мире
                    фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                </Typography.Title>
            </CardLayout>
            <CardStart />
        </div>
    </Content>
);
