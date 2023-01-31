import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Trash } from '../../../assets/trash.svg';
import { ReactComponent as Edit } from '../../../assets/edit.svg';
import { useState } from 'react';
import ModalLabel from '../../Utilities/ModalLabel';
import ModalConfirm from '../../Utilities/ModalConfirm';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/tasks.store';

const ItemLabel = ({ label, classLinkActive }) => {

    const [modalLabelIsShown, setModalLabelIsShown] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);

    const dispatch = useDispatch();

    const route = useLocation();
    const currentPath = route.pathname;

    const confirmEditLabelNameHandler = (labelName) => {
        console.log(label, labelName)
        dispatch(tasksActions.editLabel({
            previousLabelName: label,
            newLabelName: labelName
        }))
    }

    const deleteLabelHandler = () => {
        dispatch(tasksActions.deleteLabel(label))
    }


    return(
        <>
            { modalLabelIsShown && (
                <ModalLabel
                    onClose={() => setModalLabelIsShown(false)}
                    onConfirm={confirmEditLabelNameHandler}
                    labelName={label}
                    btnText="Edit"
                    title="Edit Label Name"
                />
            )}

            { modalIsShown && (
                <ModalConfirm
                    onClose={() => setModalIsShown(false)}
                    onConfirm={deleteLabelHandler}
                    text="This Label and All its task will be deleted."
                />
            )}

            <li className={`flex items-center pr-4 pl-9 py-2 itemLabel ${
                currentPath === "/label/" + label ? classLinkActive : ''
            }`}>
                <NavLink 
                    to={`/label/${label}`}
                    title={label}
                    className="hover:text-rose-600 transition"
                    > 
                    {label}
                </NavLink>

                { label !== "main" && (
                    <div className="ml-auto buttonsLabel">
                        <button 
                            onClick={() => setModalLabelIsShown(true)}
                            title="edit label name">
                            <Edit className="w-5 h-5 mr-2"></Edit>
                        </button>
                        <button
                            title="delete label"
                            onClick={() => setModalIsShown(true)}>
                            <Trash className="w-5 h-5 mr-2"></Trash>
                        </button>
                    </div>
                )}

            </li>
        </>
    )
}

export default ItemLabel;