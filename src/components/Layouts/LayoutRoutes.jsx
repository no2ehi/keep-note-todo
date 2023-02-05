import { useEffect, useState } from 'react';
import ButtonsSort from '../TasksSection/ButtonsSort';
import TaskItem from '../TasksSection/TaskItem/TaskItem';
import { useDispatch } from 'react-redux';
import useSortTasks from '../hooks/useSortTasks';
import { modalActions } from '../../store/modal.store';
import { ReactComponent as PinFillIcon } from '../../assets/pin-fill.svg';


const LayoutRoutes = ({ title, tasks }) => {

  const [isListInView1, setIsListInView1] = useState(false);
  
  const dispatch = useDispatch();
  
  const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(tasks);

  const [pinnedTasks, setPinnedTasks] = useState(
    tasks.filter((task) => task.pinned)
  );

  useEffect(()=> {
    setPinnedTasks(tasks.filter((task) => task.pinned));
  },[tasks])

  const taskTitle = `${title} (${tasks.length} ${
    tasks.length === 1 ? 'Task' : 'Tasks'
  })`;

  const openModalHandler = () => {
    dispatch(modalActions.openModalCreateTask())
  }

    return(
        <section className="px-6">

        {pinnedTasks.length > 0 && (
          <>
          <div className="mb-4 sm:mb-1 flex sm:justify-start items-center ">
            <PinFillIcon className="w-6 h-6 " />
            <h2 className="font-bold text-xl">
            Pinned { pinnedTasks.length > 1 ? 'Tasks' : 'Task'}
            </h2>
          </div>
          <ul className={`mb-4 grid gap-2 sm:gap-4 xl:gap-6 ${
                isListInView1
                ? 'grid-cols-1'
                : '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end'
            }`}>
              
              { pinnedTasks.map((task) => (
                <TaskItem key={task.id} isListInView1={isListInView1} task={task} />
              ))}  
          </ul>
          </>
        )}
          

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
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