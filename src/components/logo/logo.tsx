import { Grid } from 'antd';
import FitIcon from '/fit.png';
import LogoIcon from '/logo.png';
import { LogoProps } from './type';
import styles from './style.module.css';

const { useBreakpoint } = Grid;

export const Logo = (props: LogoProps) => {
    const { xs } = useBreakpoint();

    return (
        <a href={props.href} className={styles.logo}>
            {!props.show && <img src={LogoIcon} className={styles.cleverfit} alt={'CleverFit'} />}
            {!xs && props.show && <img src={FitIcon} className={styles.fit} alt={'fit'} />}
        </a>
    );
};
