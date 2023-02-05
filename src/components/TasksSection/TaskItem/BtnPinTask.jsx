
import { ReactComponent as PinFillIcon } from '../../../assets/pin-fill.svg';


import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/tasks.store';

const BtnPinTask = ({ taskId, taskPinned }) => {

    const dispatch = useDispatch();

    const toggleMakrAsImportant = () => {
        dispatch(tasksActions.toggleTaskPinned(taskId))
    }

    return(
        <button
            onClick={toggleMakrAsImportant}
                className="ml-2 transition hover:text-slate-700">
            <PinFillIcon
                className={`w-4 h-4 sm:w-5 sm:h-5 ${taskPinned ? 'fill-black' : 'fill-none stroke-black'}`} />
        </button>
    )
}

export default BtnPinTask;