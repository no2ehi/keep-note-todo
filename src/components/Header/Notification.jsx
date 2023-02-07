import { useState, useRef, useEffect } from 'react';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';
import useVisibility from '../hooks/useVisibility';
import useTodayTasks from '../hooks/useTodayTasks';
import useCompletedTasks from "../hooks/useCompletedTasks";
import { Link } from 'react-router-dom';

const Notification = () => {

    const refBtnNotification = useRef(null);

    const {
      elementIsVisible: notificationIsVisible,
      showElement: showNotifications,
    } = useVisibility([refBtnNotification.current]);;
  
    const todaysTasks = useTodayTasks();
  
    const { sortedTasks: uncompletedTasks } = useCompletedTasks({
      tasks: todaysTasks,
      done: false,
    });
  
    const tasksToShow = uncompletedTasks.slice(0, 3);
  
    const moreTasksToShow = uncompletedTasks.length > tasksToShow.length;

    const classHasNotification =
  "after:content-[''] after:w-2 after:h-2 after:bg-rose-500 block after:rounded-full after:absolute after:bottom-3/4  after:left-3/4";


    return(
        <div className="sm:mr-4 md:mr-6 ml-auto grid place-items-center relative">
            <button
                ref={refBtnNotification}
                className={`relative ${tasksToShow.length ? classHasNotification : ""}`}
                onClick={showNotifications}>
                <BellIcon className="w-7 h-7 fill-violet-800"/>
            </button>
            { notificationIsVisible && (
                <div className="absolute top-full right-0 bg-slate-100 rounded-md p-3 w-52 border border-slate-300 dark:bg-slate-800 dark:border-slate-700">
                    {uncompletedTasks.length > 0 ? (
                        <div>
                            <span className="font-medium dark:text-slate-200">
                                You have {uncompletedTasks.length} uncompleted tasks today:
                            </span>
                            <ul>
                            {tasksToShow.map((task) => (
                                <li key={task.id} className="py-1">
                                    <Link
                                    to={`/task/${task.id}`}
                                    className="hover:text-slate-200 transition"
                                    >
                                    {task.title}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                            {moreTasksToShow && (
                                <a
                                href="/"
                                className="transition block w-full rounded-md p-1 bg-rose-100 text-rose-600 dark:text-slate-200 dark:bg-slate-700/[.3] text-center"
                                >
                                See today's tasks
                                </a>
                            )}
                        </div>
                    ) : (
                        <p>Nothing to shew here!</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Notification;