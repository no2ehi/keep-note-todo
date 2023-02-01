

import LayoutRoutes from '../Layouts/LayoutRoutes';
import { useSelector } from 'react-redux';
import useCompletedTasks from '../hooks/useCompletedTasks';


const CompletedTasks = ({ done, title }) => {

    const tasks = useSelector((state) => state.tasks.tasks);

    const { sortedTasks: filteredTasks } = useCompletedTasks({ tasks, done });


    return  <LayoutRoutes title={title} tasks={filteredTasks} />
}

export default CompletedTasks;