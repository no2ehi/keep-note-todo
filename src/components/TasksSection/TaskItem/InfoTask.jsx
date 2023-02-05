
import { ReactComponent as Calendar } from "../../../assets/date.svg";

const InfoTask = ({ task, isListInView1 }) => {

    return(
        <div className={`flex flex-col flex-1 ${isListInView1 ? "mr-6" : ""}`}>
            <div
                className={`flex items-center justify-start	 ${
                isListInView1 ? "mb-1" : "mb-2 "
                }`}
            >
                <span className="block font-medium dark:text-slate-200">
                {task.title}
                </span>
            </div>
            <p
                title={task.description}
                className={`description mb-2 text-slate-900 dark:text-slate-500 ${
                isListInView1 ? "line-clamp-2 sm:line-clamp-1" : "line-clamp-3"
                }`}
            >
                {task.description}
            </p>
            <time className="mt-auto flex w-full">
                <Calendar className="mr-2 w-4 sm:w-5" /> {task.date}
            </time>
        </div>
    )
}

export default InfoTask;