import { useState } from 'react';
import { ReactComponent as OptionsSvg } from "../../../assets/options.svg";
import ModalCreateTask from '../../Utilities/ModalCreateTask';

const BtnEditTask = ({ task }) => {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
        { showModal && (
            <ModalCreateTask
                onClose={() => setShowModal(false)}
                task={task}
                nameForm="Edit Task"
            />
        )}
        <button
            className="transition w-7 h-6 sm:w-8 sm:h-8 grid place-items-center hover:text-slate-700"
            onClick={() => setShowModal(true)} >
            <OptionsSvg className="w-5 h-5 sm:w-6 sm:h-6"/>
        </button>
        </>
    )
}

export default BtnEditTask;