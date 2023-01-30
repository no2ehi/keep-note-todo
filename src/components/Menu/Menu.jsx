import { NavLink, useLocation  } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Trash } from '../../assets/trash.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import ModalLabel from '../Utilities/ModalLabel';
import ModalConfirm from '../Utilities/ModalConfirm';

import { useState } from 'react';

const Menu = () => {

    const links = [
        {
            name: "Today's tasks",
            path: "/today"
        },
        {
            name: "All Task",
            path: "/"
        },
        {
            name: "Important tasks",
            path: "/important"
        },
        {
            name: "Completed tasks",
            path: "/completed"
        },
        {
            name: "Uncompleted tasks",
            path: "/uncompleted"
        },
    ];

    const route = useLocation();
    const currentPath = route.pathname;
    const classLinkActive = "text-rose-600 bg-violet-100 border-r-4 border-rose-500 ";

    const [isLablesOpen, setIsLabelsOpen ] = useState(true);
    const [modalLabelIsShown, setModalLabelIsShown] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);

    const closeModalLabelHandler = () => {
        setModalLabelIsShown(false);
    }

    return(
        <div className="flex- flex-col w-1/5 fixed bg-slate-100 h-screen dark:bg-slate-800 shadow">
            { modalLabelIsShown && (
                <ModalLabel
                    onClose={closeModalLabelHandler}
                    btnText="Create"
                    title="Create new Label"
                />
            )}

            {   modalIsShown && (
                <ModalConfirm
                    onClose={() => setModalIsShown(false)}
                    text="This Label and All its task will be deleted."
                />
            )}

            <h1 className="flex justify-center pt-10 text-slate-600 font-bold text-xl">Keep Note Todo</h1>

            <div className="mt-10 grid gap-2">
                {links.map( (link) => (
                    <li className="list-none" key={link.path}>
                        <NavLink
                            to={link.path}
                            className={`px-10 py-2 w-full transition block hover:text-red-600
                            ${ currentPath === link.path ? classLinkActive : ''}`}
                            >
                                {link.name}
                        </NavLink>
                    </li>
                ))}
            </div>

            <div className="py-4">

                <button className={`flex items-center w-full mx-10 mb-2`}
                    onClick={() => setIsLabelsOpen(!isLablesOpen)}>
                    <Arrow className={`w-3 h-3 mr-2 rotate-90 transition 
                            ${isLablesOpen && "rotate-180" }`} />
                    Lables
                </button>

                <div className={`${isLablesOpen ? "visible" : "hidden"} ml-6`}>

                    
                    <ul className="max-h-36 overflow-auto">
                        <li className={`flex items-center pr-4 pl-9 py-2 `}>
                            <NavLink 
                                to="hi"
                                className="hover:text-rose-600 transition"
                                > Learning</NavLink>
                            <div className="ml-auto">
                                <button 
                                    onClick={() => setModalLabelIsShown(true)}
                                    title="edit directory name">
                                    <Edit
                                        className="w-5 h-5 mr-2"></Edit>
                                </button>
                                <button
                                    onClick={() => setModalIsShown(true)}>
                                    <Trash className="w-5 h-5 mr-2"></Trash>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <button
                        onClick={ () => setModalLabelIsShown(true)}
                     className="px-3 py-1 border-slate-300 border-2 ml-9 mt-2 rounded-md border-dashed hover:text-violet-500">
                        + New
                    </button>
                    

                </div>

            </div>

        </div>
    )
}

export default Menu;