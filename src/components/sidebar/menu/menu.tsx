import { Menu } from 'antd';
import { HeartFilled, TrophyFilled } from '@ant-design/icons';
import { getItem } from '@utils/getItem';
import { CalendarIcon } from '../icons';
import { ProfileIcon } from '../icons';
import type { ItemType } from 'src/types/menu-item-type';
import type { MobileMode } from '../type';
import styles from './style.module.css';

export const MenuSidebar = (props: MobileMode) => {
    const items: ItemType[] = [
        getItem(
            'Календарь',
            '1',
            !props.isMobile ? <CalendarIcon className={styles.icon} /> : null,
        ),
        getItem(
            'Тренировки',
            '2',
            !props.isMobile ? <HeartFilled className={styles.icon} /> : null,
        ),
        getItem(
            'Достижения',
            '3',
            !props.isMobile ? <TrophyFilled className={styles.icon} /> : null,
        ),
        getItem('Профиль', '4', !props.isMobile ? <ProfileIcon className={styles.icon} /> : null),
    ];

    return (
        <Menu
            items={items}
            mode='inline'
            inlineIndent={!props.isMobile ? (props.collapsed ? 24 : 16) : 8}
            className={styles.menu}
        />
    );
};
