import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <table className={styles.headerTable}>
                <tr>
                    <td width="11%">Панель инструментов</td>
                    <td width>Сотрудники</td>
                    <td>Карточка сотрудника</td>
                </tr>
            </table>
        </div>
    )
}

export default Header;