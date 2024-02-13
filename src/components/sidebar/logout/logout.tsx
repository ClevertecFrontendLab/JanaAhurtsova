import { FC } from 'react';
import { Button, Divider, Typography } from 'antd';
import ExitIcon from '../../../assets/main-page/svg/Exit.svg?react';
import { MobileMode } from '../type';
import styles from './style.module.css';

export const Logout: FC<MobileMode> = ({ isMobile, collapsed }) => (
    <>
        <Divider />
        <div className={styles.logout}>
            <Button type='text' className={styles.button}>
                {!isMobile && <ExitIcon className={styles.icon} />}
                {!collapsed && <Typography.Text>Выход</Typography.Text>}
            </Button>
        </div>
    </>
);
