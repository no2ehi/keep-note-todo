import { useState } from 'react';
import ButtonsSort from '../TasksSection/ButtonsSort';
import TaskItem from '../TasksSection/TaskItem/TaskItem';
import { useDispatch } from 'react-redux';
import useSortTasks from '../hooks/useSortTasks';
import { modalActions } from '../../store/modal.store';

const LayoutRoutes = ({ title, tasks }) => {

  const [isListInView1, setIsListInView1] = useState(false);
  const [NewTaskModal, setNewTaskModal] = useState(false);
  
  const dispatch = useDispatch();
  
  const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(tasks);

  const taskTitle = `${title} (${tasks.length} ${
    tasks.length === 1 ? 'Task' : 'Tasks'
  })`;

  const openModalHandler = () => {
    dispatch(modalActions.openModalCreateTask())
  }

    return(
        <section className="px-6">

            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">{taskTitle}</h1>
                <ButtonsSort
                    isListInView1={isListInView1}
                    setIsListInView1={setIsListInView1}
                    sortedBy={sortedBy}
                    setSortedBy={setSortedBy}
                />
            </div>

            <ul className={`mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
                isListInView1
                ? 'grid-cols-1'
                : '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end'
            }`}
            >
            
            {sortedTasks.map((task) => (
                  <TaskItem key={task.id} isListInView1={isListInView1} task={task} />
              ))} 

                <li>
                    <button 
                        onClick={openModalHandler}
                        className={`border-2 border-slate-300
                        text-slate-400 w-full rounded-lg
                         border-dashed transition hover:bg-slate-300
                          hover:text-slate-500
                          dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
                            isListInView1 ? "h-20 sm:h-32" : "h-52 sm:h-64"
                          }`} >
                        Add New Task
                    </button>
                </li>

            </ul>

        </section>
    )
}

export default LayoutRoutes;