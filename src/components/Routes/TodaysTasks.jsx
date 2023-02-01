import LayoutRoutes from '../Layouts/LayoutRoutes';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const TodaysTasks = () => {

    const tasks = useSelector((state) => state.tasks.tasks);
    const [todaysTasks, setTodaysTasks] = useState([]);

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 ;
    const day = date.getDate();

    const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    useEffect(() => {
        const filteredTasks = tasks.filter( (task) => task.date === dateTimeFormat );
        setTodaysTasks(filteredTasks);
    }, [tasks, dateTimeFormat])



    return  <LayoutRoutes title="Today's Task" tasks={todaysTasks} />
}

export default TodaysTasks;