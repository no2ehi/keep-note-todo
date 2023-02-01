
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import SearchField from './SearchField';
import Notification from './Notification';
import Account from './Account';
import { menusActions } from "../../store/menu.store";
import { useDispatch } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();

    const openMenuhandler = () => {
        dispatch(menusActions.openMenu())
    }

    return(
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex justify-between items-center p-5 bg-slate-200">
            <button className="xl:hidden mr-6"
                onClick={openMenuhandler}>
                <MenuIcon />
            </button>

            <SearchField />

            <div className="font-bold text-sm text-slate-800 md:hidden">
                Keep Note ToDo
            </div>

            <div className="flex flex-1">
                <Notification />
                
                <Account />
            </div>
        </div>
    )
}

export default Header;