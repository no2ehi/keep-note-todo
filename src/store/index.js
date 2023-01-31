import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu.store';
import tasksReducer, { taskMiddleware } from './tasks.store';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        tasks: tasksReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskMiddleware)
})

export default store;