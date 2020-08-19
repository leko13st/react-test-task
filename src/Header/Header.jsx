import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <table className={styles.headerTable}>
                <tr>
                    <td width="11%">Панель инструментов</td>
                    <td width>Работники</td>
                    <td>Карточка работника</td>
                </tr>
            </table>
        </div>
    )
}

export default Header;