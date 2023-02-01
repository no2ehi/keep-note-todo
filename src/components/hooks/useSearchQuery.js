import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useSearchQuery = (searchQuery) => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [matchedTasks, setMatchedTasks] = useState([]);

    useEffect(() => {
        const filteredTasks = tasks.filter( (task) => (
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        ));

        if(searchQuery.trim().length) {
            setMatchedTasks(filteredTasks);
        } else {
            setMatchedTasks([])
        }

    },[searchQuery, tasks])

    return matchedTasks;
}

export default useSearchQuery;