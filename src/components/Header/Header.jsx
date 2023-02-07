
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import SearchField from './SearchField';
import Notification from './Notification';
import { menusActions } from "../../store/menu.store";
import { useDispatch } from 'react-redux';
import avatar from '../../assets/avatar-1.jpg';


const Header = () => {

    const dispatch = useDispatch();

    const openMenuHandler = () => {
        dispatch(menusActions.openMenu())
    }

    const openMenuAccountHandler = () => {
        dispatch(menusActions.openMenuAccount())
    }



    return(
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex md:px-9 justify-between items-center p-5 bg-slate-200">
            <button className="xl:hidden mr-6"
                onClick={openMenuHandler}>
                <MenuIcon />
            </button>

            <SearchField />

            <div className="font-bold text-sm text-slate-800 md:hidden">
                Keep Note ToDo
            </div>

            <div className="flex flex-1">
                <Notification />    
                <img
                draggable={false}
                onClick={openMenuAccountHandler} 
                src={avatar} className="w-10 h-10 rounded-full ml-2 border-2 border-white shadow"
                alt="avatar" />
            </div>
        </div>
    )
}

export default Header;