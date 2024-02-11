import { Button, Divider, Typography } from "antd";
import ExitIcon from '../../../assets/main-page/svg/Exit.svg?react';
import type { MobileMode } from "../type";
import styles from "./style.module.css";

export const Logout = (props: MobileMode) => {
    return (
        <>
            <Divider />
            <div className={styles.logout}>
                <Button type='text' className={styles.button}>
                    {!props.isMobile && <ExitIcon className={styles.icon}/>}
                    {!props.collapsed && <Typography.Text>Выход</Typography.Text>}
                </Button>
            </div>
        </>
    );
}
