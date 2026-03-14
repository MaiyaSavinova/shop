

type ModalType = 'modal' | 'sidepanel';


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    type: ModalType;
    children: React.ReactNode;
    closeOnOverlayClick?: boolean;
}


export const Modal: React.FC<ModalProps> = ({isOpen, type, onClose, children, closeOnOverlayClick}) => {
    return()
}