import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <table className={styles.headerTable}>
                <tbody>
                    <tr>
                        <td width="11%">Панель инструментов</td>
                        <td>Сотрудники</td>
                        <td>Карточка сотрудника</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Header;