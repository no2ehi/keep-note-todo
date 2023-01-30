import { useState } from 'react';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';

const Notification = () => {

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
    const [showNotification, setShowNotification] = useState(false);

    return(
        <div className="mr-8 relative">
            <button className="relative"
                onClick={() => setShowNotification(!showNotification)}>
                <BellIcon className="w-7 h-7 fill-violet-800"/>
            </button>
            { showNotification && (
                <div
                    className="absolute w-36 py-1 h-auto -right-3 top-12 bg-slate-100 rounded-md shadow-md ">
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

export default Notification;