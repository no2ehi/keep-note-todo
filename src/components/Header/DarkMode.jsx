import { useState, useEffect } from 'react';


const DarkMode = () => {

    const [isCurrentDarkMode, setIsCurrentDarkMode] = useState(
        () => {
            const darModeWasSet = localStorage.getItem("darkmode");
            if(darModeWasSet) return true;
            else return false;
        }
    )

    const toggleDarMode = () => {
        setIsCurrentDarkMode((prev) => !prev);
    }

    useEffect(()=> {
        const html = document.querySelector("html");
        if(isCurrentDarkMode) {
            html.classList.add("dark");
            localStorage.setItem("darkmode", "true");
            document.querySelector('meta[name="theme-color"]')?.setAttribute("content","#0f172a");
        } else {
            html.classList.remove("dark");
            localStorage.removeItem("darkmode");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#e2e8f0");
        }
    },[isCurrentDarkMode])

    return ( 
        <button
            onClick={toggleDarMode}
             className=" px-4 mt-8 flex items-center justify-between">
            <span>DarkMode</span>
            <div className="w-10 h-5 bg-slate-200 rounded-full px-0.5 dark:bg-slate-700/[.3] relative flex items-center dark:justify-end">
            <div className="w-4 h-4 rounded-full bg-violet-600 absolute"></div>
        </div>
        </button>
     );
}
 
export default DarkMode;