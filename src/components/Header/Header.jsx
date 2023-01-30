
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import SearchField from './SearchField';
import Notification from './Notification';
import Account from './Account';

const Header = () => {

    return(
        <div className="flex flex-row  justify-between items-center p-5 bg-slate-300">
            <button className="xl:hidden mr-6">
                <MenuIcon />
            </button>

            <SearchField />

            <Notification />
            
            <Account />
        </div>
    )
}

export default Header;