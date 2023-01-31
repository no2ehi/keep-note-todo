
import Modal from './Modal';
const ModalCreateTask = ({ onClose, task, nameForm }) => {

    return(
        <Modal onClose={onClose} title={nameForm} >
            <form>

                <button className="btn mt-5">
                    {nameForm}
                </button>

            </form>
        </Modal>
    )
}

export default ModalCreateTask;