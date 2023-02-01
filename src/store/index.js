import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu.store';
import tasksReducer, { taskMiddleware } from './tasks.store';
import modalReducer from './modal.store';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        tasks: tasksReducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskMiddleware)
})

export default store;