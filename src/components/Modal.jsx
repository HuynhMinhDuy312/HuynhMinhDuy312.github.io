import Card from "./Card";
// import { createPortal } from "react-dom";
import "./modal.css";
import { useModalContext } from "../context/modal-context";

const Modal = ({ className, children }) => {
    const { showModal, handleHideModal } = useModalContext();

    return (
        <>
            {showModal && (
                <>
                    <section id="backdrop" onClick={handleHideModal}></section>
                    <Card className={className}>{children}</Card>
                </>
            )}
        </>
    );
};

export default Modal;
