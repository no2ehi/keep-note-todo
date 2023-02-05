import { createSlice } from '@reduxjs/toolkit';

const defaultTasks = [
    {
        title: "read book",
        important: false,
        description: "think and grows",
        date: "2023-02-12",
        label: "main",
        completed: true,
        id: "t1",
        color: 'bg-[#8b5cf6]',
        pinned: false
    },
    {
        title: "Date with M",
        important: true,
        description: "take a shower",
        date: "2023-01-15",
        label: "main",
        completed: true,
        id: "t2",
        color: 'bg-[#46C2CB]',
        pinned: true
    },
    {
        title: "go to the gym",
        important: false,
        description: "eat some eggs",
        date: "2023-02-04",
        label: "main",
        completed: false,
        id: "t3",
        color: 'bg-[#f1f5f9]',
        pinned: false
    },
    {
        title: "search for new project",
        important: false,
        description: "document react & nextjs",
        date: "2023-02-01",
        label: "main",
        completed: false,
        id: "t4",
        color: 'bg-[#f1f5f9]',
        pinned: false
    },
    {
        title: "make a Dinner",
        important: true,
        description: "kame JOUSH with piaz!",
        date: "2023-02-01",
        label: "main",
        completed: false,
        id: "t5",
        color: 'bg-[#F2CD5C]',
        pinned: true
    },
    {
        title: "New Project",
        important: false,
        description: "add new project to github",
        date: "2023-03-01",
        label: "",
        completed: true,
        id: "t6",
        color: 'bg-[#F48484]',
        pinned: false
    },
    {
        title: "LinkedIn",
        important: true,
        description: "Edit LinkedIn profile",
        date: "2023-02-29",
        label: "main",
        completed: false,
        id: "t7",
        color: 'bg-[#f1f5f9]',
        pinned: false
    },
    {
        title: "Weekly assessment",
        important: false,
        description: "Evaluation of weekly activities",
        date: "2023-02-27",
        label: "main",
        completed: false,
        id: "t8",
        color: 'bg-[#f1f5f9]',
        pinned: false
    },
    {
        title: "Car insurance payment",
        important: true,
        description: "Payment of the seventh installment at the end of the month",
        date: "2023-03-22",
        label: "main",
        completed: true,
        id: "t9",
        color: 'bg-[#f1f5f9]',
        pinned: false
    },
    {
        title: "Buy fruit",
        important: false,
        description: "Buy fruit for the weekend",
        date: "2023-02-18",
        label: "main",
        completed: false,
        id: "10",
        color: 'bg-[#f1f5f9]',
        pinned: false
    },
];

const getSavedLabels = () => {
    let labelList = [];

    if(localStorage.getItem("labels")) {
        labelList = JSON.parse(localStorage.getItem("labels"));
        const mainLabelExits = labelList.some( (label) => label === "main");
        if(!mainLabelExits) {
            labelList.push("main");
        } 
    } else {
        labelList.push("main")
    }

    if (localStorage.getItem("tasks")) {
        const savedTasksList = JSON.parse(localStorage.getItem("tasks"));
        let lableNotSaved = [];

        savedTasksList.forEach( (task) => {
            if(!labelList.includes(task.label)) {
                if(!lableNotSaved.includes(task.label)){
                    lableNotSaved.push(task.label)
                }
            }
        })

        labelList = [...labelList, ...lableNotSaved];
    }

    return labelList;

}


const initialState  = {
    tasks: localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : defaultTasks,
    labels: getSavedLabels()
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addNewTask(state, action) {
            state.tasks = [action.payload, ...state.tasks];
        },
        editTask(state, action) {
            const taskId = action.payload.id;

            const newTaskEdited = state.tasks.find( (task) => task.id === taskId);
            const indexTask = state.tasks.indexOf(newTaskEdited);
            state.tasks[indexTask] = action.payload;
        },
        toggleTaslCompleted(state, action) {
            const taskId = action.payload;
            const currentTask = state.tasks.find( (task) => task.id === taskId);

            currentTask.completed = !currentTask.completed ;
        },
        toggleTaskPinned( state, action) {
            const taskId= action.payload;
            const currentTask = state.tasks.find( (task) => task.id === taskId);

            currentTask.pinned = !currentTask.pinned;
        },
        deleteTask(state, action) {
            const taskId = action.payload;
            
            state.tasks = state.tasks.filter( (task) => task.id !== taskId)
        },
        toggleMarkImportant(state, action) {
            const taskId = action.payload;
            const currentTask = state.tasks.find( (task) => task.id === taskId)

            currentTask.important = !currentTask.important;
        },
        createLabel(state, action) {
            const newLabel = action.payload;
            const labelAlreadyExits = state.labels.includes(newLabel);
            if (labelAlreadyExits) return;
            state.labels = [newLabel, ...state.labels];
        },
        deleteLabel(state, action) {
            const labelName = action.payload;
            state.labels = state.labels.filter( (label) => label !== labelName);
            state.tasks = state.tasks.filter( (task) => task.label !== labelName)
        },
        editLabel(state,action) {
            const newLabelName = action.payload.newLabelName;
            const previousLabelName = action.payload.previousLabelName;
            const labelAlreadyExits = state.labels.includes(newLabelName);

            if (labelAlreadyExits) return;
            const labelIndex = state.labels.indexOf(previousLabelName);
            state.labels[labelIndex] = newLabelName;
            
            state.tasks.forEach((task) => {
                if(task.label === previousLabelName) {
                    console.log('ok')
                    task.label = newLabelName;
                }
            })
        }

    }
})

export const tasksActions=  tasksSlice.actions;

export default tasksSlice.reducer;


export const taskMiddleware = (store) => (next) => (action) => {
    const nextAction = next(action);
    const actionChangeOnlyLabels = tasksActions.createLabel.match(action);

    const isALabelAction = action.type.toLowerCase().includes("label");

    if (action.type.startsWith("tasks/") && !actionChangeOnlyLabels) {
        const tasksList = store.getState().tasks.tasks;
        localStorage.setItem("tasks", JSON.stringify(tasksList));
      }
      if (action.type.startsWith("tasks/") && isALabelAction) {
        const dirList = store.getState().tasks.labels;
        localStorage.setItem("labels", JSON.stringify(dirList));
      }
    
    return nextAction;

}