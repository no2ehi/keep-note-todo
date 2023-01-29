

import Modal from './Modal';

const ModalLabel = ({ onClose, labelName, onConfirm, btnText, title }) => {

    return(
        <Modal onClose={onClose} title={title}>
            <form className="stylesInputsField">
                <div className="relative">
                    <label htmlFor="lable-name">
                        Title
                    </label>
                    <input 
                        type="text"
                        id="lable-name"
                        placeholder="Enter a directory name"
                        className="inputStyles block w-full"  />

                    <button className="btn mt-6">
                        {btnText}
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default ModalLabel;