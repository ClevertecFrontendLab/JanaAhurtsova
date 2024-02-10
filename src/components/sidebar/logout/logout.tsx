import { Divider, Menu } from "antd";
import { MenuItem } from "@type/menu-item";
import { getItem } from "@utils/getItem";
import ExitIcon from '../../../assets/main-page/svg/Exit.svg?react';
import type { MobileMode } from "../type";
import styles from "./style.module.css";

export const Logout = (props: MobileMode) => {
    const items: MenuItem[] = [getItem(!props.isMobile ? 'Выход' : null, '5', <ExitIcon style={{marginRight: "15px"}} />)];

    return (
        <>
            <Divider/>
            <Menu mode="inline" inlineIndent={16} items={items} className={styles.menu} />
        </>
    )
}
