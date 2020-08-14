import React from 'react'
import styles from './SidebarRow.css'


function SidebarRow({selected, Icon, title}) {
    return (
        <div className={`${styles.sidebarRow} ${selected && "selected"}`}>
            <Icon className={styles.sidebarRow__icon} />
            <h2 className={styles.sidebarRow__title}>{title}</h2>
        </div>
    )
}

export default SidebarRow
