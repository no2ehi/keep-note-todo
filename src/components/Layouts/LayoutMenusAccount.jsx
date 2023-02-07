
import useScreenMedia from '../hooks/useScreenMedia';

const LayoutMenusAccount = ({ children, menuOpen, closeMenuHandler, className }) => {

    const mediaQueries = useScreenMedia();

    return(
        <>
            <div className={`flex flex-col w-48 fixed bg-slate-100 h-screen dark:bg-slate-800 shadow z-20
                ${className} 
                ${ menuOpen ? 'block' : 'hidden' }
                `}>
                {children}
            </div>
            { menuOpen && (
                <div className="fixed bg-slate-600/[.2] w-full h-full top-0 right-0 z-10" 
                    onClick={closeMenuHandler}>
                </div>
            )}
        </>
    )
}
 
export default LayoutMenusAccount;