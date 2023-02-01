
import { ReactComponent as StarLine } from "../../../assets/star-line.svg";

import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/tasks.store';

const BtnMarkAsImportant = ({ taskId, taskImportant }) => {

    const dispatch = useDispatch();

    const toggleMakrAsImportant = () => {
        dispatch(tasksActions.toggleMarkImportant(taskId))
    }

    return(
        <button
            onClick={toggleMakrAsImportant}
            className="transition hover:text-slate-700 ml-auto">
            <StarLine
            className={`w-5 h-5 sm:w-6 sm:h-6 ${taskImportant ? 'fill-rose-500 stroke-rose-500' : 'fill-none'}`} />
        </button>
    )
}

export default BtnMarkAsImportant;