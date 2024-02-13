import { FC } from 'react';
import { Typography, Grid } from 'antd';
import { CardStart } from './card-start';
import { Benefits } from './benefits';
import { CardLayout } from '@components/card-layout';
import { MainContentProps } from './type';
import styles from './style.module.css';
import { Content } from 'antd/lib/layout/layout';

const {useBreakpoint} = Grid;

export const MainContent: FC<MainContentProps> = ({ collapsed }) => {
    const {xs} = useBreakpoint();

    return (
        <Content
            className={styles.content}
            style={{ padding: xs ? (!collapsed ? '24px' : '24px 16px') : '24px' }}
        >
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
};
