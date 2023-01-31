import { useState } from 'react';
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import ModalConfirm from '../../Utilities/ModalConfirm';

const BtnDeleteTask = ({ taskId }) => {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            {showModal && (
                <ModalConfirm
                    onClose={() => setShowModal(false)}
                    text="This task will be deleted permanently"
                    />
            )}
            <button className="transition ml-2 hover:text-slate-700"
                onClick={() => setShowModal(true)}>
                <Trash className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
        </>
    )
}

export default BtnDeleteTask;