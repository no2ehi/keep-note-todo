
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, createSearchParams } from 'react-router-dom';
import useSearchQuery from '../hooks/useSearchQuery';
import useVisibility from '../hooks/useVisibility';

const ItemSearch = ({ task }) => {
    // const dateFormated = 
    return(
        <li key={task.id} className="py-2">
            <Link
                to={`/task/${task.id}`}
                className="flex justify-between tansition hover:text-rose-500 dark:hover:text-slate-200"
            >
                <span>{task.title}</span>
                <span>{task.date}</span>
            </Link>
        </li>
    )
}

const SearchField = () => {
    const navigate = useNavigate();

    const [searchInputValue, setSearchInputValue] = useState('');

    const searchResultsRef = useRef(null);

    const matcheTasks = useSearchQuery(searchInputValue);

    const tasks = matcheTasks.slice(0, 4);

    const navigateToSearchResults = () => {
        navigate({
            pathname: "results",
            search: createSearchParams({
                q: searchInputValue
            }).toString()
        })
    }

    const { 
        elementIsVisible: listResultsVisible,
        showElement: showListResults,
        closeElement: closeListResults 
        } = useVisibility([searchResultsRef.current], () => setSearchInputValue(''));

    useEffect(() => {
        if(searchInputValue.trim().length > 0) {
            showListResults()
        } else {
            closeListResults()
        }

    },[searchInputValue])

    return(
        <div className="flex-1 col-span-3 row-start-2 md:pr-10">
            <form className="relative w-full md:max-w-xs" autoComplete="off">
                <label htmlFor="search"></label>
                <input 
                    type="saerch" 
                    id="search"
                    className="inputStyles w-full"
                    placeholder="Search Task..."
                    onKeyUp={(e) => setSearchInputValue(e.target.value)}
                    ref={searchResultsRef}
                     />
                <SearchIcon className="sm:w-5 w-4 absolute right-4 top-3.5 " />
                { listResultsVisible && (
                    <div className="absolute bg-slate-100 rounded-md w-full top-14 p-3 dark:bg-slate-800 z-10">
                        {tasks.length ? (
                            <>
                                <ul>
                                    {tasks.map((task) => (
                                        <ItemSearch key={task.id} task={task} />
                                    ))}
                                </ul>
                                <button
                                    onClick={navigateToSearchResults}
                                    className="bg-rose-100 w-full p-2 rounded-md text-rose-600 dark:bg-slate-700/[.3] dark:text-slate-200">
                                    All resuslts for "{searchInputValue}"
                                </button>
                            </>
                        ) : (
                            <span>No tasks found!</span>
                        )}
                    </div>
                )}
            </form>
        </div>
    )
}

export default SearchField;