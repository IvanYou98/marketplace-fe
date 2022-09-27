import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import './Header.css'
import SearchBar from '../searchbar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import axios from 'axios';
import { setWishList } from '../../redux/wishListRedux';
import { BACKEDN_API } from '../../constant';

const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();
    const wishList = useSelector(state => state.wishList);

    let navigate = useNavigate();

    useEffect(() => {
        let currentUser = localStorage.getItem('currentUser');
        setIsLoggedIn(currentUser != null);
        setCurrentUser(currentUser);
    }, [])


    useEffect(() => {
        axios.get(`${BACKEDN_API}/wishlist`, {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            dispatch(setWishList(res.data))
            axios.get(`${BACKEDN_API}/category`).then(res =>
                console.log()
            )
        }).catch(err => {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            console.log(err)
        })
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
                            <Badge badgeContent={wishList.products.length} color='primary'>
                                <FavoriteIcon className='nav-icons' onClick={() => navigate("/home")} />
                            </Badge>
                            <AddCircleIcon className='nav-icons' onClick={() => navigate('/product/create')} />
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