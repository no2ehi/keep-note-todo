
import { Navigate, Route, Routes } from 'react-router-dom';
import NewTask from './NewTask';
import AllTasks from '../Routes/AllTasks';
import TodaysTasks from '../Routes/TodaysTasks';
import Label from '../Routes/Label';
import ImportantTasks from '../Routes/ImportantTasks';
import CompletedTasks from '../Routes/CompletedTasks';

const TasksSection = () => {

    return(
        <>
            <NewTask />

            <Routes>
                <Route path="/today" element={<TodaysTasks />} />
                <Route path="/" element={<AllTasks />} />
                <Route path="/important" element={<ImportantTasks />} />
                <Route 
                    path="/completed" 
                    element={<CompletedTasks  done={true} title="Completed tasks" />}  />
                <Route 
                    path="/uncompleted" 
                    element={<CompletedTasks done={false} title="UnCompleted tasks" />}  />
                <Route path="/label/:label" element={<Label />} />
                <Route path="*" element={<Navigate to="" />} />
            </Routes>
            
        </>
    )
}

export default TasksSection;