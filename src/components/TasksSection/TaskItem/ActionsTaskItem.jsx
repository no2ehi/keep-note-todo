
import BtnToggleCompleted from './BtnToggleCompleted';
import BtnMarkAsImportant from './BtnMarkAsImportant';
import BtnDeleteTask from './BtnDeleteTask';
import BtnEditTask from './BtnEditTask';
import BtnPinTask from './BtnPinTask';

const ActionsTaskItem = ({ task, isListInView1 }) => {


    return(
        <>
            <div className={`flex border-dashed border-salte-200 dark:border-slate-700/[.3] ${isListInView1 
            ? 'items-center' 
            : 'border-t-2 w-full pt-4 mt-4'}`}>
                <BtnToggleCompleted task={task} isListInView1={isListInView1} />
                <BtnMarkAsImportant taskId={task.id} taskImportant={task.important} /> 
                <BtnDeleteTask taskId={task.id} />
                <BtnPinTask taskId={task.id} taskPinned={task.pinned} /> 
                <BtnEditTask task={task} />
            </div>
        </>
    )
}

export default ActionsTaskItem;