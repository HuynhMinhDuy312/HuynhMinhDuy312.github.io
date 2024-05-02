import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    return (
        <ModalContext.Provider
            value={{ showModal, handleHideModal, handleShowModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    return useContext(ModalContext);
};
