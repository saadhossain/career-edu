import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/career-edu-logo.png';
import { AuthContext } from '../../Context/AuthProvider';
const Header = () => {
    const [expand, setExpand] = useState(false);
    //Get Information from the auth context
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='bg-eduhf text-white'>
            <div className='flex w-10/12 mx-auto items-center justify-between py-2'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={logo} alt="" className='h-10 w-10' />
                    <h2 className='text-2xl font-bold'>CareerEdu</h2>
                </Link>
                <div className='flex gap-2 items-center'>
                    <ul className={`md:flex items-center bg-eduhf px-10 py-2 gap-4 font-semibold absolute md:static duration-500 ease-in-out ${expand ? 'top-14 right-0' : 'top-[-200px] right-0'}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faqs'>FAQ's</Link></li>
                        <li><Link to='/offer'>Offer</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user?.uid
                            ? <li><Link to='/profile'><img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt='Profile' title={user.displayName?user.displayName : 'Name was not Set' } className='w-10 rounded-full' /></Link></li>
                            : <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle" />
                        </label>
                    </div>
                    <div className='h-8 w-8 md:hidden' onClick={() => setExpand(!expand)}>
                        {
                            expand ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;