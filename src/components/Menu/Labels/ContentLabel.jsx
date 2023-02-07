
import { useState } from 'react';
import ModalLabel from '../../Utilities/ModalLabel';
import  ItemLabel from './ItemLabel';
import { useSelector, useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/tasks.store';

const ContentLabel = ({ classLinkActive }) => {

    const labels = useSelector( (state) => state.tasks.labels);
    const [modalLabelIsShown, setModalLabelIsShown] = useState(false);

    const dispatch = useDispatch();

    const closeModalLabelHandler = () => {
        setModalLabelIsShown(false);
    }

    const createNewLabelHander = (inputValue) => {
        const newLabelName = inputValue.trim();
        if (newLabelName.length === 0 ) return;

        const labelDoesNotExist = labels.every( (label) => label !== newLabelName);

        if(labelDoesNotExist) {
            dispatch(tasksActions.createLabel(inputValue))
        }  
    }

    return(
        <>
            {  modalLabelIsShown && (
                <ModalLabel
                    onClose={closeModalLabelHandler}
                    onConfirm={createNewLabelHander}
                    btnText="Create"
                    title="Create New Label"
                />
                )
            }

            <ul className="max-h-36 overflow-auto">
                {labels.map((label) => (
                    <ItemLabel label={label} key={label} classLinkActive={classLinkActive} />
                ))}
            </ul>

            <button
                onClick={ () => setModalLabelIsShown(true)}
            className="px-3 py-1 border-slate-300 border-2 ml-9 mt-2 dark:border-slate-700 rounded-md border-dashed hover:text-violet-500">
                + New
            </button>
        </>
    )
}

export default ContentLabel;