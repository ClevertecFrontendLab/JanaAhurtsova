import { Card, Typography } from 'antd';
import { Paths } from '@constants/enums/paths';
import { CardActionProps } from './type';
import styles from './style.module.css';

export const CardAction = (props: CardActionProps) => {
    return (
        <Card title={props.title} bordered={false} className={styles.card}>
            <Typography.Link href={Paths.MAIN} className={styles.link}>
                {props.icon} {props.name}
            </Typography.Link>
        </Card>
    );
};
