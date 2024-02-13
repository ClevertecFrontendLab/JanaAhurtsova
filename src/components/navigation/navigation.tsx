import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationProps } from './type';
import styles from './style.module.css';

export const Navigation: FC<NavigationProps> = ({ links }) => (
    <nav>
        <ul>
            {links.map((link) => (
                <li key={link.name}>
                    <NavLink className={styles.link} to={link.href}>
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);
