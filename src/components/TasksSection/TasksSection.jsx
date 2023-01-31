
import { Navigate, Route, Routes } from 'react-router-dom';
import NewTask from './NewTask';
import AllTasks from '../Routes/AllTasks';

const TasksSection = () => {

    return(
        <>
            <NewTask />

            <Routes>
                <Route path="/" element={<AllTasks />} />
            </Routes>
            
        </>
    )
}

export default TasksSection;