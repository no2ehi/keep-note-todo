import { createSlice } from '@reduxjs/toolkit';

const defaultTasks = [
    {
        title: "Task 1",
        important: false,
        description: "This is the description for this task",
        date: "2023-04-12",
        label: "main",
        completed: true,
        id: "t1",
        },
    {
        title: "Task 2",
        important: true,
        description: "This is the description for this task",
        date: "2023-05-15",
        label: "main",
        completed: true,
        id: "t2",
    },
    {
        title: "Task 3",
        important: false,
        description: "This is the description for this task",
        date: "2023-08-21",
        label: "main",
        completed: false,
        id: "t3",
    },
    {
        title: "Task 4",
        important: false,
        description: "This is the description for this task 4",
        date: "2023-07-21",
        label: "main",
        completed: false,
        id: "t4",
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