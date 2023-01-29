import { createPortal } from 'react-dom';
import { ReactComponent as SvgX } from "../../assets/x.svg";



const ModalContent = ({ children, onClose, title }) => {

    return(
        <div className="w-full h-full fixed grid place-items-center bg-slate-600/[.2] px-2 z-40">

            <section className="flex flex-col justify-start relative max-w-lg w-full rounded-lg p-3 bg-slate-200">
                <button aria-label="close alert" className="w-6 h-6 absolute right-3 sm:right-4">
                    <SvgX />
                </button>
                <h2 className="font-medium mb-5 text-lg">
                    {title}
                </h2>
                {children}
            </section>

        </div>
    )
}

const modalElement = document.getElementById("modal");

const Modal = ({ children, onClose, title }) => {

    return createPortal(<ModalContent children={children} onClose={onClose} title={title} /> , modalElement)
}

export default Modal;