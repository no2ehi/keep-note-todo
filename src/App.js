import { useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import TasksSection from './components/TasksSection/TasksSection';
import Footer from './components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import ModalCreateTask from './components/Utilities/ModalCreateTask';
import { modalActions } from './store/modal.store';
import { tasksActions } from './store/tasks.store';
import Account from './components/Header/Account';

function App() {

  const modal = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask())
  }

  const createNewTaskHandler = (task) => {
    dispatch(tasksActions.addNewTask(task))
  }

  useEffect(()=> {
    // const html = document.querySelector("html");
      // html.classList.add("dark");
  },[])

  return (
    <div className="bg-slate-200 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
      { modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a Task"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Menu />
      <main className="xl:ml-64 min-h-screen bg-slate-200 dark:bg-slate-900 dark:text-slate-400">
        <Header />
        <TasksSection />   
      </main>
      <Footer />
      <Account />
    </div>
  );
}

export default App;
