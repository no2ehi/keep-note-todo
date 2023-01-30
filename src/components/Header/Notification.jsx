
import { ReactComponent as BellIcon } from '../../assets/bell.svg';

const Notification = () => {

    return(
        <div className="mr-8 relative">
            <button className="relative">
                <BellIcon className="w-7 h-7 fill-violet-800"/>
            </button>
        </div>
    )
}

export default Notification;