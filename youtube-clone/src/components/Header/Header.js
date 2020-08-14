import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css';

// Imported Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    const [inputSearch, setInputSearch] = useState('')

    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <MenuIcon />
                <Link to="/">
                    <img 
                    className={styles.header__logo}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png"
                    alt=""
                    />
                </Link>   
            </div>

            <div className={styles.header__input}>
                <input 
                onChange={e => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder="Search"
                type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className={styles.header__inputButton} />
                </Link>
            </div>

            <div className={styles.header__icons}>
                <VideoCallIcon className={styles.header__icons}/>
                <AppsIcon className={styles.header__icons}/>
                <NotificationsIcon className={styles.header__icons}/>
                <Avatar />
            </div>
        </div>
        
    )
}

export default Header
