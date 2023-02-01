import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearchQuery from '../hooks/useSearchQuery';
import LayoutRoutes from '../Layouts/LayoutRoutes';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [currentQeuryParam, setCurrentQueryParam] = useState('');

    useEffect(() => {
        const query = searchParams.get("q");
        if(!query) {
            navigate("/");
        } else {
            setCurrentQueryParam(query);
        }
    },[navigate, searchParams])

    const matchedTasks = useSearchQuery(currentQeuryParam);

    const title = `Results for "${currentQeuryParam}"`;

    return <LayoutRoutes title={title} tasks={matchedTasks}></LayoutRoutes>
}

export default SearchResults;