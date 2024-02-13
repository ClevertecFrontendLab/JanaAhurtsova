import { FC, useState } from 'react';
import Sider from 'antd/lib/layout/Sider';
import { Logout } from './logout';
import { MenuSidebar } from './menu';
import { Trigger } from './trigger';
import { Logo } from '@components/logo';
import { Paths } from '@constants/enums/paths';
import { SiderProps } from './type';
import styles from './style.module.css';

export const Sidebar: FC<SiderProps> = ({setCollapsedSider}) => {
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

    const onCollapsed = () => {
        setCollapsed(!collapsed);
        setCollapsedSider(!collapsed);
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
            style={{ position: isMobile ? 'fixed' : 'relative' }}
        >
            <Trigger isMobile={isMobile} collapsed={collapsed} onClick={onCollapsed} />
            <div className={styles.menu}>
                <Logo href={Paths.MAIN} show={collapsed} />
                <MenuSidebar isMobile={isMobile} collapsed={collapsed} />
            </div>
            <Logout isMobile={isMobile} collapsed={collapsed} />
        </Sider>
    );
};
