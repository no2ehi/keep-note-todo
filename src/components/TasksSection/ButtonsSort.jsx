
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";

const ButtonsSort = () => {

    return(
        <div className="flex sm:mx-6 gap-4 ">
            <div className="flex items-center gap-2">
                <button>
                    <IconView1 className="w-6 h-6" />
                </button>
                <button>
                    <IconView2 />
                </button>
            </div>
            <select className="inputStyles">
                <option value="">Sort By</option>
                <option value="">Completed Tasks</option>
                <option value="">UnCompleted Tasks</option>
                <option value="">Earlier first</option>
                <option value="">Later first</option>
            </select>
        </div>
    )
}

export default ButtonsSort;