import { Card } from 'antd';
import { CardLayoutProps } from './type';
import styles from './style.module.css';

export const CardLayout = (props: CardLayoutProps) => {
    return (
        <Card className={`${styles.card} ${props.class}`} bordered={false}>
            {props.children}
        </Card>
    );
};
