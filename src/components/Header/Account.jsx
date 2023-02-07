import { useSelector, useDispatch } from 'react-redux';
import { menusActions } from '../../store/menu.store';
import LayoutMenusAccount from '../Layouts/LayoutMenusAccount';
import avatar from '../../assets/avatar-1.jpg';
import DarkMode from './DarkMode';

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

    const menuOpen = useSelector( (state) => state.menu.menuAccountOpened);
    const dispatch = useDispatch();

    const closeMenuHandler = () => {
        dispatch(menusActions.closeMenuAccount())
    }

    return(
        <LayoutMenusAccount
            menuOpen={menuOpen}
            closeMenuHandler={closeMenuHandler}
            className="top-0 right-0"
        >        
        <div className="px-4 flex justify-start items-center pt-10 text-slate-600 font-bold text-l">
            
            <img
                draggable={false}
                src={avatar} className="w-10 h-10 rounded-full mr-2 border-2 border-white shadow"
                alt="avatar" 
                />
            <h4>Hi, User :)</h4>

        </div>

        <DarkMode />

        <ul className="mt-5">
            {links.map((link, i) => (
                <li key={i} 
                    className="px-4 py-2 border-b hover:bg-slate-200">{link.title}</li>
            ))}
        </ul>
        </LayoutMenusAccount>
    )
}

export default Account;