
import { ReactComponent as Calendar } from "../../../assets/date.svg";

const InfoTask = ({ task, isListInView1 }) => {

    return(
        <div>
            <h2 className="font-medium">{task.title}</h2>
            <p className="h-24  py-3">{task.description}</p>
            
            <div className="flex gap-1"><Calendar /> {task.date}</div>
        </div>
    )
}

export default InfoTask;