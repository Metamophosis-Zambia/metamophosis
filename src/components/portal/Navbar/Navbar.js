import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/icon.png';

const menu = <FontAwesomeIcon icon={faBars} />;
const close = <FontAwesomeIcon icon={faTimes} />;

function InNavBar() {
    const navRef = useRef();
    const navRef3 = useRef();
    const navRef4 = useRef();
    const navigate = useNavigate();

    const [displayName2, setName] = useState('');
    const [displayImage, setImage] = useState(logo);

    const logOut = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/');
        });
    };

    const getUserProfile = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            const { displayName } = user;
            const { photoURL } = user;
            setName(displayName);
            setImage(photoURL);
        }
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    const showNavContent = () => {
        navRef.current.classList.toggle('responsive');
        navRef3.current.classList.toggle('none');
        navRef4.current.classList.toggle('block');
    };

    return (
        <nav className="nav">
            <div className="main-nav" ref={navRef4}>
                <div>
                    <NavLink to="/" activestyle="true">
                        <h2 className="logo">
                            Meta
                            <span>mophosis</span>
                        </h2>
                    </NavLink>
                </div>
                <button
                    type="button"
                    className="humburger btn"
                    onClick={showNavContent}
                    ref={navRef3}
                >
                    {menu}
                </button>
                <div ref={navRef} className="primary-nav">
                    <button
                        type="button"
                        className="close btn"
                        onClick={showNavContent}
                    >
                        {close}
                    </button>
                    <div className="user-container">
                        <NavLink to="/dashboard/profile" activestyle="true">
                            <img src={displayImage} alt="user" />
                        </NavLink>
                        <p>{displayName2}</p>
                    </div>
                    <button
                        type="button"
                        onClick={logOut}
                        name="Logout"
                        className="login-btn"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default InNavBar;
