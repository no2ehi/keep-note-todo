import { useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import TasksSection from './components/TasksSection/TasksSection';
import Footer from './components/Footer/Footer';


function App() {

  useEffect(()=> {
    // const html = document.querySelector("html");
      // html.classList.add("dark");
  },[])

  return (
    <div className="bg-slate-200 text-slate-00 dark:bg-slate-900 dark:text-slate-400 min-h-screen">
      <Menu />
      <Header />
      <TasksSection />
      <Footer />
      heloo
    </div>
  );
}

export default App;
