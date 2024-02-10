import FitIcon from '/fit.png';
import LogoIcon from '/logo.png';
import { LogoProps } from './type';
import styles from './style.module.css';

export const Logo = (props: LogoProps) => {
    return (
        <a href={props.href} className={styles.logo}>
            {!props.show && <img src={LogoIcon} className={styles.cleverfit} alt={'CleverFit'} />}
            {props.show && <img src={FitIcon} className={styles.cleverfit} alt={'fit'} />}
        </a>
    );
};
