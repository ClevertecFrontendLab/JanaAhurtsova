import { FC } from 'react';
import { Grid } from 'antd';
import FitIcon from '/fit.png';
import LogoIcon from '/logo.png';
import { LogoProps } from './type';
import styles from './style.module.css';

const { useBreakpoint } = Grid;

export const Logo: FC<LogoProps> = ({ href, show }) => {
    const { xs } = useBreakpoint();

    return (
        <a href={href} className={styles.logo}>
            {!show && <img src={LogoIcon} className={styles.cleverfit} alt={'CleverFit'} />}
            {!xs && show && <img src={FitIcon} className={styles.fit} alt={'fit'} />}
        </a>
    );
};
