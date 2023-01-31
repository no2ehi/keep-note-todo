
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
        <div className="flex flex-row  justify-between items-center p-5 bg-slate-300">
            <button className="xl:hidden mr-6"
                onClick={openMenuhandler}>
                <MenuIcon />
            </button>

            <SearchField />

            <Notification />
            
            <Account />
        </div>
    )
}

export default Header;