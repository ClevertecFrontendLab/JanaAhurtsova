export type MobileMode = {
    isMobile: boolean;
    collapsed: boolean;
};

export type SiderProps = {
    setCollapsedSider: (value: React.SetStateAction<boolean>) => void;
};
