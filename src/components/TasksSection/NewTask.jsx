import { useState } from 'react';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';
import { ReactComponent as DateIcon } from '../../assets/date.svg';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';
import { ReactComponent as StarLine } from "../../assets/star-line.svg";
import { useDispatch, useSelector } from 'react-redux';
import { tasksActions } from '../../store/tasks.store';

const NewTask = () => {

    const labels = useSelector((state) => (state.tasks.labels))

    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    const todayDate = year + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");
    const maxDate = year + 1 + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");

    const [showAddTask, setShowAddTask] = useState(false);
    const [newTask, setNewTask] = useState({
            title: "",
            important: false,
            description: "",
            date: todayDate,
            label: "",
            completed: false,
            id: '',
        });

    const dispatch = useDispatch();

    const classBtnIcon = "p-1.5 rounded-full hover:bg-slate-300 transition";


    const showAddTaskHandler = (e) => {
        setShowAddTask(true);
    }

    const changeTaskHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value === 'checkbox' ? e.target.checked  : e.target.value;

        setNewTask({
            ...newTask,
            [name]: value
        })
    }

    const addNewTaskHandler = (e) => {
        e.preventDefault();
        if(newTask.title && newTask.description ) {
            const taskSubmit = {
                ...newTask,
                 id: Date.now().toString()
            }       
            dispatch(tasksActions.addNewTask(taskSubmit));
        }
        setNewTask({
            title: "",
            important: false,
            description: "",
            date: "",
            label: "",
            completed: false,
            id: '',
        });
        setShowAddTask(false);  
    }

    return(
        <div className="w-full h-auto mb-8 flex flex-row justify-center items-center">

            <div 
                className={`${showAddTask && 'flex-col gap-3'}
                flex justify-between mx-4 w-full md:w-3/5 bg-slate-400 text-slate-800 border rounded-lg shadow-md p-3`}>

                <form 
                    onSubmit={addNewTaskHandler}
                    className={`${showAddTask ?
                                    'flex-1 flex-col flex-grow' :
                                    'flex flex-grow items-center' 
                                }`} >

                    {/* Title input */}
                    {showAddTask && (
                        <div className="flex mb-3">
                            <input 
                            type="text"
                            name="title"
                            placeholder="title..."
                            className="bg-slate-400 placeholder:text-slate-700 font-medium outline-none w-full text-xl"   
                            value={newTask.title}
                            onChange={changeTaskHandler}
                            />
                            
                            <button className={classBtnIcon}>
                                <BellIcon  />
                            </button>
                        </div>
                    )}
                    {/* Description */}
                    <textarea onClick={showAddTaskHandler}
                        type="text"
                        name="description"
                        placeholder="Take a Task..."
                        className={`${showAddTask ? 'h-auto' : 'h-6'} bg-slate-400 placeholder:text-slate-800 font-medium outline-none w-full resize-none`}  
                        value={newTask.description}
                        onChange={changeTaskHandler}
                    />

                    {/* Labels */
                    showAddTask && (
                        <div className="flex justify-between">
                            <label>
                                Select a Label:
                            <select
                                type="select"
                                name="label"
                                value={newTask.label}
                                onChange={changeTaskHandler}
                                className="w-full  rounded-lg bg-slate-200 p-2 border-1"
                            >
                                {labels.map((label) => (
                                    <option 
                                        value={label}
                                        key={label}
                                        >
                                            {label}
                                    </option>
                                ))}
                            </select>
                            </label>

                            <label>
                            Date
                            <input 
                                type="date"
                                name="date"
                                value={newTask.date}
                                min={todayDate}
                                max={maxDate}
                                onChange={changeTaskHandler}
                                className="w-full rounded-lg bg-slate-200 p-2 border-1"
                                required
                            />
                            </label>

                        </div>
                    )}
                    
                
                    {/* actions Buttons */}
                    <div className={`${showAddTask ? 
                        'flex items-center justify-between pt-4' : 
                        'flex flex-row '} `} >

                        <div className="flex">
                            <button className={classBtnIcon}>
                                <StarLine  />
                            </button>
                            <button className={classBtnIcon}>
                                <CheckIcon  />
                            </button>
                            <button className={classBtnIcon}>
                                <DateIcon  />
                            </button>
                            {showAddTask && (
                                <>
                                    <button className={classBtnIcon}>
                                        <EditIcon  />
                                    </button>
                                    <button className={classBtnIcon}>
                                        <CheckIcon  />
                                    </button>
                                    <button className={classBtnIcon}>
                                        <DateIcon  />
                                    </button>
                                </>
                            )}
                        </div>
                        <button onClick={() => setShowAddTask(false)}
                            className={`${showAddTask ? 'visible bg-slate-300 py-1 px-3 rounded-md' : 'hidden'}`}>
                            Close
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default NewTask;