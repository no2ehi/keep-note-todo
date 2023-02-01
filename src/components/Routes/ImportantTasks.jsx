import LayoutRoutes from '../Layouts/LayoutRoutes';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const ImportantTasks = () => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const [importantTasks, setImportantTasks] = useState([]);

    useEffect(() => {
        const filteredTasks = tasks.filter( (task) => task.important );

        setImportantTasks(filteredTasks);
    }, [tasks])

    return  <LayoutRoutes title="Important Tasks" tasks={importantTasks} />
}

export default ImportantTasks;