import { useState } from 'react';
import avatar from '../../assets/avatar-1.jpg';

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

    const [toggleAccount, setToggleAccount] = useState(false);

    // const closeToggleAccount = (e) => {
    //     console.log('a:',e.target);
    //     console.log('b:',e.currentTarget);
    //     if(e.target === e.currentTarget) {
    //         setToggleAccount(false);
    //     }
    // }

    return(
        <div>
            <img
                onClick={ () => setToggleAccount(!toggleAccount) } 
                src={avatar} className="w-10 rounded-full mr-4"
                alt="avatar" />
            { toggleAccount && (

                <div
                    className="absolute w-36 py-1 h-auto right-8 top-20 bg-slate-100 rounded-md shadow-md ">
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