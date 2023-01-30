import { useState } from 'react';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';
import { ReactComponent as DateIcon } from '../../assets/date.svg';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';

const NewTask = () => {

    const [showAddTask, setShowAddTask] = useState(false);

    const classBtnIcon = "p-1.5 rounded-full hover:bg-slate-300 transition";

    const showAddTaskHandler = (e) => {
        setShowAddTask(true);
    }

    return(
        <div className="w-full h-auto my-8 flex flex-row justify-center items-center">

            <div 
                className={`${showAddTask && 'flex-col gap-3'}
                flex justify-between w-1/2 bg-slate-400 text-slate-800 border rounded-lg shadow-md p-3`}>

                <div className={`${showAddTask ?
                                    'flex-1 flex-col flex-grow' :
                                    'flex flex-grow items-center' 
                                }`} >

                    {/* add title input */}
                    {showAddTask && (
                        <div className="flex mb-3">
                            <input 
                            type="text"
                            placeholder="title..."
                            className="bg-slate-400 placeholder:text-slate-700 font-medium outline-none w-full text-xl"   
                            />
                            
                            <button className={classBtnIcon}>
                                <BellIcon  />
                            </button>
                        </div>
                    )}

                    <textarea onClick={showAddTaskHandler}
                        type="text"
                        placeholder="Take a Task..."
                        className={`${showAddTask ? 'h-auto' : 'h-6'} bg-slate-400 placeholder:text-slate-800 font-medium outline-none w-full resize-none`}  
                    />
                

                    <div className={`${showAddTask ? 
                        'flex items-center justify-between pt-4' : 
                        'flex flex-row '} `} >

                            <div className="flex">
                                <button className={classBtnIcon}>
                                    <EditIcon  />
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

                </div>

            </div>
        </div>
    )
}

export default NewTask;