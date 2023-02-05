import { useState, useRef } from 'react';
import avatar from '../../assets/avatar-1.jpg';
import useVisibility from '../hooks/useVisibility';

const Account = () => {

    const links = [
        {
            title: 'Profile',
            icon: 'ProfileIcon',
        },
        {
            title: 'edit profile',
            icon: 'EditIcon',
        },
        {
            title: 'logout',
            icon: 'logoutIcon',
        },
    ]

    const refBtnAccount = useRef(null);

    const {
        elementIsVisible: accountIsVisible,
        showElement: showAccount,
      } = useVisibility([refBtnAccount.current]);

    const showAccountHandler = (e) => {
        showAccount();
    }

    return(
        <div className="relative">
            <img
                draggable={false}
                ref={refBtnAccount}
                onClick={showAccountHandler} 
                src={avatar} className="w-10 h-10 rounded-full ml-2 border-2 border-white shadow"
                alt="avatar" />
            { accountIsVisible && (

                <div
                    className="absolute w-36 py-1 h-auto -right-1 top-full mt-3 bg-slate-100 rounded-md shadow-md ">
                    <div className="bg-slate-100 w-3 h-3 rotate-45 absolute right-5 -top-1"></div>
                    <ul>
                        {links.map((link, i) => (
                            <li key={i} 
                                className="px-4 py-2 border-b hover:bg-slate-200">{link.title}</li>
                        ))}
                    </ul>
                </div>

            )}
        </div>
    )
}

export default Account;