import { NavLink } from "react-router-dom"
import type { NavigationProps } from "./type";
import styles from './style.module.css';

export const Navigation = (props: NavigationProps) => {
    return (
        <nav>
            <ul>
                {props.links.map((link) => (
                    <li key={link.name}>
                        <NavLink className={styles.link} to={link.href}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
