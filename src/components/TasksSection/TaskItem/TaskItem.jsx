import { Link } from 'react-router-dom';
import InfoTask from './InfoTask';
import ActionsTaskItem from './ActionsTaskItem';


const TaskItem = ({ isListInView1, task }) => {

    return(
        <>
            <li key={task.id}>
                <Link
                    to={`/label/${task.label}`}
                    title={task.label}
                    className="ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition block hover:bg-rose-300"
                    >
                        {task.label}
                </Link>
                <article
                    className={`bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent ${
                        isListInView1 ? "flex-row sm:h-32" : "flex-col h-52 sm:h-64"
                    }`}
                    >
                    <InfoTask task={task} isListInView1={isListInView1} />
                    <ActionsTaskItem task={task} isListInView1={isListInView1} />
                </article>
            </li>
        </>
    )
}

export default TaskItem;