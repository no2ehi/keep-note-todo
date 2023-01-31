
import useScreenMedia from '../hooks/useScreenMedia';

const LayoutMenus = ({ children, menuOpen, closeMenuHandler }) => {

    const mediaQueries = useScreenMedia();

    return(
        <>
            <div className="flex flex-col w-64 fixed bg-slate-100 h-screen dark:bg-slate-800 shadow">
                {children}
            </div>
            { menuOpen && !mediaQueries.xl && (
                <div className="fixed bg-violet-600/[.2] w-full h-full top-0 left-0 z-10" 
                    onClick={closeMenuHandler}>

                </div>
            )}
        </>
    )
}

export default LayoutMenus;