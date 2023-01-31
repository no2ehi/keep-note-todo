
import Modal from './Modal';

const ModalConfirm = ({ onConfirm, onClose, text }) => {

    const confirmCloseModal = () => {
        onConfirm();
        onClose();
    }

    return(
        <Modal onClose={onClose} title="Are You sure?">
            <p className="text-slate-500">{text}</p>
            <div className="mt-7 ml-auto">
                <button onClick={onClose}>Cancel</button>
                <button onClick={confirmCloseModal} className="btn ml-6">Confirm</button>
            </div>
        </Modal>
    );
}

export default ModalConfirm;