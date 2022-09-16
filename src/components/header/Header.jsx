import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css'
import SearchBar from '../searchbar/SearchBar';

const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        let currentUser = localStorage.getItem('currentUser');
        setIsLoggedIn(currentUser != null);
        setCurrentUser(currentUser)
    }, [])

    const handleLogout = () => {

        localStorage.removeItem('currentUser')
        setCurrentUser(null);
        setIsLoggedIn(false);
        navigate('/login')
    }


    return (
        <Fragment>
            <div className='nav-container'>
                <div className='left-nav'>
                    <Link to="/">Lai Market</Link>
                </div>
                <div className='mid-nav'>
                    <SearchBar />
                </div>
                <div className='right-nav'>
                    {isLoggedIn ?
                        <Fragment>
                            <AccountCircleIcon className='nav-icons' onClick={() => navigate('/home')} />
                            <FavoriteIcon className='nav-icons' />
                            <NotificationsIcon className='nav-icons' />
                            <span className='logout-btn' onClick={handleLogout}>
                                LOG OUT
                            </span>
                        </Fragment>
                        :
                        <Fragment>
                            <Link to="/register">REGISTER</Link>
                            <Link to="/login">LOG IN</Link>
                        </Fragment>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Header