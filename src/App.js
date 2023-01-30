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
    <div className="bg-slate-200 text-slate-00 dark:bg-slate-900 dark:text-slate-400">
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
