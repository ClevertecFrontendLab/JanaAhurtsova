import { FC } from 'react';
import { Card, Typography } from 'antd';
import { Paths } from '@constants/enums/paths';
import { CardActionProps } from './type';
import styles from './style.module.css';

export const CardAction: FC<CardActionProps> = ({ title, icon, name }) => (
    <Card title={title} bordered={false} className={styles.card}>
        <Typography.Link href={Paths.MAIN} className={styles.link}>
            {icon} {name}
        </Typography.Link>
    </Card>
);
