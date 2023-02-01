
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchField = () => {

    return(
        <div className="flex-1 col-span-3 row-start-2 md:pr-10">
            <form className="relative w-full md:max-w-xs" autoComplete="off">
                <label htmlFor="search"></label>
                <input 
                    type="saerch" 
                    className="inputStyles w-full"
                    id="search"
                    placeholder="Search Task..."
                     />
                <SearchIcon className="sm:w-5 w-4 absolute right-4 top-3.5 " />
            </form>
        </div>
    )
}

export default SearchField;