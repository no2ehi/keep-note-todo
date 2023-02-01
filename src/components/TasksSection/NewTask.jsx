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

    const initialColorPalette = [
        {
            name: 'red',
            code: '#F55050'
        },
        {
            name: 'pantone',
            code: '#F48484'
        },
        {
            name: 'yellow',
            code: '#F2CD5C'
        },
        {
            name: 'aqua',
            code: '#46C2CB'
        },
    ]
    const [showColorPalette, setShowColorPalette] = useState(false);

    const [newTask, setNewTask] = useState({
            title: "",
            description: "",
            date: todayDate,
            label: "",
            important: false,
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
        const value = e.target.value === 'checkbox' ? !e.target.checked  : e.target.value;

        setNewTask({
            ...newTask,
            [name]: value
        })

        
    }

    const addNewTaskHandler = (e) => {
        e.preventDefault();
        if(newTask.title && newTask.description && newTask.label) {
            const taskSubmit = {
                ...newTask,
                 id: Date.now().toString()
            }       
            dispatch(tasksActions.addNewTask(taskSubmit));
            setShowAddTask(false);
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
                        className={`${showAddTask ? 'h-24' : 'h-6'} bg-slate-400 placeholder:text-slate-800 font-medium outline-none w-full resize-none`}  
                        value={newTask.description}
                        onChange={changeTaskHandler}
                    />

                    {!showAddTask && (
                        <div className="flex">
                            <button className={classBtnIcon}>
                            <BellIcon  />
                            </button>
                            <button className={classBtnIcon}>
                                <StarLine  />
                            </button>
                            <button className={classBtnIcon}>
                                <CheckIcon  />
                            </button>
                        </div>
                    )}

                    {/* Labels */
                    showAddTask && (
                        <div className="flex flex-col sm:flex-row justify-between gap-4">

                            <div
                                onClick={() => setShowColorPalette((prev) => !prev)}
                                className="flex sm:w-1/3 jusitfy-between items-center bg-slate-200 rounded-lg px-2 font-medium transition hover:bg-slate-500">
                                <StarLine  />
                                <span>Select a Color</span>
                                {
                                    showColorPalette && (
                                        <div className="absolute w-48 h-22 bg-slate-100 rounded-md p-2 z-20 shadow ">
                                            <ul className="flex flex-col">
                                                {initialColorPalette.map((color) => (
                                                    <div key={color.code} className={`bg-[${color.code}] m-1 pl-6 w-6 h-6 rounded-full `}>{color.code}</div>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="flex sm:w-1/3 items-center justify-between bg-slate-200 rounded-lg px-2 font-medium transition hover:bg-slate-500">
                                <StarLine  />
                                <select
                                    type="select"
                                    name="label"
                                    value={newTask.label}
                                    onChange={changeTaskHandler}
                                    className="bg-transparent outline-none rounded-lg bg-slate-200 p-2"
                                    required
                                >
                                    <option value="" disabled>Labels</option>
                                    {labels.map((label) => (
                                        <option 
                                            value={label}
                                            key={label}
                                            >
                                                {label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* <div className="flex items-center bg-slate-200 rounded-lg px-2 font-medium transition hover:bg-slate-500">
                                <StarLine  />
                                <input 
                                    type="file"
                                    name="file"
                                    className="w-32 bg-transparent outline-none rounded-lg bg-slate-200 p-2"  
                                />
                            </div> */}

                            <div className="flex sm:w-1/3 items-center justify-between bg-slate-200 rounded-lg px-2 font-medium transition hover:bg-slate-500">
                                <StarLine  />
                                <input 
                                    type="date"
                                    name="date"
                                    value={newTask.date}
                                    min={todayDate}
                                    max={maxDate}
                                    onChange={changeTaskHandler}
                                    className="bg-transparent outline-none rounded-lg bg-slate-200 p-2"
                                    required
                                />
                            </div>


                           

                        </div>
                    )}
                    
                
                    {/* actions Buttons */}
                    <div className={`${showAddTask ? 
                        'flex flex-col sm:flex-row items-center justify-between pt-4' : 
                        'flex flex-row '} `} >

                        <div className="flex">
                            {/* <button className={classBtnIcon}>
                                <StarLine  />
                            </button>
                            <button className={classBtnIcon}>
                                <CheckIcon  />
                            </button>
                            <button className={classBtnIcon}>
                                <DateIcon  />
                            </button> */}
                            {showAddTask && (
                                <>
                                    <div className="flex items-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            name="important"
                                            value={newTask.important} 
                                            onChange={changeTaskHandler}
                                            className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Important</span>
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-4">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox"
                                            name="completed"
                                            value={newTask.completed} 
                                            onChange={changeTaskHandler}
                                            className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Completed</span>
                                        </label>
                                    </div>
                                    
                                </>
                            )}
                        </div>

                        <div className="mt-3 flex justify-between">
                            <button
                                onClick={() => setShowAddTask(false)}
                                className={`${showAddTask ? 'visible bg-slate-300 py-1 px-3 rounded-md mr-2' : 'hidden'}`}>
                                Close
                            </button>
                            <button
                                className={`${showAddTask ? 'visible bg-slate-200 py-1 px-3 rounded-md ' : 'hidden'}`}>
                                Add a note
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default NewTask;