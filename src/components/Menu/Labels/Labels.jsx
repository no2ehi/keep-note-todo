import { useState } from 'react';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';

import ContentLabel from './ContentLabel';

const Labels = ({ classLinkActive }) => {

    const [isLablesOpen, setIsLabelsOpen ] = useState(true);

    return(
        <div className="py-4">

            <button className={`flex items-center w-full mx-10 mb-2 ${
                        isLablesOpen ? "dark:text-slate-200" : ""
                        }`}
                onClick={() => setIsLabelsOpen(!isLablesOpen)}>
                <Arrow className={`w-3 h-3 mr-2 rotate-90 transition 
                        ${isLablesOpen && "rotate-180" }`} />
                Lables
            </button>

            <div className={`${isLablesOpen ? "visible" : "hidden"} ml-6`}>
                <ContentLabel classLinkActive={classLinkActive} />
            </div>

        </div>
    )
}

export default Labels;