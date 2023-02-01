
import Modal from './Modal';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const InputCheckBox = ({ label, isChecked, setChecked}) => {

    return(
        <label className="mb-0 flex items-center cursor-pointer">
            <div className="mr-2 bg-slate-300/[0.5] w-5 h-5 rounded-full grid place-items-center border border-slate-300">
                {isChecked && (
                    <span className="bg-rose-500 w-2 h-2 block rounded-full"></span>
                )}
            </div>
            <span className="order-1 flex1">{label}</span>
            <input 
                type="checkbox" 
                className="sr-only"
                checked={isChecked}
                onChange={() => setChecked( (prev) => !prev )}
            /> 
        </label>
    )
}


const ModalCreateTask = ({ onClose, task, nameForm, onConfirm }) => {

    const labels = useSelector((state) => state.tasks.labels);

    // const [newTask, setNewTask] = useState(() => {
    //     if(task){
    //         return task;
    //     } else {
    //         return "";
    //     }
    // });

    // const changeTaskHandler = (e) => {
        // const name = e.target.name;
        // const value = e.target.value === 'checkbox' ? e.target.checked  : e.target.value;
        // setNewTask([
        //     ...newTask,
        //     {
        //         [name]: value
        //     }
        // ])
        // console.log('input: ', newTask);
    // }

    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    const todayDate = year + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");
    const maxDate = year + 1 + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");

    const [title, setTitle] = useState(() => {
        if(task) {
            return task.title;
        } else {
            return "";
        }
    })

    const [date, setDate] = useState(() => {
        if(task) {
            return task.date;
        } else {
            return todayDate;
        }
    })

    const [description, setDescription] = useState(() => {
        if(task) {
            return task.description;
        } else {
            return "";
        }
    })

    const [label, setLabel] = useState(() => {
        if(task) {
            return task.label;
        } else {
            return labels[0];
        }
    })

    const [isImportant, setIsImportant] = useState(() => {
        if(task) {
            return task.important;
        } else {
            return false;
        }
    })

    const [isCompleted, setisCompleted] = useState(() => {
        if(task) {
            return task.completed;
        } else {
            return false;
        }
    })

    const submitNewTask = (e) => {
        e.preventDefault();

        onConfirm({
            title: title,
            important: isImportant,
            description: description,
            date: date,
            label: label,
            completed: isCompleted,
            id: task?.id ? task.id : Date.now().toString(),
        })
        onClose();
    }

    return(
        <Modal onClose={onClose} title={nameForm} >
            <form
                onSubmit={submitNewTask}
                className="flex flex-col stylesInputsField">

                <label>
                    Title
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full"
                        placeholder="add title of task..."
                        required
                    />
                </label>
                <label>
                    Date
                    <input 
                        type="date"
                        name="date"
                        value={date}
                        min={todayDate}
                        max={maxDate}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full"
                        placeholder="add title of task..."
                        required
                    />
                </label>
                <label>
                    Description 
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full"
                        placeholder="add title of task..."
                        required
                    />
                </label>
                <label>
                    Select a Label 
                    <select
                        name="label"
                        onChange={(e) => setLabel(e.target.value)}
                        className="block w-full"
                        required
                        value={label}
                    >
                        {labels.map((label) => (
                            <option value={label} key={label}>{label}</option>
                        ))}
                    </select>
                </label>

                <InputCheckBox
                    isChecked={isImportant}
                    setChecked={setIsImportant}
                    label="Mark as important"
                />

                <InputCheckBox
                    isChecked={isCompleted}
                    setChecked={setisCompleted}
                    label="Mark as completed"
                />

                <button type="submit" className="btn mt-5">
                    {nameForm}
                </button>

            </form>
        </Modal>
    )
}

export default ModalCreateTask;