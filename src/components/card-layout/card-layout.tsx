import { FC } from 'react';
import { Card } from 'antd';
import { CardLayoutProps } from './type';
import styles from './style.module.css';

export const CardLayout: FC<CardLayoutProps> = ({ children, additionalClass }) => (
    <Card className={`${styles.card} ${additionalClass}`} bordered={false}>
        {children}
    </Card>
);
