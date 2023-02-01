
import { ReactComponent as SvgX } from "../../../assets/x.svg";
import { ReactComponent as Check } from "../../../assets/check.svg";

import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/tasks.store';

const BtnToggleCompleted = ({ task , isListInView1 }) => {

    const dispatch = useDispatch();

    const changeCompletedHandler = () => {
        dispatch(tasksActions.toggleTaslCompleted(task.id))
    }

    return(
        <button
            onClick={changeCompletedHandler}
            className={`font-medium rounded-full ${task.completed 
            ? 'bg-emerald-200 text-emerald-800' 
            : 'bg-amber-200 text-amber-800'}`}>

            <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
            {task.completed ? 'Completed' : 'UnCompleted'}
            </span>

            <span className="sm:hidden w-6 h-6 grid place-items-center">
                {task.completed 
                ? (<Check className="w-3 h-3" />) 
                : (<SvgX className="w-3 h-3" />) } 
            </span>

        </button>
    )
}

export default BtnToggleCompleted;