
import ButtonsSort from '../TasksSection/ButtonsSort';
const LayoutRoutes = () => {

    return(
        <section className="px-6">

            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">today's tasks (8 Tasks)</h1>
                <ButtonsSort />
            </div>

            

        </section>
    )
}

export default LayoutRoutes;