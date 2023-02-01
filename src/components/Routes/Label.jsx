import LayoutRoutes from '../Layouts/LayoutRoutes';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Label = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const labels = useSelector((state) => state.tasks.labels);
    const [sortedTaks, setSortedTasks] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const labelExits = labels.includes(params.label);

        if(!labelExits) {
            navigate('/');
        }

        const filteredTasks = tasks.filter( (task) => task.label === params.label );
        setSortedTasks(filteredTasks)

    }, [tasks, params.label, navigate, labels])

    return  <LayoutRoutes title={`${params.label}'s Tasks`} tasks={sortedTaks} />
}

export default Label;
