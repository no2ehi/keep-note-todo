

import Modal from './Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ModalLabel = ({ onClose, labelName, onConfirm, btnText, title }) => {

    const labels = useSelector((state) => state.tasks.labels);
    const [newLabelName, setNewLabelName] = useState(labelName ? labelName : '');
    const [errorLabelName, setErrorLabelName] = useState(false);

    const checkLabelnameExists = (val) => {
        const labelDoesNotExist = labels.every( (label) => label !== val);

        if(labelDoesNotExist || labelName === val) {
            setErrorLabelName(false)
        } else {
            setErrorLabelName(true)
        }
    }

    const confirmLabelNameHandler = (e) => {
        e.preventDefault();
        if (errorLabelName) return;
        
        onConfirm(newLabelName)
        onClose();
    }

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
                        className="inputStyles block w-full"
                        value={newLabelName}
                        onChange={({ target }) => setNewLabelName(target.value)}
                        onInput={ ({ currentTarget }) => checkLabelnameExists(currentTarget.value)}  />
                    {
                        errorLabelName && (
                            <div className="absolute bg-rose-500 text-slate-200 rounded-md p-2 top-full w-full text-sm z-20">
                                Label name already exists
                            </div>
                        )
                    }
                </div>
                <button className="btn mt-6" onClick={confirmLabelNameHandler}>
                    {btnText}
                </button>
            </form>
        </Modal>
    )
}

export default ModalLabel;