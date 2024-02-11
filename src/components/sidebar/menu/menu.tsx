import { Menu } from "antd";
import { CalendarIcon } from "../icons";
import { HeartFilled, TrophyFilled } from "@ant-design/icons";
import { ProfileIcon } from "../icons";
import { memo } from "react";
import { getItem } from "@utils/getItem";
import styles from './style.module.css';
import type { MenuItem } from "./type";
import type { MobileMode } from "../type";

export const MenuSidebar = memo((props: MobileMode) => {
        const items: MenuItem[] = [
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
            getItem(
                'Профиль',
                '4',
                !props.isMobile ? <ProfileIcon className={styles.icon} /> : null,
            ),
        ];

    return <Menu items={items} mode='inline' inlineIndent={!props.isMobile ? (props.collapsed? 24 : 16) : 8} className={styles.menu}></Menu>;
})
