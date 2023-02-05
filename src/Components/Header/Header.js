import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assests/career-edu-logo.png';
import { AuthContext } from '../../Context/AuthProvider';
//Theme toggle
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../Themes/Themes";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Header = () => {
    //theme
    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const [expand, setExpand] = useState(false);
    //Get Information from the auth context
    const { user } = useContext(AuthContext);
    //Styling Active Route
    const activeRoute = ({ isActive }) => {
        return {
            color: isActive ? '#00508F' : 'white',
            fontWeight: isActive && 'bold'
        }
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <div className='bg-eduhf text-white'>
                    <div className='flex w-full md:w-10/12 mx-auto items-center justify-between py-2 px-2 md:px-0'>
                        <Link to='/' className='flex items-center gap-2'>
                            <img src={logo} alt="" className='h-10 w-10' />
                            <h2 className='text-2xl font-bold'>CareerEdu</h2>
                        </Link>
                        <div className='flex gap-2 items-center z-50'>
                            <ul className={`md:flex items-center bg-eduhf px-10 py-2 gap-4 font-semibold absolute md:static duration-500 ease-in-out ${expand ? 'top-14 right-0' : 'top-[-200px] right-0'}`}>
                                <li><NavLink style={activeRoute} to='/home'>Home</NavLink></li>
                                <li><NavLink style={activeRoute} to='/courses'>Courses</NavLink></li>
                                <li><NavLink style={activeRoute} to='/faqs'>FAQ's</NavLink></li>
                                {
                                    user?.uid
                                        ? <li className='hidden md:block'><Link to='/profile'><img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt='Profile' title={user.displayName ? user.displayName : 'Name was not Set'} className='w-10 h-10 rounded-full' /></Link></li>
                                        : <li><Link to='/login'>Login</Link></li>
                                }
                            </ul>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input onClick={() => themeToggler()} type="checkbox" className="toggle" />
                                </label>
                            </div>
                            {
                                user?.uid
                                && <span className='md:hidden'><Link to='/profile'><img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt='Profile' title={user.displayName ? user.displayName : 'Name was not Set'} className='w-10 rounded-full' /></Link></span>
                            }
                            <div className='h-8 w-8 md:hidden' onClick={() => setExpand(!expand)}>
                                {
                                    expand ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </StyledApp>
        </ThemeProvider>

    );
};

export default Header;