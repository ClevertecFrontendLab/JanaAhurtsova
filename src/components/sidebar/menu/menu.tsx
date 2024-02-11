import { FC } from 'react';
import { Menu } from 'antd';
import { HeartFilled, TrophyFilled } from '@ant-design/icons';
import { CalendarIcon } from '../icons';
import { ProfileIcon } from '../icons';
import { MobileMode } from '../type';
import styles from './style.module.css';

export const MenuSidebar: FC<MobileMode> = ({ isMobile, collapsed }) => {
    const items = [
        {
            key: '1',
            label: 'Календарь',
            icon: !isMobile ? <CalendarIcon className={styles.icon} /> : null,
        },
        {
            key: '2',
            label: 'Тренировки',
            icon: !isMobile ? <HeartFilled className={styles.icon} /> : null,
        },
        {
            key: '3',
            label: 'Достижения',
            icon: !isMobile ? <TrophyFilled className={styles.icon} /> : null,
        },
        {
            key: '4',
            label: 'Профиль',
            icon: !isMobile ? <ProfileIcon className={styles.icon} /> : null,
        },
    ];

    return (
        <Menu
            items={items}
            mode='inline'
            inlineIndent={!isMobile ? (collapsed ? 24 : 16) : 8}
            className={styles.menu}
        />
    );
};
