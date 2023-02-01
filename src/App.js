import { useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import TasksSection from './components/TasksSection/TasksSection';
import Footer from './components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import ModalCreateTask from './components/Utilities/ModalCreateTask';
import { modalActions } from './store/modal.store';
import { tasksActions } from './store/tasks.store';

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
    <div className="bg-slate-200 text-slate-00 dark:bg-slate-900 dark:text-slate-400">
      { modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a Task"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Menu />
      <main className="ml-64 min-h-screen bg-slate-200">
        <Header />
        <TasksSection />   
      </main>
      <Footer />
    </div>
  );
}

export default App;
