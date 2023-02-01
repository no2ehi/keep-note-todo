import LayoutRoutes from '../Layouts/LayoutRoutes';
import { useSelector } from 'react-redux';

const AllTasks = () => {
    const tasks = useSelector((state) => state.tasks.tasks)

    return  <LayoutRoutes title="All Tasks" tasks={tasks} />
}

export default AllTasks;