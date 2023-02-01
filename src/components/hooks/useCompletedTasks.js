import { useState, useEffect } from 'react';

const useCompletedTasks = ({ tasks, done }) => {

    const [sortedTasks, setSortedTasks] = useState([]);

    const sortByCompletedStatus = (status) => {
        const sorted = tasks.filter( (task) => {
            if(status) {
                return task.completed;
            } else {
                return !task.completed
            }
        });

        setSortedTasks(sorted);
    }

    useEffect(() => {
        sortByCompletedStatus(done);
    }, [tasks, done])

    return { sortedTasks };

}


export default useCompletedTasks;