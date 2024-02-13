import { FC } from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styles from './style.module.css';
import { TriggerProps } from './type';

export const Trigger: FC<TriggerProps> = ({ isMobile, collapsed, onClick }) => (
    <div className={styles.triggerWrapper}>
        <Button
            data-test-id={isMobile ? 'sider-switch-mobile' : 'sider-switch'}
            className={styles.trigger}
            onClick={onClick}
        >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
    </div>
);
