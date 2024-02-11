import { useState } from "react";
import Sider from "antd/lib/layout/Sider";
import { MenuSidebar } from "./menu";
import styles from "./style.module.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Logo } from "@components/logo";
import { Logout } from "./logout";
import { Button } from "antd";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [collapsedWidth, setCollapsedWidth] = useState(64);
    const [width, setWidth] = useState(208);
    const [isMobile, setIsMobile] = useState(false);

    const onBreakpoint = (broken: boolean) => {
        if (broken) {
            setCollapsedWidth(1);
            setWidth(106);
            setIsMobile(true);
        } else {
            setCollapsedWidth(64);
            setWidth(208);
            setIsMobile(false);
        }
    };

    return (
        <Sider
            theme={'light'}
            trigger={null}
            collapsed={collapsed}
            collapsible
            collapsedWidth={collapsedWidth}
            breakpoint='sm'
            onBreakpoint={onBreakpoint}
            className={styles.sidebar}
            width={width}
            style={{position: isMobile? "fixed" : "relative"}}
        >
            <div className={styles.triggerWrapper}>
                <Button
                    data-test-id={isMobile ? 'sider-switch-mobile' : 'sider-switch'}
                    className={styles.trigger}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className={styles.menu}>
                <Logo href={'/'} show={collapsed} />
                <MenuSidebar isMobile={isMobile} collapsed={collapsed} />
            </div>
            <Logout isMobile={isMobile} collapsed={collapsed}/>
        </Sider>
    );
}

