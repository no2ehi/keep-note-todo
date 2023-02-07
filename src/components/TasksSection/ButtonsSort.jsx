
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";


const sortValues = [
    { value: "order-added", title: "Order added" },
    { value: "min-date", title: "Earlier first" },
    { value: "max-date", title: "Later first" },
    { value: "completed-first", title: "Completed first" },
    { value: "uncompleted-first", title: "Uncompleted first" },
  ];

const ButtonsSort = ({ isListInView1, sortedBy, setSortedBy, setIsListInView1 }) => {

    return(
        <div className="flex sm:mx-6 gap-4 ">
            <div className="flex items-center gap-2">
                <button onClick={() => setIsListInView1(true)}>
                    <IconView1 className={isListInView1 ? "text-violet-600 h-6 w-6" : "h-6 w-6"} />
                </button>
                <button onClick={() => setIsListInView1(false)}>
                    <IconView2 className={!isListInView1 ? "text-violet-600 h-6 w-6" : "h-6 w-6"} />
                </button>
            </div>
            <select className="inputStyles"
                    value={sortedBy}
                    onChange={ ({ target }) => setSortedBy(target.value)} >
                <option value=" " disabled>Sort By</option>
                {sortValues.map( (val) => (
                    <option
                        key={val.value}
                        value={val.value}
                        className="bg-slate-100 dark:bg-slate-800"
                    >
                        {val.title}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ButtonsSort;