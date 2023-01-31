
import LayoutMenus from '../Layouts/LayoutMenus';
import { useSelector, useDispatch } from 'react-redux';
import menusActions from '../../store/menu.store';
import NavLinks from './NavLinks';
import Labels from './Labels/Labels';

const Menu = () => {

    const menuOpen = useSelector( (state) => state.menu.menuOpened);
    const dispatch = useDispatch();

    const closeMenuHandler = () => {
        dispatch(menusActions.closeMenu())
    }

    const classLinkActive = "text-rose-600 bg-violet-100 border-r-4 border-rose-500 ";

    return(
        <LayoutMenus
            menuOpen={menuOpen}
            closeMenuHandler={closeMenuHandler}
        >        

            <h1 className="flex justify-center pt-10 text-slate-600 font-bold text-xl">Keep Note Todo</h1>

            <NavLinks classLinkActive={classLinkActive} />
            <Labels classLinkActive={classLinkActive} />

        </LayoutMenus>

    )
}

export default Menu;